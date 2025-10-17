import { type ReactNode } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export interface StatCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    label: string;
  };
  variant?: 'default' | 'success' | 'warning' | 'info';
}

export function StatCard({
  label,
  value,
  icon,
  trend,
  variant = 'default',
}: StatCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'success':
        return 'border-success/20 bg-gradient-to-br from-card to-success/5';
      case 'warning':
        return 'border-warning/20 bg-gradient-to-br from-card to-warning/5';
      case 'info':
        return 'border-info/20 bg-gradient-to-br from-card to-info/5';
      default:
        return 'border-border';
    }
  };

  const getTrendIcon = () => {
    if (!trend) return null;
    if (trend.value > 0)
      return <TrendingUp className="w-4 h-4 text-success" />;
    if (trend.value < 0)
      return <TrendingDown className="w-4 h-4 text-destructive" />;
    return <Minus className="w-4 h-4 text-muted-foreground" />;
  };

  const getTrendColor = () => {
    if (!trend) return '';
    if (trend.value > 0) return 'text-success';
    if (trend.value < 0) return 'text-destructive';
    return 'text-muted-foreground';
  };

  return (
    <div
      className={`stat-card ${getVariantClasses()} transition-all duration-200`}
    >
      {/* Header with Icon */}
      <div className="flex items-start justify-between">
        <p className="stat-label">{label}</p>
        {icon && (
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        )}
      </div>

      {/* Value */}
      <div className="flex items-end justify-between gap-2">
        <p className="stat-value">{value}</p>

        {/* Trend Indicator */}
        {trend && (
          <div className="flex items-center gap-1 pb-1">
            {getTrendIcon()}
            <span className={`text-sm font-medium ${getTrendColor()}`}>
              {Math.abs(trend.value)}%
            </span>
          </div>
        )}
      </div>

      {/* Trend Label */}
      {trend && (
        <p className="text-xs text-muted-foreground mt-1">{trend.label}</p>
      )}
    </div>
  );
}

// Grid layout for multiple stat cards
export function StatCardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {children}
    </div>
  );
}
