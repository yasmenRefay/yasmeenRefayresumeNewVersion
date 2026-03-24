import type { IconType } from "react-icons";

export type Project = {
  title: string;
  shortDesc: string;
  icon: IconType;
  img?: string;
  technologies: string[];
  details: {
    overview: string;
    techStack: {
      frontend?: string[];
      backend?: string[];
      state?: string[];
      animation?: string[];
      forms?: string[];
      ui?: string[];
      platform?: string[];
      automation?: string[];
      integrations?: string[];
      tools?: string[];
      api?:string[]; 
      versionControl?:string[];
      codeQuality?:string[];
      collaboration?:string[];
      routing?:string[];
    };
    keyFeatures: string[];
    achievements: string[];
  };
  demoLink: string;
  linkRepo?: string;
  hasDemo?: boolean;

};