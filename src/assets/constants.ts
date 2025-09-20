import { BrainCircuit, Briefcase, Database, Download, FolderKanban, Github, Home, Linkedin, Mail, Server, User } from "lucide-react";
import type { IContacts, INavigation } from "./interface";

export const menuItems: INavigation[] = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Experience', id: 'experience', icon: Briefcase },
    { name: 'Projects', id: 'projects', icon: FolderKanban },
    { name: 'Contact', id: 'contact', icon: Mail }
];

export const contactItems: IContacts[] = [
    { name: "resume", link: "", icon: Download },
    { name: "github", link: "https://github.com/KelvinLihandy", icon: Github },
    { name: "linkedin", link: "https://www.linkedin.com/in/kelvin-lihandy-ab65a4292", icon: Linkedin },
    { name: "email", link: "mailto:kelvinlihandy2005@hotmail.com", icon: Mail },
]

export const skillItems = [
  { name: "Backend Development", icon: Server },
  { name: "Database", icon: Database },
  { name: "Artificial Intelligence", icon: BrainCircuit },
];