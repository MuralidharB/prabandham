# Prabandham — A Collection of Stories

A literary website featuring serialized novels with Google AdSense integration.

## Current Status

**Completed:**
- ✅ Main homepage (`index.html`) with book grid
- ✅ Shared stylesheet (`styles.css`) with responsive design and dark mode support
- ✅ AdSense placeholder system (`ads.js`)
- ✅ "The Weight of Ma'at" landing page with clickable table of contents
- ✅ All chapters (1-7) fully converted with navigation and ad placements
- ✅ Epilogue fully converted with complete HTML structure

**Site is now complete and deployment-ready!**

## Site Structure

```
prabandham/
├── index.html                    # Main homepage
├── styles.css                    # Shared stylesheet
├── ads.js                        # AdSense configuration
├── README.md                     # This file
│
└── the-weight-of-maat/
    ├── index.html                # Book landing page
    ├── chapter-1.html            # ✅ Complete
    ├── chapter-2.html            # ✅ Complete
    ├── chapter-3.html            # ✅ Complete
    ├── chapter-4.html            # ✅ Complete
    ├── chapter-5.html            # ✅ Complete
    ├── chapter-6.html            # ✅ Complete
    ├── chapter-7.html            # ✅ Complete
    └── epilogue.html             # ✅ Complete
```

## Deployment Instructions

### Step 1: Deploy to Netlify

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub, GitLab, or email

2. **Deploy via Drag & Drop**
   - Log into Netlify
   - Go to "Sites"
   - Drag the entire `prabandham` folder onto the drop zone
   - Netlify will assign you a URL like `random-name-12345.netlify.app`

3. **Optional: Custom Domain**
   - In Site settings → Domain management
   - Add your custom domain
   - Update DNS records as instructed

### Step 2: Apply for Google AdSense

**Important:** You MUST have a live, deployed site before applying.

1. **Prerequisites**
   - Site must be live and accessible
   - Content should be original (✅ your novel qualifies)
   - Site should have multiple pages (✅ you have 9+ pages)
   - Must have a clear navigation structure (✅ implemented)

2. **Application Process**
   - Go to [adsense.google.com](https://adsense.google.com)
   - Click "Get Started"
   - Enter your Netlify URL
   - Provide payment/tax information
   - Wait for approval (typically 1-7 days)

3. **What Google Reviews**
   - Original content ✅
   - Sufficient content ✅
   - Clear navigation ✅
   - Privacy policy (you may need to add this)
   - Terms of service (optional but recommended)

### Step 3: Integrate AdSense Code

Once approved, Google will provide you with code snippets.

#### A. Add Site-Level Code

1. Open `ads.js`
2. Find line 14: `const ADSENSE_PUBLISHER_ID = 'REPLACE_WITH_YOUR_PUBLISHER_ID';`
3. Replace with your actual publisher ID (format: `ca-pub-XXXXXXXXXX`)

#### B. Update Ad Units

For each chapter file (chapters 1-7 and epilogue):

1. Find the three ad placeholder divs:
   - Top banner (before chapter content)
   - Mid-chapter (at a scene break)
   - Bottom (after chapter content)

2. Replace each `<div class="ad-placeholder">` block with actual AdSense code

**Example:**

Replace this:
```html
<div class="ad-placeholder ad-horizontal">
  <span class="ad-label">Advertisement</span>
</div>
```

With Google's code:
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXX"
     data-ad-slot="YOUR_AD_SLOT_ID"
     data-ad-format="horizontal"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

3. Add the AdSense head script to each chapter file in the `<head>` section where it says:
```html
<!-- AdSense head script will go here after approval -->
```

Replace with:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossorigin="anonymous"></script>
```

###  Step 4: Redeploy

After adding your AdSense code:

1. Drag the updated `prabandham` folder to Netlify again
2. Or set up continuous deployment via Git (recommended for ongoing updates)

## Ad Placement Strategy

The site uses a reader-friendly, **3-ad-per-page** strategy:

1. **Top Banner** — Horizontal banner before chapter content starts
2. **Mid-Chapter** — Rectangle ad at a natural scene break (`— ✦ —`)
3. **Bottom** — Horizontal banner after chapter ends, before navigation

This placement maximizes revenue while preserving reading experience.

## Revenue Expectations

For a literary site, revenue depends on traffic:

- **Initial phase**: Modest earnings while building audience
- **Growth strategy**:
  - Individual chapter URLs are sharable and SEO-friendly
  - Google will index each chapter independently
  - Readers can discover any chapter through search
  - Internal navigation encourages binge-reading

## Technical Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode support (respects user preference)
- ✅ Semantic HTML for accessibility
- ✅ Clean typography optimized for long-form reading
- ✅ SEO-friendly structure
- ✅ Fast loading (minimal dependencies)

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Fully responsive

## Future Additions

When adding new books to the collection:

1. Create a new subdirectory (e.g., `new-book-title/`)
2. Follow the same structure as `the-weight-of-maat/`
3. Add a new book card to `index.html` in the `books-grid`
4. Use the same `styles.css` (already linked relatively)

## Support

For questions about:
- **Netlify deployment**: [netlify.com/docs](https://docs.netlify.com)
- **Google AdSense**: [support.google.com/adsense](https://support.google.com/adsense)
- **Site code**: Check the inline comments in each file

## License

All story content © 2026 Prabandham. All rights reserved.

Site structure and code: Free to use and modify for your own projects.

---

**Built with care for storytelling and reader experience.**
