import React from 'react';
import { Terminal } from 'lucide-react';
import { profileConfig } from '../data/projects';

interface FooterProps {
  isDark?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark = true }) => {
  return (
    <footer className={`mt-20 border-t py-10 text-xs transition-colors duration-200 ${
      isDark ? 'border-neutral-800/60 text-neutral-400' : 'border-neutral-200 text-neutral-500'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5" />
          <span>&copy; {new Date().getFullYear()} {profileConfig.name}. All projects handcrafted with care.</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profileConfig.socials.email}
            className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-neutral-900'}`}
          >
            Get in touch
          </a>
          <span>&bull;</span>
          <span className="font-mono text-[11px]">eliaswillnat.com</span>
        </div>

      </div>
    </footer>
  );
};
