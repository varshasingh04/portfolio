import {
  SiSpring,
  SiSpringboot,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiLinux,
  SiGithub,
  SiExpo,
  SiHibernate,
  SiSqlite,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaJava, FaDatabase, FaLinkedin } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import type { IconType } from "react-icons";

export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "projects"
  | "education"
  | "certifications"
  | "resume"
  | "contact";

export const SECTIONS: { id: SectionId; label: string }[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certs" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const PROFILE = {
  firstName: "Varsha",
  lastName: "Chouhan",
  fullName: "Varsha Chouhan",
  initials: "VC",
  role: "Java Backend Developer",
  tagline: "Java Backend · Full Stack (MERN) Developer",
  location: "Gurugram, Haryana, India",
  email: "varshachouhan0410@gmail.com",
  phone: "",
  github: "https://github.com/varshasingh04",
  githubHandle: "varshasingh04",
  linkedin: "https://www.linkedin.com/in/varsha-chouhan-4290342a7/",
  linkedinHandle: "varsha-chouhan",
  resumePath: "/resume.pdf",
  avatarAi: "/images/avatar-ai.png",
  avatarReal: "/images/avatar-real.png",
};

export const ABOUT = {
  bio: "Final-year B.Tech Computer Science student with hands-on internship experience building production-grade payment and webhook systems in Java 17 and Spring Boot 3 at Paladin Educators. Comfortable across the backend and frontend, with a focus on clean, testable code.",
  subBio:
    "Independently shipped two full-stack projects spanning MERN, React Native, and GPT-4o integrations — Vamra (submitted to Google Play Store) and PawCare (live).",
  stats: [
    { label: "Production Projects", value: "2" },
    { label: "Play Store App", value: "1" },
    { label: "LeetCode DSA", value: "100+" },
  ],
};

export type SkillCategoryId =
  | "languages"
  | "backend"
  | "frontend"
  | "databases"
  | "cloud";

export type Skill = {
  name: string;
  icon?: IconType;
  color?: string;
};

export type SkillCategory = {
  id: SkillCategoryId;
  label: string;
  blurb: string;
  skills: Skill[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    blurb: "What I write in.",
    skills: [
      { name: "Java (Core & Advanced)", icon: FaJava, color: "#F89820" },
      { name: "Collections Framework", icon: FaJava, color: "#F89820" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "SQL", icon: FaDatabase, color: "#22D3EE" },
      { name: "HTML5", color: "#E34F26" },
      { name: "CSS3", color: "#1572B6" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    blurb: "Spring Boot, Node, clean architecture.",
    skills: [
      { name: "Spring Boot 3", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Spring Data JPA", icon: SiSpring, color: "#6DB33F" },
      { name: "Spring Security", icon: SiSpring, color: "#6DB33F" },
      { name: "Hibernate", icon: SiHibernate, color: "#BCAE79" },
      { name: "REST APIs" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#D63AFF" },
      { name: "Microservices" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "SOLID Principles" },
      { name: "Design Patterns" },
      { name: "Multithreading" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend & Mobile",
    blurb: "React on web and mobile.",
    skills: [
      { name: "React.js 18", icon: SiReact, color: "#61DAFB" },
      { name: "React Native (Expo)", icon: TbBrandReactNative, color: "#61DAFB" },
      { name: "Expo", icon: SiExpo, color: "#FFFFFF" },
      { name: "Expo Notifications", icon: SiExpo, color: "#FFFFFF" },
      { name: "Redux Toolkit" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    blurb: "Relational, document, embedded.",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Mongoose ODM" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Tools",
    blurb: "Build, test, ship, document.",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Maven" },
      { name: "Postman" },
      { name: "Swagger / OpenAPI" },
      { name: "JUnit 5" },
      { name: "Mockito" },
      { name: "JaCoCo" },
      { name: "Jira" },
      { name: "IntelliJ IDEA" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Vercel" },
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  period: string;
  description: string;
  bullets: string[];
  stack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  badge?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "vamra",
    name: "Vamra",
    tagline: "AI Business Card Scanner",
    period: "Feb 2026 - Mar 2026",
    description:
      "Team Project. Android app that scans business cards via camera and uses GPT-4o Vision to extract structured contacts in under 5 seconds. Submitted to Google Play Store.",
    bullets: [
      "Built an Android app that scans business cards via camera and uses GPT-4o Vision to extract name, phone, email, company, and role into structured contacts in under 5 seconds.",
      "Implemented a URL-based contact enrichment feature that fetches a company website, summarizes the business, and auto-tags the contact with relevant keywords for faster search.",
      "Designed offline-first local storage with SQLite and natural-language search so users can find contacts by phrases like 'marketing folks from April' without a backend dependency.",
      "Added a push notification reminder system using Expo Notifications for follow-up nudges; submitted to Google Play Store — APK available on request for demo.",
    ],
    stack: [
      "React Native",
      "Expo",
      "GPT-4o Vision",
      "SQLite",
      "Expo Notifications",
    ],
    image: "/images/projects/vamra.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    badge: "Team Project · Play Store submitted",
  },
  {
    id: "pawcare",
    name: "PawCare",
    tagline: "Pet Community & Services Platform",
    period: "Apr 2024 - Jun 2024",
    description:
      "Full-stack MERN platform with user profiles, blog publishing, and a local pet services directory. AI-assisted blog editor (GPT-4o), role-based access control, and geolocation-indexed listings.",
    bullets: [
      "Built a full-stack pet community platform with user profiles, blog publishing, and a local pet services directory using the MERN stack.",
      "Developed an AI-assisted blog editor using GPT-4o that generates structured drafts from bullet notes, helping users publish content significantly faster.",
      "Implemented role-based access control for service providers vs. regular users, with a moderation queue for new service listings to maintain listing quality.",
      "Structured the MongoDB schema with geolocation indexing to support location-based pet service queries — no third-party maps API required.",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GPT-4o",
      "JWT",
      "Tailwind",
    ],
    image: "/images/projects/pawcare.png",
    liveUrl: "https://client-mu-orcin.vercel.app/",
    githubUrl: "#",
  },
];

export type EducationEntry = {
  degree: string;
  field: string;
  school: string;
  location: string;
  period: string;
  status: string;
  coursework: string[];
};

export const EDUCATION: EducationEntry[] = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    school: "MATS University",
    location: "Raipur, Chhattisgarh, India",
    period: "2022 - 2026",
    status: "Final-year · Expected June 2026 · CGPA 7.0 · Open to fresher & internship roles",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Object-Oriented Programming",
    ],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  detail: string;
  highlight: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Java Programming Masterclass",
    issuer: "Udemy",
    detail: "100+ hours covering Core Java, OOP, Collections, Concurrency, and JDBC.",
    highlight: "100+ hrs",
  },
  {
    title: "The Complete MERN Stack Developer",
    issuer: "Udemy",
    detail:
      "80+ hours covering MongoDB, Express.js, React.js, and Node.js with REST API design.",
    highlight: "80+ hrs",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "LeetCode",
    detail:
      "Solved 100+ DSA problems across Arrays, Trees, Dynamic Programming, and Graphs.",
    highlight: "100+ solved",
  },
];

export type Social = {
  label: string;
  href: string;
  icon: IconType;
  display: string;
};

export const SOCIALS: Social[] = [
  {
    label: "GitHub",
    href: PROFILE.github,
    icon: SiGithub,
    display: PROFILE.githubHandle,
  },
  {
    label: "LinkedIn",
    href: PROFILE.linkedin,
    icon: FaLinkedin,
    display: PROFILE.linkedinHandle,
  },
  {
    label: "Email",
    href: `mailto:${PROFILE.email}`,
    icon: HiOutlineMail,
    display: PROFILE.email,
  },
];

export const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
};

export const SHAPE_BY_SECTION: Record<SectionId, string> = {
  hero: "icosahedron",
  about: "torus",
  skills: "ring",
  projects: "cubes",
  education: "sphere",
  certifications: "diamond",
  resume: "sheet",
  contact: "orb",
};
