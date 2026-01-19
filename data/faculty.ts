export interface FacultyMember {
  id: string;
  name: string;
  subject: string;
  from: string;
  experience: string;
  education: string;
  exInstitute?: string;
  image?: string;
}

export const facultyData: FacultyMember[] = [
  {
    id: "arvind-rao",
    name: "Mr. Arvind Rao",
    subject: "Physics",
    from: "Haryana",
    experience: "12 Years",
    education: "M.Tech (Mechanical Engineering), IIT Guwahati",
    exInstitute: "Akash Institute",
    image: "/images/faculty/arvind-rao.jpg"
  },
  {
    id: "deepak-nagwani",
    name: "Mr. Deepak Nagwani",
    subject: "Physics",
    from: "Kota",
    experience: "9 Years",
    education: "B.Tech (Electrical Engineering), RTU Kota",
    exInstitute: "ALLEN Career Institute",
    image: "/images/faculty/deepak-nagwani.jpg"
  },
  {
    id: "naval-yadav",
    name: "Mr. Naval Yadav",
    subject: "Chemistry",
    from: "Jaipur",
    experience: "7 Years",
    education: "M.Sc (Chemistry), University of Rajasthan",
    exInstitute: "Career Point, Kota",
    image: "/images/faculty/naval-yadav.jpg"
  },
  {
    id: "jitender-singh",
    name: "Mr. Jitender Singh",
    subject: "Chemistry",
    from: "Sikar",
    experience: "4 Years",
    education: "M.Sc (Chemistry), CURAJ | B.Sc (Hons.), Delhi University",
    exInstitute: "PCP, Sikar",
    image: "/images/faculty/jitender-singh.jpg"
  },
  {
    id: "monika-agarwal",
    name: "Ms. Monika Agarwal",
    subject: "Mathematics",
    from: "Haryana",
    experience: "3 Years",
    education: "M.Sc (Mathematics), NIT Warangal",
    exInstitute: "Bansal Classes",
    image: "/images/faculty/monika-agarwal.jpg"
  },
  {
    id: "madhav-dagur",
    name: "Mr. Madhav Dagur",
    subject: "Botany",
    from: "Hindaun City",
    experience: "3 Years",
    education: "M.Sc, University of Rajasthan | B.Sc",
    exInstitute: "Akash Institute",
    image: "/images/faculty/madhav-dagur.jpg"
  },
  {
    id: "arpit-verma",
    name: "Mr. Arpit Verma",
    subject: "Zoology",
    from: "Bundi",
    experience: "3 Years",
    education: "M.Sc (Zoology), CUPB | B.Sc (Hons.)",
    exInstitute: "Akash Institute",
    image: "/images/faculty/arpit-verma.jpg"
  }
];

export const directorInfo = {
  name: "Mr. Arvind Rao",
  designation: "Director & Physics Faculty",
  subject: "Physics",
  from: "Haryana",
  education: "M.Tech [Mechanical Engineering], IIT Guwahati",
  experience: "12 Years in NEET/JEE Coaching",
  exInstitute: "Akash Institute",
  dob: "12-10-1987",
  doa: "08-03-2019",
  message: "At ACI, we believe in nurturing young minds and guiding them towards their dreams. Our mission is to provide quality education with personalized attention to each student. We focus on building strong fundamentals and developing problem-solving skills that help students excel in NEET & JEE examinations.",
  image: "/images/director.jpg"
};
