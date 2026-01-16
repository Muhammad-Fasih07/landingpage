# Quick Setup Guide

## Before Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Update personal information:**
   - Edit `content/site.js` - Update name, email, location, bio
   - Edit `content/social.js` - Add your actual social media links
   - Edit `content/experience.js` - Update with your real experience
   - Edit `content/skills.js` - Customize your skills

3. **Add assets:**
   - Replace `public/resume.pdf` with your actual resume
   - Create `public/og.png` (1200x630px) for social media previews
   - Add project images to `public/images/` (optional, placeholders work fine)

4. **Optional - Email setup:**
   - The contact form currently logs submissions to console
   - To enable email, install Resend and update `app/api/contact/route.js`
   - See README.md for detailed instructions

## Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push to GitHub
2. Import in Vercel
3. Deploy!

---

**Note:** All project data is in `content/projects.js` with the 4 real projects you specified. Update as needed!
