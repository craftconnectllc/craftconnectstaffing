# Craft Connect Staffing Website

## Project Type
This is a **Static HTML/CSS/JavaScript** website. No build process required, no Node.js, no React, no server-side dependencies. 

This website is ready to upload directly to any standard web hosting (cPanel, shared hosting, etc.) and will work immediately.

## File Structure

```
craft-connect-staffing/
├── index.html          # Main homepage (this is your entry point)
├── css/
│   └── style.css       # All styling
├── js/
│   └── main.js         # All JavaScript functionality
├── images/             # Folder for images (currently empty)
└── README.md           # This file
```

## Features Included

✅ Responsive design (works on all devices)
✅ Interactive service cards with detailed modals
✅ Smooth scrolling navigation
✅ Contact form
✅ Modern animations
✅ Professional color scheme
✅ No external dependencies (except Google Fonts)
✅ No build process required

## How to Upload to cPanel

### Method 1: File Manager (Recommended)

1. **Log into your GoDaddy cPanel**
   - Go to your GoDaddy account
   - Find your hosting and click "cPanel"

2. **Navigate to File Manager**
   - In cPanel, click "File Manager"
   - Navigate to `public_html` folder

3. **Delete old files (if any)**
   - Select any old `index.html` or website files
   - Click "Delete"

4. **Upload your files**
   - Click "Upload" button
   - Upload these files:
     * `index.html` (to public_html)
     * Upload the `css` folder (with style.css inside)
     * Upload the `js` folder (with main.js inside)
     * Upload the `images` folder (even if empty)

5. **Verify folder structure**
   Your `public_html` should look like this:
   ```
   public_html/
   ├── index.html
   ├── css/
   │   └── style.css
   ├── js/
   │   └── main.js
   └── images/
   ```

6. **Test your website**
   - Visit: https://craftconnectstaffing.com
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Method 2: FTP Upload

1. **Get FTP credentials from GoDaddy**
   - In cPanel, look for "FTP Accounts"
   
2. **Use an FTP client** (FileZilla, WinSCP, etc.)
   - Connect to your server
   - Navigate to `public_html`
   - Upload all files maintaining folder structure

## Homepage File

**The homepage is:** `index.html`

This file MUST be named `index.html` (lowercase) and placed directly in the `public_html` folder. This is the file that loads when someone visits your domain.

## File Paths

All file paths are **relative** and will work on any hosting:
- CSS: `css/style.css`
- JavaScript: `js/main.js`
- Images: `images/your-image.png`

No absolute paths, no localhost references - everything is hosting-ready.

## Browser Compatibility

✅ Chrome (all versions)
✅ Firefox (all versions)
✅ Safari (all versions)
✅ Edge (all versions)
✅ Mobile browsers

## Customization

### To change colors:
Edit `css/style.css` - look for the `:root` section at the top:
```css
:root {
    --primary: #1a4d2e;      /* Main green */
    --secondary: #2d6a4f;    /* Secondary green */
    --accent: #d4af37;       /* Gold accent */
    --dark: #0f2419;         /* Dark green */
    --light: #f8f9fa;        /* Light background */
}
```

### To change content:
Edit `index.html` - all text is in plain HTML

### To change service details:
Edit `js/main.js` - look for the `serviceData` object

## Adding Images

1. Add image files to the `images/` folder
2. Reference them in HTML: `<img src="images/your-image.png">`

## Contact Form

The contact form currently shows an alert. To make it functional:
- Connect it to a PHP mail script
- Use a service like Formspree or EmailJS
- Integrate with your CRM

## Support

If the website doesn't appear after uploading:
1. Clear browser cache (Ctrl+Shift+Del)
2. Hard refresh (Ctrl+Shift+R)
3. Check that index.html is in public_html
4. Check file permissions (should be 644 for files, 755 for folders)
5. Make sure all file names match (case-sensitive)

## No Build Process Required

This is a static website. You do NOT need:
- ❌ npm install
- ❌ npm run build
- ❌ yarn build
- ❌ Node.js
- ❌ Any build tools

Just upload and it works!

---

Created for Craft Connect Staffing
© 2025 All Rights Reserved
