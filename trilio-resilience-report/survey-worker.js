/**
 * Trilio Reader Pulse — minimal survey aggregation endpoint (Cloudflare Worker).
 *
 * Setup (one-time, ~5 minutes):
 *   1. Cloudflare dashboard → Workers & Pages → Create Worker → paste this file.
 *   2. Storage & Databases → KV → create a namespace (e.g. PULSE), then in the
 *      Worker's Settings → Bindings, bind it with the variable name SURVEY_KV.
 *   3. Deploy. Note the worker URL, e.g. https://pulse.yourteam.workers.dev
 *   4. In the report pages, set the endpoint by adding one line before </body>
 *      (or edit build config):  <script>window.TRILIO_SURVEY_ENDPOINT="https://pulse.yourteam.workers.dev"</script>
 *
 * Privacy: stores only integer counters per (page, question, option). No IPs,
 * no cookies, no personal data.
 */
const ORIGIN = "*"; // tighten to "https://trilio.io" before production
const cors = {
  "Access-Control-Allow-Origin": ORIGIN,
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};
const MAX_OPTS = 8;
const ok = (data) => new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json", ...cors } });
const bad = (msg, code = 400) => new Response(JSON.stringify({ error: msg }), { status: code, headers: { "Content-Type": "application/json", ...cors } });
const keyFor = (page, qid) => `pulse:${page}:${qid}`;
const clean = (s) => typeof s === "string" && /^[a-z0-9_-]{1,32}$/i.test(s);

async function getCounts(env, page, qid, nopts) {
  const raw = await env.SURVEY_KV.get(keyFor(page, qid));
  let counts = raw ? JSON.parse(raw) : [];
  while (counts.length < nopts) counts.push(0);
  return counts.slice(0, nopts);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });

    if (request.method === "GET" && url.pathname === "/results") {
      const page = url.searchParams.get("page"), qid = url.searchParams.get("qid");
      const nopts = Math.min(parseInt(url.searchParams.get("nopts") || "2", 10) || 2, MAX_OPTS);
      if (!clean(page) || !clean(qid)) return bad("bad params");
      return ok({ counts: await getCounts(env, page, qid, nopts) });
    }

    if (request.method === "POST" && url.pathname === "/vote") {
      let b; try { b = await request.json(); } catch { return bad("bad json"); }
      const { page, qid } = b;
      const nopts = Math.min(parseInt(b.nopts, 10) || 2, MAX_OPTS);
      const choice = parseInt(b.choice, 10);
      if (!clean(page) || !clean(qid) || !(choice >= 0 && choice < nopts)) return bad("bad vote");
      const counts = await getCounts(env, page, qid, nopts);
      counts[choice] += 1;
      await env.SURVEY_KV.put(keyFor(page, qid), JSON.stringify(counts));
      return ok({ counts });
    }
    return bad("not found", 404);
  },
};
