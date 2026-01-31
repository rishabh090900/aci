# 🗺️ Website Structure & Page Flow

## Site Map

```
┌─────────────────────────────────────────────────┐
│          AYUSH CAREER INSTITUTE                  │
│              acibansur.com                       │
└─────────────────────────────────────────────────┘
                      │
    ┌─────────────────┼─────────────────┐
    │                 │                 │
    ▼                 ▼                 ▼
┌─────────┐    ┌─────────┐      ┌──────────┐
│  HOME   │    │  ABOUT  │      │ FACULTY  │
│    /    │    │ /about  │      │/faculty  │
└─────────┘    └─────────┘      └──────────┘
    │
    ├──────────────────┬──────────────────┐
    │                  │                  │
    ▼                  ▼                  ▼
┌─────────┐    ┌─────────┐      ┌──────────┐
│COURSES  │    │RESULTS  │      │ GALLERY  │
│/courses │    │/results │      │/gallery  │
└─────────┘    └─────────┘      └──────────┘
    │
    ├──────────────────┐
    │                  │
    ▼                  ▼
┌─────────┐    ┌──────────┐
│CONTACT  │    │ ENQUIRY  │
│/contact │    │/enquiry  │
└─────────┘    └──────────┘
```

## Page Details

### 🏠 Home (/)
**Purpose:** Landing page, first impression, main CTAs

**Sections:**
1. Hero Banner
   - Institute branding
   - Taglines (NEET | IIT-JEE | Foundation)
   - 3 CTA buttons (Enquiry, Call, Check Fees)

2. Why ACI Section
   - 4 key features in card format
   - Expert Faculty, Results, Study Material, Small Batches

3. Achievements
   - Stats (NEET/JEE qualified students)
   - Top ranks showcase

4. Courses Overview
   - 4 course cards
   - NEET Target, JEE Target, Foundation 11th, Foundation 12th

5. Director Message
   - Profile and brief message

6. Call to Action
   - Admissions open banner
   - Scholarship info

**User Journey:** Home → Courses → Enquiry
**Target Keywords:** Best NEET coaching Bansur, Best JEE coaching Bansur

---

### ℹ️ About (/about)
**Purpose:** Build trust, showcase credentials

**Sections:**
1. Page Header with tagline
2. History of Institute
3. Mission & Vision (2-column layout)
4. Core Values (4 values)
5. Director Profile (detailed)
6. Why Choose Us (10 points)

**User Journey:** Home → About → Faculty/Contact
**Target Keywords:** Coaching institute Bansur, ACI history

---

### 👨‍🏫 Faculty (/faculty)
**Purpose:** Showcase expert teachers, build credibility

**Sections:**
1. Page Header
2. Faculty Grid (cards with photos)
   - Name, Subject, Experience, Education, Previous Institute
3. What Makes Faculty Special (6 highlights)
4. CTA to Enquiry

**User Journey:** Home → Faculty → Enquiry
**Target Keywords:** Experienced teachers, IIT faculty

---

### 📚 Courses & Fees (/courses)
**Purpose:** Detailed course info, transparent pricing

**Sections:**
1. Page Header
2. All Course Details (4 courses)
   - Description, Duration, Highlights
3. Fee Structure Table
   - RBSE vs CBSE fees
4. Scholarship Program Table
   - Diamond, Gold, Silver, Bronze tiers
5. Hostel Facilities
   - AC/Non-AC options, Amenities
6. CTA Section

**User Journey:** Home → Courses → Enquiry
**Target Keywords:** NEET coaching fees, JEE coaching fees, Scholarship

---

### 🏆 Results (/results)
**Purpose:** Social proof, showcase success

**Sections:**
1. Page Header with trophy icon
2. Result Statistics (4-box stats)
3. NEET 2025 Achievers Grid
4. JEE 2025 Achievers Grid
5. Previous Year Results (2024)
6. CTA to join

**User Journey:** Home → Results → Enquiry
**Target Keywords:** NEET results Bansur, JEE results ACI, Top ranks

---

### 🖼️ Gallery (/gallery)
**Purpose:** Visual proof, infrastructure showcase

**Sections:**
1. Page Header
2. Category Filter Tabs (sticky)
   - All, Results, Events, Classroom, Doubt Counter, Coaching, NEET/JEE
3. Image Grid (masonry layout)
4. Lightbox Viewer (click to enlarge)

**Categories:**
- Results: Banner photos, celebration
- Events: Orientation, seminars
- Classroom: Teaching sessions
- Doubt Counter: One-on-one sessions
- Coaching: Infrastructure, facilities
- NEET/JEE: Exam prep, test series

**User Journey:** Home → Gallery → Contact
**Target Keywords:** Coaching facilities Bansur, Infrastructure

---

### 📞 Contact (/contact)
**Purpose:** Make it easy to reach out

**Sections:**
1. Page Header
2. Contact Information (3 cards)
   - Address with map marker
   - Phone numbers
   - Email
3. Office Hours
4. Social Media Links
5. Google Map Embed (placeholder)
6. CTA to Enquiry Form

**User Journey:** Any page → Contact → Call/Email/Enquiry
**Target Keywords:** Contact ACI Bansur, Address, Phone number

---

### ✉️ Enquiry (/enquiry)
**Purpose:** Lead generation, easy contact

**Form Fields:**
1. Full Name (required)
2. Mobile Number (required, 10 digits)
3. Email (optional)
4. Current Class (dropdown, required)
   - 10th Passed, 11th/12th Studying/Passed, Dropper
5. Exam Target (dropdown, required)
   - NEET, JEE Main, JEE Advanced, Both, Foundation
6. Message (optional, textarea)

**Features:**
- FormSubmit.co integration
- Success/Error messages
- Direct call buttons
- WhatsApp link

**User Journey:** Final conversion point from any page
**Target Keywords:** Admission enquiry, Join NEET coaching

---

## User Flow Patterns

### Pattern 1: Quick Enquiry
```
Home → Enquiry Now Button → Form → Submit
```

### Pattern 2: Research Flow
```
Home → About → Faculty → Courses → Enquiry
```

### Pattern 3: Results Focused
```
Home → Results → Courses → Enquiry
```

### Pattern 4: Cost Conscious
```
Home → Courses (Fees) → Scholarship → Enquiry
```

### Pattern 5: Trust Building
```
Home → About → Faculty → Results → Gallery → Enquiry
```

## Call-to-Action (CTA) Distribution

| Page | Primary CTA | Secondary CTA |
|------|-------------|---------------|
| Home | Enquiry Now | Call Now |
| About | Enquiry | - |
| Faculty | Enquire Now | - |
| Courses | Enquire Now | Call Us |
| Results | Start Your Journey | - |
| Gallery | - | - |
| Contact | Submit Enquiry | Call/WhatsApp |
| Enquiry | Submit Enquiry | Call/WhatsApp |

## Mobile Navigation

**Header (Sticky):**
- Logo + Institute Name
- Hamburger Menu (Mobile)
- Desktop: Horizontal Nav + Enquiry Button

**Footer:**
- 4 columns (About, Quick Links, Important Links, Contact)
- Social media icons
- Copyright

## Conversion Points

1. **Hero Section** - 3 buttons
2. **Course Cards** - View Details links
3. **Call-to-Action Sections** - Prominent on every page
4. **Header** - Sticky Enquiry button
5. **Footer** - Contact information always visible
6. **Phone Numbers** - Click-to-call on mobile

## SEO Structure

### URL Hierarchy
```
acibansur.com/
├── / (homepage - highest priority)
├── /courses (high priority - commercial intent)
├── /results (high priority - social proof)
├── /faculty (medium priority)
├── /about (medium priority)
├── /contact (medium priority)
├── /enquiry (medium priority - conversion)
└── /gallery (lower priority)
```

### Internal Linking Strategy

**Most Important Pages** (linked from header):
- Home, About, Faculty, Courses, Results, Gallery, Contact

**Conversion Pages** (linked from everywhere):
- Enquiry (main CTA)
- Courses (secondary CTA)

**Cross-Linking:**
- Home → All pages
- All pages → Enquiry
- About ↔ Faculty
- Courses ↔ Results
- Contact → Enquiry

## Mobile vs Desktop Layout

### Desktop (1024px+)
- 4-column layouts
- Side-by-side content
- Larger images
- Expanded navigation

### Tablet (768px - 1023px)
- 2-3 column layouts
- Responsive grids
- Medium images
- Collapsed navigation (hamburger)

### Mobile (< 768px)
- Single column
- Stacked content
- Optimized images
- Hamburger menu
- Click-to-call buttons
- Touch-friendly spacing

---

**This structure ensures:**
✅ Easy navigation
✅ Clear conversion paths
✅ Mobile-friendly
✅ SEO optimized
✅ User-focused design
