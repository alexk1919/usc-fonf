
export interface Goal {
  id: string;
  title: string;
  description?: string | null;
  category?: string | null;
  progress: number;
  status: 'active' | 'completed' | 'archived';
  target_date?: string | null;
  created_at: string;
  updated_at: string;
}

interface GoalCardProps {
  goal: Goal;
  onClick?: () => void;
  onStatusChange?: (goalId: string, newStatus: 'active' | 'completed' | 'archived') => void;
}

import { CheckCircle2, Archive, RotateCcw } from 'lucide-react';

export function GoalCard({ goal, onClick, onStatusChange }: GoalCardProps) {
  const getProgressColorClass = (progress: number) => {
    if (progress === 100) return 'progress-complete';
    if (progress >= 70) return 'progress-high';
    if (progress >= 40) return 'progress-medium';
    return 'progress-low';
  };

  const getStatusBadgeClass = (status: Goal['status']) => {
    switch (status) {
      case 'completed':
        return 'badge-completed';
      case 'archived':
        return 'badge-archived';
      default:
        return 'badge-active';
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return `${Math.abs(diffDays)}d overdue`;
    if (diffDays === 0) return 'Due today';
    if (diffDays === 1) return 'Due tomorrow';
    if (diffDays <= 7) return `${diffDays}d left`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const handleStatusClick = (e: React.MouseEvent, newStatus: 'active' | 'completed' | 'archived') => {
    e.stopPropagation();
    onStatusChange?.(goal.id, newStatus);
  };

  return (
    <div
      className={onClick ? 'goal-card-interactive' : 'goal-card'}
      onClick={onClick}
    >
      <div className="p-5 space-y-4">
        {/* Header with Category and Status */}
        <div className="flex items-start justify-between gap-3">
          <span className="category-pill">{goal.category || 'Uncategorized'}</span>
          <span className={getStatusBadgeClass(goal.status)}>
            {goal.status}
          </span>
        </div>

        {/* Title and Description */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-tight line-clamp-2">
            {goal.title}
          </h3>
          {goal.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {goal.description}
            </p>
          )}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-mono font-semibold">{goal.progress}%</span>
          </div>
          <div className="progress-bar">
            <div
              className={`progress-bar-fill ${getProgressColorClass(goal.progress)}`}
              style={{ width: `${goal.progress}%` }}
            />
          </div>
        </div>

        {/* Footer with Date */}
        {goal.target_date && (
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Target</span>
            <span className="font-medium">{formatDate(goal.target_date)}</span>
          </div>
        )}

        {/* Action Buttons */}
        {onStatusChange && (
          <div className="pt-3 border-t border-border flex gap-2">
            {goal.status !== 'completed' && (
              <button
                onClick={(e) => handleStatusClick(e, 'completed')}
                className="flex-1 px-3 py-2 rounded-lg bg-success/10 text-success
                         hover:bg-success/20 transition-all text-xs font-medium
                         flex items-center justify-center gap-1.5"
                title="Mark as completed"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span className="hidden sm:inline">Complete</span>
              </button>
            )}
            {goal.status === 'completed' && (
              <button
                onClick={(e) => handleStatusClick(e, 'active')}
                className="flex-1 px-3 py-2 rounded-lg bg-muted hover:bg-muted/80
                         transition-all text-xs font-medium
                         flex items-center justify-center gap-1.5"
                title="Mark as active"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">Reactivate</span>
              </button>
            )}
            {goal.status !== 'archived' && (
              <button
                onClick={(e) => handleStatusClick(e, 'archived')}
                className="flex-1 px-3 py-2 rounded-lg bg-muted hover:bg-muted/80
                         transition-all text-xs font-medium
                         flex items-center justify-center gap-1.5"
                title="Archive goal"
              >
                <Archive className="w-4 h-4" />
                <span className="hidden sm:inline">Archive</span>
              </button>
            )}
            {goal.status === 'archived' && (
              <button
                onClick={(e) => handleStatusClick(e, 'active')}
                className="flex-1 px-3 py-2 rounded-lg bg-muted hover:bg-muted/80
                         transition-all text-xs font-medium
                         flex items-center justify-center gap-1.5"
                title="Restore goal"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">Restore</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Compact variant for list views
export function GoalCardCompact({ goal, onClick }: GoalCardProps) {
  const getProgressColorClass = (progress: number) => {
    if (progress === 100) return 'progress-complete';
    if (progress >= 70) return 'progress-high';
    if (progress >= 40) return 'progress-medium';
    return 'progress-low';
  };

  return (
    <div
      className={`flex items-center gap-4 p-4 bg-card rounded-lg border border-border
                  transition-all duration-200 hover:border-primary/20 hover:shadow-sm
                  ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {/* Progress Circle Indicator */}
      <div className="flex-shrink-0 w-12 h-12 relative">
        <svg className="w-12 h-12 transform -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-muted"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 20}`}
            strokeDashoffset={`${2 * Math.PI * 20 * (1 - goal.progress / 100)}`}
            className={`transition-all duration-500 ${
              goal.progress === 100
                ? 'text-success'
                : goal.progress >= 70
                ? 'text-progress-high'
                : goal.progress >= 40
                ? 'text-progress-medium'
                : 'text-progress-low'
            }`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-mono font-bold">{goal.progress}%</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm truncate">{goal.title}</h4>
        <p className="text-xs text-muted-foreground truncate">{goal.category || 'Uncategorized'}</p>
      </div>

      {/* Status Badge */}
      <span
        className={`flex-shrink-0 ${
          goal.status === 'completed'
            ? 'badge-completed'
            : goal.status === 'archived'
            ? 'badge-archived'
            : 'badge-active'
        }`}
      >
        {goal.status}
      </span>
    </div>
  );
}
