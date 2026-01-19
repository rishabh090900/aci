# ✅ Pre-Launch TODO List

## 🔴 CRITICAL (Must Complete Before Deployment)

### Contact Information
- [ ] Update `data/siteConfig.ts` with actual domain URL
- [ ] Verify phone numbers: 9783925501, 9783519502
- [ ] Verify email: acibansur11@gmail.com
- [ ] Add actual Facebook page URL
- [ ] Add actual Instagram profile URL
- [ ] Add actual YouTube channel URL
- [ ] Verify WhatsApp number link

### Essential Images
- [ ] Add institute logo: `public/images/logo.png` (200x200px, transparent background)
- [ ] Add director photo: `public/images/director.jpg` (800x800px)
- [ ] Add OG image for social sharing: `public/images/og-image.jpg` (1200x630px)

### Director Information
- [ ] Update complete director qualifications in `data/faculty.ts`
- [ ] Add director's actual experience details
- [ ] Update director message if needed

---

## 🟡 HIGH PRIORITY (Should Complete Before Launch)

### Faculty Data
- [ ] Add all faculty members to `data/faculty.ts`
- [ ] Upload faculty photos to `public/images/faculty/`
- [ ] Verify each faculty member's:
  - [ ] Name
  - [ ] Subject
  - [ ] Qualifications
  - [ ] Experience
  - [ ] Previous institutions

### Results Data
- [ ] Update `data/results.ts` with actual student results
- [ ] Add student photos (with consent) to `public/images/results/`
- [ ] For each student, verify:
  - [ ] Name
  - [ ] Rank/Score
  - [ ] College admitted to
  - [ ] Year

### Fee Structure
- [ ] Verify all fees in `data/courses.ts`
- [ ] Confirm RBSE board fees
- [ ] Confirm CBSE board fees
- [ ] Verify hostel fees (AC and Non-AC)
- [ ] Check scholarship criteria and percentages

---

## 🟢 MEDIUM PRIORITY (Good to Have)

### Gallery Images
- [ ] Collect result banners and celebration photos
- [ ] Collect event photos (orientation, seminars, ceremonies)
- [ ] Collect classroom and teaching photos
- [ ] Collect infrastructure photos (building, labs, library)
- [ ] Collect doubt counter/mentoring photos
- [ ] Upload all images to respective folders in `public/images/gallery/`
- [ ] Update `data/gallery.ts` with actual image paths

### Content Review
- [ ] Review and update About page history if needed
- [ ] Review course descriptions
- [ ] Review "Why Choose ACI" points
- [ ] Check all text for typos

### SEO Setup (After Deployment)
- [ ] Get Google Search Console verification code
- [ ] Update verification code in `app/layout.tsx`
- [ ] Get Google Analytics ID
- [ ] Add GA ID to `.env.local`
- [ ] Implement GA tracking code

---

## 🔵 LOW PRIORITY (Can Do After Launch)

### Enhanced Features
- [ ] Set up custom 404 page
- [ ] Add student testimonials
- [ ] Create downloadable fee brochure PDF
- [ ] Add video tour of institute
- [ ] Set up email autoresponder for enquiries
- [ ] Create WhatsApp chatbot

### Marketing
- [ ] Create social media posts about website launch
- [ ] Design promotional materials with website URL
- [ ] Print business cards with website
- [ ] Add website to Google My Business

### Analytics & Monitoring
- [ ] Set up Google Analytics goals for form submissions
- [ ] Set up conversion tracking
- [ ] Monitor website uptime
- [ ] Track search rankings for target keywords

---

## 📋 Development Tasks

### Before First Deployment
- [x] Build succeeds without errors: `npm run build`
- [ ] Test all pages load correctly
- [ ] Test form submission
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Verify all links work
- [ ] Check spelling and grammar

### Git & Deployment
- [ ] Initialize git repository
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Sign up for Vercel account
- [ ] Connect GitHub repo to Vercel
- [ ] Configure environment variables in Vercel
- [ ] Deploy to Vercel
- [ ] Test deployed site

### Domain Setup
- [ ] Purchase domain (if not already done)
- [ ] Add domain to Vercel
- [ ] Configure DNS records
- [ ] Wait for DNS propagation
- [ ] Verify SSL certificate

### Post-Deployment
- [ ] Submit sitemap to Google: `yourdomain.com/sitemap.xml`
- [ ] Test contact form on live site
- [ ] Check page load speeds
- [ ] Run Lighthouse audit
- [ ] Fix any issues found

---

## 📁 File-Specific TODOs

### `data/siteConfig.ts`
```typescript
// TODO: Update these values
url: "https://acibansur.com", // Your actual domain
social: {
  facebook: "https://facebook.com/YOUR-PAGE",
  instagram: "https://instagram.com/YOUR-HANDLE",
  youtube: "https://youtube.com/@YOUR-CHANNEL",
  whatsapp: "https://wa.me/919783925501"
}
```

### `data/faculty.ts`
```typescript
// TODO: Add all faculty members
// TODO: Update director complete information
```

### `data/results.ts`
```typescript
// TODO: Replace placeholder results with actual student data
// TODO: Add student photos with consent
```

### `data/gallery.ts`
```typescript
// TODO: Add actual image paths after uploading images
```

### `.env.local` (Create this file)
```bash
# TODO: Update with actual domain
NEXT_PUBLIC_SITE_URL=https://acibansur.com

# TODO: Add Google Analytics (after setup)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 🎯 Quick Start Checklist

Use this for a quick status check:

### Phase 1: Content
- [ ] All text content reviewed
- [ ] All images added
- [ ] All data files updated
- [ ] Faculty information complete
- [ ] Results data complete

### Phase 2: Testing
- [ ] Build successful
- [ ] Local testing done
- [ ] Mobile responsive
- [ ] Forms work
- [ ] Links verified

### Phase 3: Deployment
- [ ] GitHub repo created
- [ ] Code pushed
- [ ] Vercel deployed
- [ ] Domain configured
- [ ] SSL active

### Phase 4: Post-Launch
- [ ] Google Search Console setup
- [ ] Sitemap submitted
- [ ] Analytics tracking
- [ ] Social media updated
- [ ] First enquiry received! 🎉

---

## 📞 If You Get Stuck

### Can't add images?
1. Make sure they're in `public/images/` folder
2. Reference them as `/images/filename.jpg`
3. Check file name spelling (case-sensitive)

### Form not working?
1. Check email in `data/siteConfig.ts`
2. Test locally first
3. First submission needs verification

### Build errors?
```bash
# Try this:
rm -rf .next
npm install
npm run build
```

### Need to update content?
1. Edit the file in `data/` folder
2. Save changes
3. If deployed: `git add . && git commit -m "Update" && git push`

---

## ✅ Sign Off

Once you complete each section, sign off with date:

- [ ] Critical Tasks Complete - Date: _______
- [ ] High Priority Complete - Date: _______
- [ ] Development Tasks Complete - Date: _______
- [ ] Deployment Complete - Date: _______
- [ ] Post-Launch Tasks Complete - Date: _______

---

**Start with Critical (🔴) tasks, then move to High Priority (🟡)!**

**Website URL:** _______________________

**Launch Date:** _______________________

**First Enquiry:** _______________________

🎉 **Congratulations on your new website!**
