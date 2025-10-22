'use client';

import { useState, type FormEvent, type KeyboardEvent } from 'react';
import { Plus, Sparkles } from 'lucide-react';

interface QuickAddGoalProps {
  onAdd: (title: string, category: string) => void | Promise<void>;
  placeholder?: string;
  autoFocus?: boolean;
}

const CATEGORIES = ['Learning', 'Career', 'Health', 'Personal'];

export function QuickAddGoal({
  onAdd,
  placeholder = 'What do you want to achieve today?',
  autoFocus = false,
}: QuickAddGoalProps) {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('Personal');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e?: FormEvent) => {
    e?.preventDefault();

    if (!value.trim() || isLoading) return;

    setIsLoading(true);
    try {
      await onAdd(value.trim(), category);
      setValue('');
    } catch (error) {
      console.error('Failed to add goal:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative group space-y-3">
      <div className="flex gap-3">
        {/* Category Selector */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={isLoading}
          className="px-4 py-3 rounded-lg border border-border bg-background
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                   transition-all text-sm font-medium min-w-[140px]"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Goal Input */}
        <div className="relative flex-1">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            autoFocus={autoFocus}
            disabled={isLoading}
            className="quick-add pl-12 w-full"
          />

          {/* Icon */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
            <Sparkles className="w-5 h-5" />
          </div>

          {/* Submit Button */}
          {value.trim() && (
            <button
              type="submit"
              disabled={isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2
                       px-4 py-1.5 rounded-lg
                       bg-primary text-primary-foreground text-sm font-medium
                       transition-all duration-200
                       hover:bg-primary/90 hover:scale-105
                       active:scale-95
                       disabled:opacity-50 disabled:cursor-not-allowed
                       animate-scale-in"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Adding...
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <Plus className="w-4 h-4" />
                  Add
                </span>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Helper Text */}
      <p className="text-xs text-muted-foreground ml-[152px]">
        Press Enter to quickly add a goal
      </p>
    </form>
  );
}

// Floating Action Button variant for mobile
export function QuickAddFAB({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fab"
      aria-label="Add new goal"
    >
      <Plus className="w-6 h-6" />
    </button>
  );
}
