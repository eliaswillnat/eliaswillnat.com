import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  isDark?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isDark = true }) => {
  const getStatusBadge = (status?: Project['status']) => {
    switch (status) {
      case 'Live':
        return (
          <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full border ${
            isDark 
              ? 'text-emerald-400 bg-emerald-950/60 border-emerald-800/50' 
              : 'text-emerald-700 bg-emerald-50 border-emerald-200'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Live
          </span>
        );
      case 'New':
        return (
          <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full border ${
            isDark 
              ? 'text-amber-400 bg-amber-950/60 border-amber-800/50' 
              : 'text-amber-700 bg-amber-50 border-amber-200'
          }`}>
            <Sparkles className="w-2.5 h-2.5" />
            New
          </span>
        );
      case 'Beta':
        return (
          <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full border ${
            isDark 
              ? 'text-sky-400 bg-sky-950/60 border-sky-800/50' 
              : 'text-sky-700 bg-sky-50 border-sky-200'
          }`}>
            Beta
          </span>
        );
      case 'Open Source':
        return (
          <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full border ${
            isDark 
              ? 'text-purple-400 bg-purple-950/60 border-purple-800/50' 
              : 'text-purple-700 bg-purple-50 border-purple-200'
          }`}>
            OSS
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col justify-between p-5 rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 focus:outline-none cursor-pointer ${
        isDark 
          ? 'bg-neutral-900/40 hover:bg-neutral-900/80 border-neutral-800/70 hover:border-neutral-700/90 hover:shadow-black/40 focus:ring-2 focus:ring-neutral-400' 
          : 'bg-white hover:bg-neutral-50/90 border-neutral-200/80 hover:border-neutral-300 hover:shadow-neutral-200/60 focus:ring-2 focus:ring-neutral-600'
      }`}
      title={`Open ${project.title} (${project.url})`}
    >
      <div>
        {/* Top bar in card: Icon + Status + Arrow */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {/* App Icon Container */}
            <div className={`w-11 h-11 rounded-xl border flex items-center justify-center text-xl shadow-inner group-hover:scale-105 transition-transform ${
              isDark 
                ? 'bg-neutral-800/80 border-neutral-700/50' 
                : 'bg-neutral-100 border-neutral-200/80'
            }`}>
              {project.icon}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className={`text-base font-semibold tracking-tight transition-colors ${
                  isDark 
                    ? 'text-neutral-100 group-hover:text-white' 
                    : 'text-neutral-900 group-hover:text-neutral-950'
                }`}>
                  {project.title}
                </h3>
              </div>
              <span className={`text-[11px] font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                {project.category} {project.year && `• ${project.year}`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {getStatusBadge(project.status)}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isDark 
                ? 'bg-neutral-800/40 group-hover:bg-neutral-700/80 text-neutral-400 group-hover:text-white' 
                : 'bg-neutral-100 group-hover:bg-neutral-200 text-neutral-500 group-hover:text-neutral-900'
            }`}>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Project Description */}
        <p className={`text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4 ${
          isDark ? 'text-neutral-300' : 'text-neutral-600'
        }`}>
          {project.description}
        </p>
      </div>

      {/* Card Footer: Tech tags + GitHub link */}
      <div className={`pt-3 border-t flex items-center justify-between gap-2 mt-auto ${
        isDark ? 'border-neutral-800/60' : 'border-neutral-100'
      }`}>
        <div className="flex items-center gap-1.5 flex-wrap">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 text-[10px] font-mono font-medium rounded-md border ${
                isDark 
                  ? 'bg-neutral-800/80 text-neutral-400 border-neutral-700/40' 
                  : 'bg-neutral-100 text-neutral-600 border-neutral-200'
              }`}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className={`text-[10px] font-mono ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {project.githubUrl && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
            }}
            className={`p-1.5 rounded-md transition-colors ${
              isDark 
                ? 'text-neutral-400 hover:text-white hover:bg-neutral-800' 
                : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
            title="View Source on GitHub"
            aria-label={`View source of ${project.title}`}
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </a>
  );
};
