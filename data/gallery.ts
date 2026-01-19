export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "Results" | "Event" | "Classroom" | "Doubt Counter" | "Coaching" | "NEET/JEE";
  width?: number;
  height?: number;
}

export const galleryImages: GalleryImage[] = [
  // Results
  {
    id: "result-1",
    src: "/images/gallery/results/result-1.jpg",
    alt: "NEET Result Banner 2025",
    category: "Results"
  },
  {
    id: "result-2",
    src: "/images/gallery/results/result-2.jpg",
    alt: "JEE Result Banner 2025",
    category: "Results"
  },
  // Events
  {
    id: "event-1",
    src: "/images/gallery/events/event-1.jpg",
    alt: "Orientation Program",
    category: "Event"
  },
  {
    id: "event-2",
    src: "/images/gallery/events/event-2.jpg",
    alt: "Motivational Session",
    category: "Event"
  },
  {
    id: "event-3",
    src: "/images/gallery/events/event-3.jpg",
    alt: "Felicitation Ceremony",
    category: "Event"
  },
  // Classroom
  {
    id: "class-1",
    src: "/images/gallery/classroom/class-1.jpg",
    alt: "Interactive Classroom Session",
    category: "Classroom"
  },
  {
    id: "class-2",
    src: "/images/gallery/classroom/class-2.jpg",
    alt: "Physics Lab",
    category: "Classroom"
  },
  {
    id: "class-3",
    src: "/images/gallery/classroom/class-3.jpg",
    alt: "Chemistry Lab",
    category: "Classroom"
  },
  // Doubt Counter
  {
    id: "doubt-1",
    src: "/images/gallery/doubt-counter/doubt-1.jpg",
    alt: "Personal Doubt Clearing",
    category: "Doubt Counter"
  },
  {
    id: "doubt-2",
    src: "/images/gallery/doubt-counter/doubt-2.jpg",
    alt: "One-on-One Mentoring",
    category: "Doubt Counter"
  },
  // Coaching Infrastructure
  {
    id: "coaching-1",
    src: "/images/gallery/coaching/coaching-1.jpg",
    alt: "Institute Building",
    category: "Coaching"
  },
  {
    id: "coaching-2",
    src: "/images/gallery/coaching/coaching-2.jpg",
    alt: "Library Facility",
    category: "Coaching"
  },
  {
    id: "coaching-3",
    src: "/images/gallery/coaching/coaching-3.jpg",
    alt: "Computer Lab",
    category: "Coaching"
  }
];

export const galleryCategories = [
  "All",
  "Results",
  "Event",
  "Classroom",
  "Doubt Counter",
  "Coaching",
  "NEET/JEE"
] as const;
