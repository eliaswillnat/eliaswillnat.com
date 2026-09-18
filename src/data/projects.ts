export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'AI & Tools' | 'Web Apps' | 'Productivity' | 'Developer Tools' | 'Experiments';
  tags: string[];
  icon: string; // Emoji, icon name, or image URL
  status?: 'Live' | 'Beta' | 'New' | 'Open Source';
  featured?: boolean;
  githubUrl?: string;
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
    email?: string;
  };
}

export const profileConfig: ProfileConfig = {
  name: "Elias Willnat",
  role: "Builder & Software Engineer",
  tagline: "A curated collection of web apps, developer tools, and digital experiments I've built.",
  status: {
    text: "Building & shipping new apps",
    available: true
  },
  socials: {
    github: "https://github.com/eliaswillnat",
    twitter: "https://x.com/eliaswillnat",
    linkedin: "https://linkedin.com/in/eliaswillnat",
    email: "mailto:hello@eliaswillnat.com"
  }
};

export const categories = [
  'All',
  'AI & Tools',
  'Web Apps',
  'Productivity',
  'Developer Tools',
  'Experiments'
] as const;

export type Category = typeof categories[number];

export const projects: Project[] = [
  {
    id: "omni-ai-studio",
    title: "OmniStudio",
    description: "Multimodal AI playground with real-time streaming audio, vision analysis, and smart agent workflows.",
    url: "https://omni.eliaswillnat.com",
    category: "AI & Tools",
    tags: ["React", "Gemini API", "Tailwind", "WebSockets"],
    icon: "🧠",
    status: "Live",
    featured: true,
    githubUrl: "https://github.com/eliaswillnat/omnistudio",
    year: "2026"
  },
  {
    id: "focus-pulse",
    title: "FocusPulse",
    description: "Minimalist flow-state productivity dashboard with ambient soundscapes, task timelines, and deep focus timers.",
    url: "https://pulse.eliaswillnat.com",
    category: "Productivity",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    icon: "⚡",
    status: "New",
    featured: true,
    year: "2026"
  },
  {
    id: "dev-craft-box",
    title: "DevCraft Toolkit",
    description: "Suite of instant browser utilities for developers — JSON schemas, regex testers, color palettes, and JWT decoders.",
    url: "https://devcraft.eliaswillnat.com",
    category: "Developer Tools",
    tags: ["TypeScript", "Vite", "Wasm"],
    icon: "🛠️",
    status: "Live",
    githubUrl: "https://github.com/eliaswillnat/devcraft",
    year: "2025"
  },
  {
    id: "canvas-gen",
    title: "PromptCanvas",
    description: "Generative infinite canvas interface to brainstorm, chain prompts, and visualize creative concepts seamlessly.",
    url: "https://canvas.eliaswillnat.com",
    category: "AI & Tools",
    tags: ["React Flow", "Tailwind", "Generative AI"],
    icon: "🎨",
    status: "Beta",
    year: "2026"
  },
  {
    id: "metric-lens",
    title: "MetricLens",
    description: "Lightweight privacy-friendly analytics and uptime dashboard for indie makers and solo founders.",
    url: "https://metriclens.eliaswillnat.com",
    category: "Web Apps",
    tags: ["React", "FastAPI", "PostgreSQL"],
    icon: "📈",
    status: "Live",
    year: "2025"
  },
  {
    id: "ambient-orbit",
    title: "Orbit Audio",
    description: "Generative spatial synthesizer generating tranquil soundscapes tailored for programming and study sessions.",
    url: "https://orbit.eliaswillnat.com",
    category: "Experiments",
    tags: ["Web Audio API", "Three.js", "Canvas"],
    icon: "🌌",
    status: "Live",
    githubUrl: "https://github.com/eliaswillnat/orbit-audio",
    year: "2025"
  }
];
