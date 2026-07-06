# Reader Pulse survey — how it works

Every chapter page ends with a two-question anonymous survey ("Reader pulse").
Answering is optional; tapping an option records one vote and shows the
aggregate results so far, plus the correct answer for fact questions.

## Connecting live results

Aggregation across visitors needs one tiny endpoint. A ready-made
Cloudflare Worker is included: `survey-worker.js` (setup steps in its header,
~5 minutes, free tier is plenty). After deploying, point the pages at it by
adding one line to each page before `</body>`, or via your site template:

    <script>window.TRILIO_SURVEY_ENDPOINT = "https://YOUR-WORKER.workers.dev"</script>

Until the endpoint is set, the survey still works locally: the reader sees
their own answer and the fact-question reveal, with a note that live
community results are pending.

## Privacy

No cookies, no IPs, no personal data — the endpoint stores integer counters
per (page, question, option) only. The reader's own vote is remembered in
their browser (localStorage) purely to avoid double-voting.

## API contract (if you'd rather build your own endpoint)

    GET  /results?page=ch4&qid=q1&nopts=2      -> {"counts":[123,45]}
    POST /vote    {"page":"ch4","qid":"q1","choice":0,"nopts":2}
                                               -> {"counts":[124,45]}
