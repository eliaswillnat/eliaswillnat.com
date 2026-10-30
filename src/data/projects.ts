import whenextCover from '../assets/whenext-cover.webp';
import worldmeshCover from '../assets/worldmesh-cover.webp';

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'Web Apps';
  tags: string[];
  coverImage: string;
  status?: 'Live' | 'Beta' | 'New';
  featured?: boolean;
  year?: string;
}

export interface ProfileConfig {
  name: string;
  role: string;
  tagline: string;
  status: {
    text: string;
    available: boolean;
  };
  socials: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const profileConfig: ProfileConfig = {
  name: "Elias Willnat",
  role: "Builder & Software Engineer",
  tagline: "A curated collection of web apps and digital products I've built.",
  status: {
    text: "Building & shipping",
    available: true
  },
  socials: {
    github: "https://github.com/eliaswillnat",
    twitter: "https://x.com/eliaswillnat",
    linkedin: "https://linkedin.com/in/eliaswillnat"
  }
};

export const categories = [
  'All',
  'Web Apps',
] as const;

export type Category = typeof categories[number];

export const projects: Project[] = [
  {
    id: "whenext",
    title: "Whenext",
    description:
      "Tracks emerging developments across technology, health, space and mega-projects and forecasts when they're likely to happen, backed by sources and transparent reasoning.",
    url: "https://whenext.com",
    category: "Web Apps",
    tags: ["Forecasting", "Research"],
    coverImage: whenextCover,
    status: "Live",
    featured: true,
    year: "2026"
  },
  {
    id: "worldmesh",
    title: "WorldMesh",
    description:
      "A hub where you can add 3D web worlds and walk between them.",
    url: "https://worldmesh.net",
    category: "Web Apps",
    tags: ["3D", "Web"],
    coverImage: worldmeshCover,
    status: "Live",
    featured: true,
    year: "2026"
  }
];
