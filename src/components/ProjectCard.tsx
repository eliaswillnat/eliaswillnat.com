import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  isDark?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isDark = true }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      data-slot="card"
      className={`group relative flex flex-col cursor-pointer touch-manipulation select-none rounded-2xl overflow-hidden outline-none transition-[background-color,opacity] duration-200 ease-out active:opacity-90 after:pointer-events-none after:absolute after:inset-0 after:z-[5] after:rounded-[inherit] after:bg-transparent after:transition-colors after:duration-200 hover:after:bg-black/[0.04] dark:after:mix-blend-screen dark:hover:after:bg-[#2A415C]/[0.08] motion-reduce:after:transition-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        isDark
          ? 'bg-neutral-950 focus-visible:ring-neutral-400 focus-visible:ring-offset-neutral-950'
          : 'bg-white focus-visible:ring-neutral-600 focus-visible:ring-offset-white'
      }`}
      title={`Open ${project.title} (${project.url})`}
    >
      <div className="relative w-full aspect-[3/4]">
        <div
          className={`absolute inset-0 h-full w-full overflow-hidden ${
            isDark ? 'bg-white/5' : 'bg-neutral-100'
          }`}
        >
          <img
            src={project.coverImage}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 z-[2] h-full w-full object-cover object-top opacity-100 transition-opacity duration-300 ease-out"
          />
        </div>

        {/* Subtle gradient border — Whenext gallery style */}
        <div
          className="pointer-events-none absolute inset-0 z-[5] rounded-2xl p-px"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(to bottom, var(--card-border-tone, #94a3b8) 0%, transparent 50%, var(--card-border-tone, #94a3b8) 100%)',
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box exclude, linear-gradient(#fff 0 0)',
            mask: 'linear-gradient(#fff 0 0) content-box exclude, linear-gradient(#fff 0 0)',
            opacity: isDark ? 0.22 : 0.2,
          }}
        />

        {/* Bottom typography overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 z-[4] flex flex-col gap-0.5 bg-gradient-to-t px-4 pb-4 pt-16 ${
            isDark
              ? 'from-neutral-950 via-neutral-950/75 to-transparent'
              : 'from-white via-white/75 to-transparent'
          }`}
        >
          <div className="flex min-w-0 items-center justify-between gap-1.5">
            <span
              className={`inline-flex w-fit max-w-full items-center rounded-[4px] border px-1 py-0.5 text-[10px] font-bold leading-none tracking-wide sm:text-[11px] -ml-[5px] ${
                isDark
                  ? 'border-slate-300/10 bg-slate-700/25 text-slate-200/70'
                  : 'border-slate-400/15 bg-slate-500/5 text-slate-700/85'
              }`}
            >
              {project.category}
            </span>

            <span
              className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-colors ${
                isDark
                  ? 'text-slate-400 group-hover:text-slate-100'
                  : 'text-slate-500 group-hover:text-slate-800'
              }`}
              aria-hidden="true"
            >
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>

          <p
            className={`min-w-0 text-sm font-bold leading-[1.15] line-clamp-2 ${
              isDark ? 'text-neutral-50' : 'text-neutral-900'
            }`}
            title={project.title}
          >
            {project.title}
          </p>

          <p
            className={`mt-1 min-w-0 text-[11px] sm:text-xs leading-snug line-clamp-3 ${
              isDark ? 'text-slate-300/80' : 'text-slate-600'
            }`}
          >
            {project.description}
          </p>
        </div>
      </div>
    </a>
  );
};
