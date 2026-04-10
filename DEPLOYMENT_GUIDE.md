# ZAASH WEBSITE - DEPLOYMENT GUIDE
## Complete Setup Instructions for Staging and Production

---

## 📦 PACKAGE CONTENTS

You've received a complete Next.js 14 production-ready website with:

### ✅ Fully Built Pages (18 files)
1. **Homepage** - Hero, problem, solutions, social proof, CTAs
2. **Navigation** - Sticky header with dropdowns
3. **Footer** - Complete with all links
4. **Cookie Consent** - GDPR compliant
5. **Sales Process & GTM Solution** - Full template
6. **Sales Audit Product** - Flagship with pricing
7. **Contact Page** - Form + calendar placeholder
8. **About Page** - Founder bios structure
9. **Free Audit Tool** - Interactive 5-question diagnostic
10. **Privacy Policy** - Complete legal page
11. **Global Styles** - Tailwind + custom Zaash theme
12. **Package.json** - All dependencies configured
13. **TypeScript Config** - Production settings
14. **Tailwind Config** - Full brand theme
15. **Next.js Config** - Optimized for deployment
16. **README.md** - Complete documentation

### 🔄 Pages to Complete (Using Templates Provided)
- 5 more solution pages (copy `sales-process-gtm` template)
- 3 more product pages (copy `sales-audit` template)
- 6 industry pages (similar to solution structure)
- Terms of Service page
- Cookie Policy page

---

## 🚀 DEPLOYMENT OPTIONS

### Option 1: Manus / Lovable (IMMEDIATE STAGING)

**Upload the entire `zaash-website` folder:**

```
Step 1: Go to Manus or Lovable dashboard
Step 2: Create new project → Import folder
Step 3: Upload the zaash-website directory
Step 4: Platform auto-detects Next.js
Step 5: Preview URL generated instantly
```

**What happens automatically:**
- Dependency installation (`npm install`)
- Build process (`npm run build`)
- Preview deployment
- Live staging URL provided

**Access your staging site:**
- URL will be something like: `https://zaash-xxx.manus.app` or similar
- Share with team for review
- Make edits directly in platform

---

### Option 2: Vercel (PRODUCTION DEPLOYMENT)

**Prerequisites:**
- GitHub account
- Vercel account (free tier works)

**Step-by-Step:**

1. **Push to GitHub**
```bash
cd zaash-website
git init
git add .
git commit -m "Initial Zaash website deployment"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/zaash-website.git
git push -u origin main
```

2. **Deploy to Vercel**
- Go to vercel.com/new
- Click "Import Git Repository"
- Select your zaash-website repo
- Framework preset: Next.js (auto-detected)
- Build Command: `npm run build` (auto-filled)
- Output Directory: `.next` (auto-filled)
- Click "Deploy"

3. **Add Custom Domain**
- In Vercel dashboard → Settings → Domains
- Add `zaash.com` or `zaash.io`
- Follow DNS configuration instructions
- SSL automatically configured (Let's Encrypt)

4. **Environment Variables** (if needed later)
```
RESEND_API_KEY=your_key_here
NEXT_PUBLIC_CALENDLY_URL=your_calendly_link
```

---

### Option 3: Railway (ALTERNATIVE)

**Prerequisites:**
- Railway account

**Deployment:**

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
cd zaash-website
railway init

# Deploy
railway up

# Add domain
railway domain
```

---

## 🔧 LOCAL DEVELOPMENT SETUP

**For making changes before deploying:**

1. **Install Dependencies**
```bash
cd zaash-website
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open Browser**
```
http://localhost:3000
```

4. **Make Changes**
- Edit files in `app/` directory
- Changes auto-reload in browser
- Test thoroughly before deploying

---

## 📝 COMPLETING REMAINING PAGES

### Creating Solution Pages (5 remaining)

**Template:** `app/solutions/sales-process-gtm/page.tsx`

**For each solution:**

1. Create directory: `app/solutions/[solution-name]/`
2. Copy template: `page.tsx` from sales-process-gtm
3. Update content:
   - Change metadata (title, description)
   - Update hero headline and description
   - Modify "The Problem" section
   - Update "What We Build" deliverables
   - Adjust pricing and timeline

**Solutions to create:**
- `outbound-prospecting/`
- `crm-efficiency/`
- `account-based-intelligence/`
- `event-gtm/`
- `branding-thought-leadership/`

### Creating Product Pages (3 remaining)

**Template:** `app/products/sales-audit/page.tsx`

**Products to create:**
- `twelfth-brain/` - Active collaboration product
- `follow-up-system/` - Coming soon with notify-me
- `prospecting-engine/` - Coming soon with notify-me

**For "Coming Soon" products:**
- Add badge: "Coming Soon"
- Replace pricing with notify-me form
- Keep feature list but note it's in development
- Add "Notify me when it launches" CTA

### Creating Industry Pages (6 to create)

**Structure (similar to solution pages):**

```tsx
// app/industries/it-services/page.tsx

- Hero: "Sales Intelligence for [Industry]"
- Industry-specific pain points
- How Zaash solves for this vertical
- Case study or stats (if available)
- CTA: Book call or audit
```

**Industries:**
- `it-services/`
- `cybersecurity/`
- `cloud-infrastructure/`
- `ai-startups/`
- `bfsi/`
- `design-creative/`

---

## 🎨 CUSTOMIZATION GUIDE

### Updating Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  accent: {
    DEFAULT: '#00C9A7', // Change this
  }
}
```

### Updating Fonts

Edit `app/layout.tsx`:
```typescript
const plusJakarta = Plus_Jakarta_Sans({...})
const inter = Inter({...})
```

### Adding Logo

1. Export logo from Canva as PNG/SVG
2. Place in `public/` directory: `public/logo.png`
3. Update navigation:
```tsx
<Image src="/logo.png" alt="Zaash" width={40} height={40} />
```

### Calendar Integration

Edit `app/contact/page.tsx`:

Replace placeholder with:
```tsx
<iframe
  src="https://calendly.com/your-link"
  width="100%"
  height="700px"
  frameBorder="0"
/>
```

---

## 📧 EMAIL FORM INTEGRATION

### Using Resend (Recommended)

1. **Sign up:** resend.com
2. **Get API key:** Dashboard → API Keys
3. **Add to Vercel:** Environment Variables → `RESEND_API_KEY`
4. **Create API route:** `app/api/contact/route.ts`

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const data = await req.json()
  
  await resend.emails.send({
    from: 'website@zaash.com',
    to: 'contact@zaash.com',
    subject: `New contact: ${data.topic}`,
    html: `<p>Name: ${data.name}</p>...`
  })
  
  return Response.json({ success: true })
}
```

5. **Update form:** `app/contact/page.tsx`
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(data)
})
```

---

## 🔍 SEO SETUP

### Google Search Console

1. **Verify domain:** search.google.com/search-console
2. **Submit sitemap:** `https://zaash.com/sitemap.xml`
3. **Request indexing:** URL Inspection → Request Indexing

### Sitemap Generation

Add to `next.config.js`:
```javascript
async rewrites() {
  return [
    {
      source: '/sitemap.xml',
      destination: '/api/sitemap'
    }
  ]
}
```

---

## 📊 ANALYTICS SETUP

### Vercel Analytics (Built-in)

Automatically enabled on Vercel. View in dashboard.

### PostHog (Behavioral Tracking)

1. Sign up: posthog.com
2. Get project API key
3. Install: `npm install posthog-js`
4. Add to `app/layout.tsx`:

```typescript
'use client'
import posthog from 'posthog-js'

useEffect(() => {
  posthog.init('YOUR_API_KEY', {
    api_host: 'https://app.posthog.com'
  })
}, [])
```

---

## ✅ PRE-LAUNCH CHECKLIST

### Content Review
- [ ] All placeholder text replaced
- [ ] Founder bios and photos added
- [ ] Company address updated in footer
- [ ] Phone number added to contact page
- [ ] Calendar link configured
- [ ] All email addresses verified (@zaash.com)

### Technical Review
- [ ] All forms submitting correctly
- [ ] Mobile responsive on all pages
- [ ] No broken links (use broken-link-checker)
- [ ] Images optimized and loading fast
- [ ] Meta tags on all pages
- [ ] Sitemap submitted
- [ ] Analytics tracking verified

### Legal Review
- [ ] Privacy Policy reviewed by lawyer
- [ ] Terms of Service complete
- [ ] Cookie Policy complete
- [ ] GDPR compliance verified
- [ ] Cookie consent working

### Performance
- [ ] Lighthouse score >90 on mobile
- [ ] Core Web Vitals passing
- [ ] Images using next/image component
- [ ] Lazy loading enabled
- [ ] No console errors

---

## 🆘 TROUBLESHOOTING

### Build Errors

**"Module not found"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**"TypeScript errors"**
```bash
npm run build
# Fix reported type errors
```

### Deployment Fails

**Check Vercel logs:**
- Dashboard → Deployments → Click failed build → View logs
- Common: Missing environment variables
- Fix: Add required env vars in Settings

### Forms Not Working

**Check network tab in browser:**
- Ensure API route exists
- Verify CORS settings
- Check email service API key

---

## 📞 SUPPORT CONTACTS

### Platform Support
- **Vercel:** vercel.com/support
- **Railway:** railway.app/help
- **Manus/Lovable:** Check platform documentation

### Development Help
- **Next.js Docs:** nextjs.org/docs
- **Tailwind CSS:** tailwindcss.com/docs
- **TypeScript:** typescriptlang.org/docs

---

## 🎯 NEXT STEPS AFTER DEPLOYMENT

1. **Monitor analytics** - Track visitor behavior
2. **A/B test CTAs** - Optimize conversion rates
3. **Collect feedback** - Iterate based on user input
4. **Add content** - Blog posts for SEO
5. **Build integrations** - CRM, email marketing
6. **Scale infrastructure** - As traffic grows

---

## 📄 LICENSE & USAGE

**Proprietary Code - Zaash © 2026**
- This codebase is for Zaash use only
- Do not redistribute or resell
- Modifications allowed for internal use
- Contact legal@zaash.com for licensing questions

---

**Deployment Guide Version 1.0 - April 2026**
**Questions? Contact: tech@zaash.com**
