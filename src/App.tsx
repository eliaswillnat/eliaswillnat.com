import { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { ProjectCard } from './components/ProjectCard';
import { Footer } from './components/Footer';
import { projects, Category, profileConfig } from './data/projects';
import { Search, Compass } from 'lucide-react';

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Initialize theme from localStorage or fallback to system preference
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') return true;
    if (savedTheme === 'light') return false;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Track if user explicitly toggled the theme
  const [hasManualOverride, setHasManualOverride] = useState<boolean>(() => {
    return localStorage.getItem('theme') !== null;
  });

  // Listen for system theme changes if no manual override
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!hasManualOverride) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [hasManualOverride]);

  // Update HTML class & persist theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    setHasManualOverride(true);
    localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
  };

  // Category counts
  const countsByCategory = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        project.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
      isDark ? 'bg-neutral-950 text-neutral-100 selection:bg-neutral-800 selection:text-white' : 'bg-neutral-50 text-neutral-900 selection:bg-neutral-200 selection:text-neutral-900'
    }`}>
      
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {isDark ? (
          <>
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-neutral-800/20 via-neutral-900/5 to-transparent blur-3xl opacity-70"></div>
            <div className="absolute top-1/3 -left-32 w-80 h-80 bg-neutral-800/10 rounded-full blur-3xl"></div>
            <div className="absolute top-2/3 -right-32 w-80 h-80 bg-neutral-800/10 rounded-full blur-3xl"></div>
          </>
        ) : (
          <>
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-neutral-200/40 via-neutral-100/10 to-transparent blur-3xl opacity-60"></div>
            <div className="absolute top-1/3 -left-32 w-80 h-80 bg-neutral-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-2/3 -right-32 w-80 h-80 bg-neutral-200/30 rounded-full blur-3xl"></div>
          </>
        )}
      </div>

      {/* Header */}
      <Header
        isDark={isDark}
        onToggleTheme={toggleTheme}
        projectCount={projects.length}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 w-full">
        
        {/* Intro / Section Header */}
        <section className="mb-8 sm:mb-10 space-y-2">
          <div className={`flex items-center gap-2 text-xs font-mono tracking-wider uppercase ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            <Compass className="w-3.5 h-3.5" />
            <span>Applications & Experiments Directory</span>
          </div>
          <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Built apps & digital tools
          </h1>
          <p className={`text-sm sm:text-base max-w-2xl leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {profileConfig.tagline} Click on any app card to launch and explore it directly.
          </p>
        </section>

        {/* Filter and Search Bar */}
        <section className="mb-8">
          <FilterBar
            isDark={isDark}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            countsByCategory={countsByCategory}
            totalCount={projects.length}
          />
        </section>

        {/* Projects Grid */}
        <section>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isDark={isDark} />
              ))}
            </div>
          ) : (
            <div className={`py-16 text-center rounded-2xl border border-dashed ${
              isDark ? 'border-neutral-800 bg-neutral-900/20' : 'border-neutral-300 bg-neutral-100/50'
            }`}>
              <Search className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-neutral-600' : 'text-neutral-400'}`} />
              <h3 className={`text-sm font-semibold ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>No apps found</h3>
              <p className={`text-xs max-w-xs mx-auto mt-1 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
                No projects matched "{searchQuery}" in {selectedCategory}.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className={`mt-4 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isDark ? 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200' : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-800'
                }`}
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

      </main>

      {/* Footer */}
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
