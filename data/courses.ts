export interface Course {
  id: string;
  name: string;
  target: string;
  description: string;
  duration: string;
  eligibility: string;
  highlights: string[];
}

export interface FeeStructure {
  course: string;
  rbseFee: string;
  cbseFee: string;
  registrationFee: string;
}

export interface ScholarshipCriteria {
  category: string;
  neetPercentage: string;
  jeePercentage: string;
  boardPercentage: string;
  scholarship: string;
}

export const courses: Course[] = [
  {
    id: "neet-target",
    name: "NEET Target Course",
    target: "NEET UG",
    description: "Comprehensive coaching program for NEET aspirants with in-depth coverage of Physics, Chemistry, and Biology (Botany & Zoology).",
    duration: "2 Years (11th + 12th)",
    eligibility: "Students who have passed 10th standard",
    highlights: [
      "Experienced faculty from top institutes",
      "Regular tests and assessments",
      "Doubt clearing sessions",
      "Study material and DPPs",
      "Previous year question analysis"
    ]
  },
  {
    id: "jee-target",
    name: "IIT-JEE Target Course",
    target: "JEE Main & Advanced",
    description: "Complete preparation program for JEE Main and Advanced with focus on Physics, Chemistry, and Mathematics.",
    duration: "2 Years (11th + 12th)",
    eligibility: "Students who have passed 10th standard",
    highlights: [
      "IIT alumni faculty",
      "Conceptual clarity focus",
      "Regular mock tests",
      "Problem-solving techniques",
      "Comprehensive study material"
    ]
  },
  {
    id: "foundation-11",
    name: "Foundation Course - 11th",
    target: "Pre-NEET/JEE (Class 11th)",
    description: "Foundation program for 11th standard students preparing for NEET/JEE with board exam preparation.",
    duration: "1 Year",
    eligibility: "Students in class 11th",
    highlights: [
      "Board + Competitive exam preparation",
      "Strong conceptual foundation",
      "Regular practice sessions",
      "Personalized attention",
      "Performance tracking"
    ]
  },
  {
    id: "foundation-12",
    name: "Foundation Course - 12th",
    target: "Pre-NEET/JEE (Class 12th)",
    description: "Intensive program for 12th standard students preparing for NEET/JEE along with board exams.",
    duration: "1 Year",
    eligibility: "Students in class 12th",
    highlights: [
      "Dual focus: Board + Entrance",
      "Previous year papers practice",
      "Time management techniques",
      "Revision and test series",
      "Individual mentoring"
    ]
  }
];

export const feeStructure: FeeStructure[] = [
  {
    course: "NEET Target (2 Years)",
    rbseFee: "₹1,20,000",
    cbseFee: "₹1,50,000",
    registrationFee: "₹5,000"
  },
  {
    course: "IIT-JEE Target (2 Years)",
    rbseFee: "₹1,20,000",
    cbseFee: "₹1,50,000",
    registrationFee: "₹5,000"
  },
  {
    course: "Foundation 11th",
    rbseFee: "₹60,000",
    cbseFee: "₹75,000",
    registrationFee: "₹3,000"
  },
  {
    course: "Foundation 12th",
    rbseFee: "₹60,000",
    cbseFee: "₹75,000",
    registrationFee: "₹3,000"
  }
];

export const hostelFees = {
  ac: "₹60,000 per year",
  nonAc: "₹45,000 per year",
  meals: "Included (Breakfast, Lunch, Dinner)",
  facilities: ["24x7 Security", "Wi-Fi", "Study Room", "Mess", "Laundry"]
};

export const scholarshipCriteria: ScholarshipCriteria[] = [
  {
    category: "Diamond",
    neetPercentage: "95% and above",
    jeePercentage: "95% and above",
    boardPercentage: "90% and above",
    scholarship: "100% Fee Waiver"
  },
  {
    category: "Gold",
    neetPercentage: "90-94%",
    jeePercentage: "90-94%",
    boardPercentage: "85-89%",
    scholarship: "75% Fee Waiver"
  },
  {
    category: "Silver",
    neetPercentage: "85-89%",
    jeePercentage: "85-89%",
    boardPercentage: "80-84%",
    scholarship: "50% Fee Waiver"
  },
  {
    category: "Bronze",
    neetPercentage: "80-84%",
    jeePercentage: "80-84%",
    boardPercentage: "75-79%",
    scholarship: "25% Fee Waiver"
  }
];
