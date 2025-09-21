import type { LucideIcon } from "lucide-react";

export interface INavClick {
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
  targetId: string;
}

export interface INavigation {
  name: string;
  id: string;
  icon: LucideIcon;
}

export interface IContacts {
  name: string;
  link: string;
  icon: LucideIcon;
}

export interface ISkills{
  name: string;
  icon: string;
}