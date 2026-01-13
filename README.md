# Craft Connect Staffing - Website Documentation

## Project Overview

**Production-ready construction staffing website** with advanced features:
- AI-powered job applicant screening
- Dual audience conversion paths (companies + job seekers)
- Form submissions with email notifications
- Google Analytics GA4 tracking
- Mobile-responsive, conversion-optimized design

**Target Audience:** Mid-size construction companies (50-500 employees) in Rhode Island

---

## Technical Stack

- **Hosting:** GitHub Pages (static hosting)
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Forms:** Formspree (email delivery service)
- **Analytics:** Google Analytics GA4
- **Fonts:** Google Fonts (Bitter + Barlow)
- **AI Screening:** Intelligent fallback system (expandable to Anthropic API)

---

## File Structure

```
craft-connect-v2/
├── index.html              # Homepage (primary conversion page)
├── hire-talent.html        # Client inquiry form
├── find-work.html          # Job application with AI screening
├── css/
│   └── style.css          # Main stylesheet (710 lines)
├── js/
│   └── main.js            # All functionality (541 lines)
├── images/                # Placeholder for images
└── README.md              # This file
```

---

## Setup Instructions

### STEP 1: Formspree Setup (Required for Forms)

1. Go to **https://formspree.io** and create a free account
2. Create **3 forms:**
   - **Client Inquiry** (for companies hiring)
   - **Job Applications** (for workers)
   - **Testimonials** (for reviews)

3. For each form, copy the Form ID (looks like: `abc123xyz`)

4. **Open `js/main.js`** and update these lines (around line 12-14):
```javascript
const CONFIG = {
    formspreeClientInquiry: 'YOUR_FORM_ID_HERE',  // Replace with Client Inquiry form ID
    formspreeJobApplication: 'YOUR_FORM_ID_HERE', // Replace with Job Application form ID
    formspreeTestimonials: 'YOUR_FORM_ID_HERE',   // Replace with Testimonials form ID
    ...
}
```

5. **Configure Formspree settings:**
   - Set "Send To" email: `info@craftconnectstaffing.com`
   - Enable auto-response emails
   - Add spam protection (reCAPTCHA or honeypot)

### STEP 2: Google Analytics Setup (Optional but Recommended)

1. Go to **https://analytics.google.com**
2. Create a new GA4 property for craftconnectstaffing.com
3. Copy your Measurement ID (looks like: `G-XXXXXXXXXX`)
4. **Open `js/main.js`** and update line 15:
```javascript
gaTrackingId: 'G-XXXXXXXXXX', // Replace with your actual GA4 ID
```

### STEP 3: Deploy to GitHub Pages

1. Go to your existing repository: `https://github.com/craftconnectllc/craftconnectstaffing`

2. **Delete old files:**
   - Delete old `index.html`
   - Delete old `css/` and `js/` folders

3. **Upload new files:**
   - Upload `index.html`, `hire-talent.html`, `find-work.html`
   - Upload `css/` folder (with style.css)
   - Upload `js/` folder (with main.js)
   - Upload `images/` folder (add your images here)

4. **Verify GitHub Pages is enabled:**
   - Settings → Pages
   - Source: main branch, / (root)
   - Should still be live at: `https://craftconnectllc.github.io/craftconnectstaffing/`

5. **Wait 2-3 minutes** for GitHub to rebuild

### STEP 4: Add Images (Important!)

The site is designed for **real construction photos**. Add these to the `images/` folder:

**Required images:**
1. `hero-jobsite.jpg` - Construction manager on active jobsite (hero section)
2. `team-photo.jpg` - Craft Connect team photo (trust section)
3. `workers-arriving.jpg` - Construction crew arriving at site
4. `skilled-trades.jpg` - Close-up of tradesperson working
5. `project-managers.jpg` - Managers reviewing plans

**Image specifications:**
- Format: JPG or WebP
- Max width: 1920px
- Compress for web (<500KB each)
- Use tools like TinyPNG or Squoosh

**Stock photo resources (if needed):**
- Unsplash.com
- Pexels.com
- Search: "construction workers", "construction site", "tradesman"

### STEP 5: Test Everything

**Before going live, test:**

✅ **Homepage loads properly**
- Visit: `https://craftconnectllc.github.io/craftconnectstaffing/`
- Check all sections display correctly
- Images load (or placeholders show)

✅ **Hire Talent form works**
- Fill out client inquiry form
- Submit
- Check if email arrives at info@craftconnectstaffing.com
- Verify auto-confirmation email

✅ **Find Work form + AI screening works**
- Select a trade from dropdown
- Verify 3 screening questions appear
- Fill out entire form
- Submit
- Check email delivery

✅ **Analytics tracking**
- Visit Google Analytics
- Go to Realtime report
- Open your site in another tab
- Verify your visit shows in GA

✅ **Mobile responsiveness**
- Test on phone or use Chrome DevTools
- Check all pages work on mobile

---

## AI Screening System

### How It Works

1. **Applicant selects trade** (e.g., "Electrician")
2. **System generates 3 questions** specific to that trade
3. **Questions are intermediate difficulty** - test real knowledge
4. **Randomized** - different applicants get different questions
5. **Answers submitted with application** for your review

### Current Implementation

**Fallback Mode (Active Now):**
- Uses pre-written question bank
- 20+ trades covered
- Questions rotate randomly
- Works 100% on GitHub Pages (no backend needed)

**Future Enhancement (Optional):**
- Connect to Anthropic API for truly dynamic questions
- Requires backend proxy (Netlify Functions or similar)
- Questions generated in real-time based on trade
- Unlimited question variety

### Question Bank Coverage

All major construction trades included:
- Carpentry, Electrical, Plumbing, HVAC
- Heavy Equipment, Welding, Masonry
- Project Management, Supervision, Safety
- Plus 10+ additional trades

---

## Content Customization

### Update Contact Information

**In all HTML files**, find and replace:
- `(401) 555-0100` → Your real phone number
- `info@craftconnectstaffing.com` → Your real email
- `jobs@craftconnectstaffing.com` → Your jobs email

### Update Company Stats

**In `index.html`** (around line 80-100), update trust bar:
```html
<div class="trust-number">48hr</div>
<div class="trust-label">Average Time to Fill</div>
```
Change to your actual metrics.

### Add Testimonials

**In `index.html`** (testimonials section):
- Replace placeholder testimonials with real ones
- Include client name and company
- Keep quotes authentic and specific

---

## Form Email Notifications

### What You'll Receive

**Client Inquiry (Hire Talent):**
```
From: Formspree
Subject: New Client Inquiry - Craft Connect

Name: John Smith
Company: ABC Construction
Email: john@abcconstruction.com
Phone: (401) 555-1234
Message: We need 3 electricians for a commercial project starting next month.
```

**Job Application (Find Work):**
```
From: Formspree
Subject: New Job Application - Electrician

Name: Mike Johnson
Email: mike@email.com
Phone: (401) 555-5678
Trade: Electrician
Years Experience: 8
Certifications: Licensed Journeyman, OSHA 30
Resume: [attached]

AI Screening Answers:
Q1: [question text]
A1: [candidate answer]
Q2: [question text]
A2: [candidate answer]
Q3: [question text]
A3: [candidate answer]
```

---

## Conversion Tracking

### Events Tracked in Google Analytics

1. **CTA Clicks**
   - Event: `cta_click`
   - Parameters: button text, page location

2. **Form Submissions**
   - Event: `form_submission`
   - Parameters: form type (client_inquiry / job_application)

3. **Page Views**
   - Automatic with GA4

### Viewing Reports

1. Go to Google Analytics
2. Navigate to **Reports** → **Engagement** → **Events**
3. Filter by event name to see conversions

---

## Maintenance & Updates

### To Update Content

1. Go to GitHub repository
2. Click on file you want to edit (e.g., `index.html`)
3. Click pencil icon (Edit)
4. Make changes
5. Click "Commit changes"
6. Wait 2 minutes for site to update

### To Add New Pages

1. Create new HTML file
2. Copy header/footer from existing pages
3. Add new navigation link in all pages
4. Upload to repository

### To Change Design

- Colors: Edit `css/style.css` (lines 15-30 for color variables)
- Fonts: Edit Google Fonts import in `style.css` (line 3)
- Layout: Edit CSS grid/flex properties

---

## Troubleshooting

### Forms Not Sending Emails

**Check:**
1. Formspree form IDs are correct in `js/main.js`
2. Form submission limit not exceeded (50/month on free plan)
3. Email address in Formspree settings is correct
4. Check spam folder

**Solution:**
- Upgrade Formspree plan if hitting limits
- Or use alternative: EmailJS, Basin, or custom backend

### AI Screening Not Showing

**Check:**
1. JavaScript is enabled in browser
2. Trade dropdown has value selected
3. Console for errors (F12 → Console tab)

**Solution:**
- Verify `js/main.js` is loading correctly
- Check browser console for errors

### Analytics Not Tracking

**Check:**
1. GA4 Measurement ID is correct
2. Ad blockers disabled (for testing)
3. Real-time report in GA (not historical data)

**Solution:**
- Wait 24 hours for data to appear in standard reports
- Use Real-time report for immediate verification

### Images Not Loading

**Check:**
1. Image files are in `images/` folder
2. File names match exactly (case-sensitive)
3. File paths are correct in HTML

**Solution:**
- Re-upload images
- Check image file extensions (.jpg, .png, etc.)

---

## Performance Optimization

### Already Optimized

✅ Minimal dependencies (only Google Fonts)
✅ CSS and JS minification ready
✅ Mobile-first responsive design
✅ Fast-loading (no frameworks)
✅ Semantic HTML for SEO

### Further Optimizations

**Optional improvements:**
1. Compress images with TinyPNG
2. Use WebP format for images
3. Add lazy loading for images
4. Minify CSS/JS for production
5. Enable Cloudflare CDN (free)

---

## SEO Considerations

### Meta Tags Included

- Title tags optimized for "construction staffing Rhode Island"
- Meta descriptions for all pages
- Open Graph tags for social sharing
- Mobile-friendly viewport settings

### To Improve SEO

1. Submit sitemap to Google Search Console
2. Get backlinks from RI construction industry sites
3. Create content: blog posts about construction hiring
4. Get listed in local business directories
5. Encourage client reviews/testimonials

---

## Security

### Built-In Protection

✅ Formspree spam protection
✅ No sensitive data stored client-side
✅ HTTPS enforced by GitHub Pages
✅ Form honeypot fields (optional)
✅ No database = no SQL injection risk

### Best Practices

- Never commit API keys to GitHub
- Use environment variables for secrets
- Monitor form submissions for spam
- Keep Formspree spam filters enabled

---

## Support & Next Steps

### Getting Help

**Issues with setup:**
- GitHub Pages: https://docs.github.com/pages
- Formspree: https://help.formspree.io
- Google Analytics: https://support.google.com/analytics

**Need customization:**
- Edit files directly in GitHub
- Or download, edit locally, re-upload

### Future Enhancements

**Possible additions:**
1. Blog/News section
2. Job listings board
3. Client portal login
4. Video testimonials
5. Live chat widget
6. Online payment for temp staffing
7. Applicant tracking system integration

---

## Quick Start Checklist

Before going live:

- [ ] Update Formspree form IDs in `js/main.js`
- [ ] Update Google Analytics ID in `js/main.js`
- [ ] Replace phone number in all HTML files
- [ ] Replace email addresses in all HTML files
- [ ] Add real construction images to `images/` folder
- [ ] Update company stats (trust bar)
- [ ] Replace placeholder testimonials with real ones
- [ ] Test all forms (client inquiry + job application)
- [ ] Verify emails arrive correctly
- [ ] Test on mobile devices
- [ ] Check Google Analytics tracking
- [ ] Review all content for typos
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Google

---

## Contact for Technical Support

**For questions about this website:**
- Check this README first
- Review GitHub Pages documentation
- Test in browser console (F12)

**Website built for:**
Craft Connect Staffing
Rhode Island Construction Staffing Agency
info@craftconnectstaffing.com

---

*Website Version: 2.0*
*Last Updated: December 2024*
*Production-Ready: Yes*
