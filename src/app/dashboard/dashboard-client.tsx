'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import type { User } from '@supabase/supabase-js';
import {
  Target,
  CheckCircle2,
  Clock,
  TrendingUp,
  LogOut,
} from 'lucide-react';
import {
  DashboardLayout,
  DashboardHeader,
  GoalsGrid,
  EmptyState,
} from '@/components/dashboard/dashboard-layout';
import { GoalCard } from '@/components/dashboard/goal-card';
import { StatCard, StatCardGrid } from '@/components/dashboard/stat-card';
import { QuickAddGoal } from '@/components/dashboard/quick-add-goal';
import { FilterControls, type FilterOption } from '@/components/dashboard/filter-controls';
import { createGoal, updateGoal } from '@/app/actions/goals';
import { createClient } from '@/lib/supabase/client';
import type { Goal } from '@/lib/db/goals';

interface DashboardClientProps {
  initialGoals: Goal[];
  user: User;
}

export function DashboardClient({ initialGoals, user }: DashboardClientProps) {
  const [goals, setGoals] = useState<Goal[]>(initialGoals);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [, startTransition] = useTransition();
  const router = useRouter();
  const supabase = createClient();

  // Calculate stats
  const activeGoals = goals.filter((g) => g.status === 'active').length;
  const completedGoals = goals.filter((g) => g.status === 'completed').length;
  const inProgressGoals = goals.filter(
    (g) => g.status === 'active' && g.progress > 0 && g.progress < 100
  ).length;
  const avgProgress = goals.length > 0
    ? Math.round(goals.reduce((sum, g) => sum + g.progress, 0) / goals.length)
    : 0;

  // Generate filter options
  const categories: FilterOption[] = [
    { value: 'all', label: 'All Categories', count: goals.length },
    {
      value: 'learning',
      label: 'Learning',
      count: goals.filter((g) => g.category?.toLowerCase() === 'learning').length,
    },
    {
      value: 'career',
      label: 'Career',
      count: goals.filter((g) => g.category?.toLowerCase() === 'career').length,
    },
    {
      value: 'health',
      label: 'Health',
      count: goals.filter((g) => g.category?.toLowerCase() === 'health').length,
    },
    {
      value: 'personal',
      label: 'Personal',
      count: goals.filter((g) => g.category?.toLowerCase() === 'personal').length,
    },
  ];

  const statuses: FilterOption[] = [
    { value: 'all', label: 'All Status', count: goals.length },
    {
      value: 'active',
      label: 'Active',
      count: goals.filter((g) => g.status === 'active').length,
    },
    {
      value: 'completed',
      label: 'Completed',
      count: goals.filter((g) => g.status === 'completed').length,
    },
    {
      value: 'archived',
      label: 'Archived',
      count: goals.filter((g) => g.status === 'archived').length,
    },
  ];

  // Filter goals
  const filteredGoals = goals.filter((goal) => {
    const categoryMatch =
      selectedCategory === 'all' ||
      goal.category?.toLowerCase() === selectedCategory;
    const statusMatch =
      selectedStatus === 'all' || goal.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  // Handle adding new goal
  const handleAddGoal = async (title: string, category: string) => {
    startTransition(async () => {
      const result = await createGoal({
        title,
        category,
        progress: 0,
        status: 'active',
      });

      if (result.success && result.data) {
        setGoals([result.data, ...goals]);
      }
    });
  };

  // Handle status change
  const handleStatusChange = async (goalId: string, newStatus: 'active' | 'completed' | 'archived') => {
    startTransition(async () => {
      const result = await updateGoal(goalId, {
        status: newStatus,
        progress: newStatus === 'completed' ? 100 : undefined,
      });

      if (result.success && result.data) {
        setGoals(goals.map(g => g.id === goalId ? result.data! : g));
      }
    });
  };

  // Handle goal click
  const handleGoalClick = (goalId: string) => {
    console.log('Goal clicked:', goalId);
    // In real app: navigate to goal detail page or open modal
  };

  // Handle sign out
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
    router.refresh();
  };

  return (
    <DashboardLayout
      header={
        <DashboardHeader
          title="My Goals"
          description="Track your progress and achieve your ambitions"
          actions={
            <div className="flex items-center gap-3">
              <div className="text-sm text-muted-foreground hidden sm:block">
                {user.email}
              </div>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 rounded-lg border border-border
                         hover:bg-muted transition-all
                         flex items-center gap-2"
                title="Sign out"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          }
        />
      }
      quickAdd={<QuickAddGoal onAdd={handleAddGoal} />}
      stats={
        <StatCardGrid>
          <StatCard
            label="Active Goals"
            value={activeGoals}
            icon={<Target className="w-5 h-5" />}
            variant="info"
          />
          <StatCard
            label="Completed"
            value={completedGoals}
            icon={<CheckCircle2 className="w-5 h-5" />}
            variant="success"
          />
          <StatCard
            label="In Progress"
            value={inProgressGoals}
            icon={<Clock className="w-5 h-5" />}
          />
          <StatCard
            label="Avg Progress"
            value={`${avgProgress}%`}
            icon={<TrendingUp className="w-5 h-5" />}
            variant="success"
          />
        </StatCardGrid>
      }
      filters={
        <FilterControls
          categories={categories}
          statuses={statuses}
          selectedCategory={selectedCategory}
          selectedStatus={selectedStatus}
          onCategoryChange={setSelectedCategory}
          onStatusChange={setSelectedStatus}
        />
      }
      goals={
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">
              {selectedCategory === 'all' ? 'All Goals' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}{' '}
              <span className="text-muted-foreground">
                ({filteredGoals.length})
              </span>
            </h2>
          </div>

          {filteredGoals.length > 0 ? (
            <GoalsGrid>
              {filteredGoals.map((goal, index) => (
                <div
                  key={goal.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <GoalCard
                    goal={goal}
                    onClick={() => handleGoalClick(goal.id)}
                    onStatusChange={handleStatusChange}
                  />
                </div>
              ))}
            </GoalsGrid>
          ) : (
            <div className="goal-card">
              <EmptyState
                icon={<Target className="w-8 h-8" />}
                title="No goals found"
                description={
                  selectedCategory !== 'all' || selectedStatus !== 'all'
                    ? 'Try adjusting your filters to see more goals'
                    : 'Start your journey by creating your first goal above'
                }
                action={
                  (selectedCategory !== 'all' || selectedStatus !== 'all') && (
                    <button
                      onClick={() => {
                        setSelectedCategory('all');
                        setSelectedStatus('all');
                      }}
                      className="px-6 py-2.5 rounded-lg border border-border
                                 hover:bg-muted transition-all"
                    >
                      Clear Filters
                    </button>
                  )
                }
              />
            </div>
          )}
        </>
      }
    />
  );
}
