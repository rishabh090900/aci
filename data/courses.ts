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
  totalFee: string;
  registrationFee: string;
  includes: string[];
}

export interface ScholarshipNEET {
  airGen: string;
  airSC: string;
  airST: string;
  payableFee: string;
}

export interface ScholarshipJEE {
  percentile: string;
  genOBCEWS: string;
  scST: string;
}

export interface ScholarshipBoard {
  percentage: string;
  feeOff: string;
  netPayable: string;
  installment1: string;
  installment2: string;
  installment3: string;
}

export interface SchoolingFee {
  board: string;
  fee: string;
}

export interface TestSeriesFee {
  program: string;
  online: string;
  offline: string;
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

// Fee Structure 2026-27
export const feeStructure: FeeStructure[] = [
  {
    course: "XI & XII Foundation (NEET/JEE)",
    totalFee: "₹1,15,000",
    registrationFee: "₹10,000 (included, non-refundable)",
    includes: [
      "Study material",
      "Printed material",
      "Periodical test papers",
      "GST included"
    ]
  }
];

// Scholarship based on NEET 2026 AIR
export const scholarshipNEET: ScholarshipNEET[] = [
  { airGen: "≤ 40,000", airSC: "≤ 1,50,000", airST: "≤ 1,80,000", payableFee: "NIL" },
  { airGen: "≤ 50,000", airSC: "≤ 1,60,000", airST: "≤ 1,90,000", payableFee: "₹15,000" },
  { airGen: "≤ 60,000", airSC: "≤ 1,70,000", airST: "≤ 2,00,000", payableFee: "₹20,000" },
  { airGen: "≤ 70,000", airSC: "≤ 1,80,000", airST: "≤ 2,10,000", payableFee: "₹25,000" },
  { airGen: "≤ 80,000", airSC: "≤ 1,90,000", airST: "≤ 2,20,000", payableFee: "₹30,000" },
  { airGen: "≤ 90,000", airSC: "≤ 2,00,000", airST: "≤ 2,30,000", payableFee: "₹35,000" },
  { airGen: "≤ 1,00,000", airSC: "≤ 2,10,000", airST: "≤ 2,40,000", payableFee: "₹40,000" },
  { airGen: "≤ 1,10,000", airSC: "≤ 2,20,000", airST: "≤ 2,50,000", payableFee: "₹45,000" },
  { airGen: "≤ 1,20,000", airSC: "≤ 2,30,000", airST: "≤ 2,60,000", payableFee: "₹50,000" },
  { airGen: "≤ 1,30,000", airSC: "≤ 2,40,000", airST: "≤ 2,70,000", payableFee: "₹55,000" },
  { airGen: "≤ 1,40,000", airSC: "≤ 2,50,000", airST: "≤ 2,80,000", payableFee: "₹60,000" },
  { airGen: "≤ 1,50,000", airSC: "≤ 2,60,000", airST: "≤ 2,90,000", payableFee: "₹65,000" },
  { airGen: "≤ 2,00,000", airSC: "≤ 3,00,000", airST: "≤ 3,20,000", payableFee: "₹70,000" },
  { airGen: "≤ 2,50,000", airSC: "≤ 3,20,000", airST: "≤ 3,50,000", payableFee: "₹75,000" },
  { airGen: "≤ 3,00,000", airSC: "≤ 3,50,000", airST: "≤ 4,00,000", payableFee: "₹80,000" },
  { airGen: "≤ 3,50,000", airSC: "≤ 4,00,000", airST: "≤ 4,50,000", payableFee: "₹90,000" },
  { airGen: "≤ 4,00,000", airSC: "≤ 4,50,000", airST: "≤ 5,00,000", payableFee: "₹1,00,000" }
];

// Scholarship based on JEE Main 2026 Percentile
export const scholarshipJEE: ScholarshipJEE[] = [
  { percentile: "≥ 97", genOBCEWS: "NIL", scST: "NIL" },
  { percentile: "≥ 95", genOBCEWS: "₹20,000", scST: "₹10,000" },
  { percentile: "≥ 92", genOBCEWS: "₹35,000", scST: "₹25,000" },
  { percentile: "≥ 90", genOBCEWS: "₹50,000", scST: "₹40,000" },
  { percentile: "≥ 85", genOBCEWS: "₹60,000", scST: "₹50,000" },
  { percentile: "≥ 80", genOBCEWS: "₹65,000", scST: "₹55,000" },
  { percentile: "≥ 75", genOBCEWS: "₹75,000", scST: "₹65,000" },
  { percentile: "≥ 70", genOBCEWS: "₹85,000", scST: "₹75,000" },
  { percentile: "≥ 60", genOBCEWS: "₹90,000", scST: "₹80,000" },
  { percentile: "≥ 50", genOBCEWS: "₹95,000", scST: "₹85,000" }
];

// Scholarship based on Board Percentage (X/XII)
export const scholarshipBoard: ScholarshipBoard[] = [
  { percentage: "≥ 98%", feeOff: "₹90,000", netPayable: "₹25,000", installment1: "₹20,000", installment2: "₹5,000", installment3: "-" },
  { percentage: "≥ 97%", feeOff: "₹80,000", netPayable: "₹35,000", installment1: "₹20,000", installment2: "₹15,000", installment3: "-" },
  { percentage: "≥ 96%", feeOff: "₹70,000", netPayable: "₹45,000", installment1: "₹20,000", installment2: "₹15,000", installment3: "₹10,000" },
  { percentage: "≥ 95%", feeOff: "₹65,000", netPayable: "₹50,000", installment1: "₹20,000", installment2: "₹20,000", installment3: "₹10,000" },
  { percentage: "≥ 94%", feeOff: "₹58,000", netPayable: "₹57,000", installment1: "₹25,000", installment2: "₹20,000", installment3: "₹12,000" },
  { percentage: "≥ 93%", feeOff: "₹53,000", netPayable: "₹62,000", installment1: "₹25,000", installment2: "₹25,000", installment3: "₹12,000" },
  { percentage: "≥ 92%", feeOff: "₹48,000", netPayable: "₹67,000", installment1: "₹27,000", installment2: "₹27,000", installment3: "₹13,000" },
  { percentage: "≥ 91%", feeOff: "₹43,000", netPayable: "₹72,000", installment1: "₹29,000", installment2: "₹29,000", installment3: "₹14,000" },
  { percentage: "≥ 90%", feeOff: "₹40,000", netPayable: "₹75,000", installment1: "₹30,000", installment2: "₹30,000", installment3: "₹15,000" },
  { percentage: "≥ 88%", feeOff: "₹36,000", netPayable: "₹79,000", installment1: "₹32,000", installment2: "₹32,000", installment3: "₹15,000" },
  { percentage: "≥ 86%", feeOff: "₹32,000", netPayable: "₹83,000", installment1: "₹34,000", installment2: "₹34,000", installment3: "₹15,000" },
  { percentage: "≥ 84%", feeOff: "₹29,000", netPayable: "₹86,000", installment1: "₹35,000", installment2: "₹35,000", installment3: "₹16,000" },
  { percentage: "≥ 82%", feeOff: "₹26,000", netPayable: "₹89,000", installment1: "₹36,000", installment2: "₹36,000", installment3: "₹17,000" },
  { percentage: "≥ 80%", feeOff: "₹23,000", netPayable: "₹92,000", installment1: "₹37,000", installment2: "₹37,000", installment3: "₹18,000" },
  { percentage: "≥ 78%", feeOff: "₹20,000", netPayable: "₹95,000", installment1: "₹38,000", installment2: "₹38,000", installment3: "₹19,000" },
  { percentage: "≥ 76%", feeOff: "₹17,000", netPayable: "₹98,000", installment1: "₹40,000", installment2: "₹38,000", installment3: "₹20,000" },
  { percentage: "≥ 74%", feeOff: "₹14,000", netPayable: "₹1,01,000", installment1: "₹40,000", installment2: "₹40,000", installment3: "₹21,000" },
  { percentage: "≥ 72%", feeOff: "₹11,000", netPayable: "₹1,04,000", installment1: "₹41,000", installment2: "₹41,000", installment3: "₹22,000" },
  { percentage: "≥ 70%", feeOff: "₹8,000", netPayable: "₹1,07,000", installment1: "₹42,000", installment2: "₹42,000", installment3: "₹23,000" },
  { percentage: "≤ 70%", feeOff: "₹0", netPayable: "₹1,15,000", installment1: "₹48,000", installment2: "₹43,000", installment3: "₹24,000" }
];

// Schooling Fee for XI & XII
export const schoolingFees: SchoolingFee[] = [
  { board: "RBSE", fee: "₹10,000" },
  { board: "CBSE", fee: "₹20,000" }
];

// Additional Schooling Charges
export const additionalSchoolingCharges = {
  directCBSEAdmission: "₹10,000 extra (for X/XII)",
  boardChangeToCBSE: "₹1,000 (for XI)"
};

// Hostel Fee
export const hostelFees = {
  monthly: "₹7,000 per month",
  applicableFor: "XI/XII/XIII",
  facilities: ["24x7 Security", "Wi-Fi", "Study Room", "Mess", "Laundry"]
};

// Additional Scholarships (Extra ₹5,000 off)
export const additionalScholarships = [
  "ACI Foundation students joining Target course",
  "Sibling of current ACI student",
  "Sibling of ex-ACI student",
  "Two or more students from same family (each)"
];

// Test Series Fees
export const testSeriesFees: TestSeriesFee[] = [
  { program: "NEET Test Series", online: "₹1,100", offline: "₹3,100" },
  { program: "IIT-JEE Test Series", online: "₹1,100", offline: "₹3,100" }
];

// Important Rules and Terms
export const importantRules = [
  "Only one scholarship can be applied at a time",
  "₹5,000 extra off if full fee paid at admission (for fees above ₹70,000)",
  "CGPA conversion formula: CGPA × 9.5 − 5",
  "Scholarship applies to tuition fee only (not hostel, school, or registration)",
  "Late fee: ₹100 per day after due date",
  "Withdrawal within 20 days: Registration + 15% deduction",
  "Installments available in 3 parts: At admission, after 2 months, after 4 months",
  "Additional ₹5,000 off applied in 3rd installment",
  "Jurisdiction: Bansur only"
];

// Documents Required
export const documentsRequired = [
  "10th & 12th marksheet copy",
  "Transfer Certificate (for XI/XII)",
  "Aadhaar of parent & student",
  "2 passport photos"
];
