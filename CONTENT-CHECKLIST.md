# 📋 Content Checklist for ACI Bansur Website

## 📞 Contact Information (✅ Completed)

- [x] Phone Numbers: 9783925501, 9783519502
- [x] Email: acibansur11@gmail.com
- [x] Address: Hansora Road Bypass, Kotputli Road, Bansur, Alwar (Rajasthan)
- [ ] Update social media links (Facebook, Instagram, YouTube, WhatsApp)

## 👨‍🏫 Faculty Information

### Director Details
- [x] Name: Punit Sir
- [x] Subject: Chemistry
- [ ] **ACTION REQUIRED:** Add director's photo to `public/images/director.jpg`
- [ ] **ACTION REQUIRED:** Update complete qualifications and experience

### Faculty Members
- [x] Punit Sir (Chemistry)
- [x] Sunil Sir (Botany)
- [ ] **ACTION REQUIRED:** Add actual faculty member details
- [ ] **ACTION REQUIRED:** Add faculty photos to `public/images/faculty/`

**To Add More Faculty:**
Edit `data/faculty.ts` and add:
```typescript
{
  id: "faculty-id",
  name: "Faculty Name",
  subject: "Subject",
  from: "City",
  experience: "X+ Years",
  education: "Qualifications",
  exInstitute: "Previous Institute",
  image: "/images/faculty/photo.jpg"
}
```

## 📚 Courses & Fees

- [x] NEET Target Course
- [x] IIT-JEE Target Course
- [x] Foundation 11th Course
- [x] Foundation 12th Course
- [x] Fee Structure (RBSE & CBSE)
- [x] Scholarship Criteria
- [x] Hostel Fees

**To Update:**
Edit `data/courses.ts`

## 🏆 Results

### Current Data (Placeholder)
- [x] NEET 2025: 45 qualified
- [x] JEE 2025: 32 qualified
- [x] NEET 2024: 42 qualified
- [x] JEE 2024: 28 qualified

### **ACTION REQUIRED:**
1. Update `data/results.ts` with actual student results:
   - Student names
   - Ranks achieved
   - Colleges admitted to
   - Scores
2. Add student photos to `public/images/results/`

**Sample Result Entry:**
```typescript
{
  id: "neet-2025-1",
  name: "Student Full Name",
  exam: "NEET",
  year: 2025,
  college: "AIIMS Delhi",
  city: "Delhi",
  state: "Delhi",
  batchType: "Classroom",
  rank: "AIR 245",
  score: "715/720",
  image: "/images/results/student-name.jpg"
}
```

## 🖼️ Gallery

### Required Images

**Categories:**
1. **Results** - Result banners, celebration photos
2. **Events** - Orientation, motivational sessions, ceremonies
3. **Classroom** - Teaching sessions, lab work
4. **Doubt Counter** - One-on-one mentoring
5. **Coaching** - Infrastructure, facilities
6. **NEET/JEE** - Exam preparation, test series

### **ACTION REQUIRED:**
1. Collect photos for each category
2. Resize and optimize images (max 1920px width)
3. Upload to respective folders in `public/images/gallery/`
4. Update `data/gallery.ts` with actual image paths

**Folder Structure:**
```
public/images/gallery/
├── results/
├── events/
├── classroom/
├── doubt-counter/
└── coaching/
```

## 🌐 Website Content

### About Page
- [x] History paragraph
- [x] Mission statement
- [x] Vision statement
- [x] Core values
- [x] Director details

**To Update:**
Edit `app/about/page.tsx` if you want to modify the history text.

### Home Page
- [x] Hero section
- [x] Why ACI section
- [x] Achievements
- [x] Courses overview
- [x] Director message
- [x] Call-to-action

## 🔗 Social Media Links

### **ACTION REQUIRED:**
Update in `data/siteConfig.ts`:

```typescript
social: {
  facebook: "https://facebook.com/your-actual-page",
  instagram: "https://instagram.com/your-actual-handle",
  youtube: "https://youtube.com/@your-actual-channel",
  whatsapp: "https://wa.me/919783925501"
}
```

## 📸 Essential Images Needed

### High Priority
- [ ] Institute Logo (PNG with transparent background)
  - Path: `public/images/logo.png`
  - Size: 200x200px minimum

- [ ] Director Photo (Professional headshot)
  - Path: `public/images/director.jpg`
  - Size: 800x800px

- [ ] OG Image (Social media preview)
  - Path: `public/images/og-image.jpg`
  - Size: 1200x630px
  - Should include: Institute name, tagline, logo

### Medium Priority
- [ ] Faculty Photos (All teachers)
  - Path: `public/images/faculty/[name].jpg`
  - Size: 600x600px each

- [ ] Institute Building/Infrastructure
  - Multiple angles
  - Classroom photos
  - Lab facilities

### Low Priority
- [ ] Student Result Photos (with consent)
- [ ] Event Photos
- [ ] Classroom Activity Photos

## 🎨 Design Customization (Optional)

### Colors
Current theme uses:
- Primary: Blue (Tailwind blue-600 to blue-900)
- Accent: Orange/Red for CTAs
- Success: Green
- Neutral: Gray

**To Change Colors:**
Edit `tailwind.config.ts`

### Fonts
Current:
- Headings: Poppins
- Body: Inter

**To Change Fonts:**
Edit `app/layout.tsx`

## ✅ Pre-Launch Checklist

### Content
- [ ] All faculty information updated
- [ ] Actual student results added
- [ ] Gallery images uploaded
- [ ] Director photo added
- [ ] Logo added
- [ ] Social media links verified

### Configuration
- [ ] Domain URL updated in `data/siteConfig.ts`
- [ ] Contact email verified
- [ ] Phone numbers verified
- [ ] Google Analytics ID added (optional)

### Testing
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Mobile responsiveness checked
- [ ] All links work
- [ ] Images display properly
- [ ] Build succeeds: `npm run build`

### SEO
- [ ] Meta descriptions for all pages
- [ ] OG image created and added
- [ ] Sitemap generated (automatic)
- [ ] Robots.txt configured (automatic)

## 📝 Quick Start Guide

1. **Update Contact Info:**
   ```bash
   Edit: data/siteConfig.ts
   ```

2. **Add Faculty:**
   ```bash
   Edit: data/faculty.ts
   Add photos to: public/images/faculty/
   ```

3. **Add Results:**
   ```bash
   Edit: data/results.ts
   Add photos to: public/images/results/
   ```

4. **Add Gallery Images:**
   ```bash
   Add images to: public/images/gallery/[category]/
   Edit: data/gallery.ts
   ```

5. **Test Build:**
   ```bash
   npm run dev
   # Open http://localhost:3000
   ```

6. **Deploy:**
   ```bash
   git add .
   git commit -m "Update content"
   git push
   # Auto-deploys on Vercel
   ```

## 🆘 Need Help?

### Quick Fixes

**Update Phone Number:**
```typescript
// data/siteConfig.ts
contact: {
  phone: ["9783925501", "9783519502"],
}
```

**Update Email:**
```typescript
// data/siteConfig.ts
contact: {
  email: "acibansur11@gmail.com",
}
```

**Add New Faculty:**
```typescript
// data/faculty.ts
export const facultyData: FacultyMember[] = [
  // ... existing faculty
  {
    id: "new-faculty",
    name: "New Faculty Name",
    subject: "Subject",
    from: "City",
    experience: "Years",
    education: "Qualifications",
  }
];
```

---

**Priority:** Complete the "ACTION REQUIRED" items before deployment!
