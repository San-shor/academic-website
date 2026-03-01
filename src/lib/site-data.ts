export type NavigationItem = {
  label: string;
  href: string;
};

export type Course = {
  code: string;
  title: string;
  level: "Undergraduate" | "Graduate";
  duration: string;
  description: string;
  color: string; // tailwind gradient from-* to-*
};

export type FacultyMember = {
  name: string;
  title: string;
  department: string;
  researchFocus: string;
  initials: string;
  color: string;
};

export type NewsItem = {
  title: string;
  date: string;
  description: string;
  tag: string;
};

export type ResearchArea = {
  title: string;
  summary: string;
  labs: string[];
  icon: string;
  gradient: string;
};

/* ── Navigation ─────────────────────────────── */
export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Faculty", href: "/faculty" },
  { label: "Admissions", href: "/admissions" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

/* ── Stats ──────────────────────────────────── */
export const featuredStats = [
  { label: "Students Enrolled", value: "14,500+", icon: "🎓" },
  { label: "Academic Programs", value: "85", icon: "📚" },
  { label: "Faculty Members", value: "620", icon: "👩‍🏫" },
  { label: "Research Grants", value: "$42M", icon: "🔬" },
];

/* ── Courses ────────────────────────────────── */
export const courses: Course[] = [
  {
    code: "CSE-101",
    title: "Foundations of Computer Science",
    level: "Undergraduate",
    duration: "16 weeks",
    description:
      "Explore algorithms, data structures, and computational thinking through hands-on projects.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    code: "BUS-220",
    title: "Organizational Leadership",
    level: "Undergraduate",
    duration: "16 weeks",
    description:
      "Develop leadership skills through case studies, team dynamics, and strategic management.",
    color: "from-amber-500 to-orange-400",
  },
  {
    code: "BIO-510",
    title: "Applied Biotechnology",
    level: "Graduate",
    duration: "12 weeks",
    description:
      "Advance your knowledge in genetic engineering, bioinformatics, and clinical biotech.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    code: "ENG-605",
    title: "Digital Humanities Research",
    level: "Graduate",
    duration: "12 weeks",
    description:
      "Combine technology with humanities to analyze culture, language, and digital media.",
    color: "from-purple-500 to-pink-400",
  },
  {
    code: "PHY-310",
    title: "Quantum Mechanics I",
    level: "Undergraduate",
    duration: "16 weeks",
    description:
      "Dive into wave-particle duality, Schrödinger's equation, and quantum states.",
    color: "from-indigo-500 to-violet-400",
  },
  {
    code: "MBA-720",
    title: "Global Finance & Strategy",
    level: "Graduate",
    duration: "12 weeks",
    description:
      "Master international financial markets, risk management, and corporate strategy.",
    color: "from-rose-500 to-red-400",
  },
];

/* ── Faculty ────────────────────────────────── */
export const faculty: FacultyMember[] = [
  {
    name: "Dr. Ayesha Rahman",
    title: "Professor of Computer Science",
    department: "School of Computing",
    researchFocus: "Human-centered AI and educational technology",
    initials: "AR",
    color: "from-blue-600 to-indigo-500",
  },
  {
    name: "Dr. Daniel Chen",
    title: "Associate Professor",
    department: "School of Business",
    researchFocus: "Sustainable entrepreneurship and social impact",
    initials: "DC",
    color: "from-amber-500 to-orange-400",
  },
  {
    name: "Dr. Miriam Kone",
    title: "Professor of Life Sciences",
    department: "Faculty of Science",
    researchFocus: "Precision medicine and molecular diagnostics",
    initials: "MK",
    color: "from-emerald-500 to-teal-400",
  },
  {
    name: "Dr. James Osei",
    title: "Dean of Engineering",
    department: "Faculty of Engineering",
    researchFocus: "Renewable energy systems and smart grids",
    initials: "JO",
    color: "from-purple-600 to-pink-500",
  },
  {
    name: "Dr. Sofia Morales",
    title: "Assistant Professor",
    department: "School of Humanities",
    researchFocus: "Digital culture, media theory, and ethics",
    initials: "SM",
    color: "from-rose-500 to-red-400",
  },
  {
    name: "Dr. Liam Patel",
    title: "Research Fellow",
    department: "Institute of Data Science",
    researchFocus: "Statistical learning and healthcare analytics",
    initials: "LP",
    color: "from-cyan-500 to-blue-400",
  },
];

/* ── Announcements ──────────────────────────── */
export const announcements: NewsItem[] = [
  {
    title: "Spring 2026 Admissions Open",
    date: "January 18, 2026",
    description:
      "Applications are now open for undergraduate and graduate programs.",
    tag: "Admissions",
  },
  {
    title: "Global Innovation Challenge Finalists",
    date: "February 5, 2026",
    description:
      "Evergreen teams advanced to the finals with climate-tech prototypes.",
    tag: "Achievement",
  },
  {
    title: "New AI Learning Lab Inaugurated",
    date: "February 22, 2026",
    description:
      "A new interdisciplinary lab launched to support student research.",
    tag: "Campus",
  },
];

/* ── Research ───────────────────────────────── */
export const researchAreas: ResearchArea[] = [
  {
    title: "Artificial Intelligence for Education",
    summary:
      "Improving learning outcomes through adaptive systems, analytics, and assistive technologies.",
    labs: ["Learning Intelligence Lab", "EdTech Studio"],
    icon: "🤖",
    gradient: "from-blue-600 to-indigo-500",
  },
  {
    title: "Sustainable Cities and Climate",
    summary:
      "Developing data-driven solutions for smart mobility, clean energy, and resilient infrastructure.",
    labs: ["Urban Futures Lab", "Climate Systems Center"],
    icon: "🌍",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Biomedical Discovery",
    summary:
      "Combining computational biology with clinical insights to accelerate diagnostics and treatment.",
    labs: ["Genomics Innovation Lab", "Translational Medicine Hub"],
    icon: "🧬",
    gradient: "from-purple-600 to-pink-500",
  },
];
