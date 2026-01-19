export interface Result {
  id: string;
  name: string;
  exam: "NEET" | "JEE";
  year: number;
  college: string;
  city: string;
  state: string;
  batchType: "Classroom" | "DLP";
  image?: string;
  rank?: string;
  score?: string;
}

export const results2025: Result[] = [
  // NEET 2025
  {
    id: "neet-2025-1",
    name: "Bhavesh Yadav",
    exam: "NEET",
    year: 2025,
    college: "SMS Medical College",
    city: "Jaipur",
    state: "Rajasthan",
    batchType: "Classroom",
    image: "/images/results/bhavesh-yadav.jpg"
  },
  {
    id: "neet-2025-2",
    name: "Abhimesh Singh Meena",
    exam: "NEET",
    year: 2025,
    college: "Govt. Medical College, Etawah",
    city: "Etawah",
    state: "Uttar Pradesh",
    batchType: "Classroom",
    image: "/images/results/abhimesh-meena.jpg"
  },
  {
    id: "neet-2025-3",
    name: "Sachin Yadav",
    exam: "NEET",
    year: 2025,
    college: "Govt. Medical College, Siddharthnagar",
    city: "Siddharthnagar",
    state: "Uttar Pradesh",
    batchType: "DLP",
    image: "/images/results/sachin-yadav.jpg"
  },
  // JEE 2025
  {
    id: "jee-2025-1",
    name: "Rahul Verma",
    exam: "JEE",
    year: 2025,
    college: "IIIT Bhagalpur",
    city: "Bhagalpur",
    state: "Bihar",
    batchType: "Classroom",
    image: "/images/results/rahul-verma.jpg"
  },
  {
    id: "jee-2025-2",
    name: "Shubham Jangid",
    exam: "JEE",
    year: 2025,
    college: "GGV Bilaspur",
    city: "Bilaspur",
    state: "Chhattisgarh",
    batchType: "Classroom",
    image: "/images/results/shubham-jangid.jpg"
  }
];

export const results2024: Result[] = [
  // NEET 2024
  {
    id: "neet-2024-1",
    name: "Shivraj Agarwal",
    exam: "NEET",
    year: 2024,
    college: "Govt. Medical College, Churu",
    city: "Churu",
    state: "Rajasthan",
    batchType: "Classroom",
    image: "/images/results/shivraj-agarwal.jpg"
  },
  {
    id: "neet-2024-2",
    name: "Priya Yadav",
    exam: "NEET",
    year: 2024,
    college: "Govt. Medical College, Hanumangarh",
    city: "Hanumangarh",
    state: "Rajasthan",
    batchType: "Classroom",
    image: "/images/results/priya-yadav.jpg"
  },
  {
    id: "neet-2024-3",
    name: "Vidhya Saini",
    exam: "NEET",
    year: 2024,
    college: "Govt. College, Jamnagar",
    city: "Jamnagar",
    state: "Gujarat",
    batchType: "Classroom",
    image: "/images/results/vidhya-saini.jpg"
  },
  // JEE 2024
  {
    id: "jee-2024-1",
    name: "Aman Yadav",
    exam: "JEE",
    year: 2024,
    college: "IIT Kanpur",
    city: "Kanpur",
    state: "Uttar Pradesh",
    batchType: "Classroom",
    image: "/images/results/aman-yadav.jpg"
  },
  {
    id: "jee-2024-2",
    name: "Piyush Jangid",
    exam: "JEE",
    year: 2024,
    college: "IIIT Sonipat",
    city: "Sonipat",
    state: "Haryana",
    batchType: "Classroom",
    image: "/images/results/piyush-jangid.jpg"
  },
  {
    id: "jee-2024-3",
    name: "Aditya Yadav",
    exam: "JEE",
    year: 2024,
    college: "IIIT Nagpur",
    city: "Nagpur",
    state: "Maharashtra",
    batchType: "Classroom",
    image: "/images/results/aditya-yadav.jpg"
  }
];

export const allResults = [...results2025, ...results2024];

export const resultStats = {
  neet2025Qualified: 45,
  jee2025Qualified: 32,
  neet2024Qualified: 42,
  jee2024Qualified: 28,
  topRankNEET: "AIR 245 (2025)",
  topRankJEE: "AIR 789 (2025)"
};
