# 🚀 Quick Reference Guide

## 🔄 Common Tasks

### Update Contact Information
**File:** `data/siteConfig.ts`
```typescript
contact: {
  phone: ["9783925501", "9783519502"],
  email: "acibansur11@gmail.com",
}
```

### Add New Faculty Member
**File:** `data/faculty.ts`
```typescript
{
  id: "teacher-name",
  name: "Teacher Name",
  subject: "Subject (Physics/Chemistry/Math/Biology)",
  from: "City Name",
  experience: "X+ Years",
  education: "M.Sc., B.Ed., etc.",
  exInstitute: "Previous Institute Name",
  image: "/images/faculty/photo.jpg"
}
```

### Add New Result
**File:** `data/results.ts`
```typescript
{
  id: "neet-2025-1",
  name: "Student Name",
  exam: "NEET" or "JEE",
  year: 2025,
  college: "College Name",
  city: "City",
  state: "State",
  batchType: "Classroom" or "DLP",
  rank: "AIR 100",
  score: "720/720",
  image: "/images/results/photo.jpg"
}
```

### Update Fees
**File:** `data/courses.ts`
```typescript
export const feeStructure: FeeStructure[] = [
  {
    course: "NEET Target (2 Years)",
    rbseFee: "₹1,20,000",
    cbseFee: "₹1,50,000",
    registrationFee: "₹5,000"
  }
]
```

### Add Gallery Images
1. Place images in: `public/images/gallery/[category]/`
2. Update: `data/gallery.ts`
```typescript
{
  id: "unique-id",
  src: "/images/gallery/category/image.jpg",
  alt: "Description",
  category: "Results" | "Event" | "Classroom" | "Doubt Counter" | "Coaching" | "NEET/JEE"
}
```

## 📁 Important File Locations

| What | Where |
|------|-------|
| Contact Info | `data/siteConfig.ts` |
| Faculty Data | `data/faculty.ts` |
| Results Data | `data/results.ts` |
| Courses & Fees | `data/courses.ts` |
| Gallery Images | `public/images/gallery/` |
| Logo | `public/images/logo.png` |
| Director Photo | `public/images/director.jpg` |

## 💻 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Check for errors
npm run lint

# View in browser
http://localhost:3000
```

## 🚀 Deployment (Vercel)

```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main

# After content updates
git add .
git commit -m "Update content"
git push
# Auto-deploys to Vercel
```

## 🎨 Color Codes

```css
Primary Blue:   #2563eb (blue-600)
Dark Blue:      #1e3a8a (blue-900)
Orange CTA:     #f97316 (orange-500)
Success Green:  #16a34a (green-600)
Text Dark:      #111827 (gray-900)
Text Light:     #6b7280 (gray-500)
```

## 📱 Testing Checklist

- [ ] Homepage loads
- [ ] All menu links work
- [ ] Contact form submits
- [ ] Phone numbers clickable on mobile
- [ ] Images display correctly
- [ ] Responsive on mobile
- [ ] No console errors

## 🔍 SEO Checklist

- [ ] Sitemap submitted to Google
- [ ] Google Analytics installed
- [ ] OG image (1200x630px) added
- [ ] All pages have meta descriptions
- [ ] Alt text on all images

## 📞 Emergency Contacts

**Email Issues:** Check `data/siteConfig.ts`
**Form Not Working:** Verify email in FormSubmit
**Build Errors:** Run `npm run build` and check console
**Deployment Issues:** Check Vercel dashboard

## 🆘 Quick Fixes

### Form Not Sending Emails
1. Check email in `data/siteConfig.ts`
2. Verify first submission (triggers FormSubmit verification)
3. Check spam folder

### Images Not Loading
1. Check file path (case-sensitive)
2. Ensure in `public/` directory
3. Use format: `/images/folder/file.jpg`

### Build Fails
```bash
# Clear cache
rm -rf .next
npm install
npm run build
```

### Development Server Not Starting
```bash
# Kill existing process
taskkill /F /IM node.exe

# Restart
npm run dev
```

## 📊 Analytics URLs

- **Google Analytics:** https://analytics.google.com
- **Search Console:** https://search.google.com/search-console
- **Vercel Dashboard:** https://vercel.com/dashboard

## 🔗 Useful Links

| Tool | URL |
|------|-----|
| Vercel | https://vercel.com |
| FormSubmit | https://formsubmit.co |
| Tailwind Docs | https://tailwindcss.com/docs |
| Next.js Docs | https://nextjs.org/docs |
| Image Compression | https://tinypng.com |
| OG Image Tester | https://developers.facebook.com/tools/debug/ |

## 💡 Pro Tips

1. **Always test locally before deploying**
   ```bash
   npm run dev
   # Check http://localhost:3000
   ```

2. **Optimize images before uploading**
   - Use WebP format
   - Compress with TinyPNG
   - Max width: 1920px

3. **Backup before major changes**
   ```bash
   git commit -m "Backup before changes"
   ```

4. **Regular updates improve SEO**
   - Add new results monthly
   - Update gallery quarterly
   - Blog posts (future enhancement)

5. **Monitor form submissions**
   - Check email regularly
   - Set up email filters for enquiries
   - Keep response time < 24 hours

## 📅 Maintenance Schedule

**Weekly:**
- Check form submissions
- Review analytics
- Monitor website uptime

**Monthly:**
- Add new results
- Update achievements
- Check for broken links

**Quarterly:**
- Update gallery
- Review and update fees
- Refresh testimonials

**Yearly:**
- Review all content
- Update faculty information
- Refresh design elements

---

**Keep this file handy for quick reference!**
