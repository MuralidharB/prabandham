/**
 * Google AdSense Configuration
 *
 * INSTRUCTIONS:
 * 1. Deploy this site to Netlify first (drag and drop the folder)
 * 2. Apply for Google AdSense at https://adsense.google.com
 * 3. Once approved, replace the PLACEHOLDER comments below with your actual AdSense code
 * 4. Google will provide you with:
 *    - A site-level script to add to <head> (replace ADSENSE_PUBLISHER_ID)
 *    - Ad unit code for each placement (replace the placeholder divs)
 */

// Site-level AdSense configuration
// After approval, you'll get a script tag like:
// <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossorigin="anonymous"></script>

const ADSENSE_PUBLISHER_ID = 'REPLACE_WITH_YOUR_PUBLISHER_ID'; // Format: ca-pub-XXXXXXXXXX

/**
 * Ad Unit Placeholders
 * These create properly-sized placeholder divs until you get AdSense approval
 */

// Top banner ad (before chapter content)
function createTopBannerAd() {
  return `
    <div class="ad-container ad-top">
      <div class="ad-placeholder ad-horizontal">
        <!-- After AdSense approval, replace with:
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="${ADSENSE_PUBLISHER_ID}"
             data-ad-slot="YOUR_TOP_BANNER_SLOT_ID"
             data-ad-format="horizontal"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        -->
        <span class="ad-label">Advertisement</span>
      </div>
    </div>
  `;
}

// Mid-chapter ad (at scene breaks)
function createMidChapterAd() {
  return `
    <div class="ad-container ad-mid">
      <div class="ad-placeholder ad-rectangle">
        <!-- After AdSense approval, replace with:
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="${ADSENSE_PUBLISHER_ID}"
             data-ad-slot="YOUR_MID_CHAPTER_SLOT_ID"
             data-ad-format="rectangle"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        -->
        <span class="ad-label">Advertisement</span>
      </div>
    </div>
  `;
}

// Bottom ad (after chapter content)
function createBottomAd() {
  return `
    <div class="ad-container ad-bottom">
      <div class="ad-placeholder ad-horizontal">
        <!-- After AdSense approval, replace with:
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="${ADSENSE_PUBLISHER_ID}"
             data-ad-slot="YOUR_BOTTOM_AD_SLOT_ID"
             data-ad-format="horizontal"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        -->
        <span class="ad-label">Advertisement</span>
      </div>
    </div>
  `;
}

// Export for use in HTML (if using modules) or make available globally
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createTopBannerAd, createMidChapterAd, createBottomAd };
}
