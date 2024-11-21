import p1 from "../assets/p1.jpg";
import pp2 from "../assets/pp2.jpg";
import p3 from "../assets/p3.png";
import { FaLink } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BadgeCheck } from "lucide-react";
export const navItems = [
  { label: "About", href: "#" },
  { label: "Experiance", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Contact", href: "#" },
];
export const heroSecInfo = [
  {
    icon: <FaLinkedin size={32} />,
    link: "#",
  },
  {
    icon: <FaSquareGithub size={32} />,
    link: "https://github.com/FartunAbdisalam",
  },
];
const projects = [
  {
    img: p1,
    title: "kanban Board",
    gitBtn: "GitHub",
    gitLink: "https://github.com/FartunAbdisalam/Drag-and-Drop",
    demoBtn: "Live Demo",
    demoLink: "https://fartunabdisalam.github.io/Drag-and-Drop/",
  },
  {
    img: pp2,
    title: "React Web Application",
    gitBtn: "GitHub",
    gitLink: "https://github.com/FartunAbdisalam/devops",
    demoBtn: "Live Demo",
    demoLink: "https://kismayotechfirm.netlify.app/",
  },
  {
    img: p3,
    title: "Full-Stack E-commerce",
    gitBtn: "GitHub",
    gitLink: "#",
    demoBtn: "Live Demo",
    demoLink: "#",
  },
];

export const contactsInfo = [
  {
    icon: <FiMail size={28} />,
    info: "fartunabdisalam10@gmail.com",
  },
  {
    icon: <FaLink size={28} />,
    info: "Linkedln",
  },
];

export const ExperienceList = [
  [
    {
      tag: <BadgeCheck size={28} />,
      sub: "HTML",
      rate: "Experienced",
    },
    {
      tag: <BadgeCheck size={28} />,
      sub: "CSS",
      rate: "Experienced",
    },
    {
      tag: <BadgeCheck size={28} />,
      sub: "BootStrap",
      rate: "Experienced",
    },
    {
      tag: <BadgeCheck size={28} />,
      sub: "Tailwind CSS",
      rate: "Experienced",
    },
    {
      tag: <BadgeCheck size={28} />,
      sub: "JavaScript",
      rate: "Experienced",
    },
    {
      tag: <BadgeCheck size={28} />,
      sub: "React Js",
      rate: "Experienced",
    },
    {
      tag: <BadgeCheck size={28} />,
      sub: "TypeScript",
      rate: "Intermediate",
    },
    {
      tag: <BadgeCheck size={28} />,
      sub: "Vite",
      rate: "Basic",
    },
  ],
  [
    {
      tag: <BadgeCheck size={28} />,
      sub: "Node Js",
      rate: "Experienced",
    },
    {
      tag: <BadgeCheck size={28} />,
      sub: "Express Js",
      rate: "Experienced",
    },
    {
      tag: <BadgeCheck size={28} />,
      sub: "MongoDB",
      rate: "Experienced",
    },
    {
      tag: <BadgeCheck size={28} />,
      sub: "MySQL",
      rate: "Experienced",
    },
    {
      tag: <BadgeCheck size={28} />,
      sub: "Git",
      rate: "Experienced",
    },
    {
      tag: <BadgeCheck size={28} />,
      sub: "GitHub",
      rate: "Experienced",
    },
  ],
];

export default projects;
