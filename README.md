# Zaash Website - Complete Build Package

## Overview

This is the production-ready Next.js 14 website for Zaash - The sales intelligence layer for B2B companies that have outgrown instinct-led selling.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Zaash brand theme
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended) or Railway

## Project Structure

```
zaash-website/
├── app/                          # Next.js 14 App Router
│   ├── page.tsx                  # Homepage ✅
│   ├── layout.tsx                # Root layout with navigation/footer ✅
│   ├── globals.css               # Global styles + Tailwind ✅
│   ├── solutions/                # 6 solution pages
│   │   ├── sales-process-gtm/ ✅
│   │   ├── outbound-prospecting/
│   │   ├── crm-efficiency/
│   │   ├── account-based-intelligence/
│   │   ├── event-gtm/
│   │   └── branding-thought-leadership/
│   ├── products/                 # 4 product pages
│   │   ├── sales-audit/ ✅
│   │   ├── twelfth-brain/
│   │   ├── follow-up-system/
│   │   └── prospecting-engine/
│   ├── industries/               # 6 industry pages
│   │   ├── it-services/
│   │   ├── cybersecurity/
│   │   ├── cloud-infrastructure/
│   │   ├── ai-startups/
│   │   ├── bfsi/
│   │   └── design-creative/
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── audit/                    # Free diagnostic tool
│   ├── privacy/                  # Privacy policy
│   ├── terms/                    # Terms of service
│   └── cookies/                  # Cookie policy
├── components/
│   ├── sections/
│   │   ├── Navigation.tsx ✅
│   │   └── Footer.tsx ✅
│   └── ui/
│       └── CookieConsent.tsx ✅
├── lib/                          # Utility functions
├── public/                       # Static assets
├── package.json ✅
├── tsconfig.json ✅
├── tailwind.config.js ✅
├── postcss.config.js ✅
└── next.config.js ✅
```

## Features Implemented

### ✅ Completed
- Homepage with hero, problem section, solutions preview, social proof, CTA
- Sticky navigation with dropdowns for Solutions/Products/Industries
- Comprehensive footer with all links
- GDPR-compliant cookie consent banner
- Brand-accurate color system and typography
- Responsive design (mobile, tablet, desktop)
- Sales Process & GTM solution page (template for others)
- Sales Audit Tool product page (flagship)

### 🔄 To Complete
- Remaining 5 solution pages (using same template as Sales Process & GTM)
- Remaining 3 product pages
- All 6 industry pages
- About page (waiting for founder bios/photos)
- Contact page with calendar embed
- Free audit diagnostic tool (/audit)
- Legal pages (Privacy, Terms, Cookies)

## Quick Start

### For Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### For Manus/Lovable Deployment

1. **Upload the entire `zaash-website` folder** to Manus or Lovable
2. The platform will automatically:
   - Detect Next.js 14
   - Install dependencies
   - Build the project
   - Deploy to a preview URL

3. **Environment Variables** (if needed):
   - None required for initial deployment
   - Add later: `RESEND_API_KEY` for contact forms

### For Vercel Deployment (Production)

1. **Connect Repository**:
   ```bash
   # Push to GitHub
   git init
   git add .
   git commit -m "Initial Zaash website"
   git remote add origin [your-repo-url]
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Import project in Vercel dashboard
   - Framework: Next.js
   - Build command: `npm run build` (auto-detected)
   - Output directory: `.next` (auto-detected)

3. **Custom Domain**:
   - Add `zaash.com` or `zaash.io` in Vercel domain settings
   - Update DNS records as instructed
   - SSL auto-configured

### For Railway Deployment

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up
```

## Brand Guidelines

### Colors
- **Primary Navy**: `#1A2E42` - Main brand color
- **Accent Teal**: `#00C9A7` - CTAs, highlights, scores
- **Greys**: `#F8F9FA` to `#1A202C` - Backgrounds, text
- **Semantic**: Green (#10B981), Amber (#F59E0B), Red (#EF4444)

### Typography
- **Display**: Plus Jakarta Sans (headlines, hero)
- **Body**: Inter (body text, UI)

### Tone
- Confident without arrogance
- Direct without being blunt
- Intelligent without being complex
- Empathetic without being soft

## Content Philosophy

Every page follows these principles:

1. **Name the specific pain before offering the solution**
2. **Use numbers where possible** (52+ projects, 19 years, ₹2.5L)
3. **Write subheadlines that do the work the headline sets up**
4. **End sections with clear next actions** (CTA)
5. **Never use buzzwords** (synergy, leverage, holistic)
6. **Write for the Indian IT services founder** (₹10-50Cr revenue, referral ceiling hit)

## Page Templates

All solution/product/industry pages follow this structure:

1. **Hero** - Problem statement + 2 CTAs
2. **The Problem** - Specific pain points (not generic)
3. **What We Build** - Deliverables and approach
4. **How It Works** - 4-step process
5. **Who This Is For** - Qualification criteria
6. **CTA** - Book call or try free audit

## CTAs Hierarchy

1. **Primary**: "Take the Free Audit" → `/audit`
2. **Secondary**: "Book a Call" → `/contact`
3. **Tertiary**: Product/solution-specific actions

## SEO Strategy

- **Primary keywords**: B2B sales intelligence India, sales audit tool, revenue intelligence
- **Structured data**: Organization, Product, FAQ schemas
- **Meta tags**: Unique title/description per page
- **AEO-optimized**: Answer-first content for AI search engines

## Analytics Setup

Track these events from day one:
- Free audit started/completed
- Book a call clicked
- Solution/product page depth
- Contact form submissions
- Notify me (for coming soon products)

**Tools**: Vercel Analytics + PostHog

## What's Still Needed

### Content
- [ ] Founder bios and photos (About page)
- [ ] Calendar embed link (Contact page - Calendly or Cal.com)
- [ ] Final logo from Canva (using placeholder Z now)
- [ ] Tisselor partnership language
- [ ] TwelfthBrain product details

### Technical
- [ ] Domain configuration (zaash.com or zaash.io)
- [ ] Email service setup (Resend for forms)
- [ ] Analytics configuration
- [ ] Cookie policy legal review
- [ ] Terms of Service legal review

### Pages (using existing templates)
- [ ] 5 remaining solution pages
- [ ] 3 remaining product pages  
- [ ] 6 industry pages
- [ ] About page
- [ ] Contact page with working form
- [ ] Free diagnostic tool (interactive)
- [ ] Privacy/Terms/Cookie policy pages

## Development Notes

### Adding New Pages

Use the existing templates as reference:
- **Solution pages**: Copy `app/solutions/sales-process-gtm/page.tsx`
- **Product pages**: Copy `app/products/sales-audit/page.tsx`
- **Industry pages**: Similar structure to solution pages

### Component Reuse

Common components available:
- `Navigation` - Sticky nav with dropdowns
- `Footer` - Full footer with all links
- `CookieConsent` - GDPR banner
- Button classes: `btn-primary`, `btn-secondary`, `btn-ghost`
- Layout classes: `container-custom`, `section-padding`, `card`

### Styling Guidelines

```tsx
// Headlines
<h1 className="text-h1 font-display font-bold">

// Body text
<p className="text-xl text-grey-600">

// CTAs
<Link href="/contact" className="btn-primary">

// Cards
<div className="card">

// Sections
<section className="section-padding bg-grey-50">
  <div className="container-custom">
```

## Deployment Checklist

Before going live:

### Content
- [ ] All solution pages complete
- [ ] All product pages complete
- [ ] All industry pages complete
- [ ] About page with founder info
- [ ] Contact page with working calendar
- [ ] Free diagnostic functional
- [ ] Legal pages (Privacy, Terms, Cookies)

### Technical
- [ ] Domain connected and SSL active
- [ ] Sitemap submitted to Google
- [ ] Meta tags on all pages
- [ ] Structured data validated
- [ ] Mobile responsive tested
- [ ] Lighthouse score >90
- [ ] Analytics tracking verified
- [ ] Forms delivering correctly
- [ ] Cookie consent working

## Support

For questions or issues during deployment:
- Check Next.js 14 documentation
- Review Tailwind CSS docs for styling
- Contact Manus/Lovable support for platform issues

## License

Proprietary - Zaash © 2026. All rights reserved.
