# Muhammad Fasih - Portfolio

Premium personal portfolio website built with Next.js, React, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** JavaScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
/app
  /api          # API routes
  /(site)       # Main site pages
/components
  /layout       # Layout components
  /sections     # Page sections
  /ui           # Reusable UI components
  /motion       # Animation components
/content        # Data files
/lib            # Utilities
/public         # Static assets
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Dark theme with premium aesthetics
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized
- ✅ Contact form with API integration
- ✅ Project filtering and detail pages
- ✅ Accessible and performant

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Update Content

Edit the content files in `/content` directory:
- `site.js` - Update personal information, email, etc.
- `social.js` - Add your social media links
- `projects.js` - Customize project details
- `skills.js` - Update your skills
- `experience.js` - Add your work experience

### 3. Add Assets

- Replace `/public/resume.pdf` with your actual resume
- Create and add `/public/og.png` (1200x630px) for Open Graph image
- Add project images to `/public/images/` directory

### 4. Configure WhatsApp Notifications

To enable WhatsApp messaging in the contact form:

**Option 1: Twilio (Recommended)**
1. Sign up for [Twilio](https://www.twilio.com/) and set up WhatsApp Sandbox
2. Install Twilio SDK:
```bash
npm install twilio
```
3. Add to `.env.local`:
```
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
```

**Option 2: Email Notification (Alternative)**
1. Install Resend:
```bash
npm install resend
```
2. Add to `.env.local`:
```
RESEND_API_KEY=your_api_key_here
```

See `WHATSAPP_SETUP.md` for detailed setup instructions.

### 5. Run Development Server

```bash
npm run dev
```

## Customization

### Colors

Edit `tailwind.config.js` to change the accent color:
```js
colors: {
  accent: {
    DEFAULT: '#3b82f6', // Change this to your preferred color
    hover: '#2563eb',
  },
}
```

### Fonts

The project uses Inter font by default. To change, update `app/(site)/layout.jsx` and import your preferred font from `next/font/google`.
