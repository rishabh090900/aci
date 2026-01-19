# 🚀 Deployment Guide for ACI Bansur Website

## Pre-Deployment Checklist

### 1. Content Updates Required

Before deploying, update these files with actual content:

#### `data/siteConfig.ts`
- [ ] Update domain URL (replace `https://acibansur.com`)
- [ ] Verify contact phone numbers
- [ ] Verify email address
- [ ] Update social media links (Facebook, Instagram, YouTube, WhatsApp)

#### `data/faculty.ts`
- [ ] Add real faculty photos to `public/images/faculty/`
- [ ] Update faculty qualifications and experience
- [ ] Add more faculty members as needed

#### `data/results.ts`
- [ ] Add actual student results for 2025 and 2024
- [ ] Add student photos to `public/images/results/`
- [ ] Update result statistics

#### `data/courses.ts`
- [ ] Verify fee structure
- [ ] Update scholarship criteria
- [ ] Confirm hostel fees

#### `data/gallery.ts`
- [ ] Add actual images to `public/images/gallery/` folders
- [ ] Organize images by category

#### Director Information
- [ ] Add director's photo to `public/images/director.jpg`
- [ ] Update qualifications in `data/faculty.ts`

### 2. Image Assets

Upload these images before deployment:

```
public/
└── images/
    ├── logo.png                    # Institute logo
    ├── og-image.jpg               # Social media preview image
    ├── director.jpg               # Director photo
    ├── faculty/
    │   ├── punit-sir.jpg
    │   ├── sunil-sir.jpg
    │   └── [other-faculty].jpg
    ├── results/
    │   └── [student-photos].jpg
    └── gallery/
        ├── results/
        ├── events/
        ├── classroom/
        ├── doubt-counter/
        └── coaching/
```

### 3. Environment Configuration

Create `.env.local` file:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Deployment Steps

### Option 1: Deploy to Vercel (Recommended)

#### Step 1: Prepare Repository

```bash
cd d:\ACI\aci-coaching
git init
git add .
git commit -m "Initial commit: ACI Bansur website"
```

#### Step 2: Push to GitHub

```bash
# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/aci-bansur.git
git branch -M main
git push -u origin main
```

#### Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`

5. Add Environment Variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

6. Click "Deploy"

#### Step 4: Custom Domain Setup

1. In Vercel dashboard, go to Project Settings > Domains
2. Add your custom domain (e.g., `acibansur.com`)
3. Update DNS records as instructed by Vercel:
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or add A record for Vercel IP

4. Wait for DNS propagation (can take up to 48 hours)

5. Once verified, update `.env.local`:
   ```
   NEXT_PUBLIC_SITE_URL=https://acibansur.com
   ```

### Option 2: Deploy to Netlify

#### Step 1: Build Settings

```bash
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

#### Step 2: Deploy

1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Deploy!

## Post-Deployment Tasks

### 1. SEO Setup

#### Google Search Console

1. Visit [Google Search Console](https://search.google.com/search-console)
2. Add property with your domain
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

#### Google Analytics

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Add tracking code to `app/layout.tsx`

### 2. Social Media Setup

Update Open Graph images:
1. Create 1200x630px image for social sharing
2. Save as `public/images/og-image.jpg`
3. Test with:
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 3. Form Configuration

The enquiry form uses FormSubmit.co. To customize:

1. First submission triggers verification email
2. Confirm email address to activate
3. Optional: Configure at formsubmit.co:
   - Custom thank you page
   - Email template
   - Auto-response

Alternative: Set up EmailJS for more control.

### 4. Google Maps Integration

To add actual map:

1. Get Google Maps API key from [Google Cloud Console](https://console.cloud.google.com)
2. Enable Maps JavaScript API
3. Update `app/contact/page.tsx` with embed code:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

### 5. Performance Optimization

After deployment, test:

1. **Lighthouse Score**
   - Open Chrome DevTools > Lighthouse
   - Run audit
   - Target: 90+ score

2. **Page Speed Insights**
   - Visit [PageSpeed Insights](https://pagespeed.web.dev/)
   - Test your URL
   - Follow recommendations

3. **Image Optimization**
   - Convert images to WebP format
   - Compress using tools like TinyPNG
   - Ensure images are properly sized

## Maintenance

### Regular Updates

#### Adding New Results
1. Edit `data/results.ts`
2. Add student photos to `public/images/results/`
3. Commit and push to trigger redeployment

#### Updating Faculty
1. Edit `data/faculty.ts`
2. Add photos to `public/images/faculty/`
3. Deploy

#### Modifying Courses/Fees
1. Edit `data/courses.ts`
2. Commit and push

### Monitoring

1. Check Vercel Analytics for traffic
2. Monitor Google Search Console for SEO issues
3. Review contact form submissions
4. Update content regularly for SEO

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Images Not Loading
- Check file paths (case-sensitive)
- Ensure images are in `public/` directory
- Verify file extensions

### Form Not Working
- Check email in `siteConfig.ts`
- Verify FormSubmit.co activation
- Check browser console for errors

## Support

For deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)

---

✅ **Your website is now live!** Share the URL with students and start getting enquiries.
