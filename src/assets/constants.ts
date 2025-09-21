import { BrainCircuit, Briefcase, Database, Download, FolderKanban, Github, Home, Linkedin, Mail, Server, User } from "lucide-react";
import type { IContacts, IExperiences, INavigation, ISkills } from "./interface";

export const menuItems: INavigation[] = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Experience', id: 'experience', icon: Briefcase },
    { name: 'Projects', id: 'projects', icon: FolderKanban },
];

export const contactItems: IContacts[] = [
    { name: "resume", link: "", icon: Download },
    { name: "github", link: "https://github.com/KelvinLihandy", icon: Github },
    { name: "linkedin", link: "https://www.linkedin.com/in/kelvin-lihandy-ab65a4292", icon: Linkedin },
    { name: "email", link: "mailto:kelvinlihandy2005@hotmail.com", icon: Mail },
]

export const topItems = [
  { name: "Backend Development", icon: Server },
  { name: "Database", icon: Database },
  { name: "Artificial Intelligence", icon: BrainCircuit },
];

export const skillItems: ISkills[] = [
  {name: 'HTML5', icon: '../public/icons/html5-original.svg'},
  {name: 'CSS3', icon: '../public/icons/css3-original.svg'},
  {name: 'JavaScript', icon: '../public/icons/javascript-original.svg'},
  {name: 'TypeScript', icon: '../public/icons/typescript-original.svg'},
  {name: 'Python', icon: '../public/icons/python-original.svg'},
  {name: 'C', icon: '../public/icons/c-original.svg'},
  {name: 'Java', icon: '../public/icons/java-original.svg'},
  {name: 'C#', icon: '../public/icons/csharp-original.svg'},
  {name: 'Dart', icon: '../public/icons/dart-original.svg'},
  {name: 'React.js', icon: '../public/icons/react-original.svg'},
  {name: 'Tailwind CSS', icon: '../public/icons/tailwindcss-original.svg'},
  {name: 'Node.js', icon: '../public/icons/nodejs-original.svg'},
  {name: 'Express.js', icon: '../public/icons/express-original.svg'},
  {name: 'Framer Motion', icon: '../public/icons/framermotion-original.svg'},
  {name: 'Flutter', icon: '../public/icons/flutter-original.svg'},
  {name: '.NET', icon: '../public/icons/dotnetcore-original.svg'},
  {name: 'Laravel', icon: '../public/icons/laravel-original.svg'},
  {name: 'MongoDB', icon: '../public/icons/mongodb-original.svg'},
  {name: 'SQL', icon: '../public/icons/mysql-original.svg'},
  {name: 'Azure', icon: '../public/icons/azure-original.svg'},
  {name: 'Git', icon: '../public/icons/git-original.svg'},
];

export const experienceItems: IExperiences[] = [
  {
    position: "Associate Member",
    type: "Part-Time",
    company: "Bina Nusantara IT Division",
    period: "Mar 2025 - Present",
    description: [
      "Developed fullstack web application",
      "Participated in company agile scrum framework"
    ],
  },
]