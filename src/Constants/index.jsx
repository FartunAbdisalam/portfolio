import p1 from "../assets/p1.jpg";
import pp2 from "../assets/pp2.jpg";
import p3 from "../assets/p3.png";
import { Mail, Linkedin } from "lucide-react";
export const navItems = [
  { label: "About", href: "#" },
  { label: "Experiance", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Contact", href: "#" },
];
const projects = [
  {
    img: p1,
    title: "kanban Board",
    gitBtn: "GitHub",
    gitLink: "https://github.com/FartunAbdisalam/Animated",
    demoBtn: "Live Demo",
    demoLink: "https://fartunabdisalam.github.io/Animated/",
  },
  {
    img: pp2,
    title: "React Web Application",
    gitBtn: "GitHub",
    gitLink: "#",
    demoBtn: "Live Demo",
    demoLink: "#",
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
    icon: <Mail />,
    info: "FartunAbdisalam@email.com",
  },
  {
    icon: <Linkedin />,
    info: "Linkedln",
  },
];

export default projects;
