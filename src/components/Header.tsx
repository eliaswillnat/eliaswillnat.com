import React from 'react';
import { Moon, Sun, Mail } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from './Icons';
import { profileConfig } from '../data/projects';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  projectCount: number;
}

export const Header: React.FC<HeaderProps> = ({ isDark, onToggleTheme, projectCount }) => {
  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-200 ${
      isDark ? 'bg-neutral-950/75 border-neutral-800/80 text-white' : 'bg-white/75 border-neutral-200/80 text-neutral-900'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Top Left: Name & Status */}
        <div className="flex items-center gap-3.5">
          <a 
            href="/" 
            className="group flex flex-col items-start focus:outline-none"
            title="Elias Willnat"
          >
            <div className="flex items-center gap-2">
              <span className={`font-bold text-lg sm:text-xl tracking-tight transition-colors ${
                isDark ? 'text-neutral-100 group-hover:text-amber-400' : 'text-neutral-900 group-hover:text-amber-600'
              }`}>
                {profileConfig.name}
              </span>
              <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium border ${
                isDark 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                  : 'bg-emerald-50 text-emerald-700 border-emerald-200'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="hidden xs:inline">{profileConfig.status.text}</span>
                <span className="xs:hidden">Live</span>
              </span>
            </div>
            <span className={`text-xs font-normal hidden sm:inline ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
              {profileConfig.role} &bull; {projectCount} {projectCount === 1 ? 'App' : 'Apps'}
            </span>
          </a>
        </div>

        {/* Top Right: Socials & Theme Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {profileConfig.socials.github && (
            <a
              href={profileConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'text-neutral-400 hover:text-white hover:bg-neutral-800/60' : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {profileConfig.socials.twitter && (
            <a
              href={profileConfig.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'text-neutral-400 hover:text-white hover:bg-neutral-800/60' : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
              title="X / Twitter"
              aria-label="X"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          )}

          {profileConfig.socials.linkedin && (
            <a
              href={profileConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'text-neutral-400 hover:text-white hover:bg-neutral-800/60' : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}

          {profileConfig.socials.email && (
            <a
              href={profileConfig.socials.email}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'text-neutral-400 hover:text-white hover:bg-neutral-800/60' : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
              title="Contact via Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}

          <div className={`w-px h-5 my-auto mx-1 ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}`}></div>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'text-neutral-400 hover:text-amber-300 hover:bg-neutral-800/60' : 'text-neutral-600 hover:text-amber-600 hover:bg-neutral-100'
            }`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </header>
  );
};
