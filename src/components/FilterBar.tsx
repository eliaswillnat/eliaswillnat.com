import React from 'react';
import { Search, X } from 'lucide-react';
import { Category, categories } from '../data/projects';

interface FilterBarProps {
  isDark: boolean;
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  countsByCategory: Record<string, number>;
  totalCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  isDark,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  countsByCategory,
  totalCount,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
        
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none py-0.5">
          {categories.map((cat) => {
            const count = cat === 'All' ? totalCount : (countsByCategory[cat] || 0);
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                  isSelected
                    ? isDark
                      ? 'bg-neutral-100 text-neutral-900 shadow-sm font-semibold'
                      : 'bg-neutral-900 text-white shadow-sm font-semibold'
                    : isDark
                      ? 'bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 border border-neutral-800/80'
                      : 'bg-white hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 border border-neutral-200 shadow-xs'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? isDark
                        ? 'bg-neutral-900/15 text-neutral-900 font-bold'
                        : 'bg-white/20 text-white font-bold'
                      : isDark
                        ? 'bg-neutral-800 text-neutral-400'
                        : 'bg-neutral-100 text-neutral-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ${
            isDark ? 'text-neutral-500' : 'text-neutral-400'
          }`} />
          <input
            type="text"
            placeholder="Search projects, tags..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`w-full pl-9 pr-8 py-1.5 text-xs rounded-full transition-colors focus:outline-none focus:ring-1 ${
              isDark 
                ? 'bg-neutral-900/80 border border-neutral-800 text-neutral-200 placeholder-neutral-500 focus:ring-neutral-400 focus:border-neutral-400' 
                : 'bg-white border border-neutral-200 text-neutral-800 placeholder-neutral-400 focus:ring-neutral-600 focus:border-neutral-600 shadow-xs'
            }`}
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className={`absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full ${
                isDark ? 'text-neutral-500 hover:text-neutral-300' : 'text-neutral-400 hover:text-neutral-600'
              }`}
              title="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
