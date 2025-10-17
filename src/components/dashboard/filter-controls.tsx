'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface FilterControlsProps {
  categories: FilterOption[];
  statuses: FilterOption[];
  selectedCategory?: string;
  selectedStatus?: string;
  onCategoryChange: (category: string) => void;
  onStatusChange: (status: string) => void;
}

export function FilterControls({
  categories,
  statuses,
  selectedCategory = 'all',
  selectedStatus = 'all',
  onCategoryChange,
  onStatusChange,
}: FilterControlsProps) {
  return (
    <div className="space-y-4">
      {/* Category Filters */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground">
          Category
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <FilterButton
              key={category.value}
              label={category.label}
              count={category.count}
              isActive={selectedCategory === category.value}
              onClick={() => onCategoryChange(category.value)}
            />
          ))}
        </div>
      </div>

      {/* Status Filters */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground">
          Status
        </label>
        <div className="flex flex-wrap gap-2">
          {statuses.map((status) => (
            <FilterButton
              key={status.value}
              label={status.label}
              count={status.count}
              isActive={selectedStatus === status.value}
              onClick={() => onStatusChange(status.value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface FilterButtonProps {
  label: string;
  count?: number;
  isActive: boolean;
  onClick: () => void;
}

function FilterButton({ label, count, isActive, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
        border transition-all duration-200
        ${
          isActive
            ? 'filter-active shadow-sm'
            : 'border-border bg-card hover:bg-muted hover:border-primary/30'
        }
      `}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span
          className={`
            px-1.5 py-0.5 rounded-full text-xs font-mono
            ${
              isActive
                ? 'bg-primary-foreground/20'
                : 'bg-muted-foreground/10'
            }
          `}
        >
          {count}
        </span>
      )}
      {isActive && <Check className="w-4 h-4" />}
    </button>
  );
}

// Compact mobile-friendly variant
export function FilterControlsCompact({
  categories,
  statuses,
  selectedCategory = 'all',
  selectedStatus = 'all',
  onCategoryChange,
  onStatusChange,
}: FilterControlsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-3">
      {/* Compact Toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-lg
                   border border-border bg-card hover:bg-muted transition-colors"
      >
        <span className="text-sm font-medium">Filters</span>
        <div className="flex items-center gap-2">
          {selectedCategory !== 'all' && (
            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
              {categories.find((c) => c.value === selectedCategory)?.label}
            </span>
          )}
          {selectedStatus !== 'all' && (
            <span className="px-2 py-0.5 rounded-full bg-secondary/50 text-secondary-foreground text-xs">
              {statuses.find((s) => s.value === selectedStatus)?.label}
            </span>
          )}
          <svg
            className={`w-4 h-4 transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Expanded Filters */}
      {isExpanded && (
        <div className="animate-slide-up space-y-3 p-4 rounded-lg bg-muted/50">
          <FilterControls
            categories={categories}
            statuses={statuses}
            selectedCategory={selectedCategory}
            selectedStatus={selectedStatus}
            onCategoryChange={onCategoryChange}
            onStatusChange={onStatusChange}
          />
        </div>
      )}
    </div>
  );
}
