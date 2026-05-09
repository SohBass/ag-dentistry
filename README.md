# AG Dentistry — Premium Website

A modern, premium dental practice website built with Next.js 14, Tailwind CSS, and TypeScript.

## Features

- ✅ Fully responsive, mobile-first design
- ✅ Sticky navbar with scroll-aware transparency
- ✅ Animated hero with stats
- ✅ About, Services, Why Us, Testimonials, Locations, Emergency CTA sections
- ✅ Validated new patient enquiry form with email delivery via Formspree
- ✅ Smooth scroll animations (IntersectionObserver-based)
- ✅ Premium typography: Cormorant Garamond + DM Sans
- ✅ Clean pearl/slate-blue/charcoal colour palette
- ✅ Royalty-free Unsplash imagery

---

## Quick Start

### Prerequisites
- Node.js 18.17+ 
- npm or yarn

### Install & Run

```bash
cd ag-dentistry
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Setting Up the Contact Form

The new patient form uses **Formspree** — free, no backend needed.

1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form ID (looks like `xpwzrgkd`)
3. Open `components/NewPatientForm.tsx`
4. Find this line:
   ```js
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```
5. Replace `YOUR_FORM_ID` with your actual Formspree form ID
6. All form submissions will be emailed to your registered Formspree email address

**Alternative:** Use [EmailJS](https://emailjs.com) or [Web3Forms](https://web3forms.com) — both offer free tiers with no backend setup.

---

## Deploy to Vercel

The easiest deployment option:

### Option A: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B: GitHub + Vercel Dashboard
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click Deploy
4. Your site will be live in ~60 seconds

### Environment Variables
No environment variables required. The Formspree form ID is hardcoded in `NewPatientForm.tsx`.

---

## Customisation Guide

### Brand colours
Edit `tailwind.config.ts` → `theme.extend.colors`:
- `slate.blue` — primary brand blue
- `charcoal` — dark text / footer
- `pearl` — off-white background

### Fonts
Edit `app/globals.css` — change the Google Fonts import URL. Update `tailwind.config.ts` font families to match.

### Clinic details
- **Locations**: `components/Locations.tsx` — update name, address, phone, hours, tube
- **Phone numbers**: `components/Navbar.tsx`, `components/Emergency.tsx`, `components/Contact.tsx`, `components/Footer.tsx`
- **Email**: `components/Footer.tsx`, `components/Contact.tsx`

### Images
All images use direct Unsplash URLs. Replace any `src="https://images.unsplash.com/..."` with your own photography for a fully bespoke result.

### Services
Edit the `services` array in `components/Services.tsx`.

---

## Project Structure

```
ag-dentistry/
├── app/
│   ├── globals.css        # Global styles, animations, fonts
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Main page
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── WhyUs.tsx
│   ├── Testimonials.tsx
│   ├── Locations.tsx
│   ├── Emergency.tsx
│   ├── NewPatientForm.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── hooks/
│   └── useScrollReveal.ts
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cormorant Garamond + DM Sans)
- **Images**: Unsplash (royalty-free)
- **Form email**: Formspree (free tier)
- **Deployment**: Vercel (recommended)

---

## GDC / Legal Notes

Remember to update:
- Practice registration numbers in the footer
- GDC-compliant disclaimer text
- Privacy Policy, Cookie Policy, and Terms pages
- CQC registration details
- NHS contract information if applicable

---

## Support

For customisation or questions, raise an issue or contact your developer.
