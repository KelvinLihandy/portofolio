import { BrainCircuit, Briefcase, Database, Download, FolderKanban, Github, Home, Linkedin, Mail, Server, User } from "lucide-react";
import type { IContacts, IExperiences, INavigation, IProjects, ISkills } from "./interface";
import bconnect from "./bconnect_image.png";
import melanoma_detector from "./melanoma-detector_image.png"

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
  {name: 'HTML5', icon: '/icons/html5-original.svg'},
  {name: 'CSS3', icon: '/icons/css3-original.svg'},
  {name: 'JavaScript', icon: '/icons/javascript-original.svg'},
  {name: 'TypeScript', icon: '/icons/typescript-original.svg'},
  {name: 'Python', icon: '/icons/python-original.svg'},
  {name: 'C', icon: '/icons/c-original.svg'},
  {name: 'Java', icon: '/icons/java-original.svg'},
  {name: 'C#', icon: '/icons/csharp-original.svg'},
  {name: 'Dart', icon: '/icons/dart-original.svg'},
  {name: 'React.js', icon: '/icons/react-original.svg'},
  {name: 'Tailwind CSS', icon: '/icons/tailwindcss-original.svg'},
  {name: 'Node.js', icon: '/icons/nodejs-original.svg'},
  {name: 'Express.js', icon: '/icons/express-original.svg'},
  {name: 'Framer Motion', icon: '/icons/framermotion-original.svg'},
  {name: 'Flutter', icon: '/icons/flutter-original.svg'},
  {name: '.NET', icon: '/icons/dotnetcore-original.svg'},
  {name: 'Laravel', icon: '/icons/laravel-original.svg'},
  {name: 'MongoDB', icon: '/icons/mongodb-original.svg'},
  {name: 'SQL', icon: '/icons/mysql-original.svg'},
  {name: 'Azure', icon: '/icons/azure-original.svg'},
  {name: 'Git', icon: '/icons/git-original.svg'},
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
];

export const projectItems: IProjects[] =[
  {
    title: "B-Connect",
    description: "B-Connect is a platform created as a completion requirement for [Software Engineering] course, and designed to be a freelancer platform designed to serve Bina Nusantara University Students for their career growth.",
    image: bconnect,
    deployment: "https://b-connect-nu.vercel.app",
    repository: "https://github.com/KelvinLihandy/b-connect",
    stack: {
      "React.js": "/icons/react-original.svg",
      "Tailwind CSS": "/icons/tailwindcss-original.svg",
      "Node.js": "/icons/nodejs-original.svg",
      "Express.js": "/icons/express-original.svg",
      "Framer Motion": "/icons/framermotion-original.svg",
      "Socket.io": "/icons/socketio-original.svg",
      "MongoDB": "/icons/mongodb-original.svg",
      "Google Drive": "/icons/google-drive.svg",
      "Azure": "/icons/azure-original.svg",
    }
  },
  {
    title: "MelanomaDetector",
    description: "MelanomaDetector is a deep learning AI that can distinguish images of skins affected and not affected by melanoma using CNN with result confidence percentage.",
    image: melanoma_detector,
    stack: {
      "Python": "/icons/python-original.svg",
      "Jupyter Notebook": "/icons/jupyter-original.svg",
      "TensorFlow": "/icons/tensorflow-original.svg",
      "Keras": "/icons/keras-original.svg",
      "OpenCV": "/icons/opencv-original.svg",
      "Matplotlib": "/icons/matplotlib-original.svg",
      "Numpy": "/icons/numpy-original.svg"
    }
  },
];