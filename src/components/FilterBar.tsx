import React from 'react';
import { Category, categories } from '../data/projects';

interface FilterBarProps {
  isDark: boolean;
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  countsByCategory: Record<string, number>;
  totalCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  isDark,
  selectedCategory,
  onSelectCategory,
  countsByCategory,
  totalCount,
}) => {
  return (
    <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
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
  );
};
