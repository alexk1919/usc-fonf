import { type ReactNode } from 'react';

interface DashboardLayoutProps {
  header: ReactNode;
  stats?: ReactNode;
  filters?: ReactNode;
  goals: ReactNode;
  quickAdd?: ReactNode;
}

export function DashboardLayout({
  header,
  stats,
  filters,
  goals,
  quickAdd,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section with Gradient Background */}
      <div className="gradient-hero border-b border-border">
        <div className="container-standard section-padding">
          {header}
        </div>
      </div>

      {/* Main Content */}
      <div className="container-standard py-8 space-y-8">
        {/* Quick Add */}
        {quickAdd && (
          <section className="animate-slide-up">
            {quickAdd}
          </section>
        )}

        {/* Stats Grid */}
        {stats && (
          <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {stats}
          </section>
        )}

        {/* Filters and Goals */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar Filters */}
          {filters && (
            <aside className="lg:sticky lg:top-8 lg:self-start space-y-4">
              <div className="goal-card p-5">
                <h3 className="text-sm font-semibold mb-4">Filters</h3>
                {filters}
              </div>
            </aside>
          )}

          {/* Goals Grid */}
          <main className="space-y-6">
            {goals}
          </main>
        </div>
      </div>
    </div>
  );
}

// Header component with title and description
export function DashboardHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
      <div className="space-y-2">
        <h1 className="text-gradient-primary">{title}</h1>
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
}

// Goals Grid
export function GoalsGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {children}
    </div>
  );
}

// Goals List (alternative to grid)
export function GoalsList({ children }: { children: ReactNode }) {
  return <div className="space-y-3">{children}</div>;
}

// Empty State
export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="empty-state">
      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-sm mb-6">{description}</p>
      {action}
    </div>
  );
}
