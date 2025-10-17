'use client';

import { useState } from 'react';
import {
  Target,
  CheckCircle2,
  Clock,
  TrendingUp,
  Trophy,
  Plus,
} from 'lucide-react';
import {
  DashboardLayout,
  DashboardHeader,
  GoalsGrid,
  EmptyState,
} from '@/components/dashboard/dashboard-layout';
import { GoalCard, type Goal } from '@/components/dashboard/goal-card';
import { StatCard, StatCardGrid } from '@/components/dashboard/stat-card';
import { QuickAddGoal } from '@/components/dashboard/quick-add-goal';
import { FilterControls, type FilterOption } from '@/components/dashboard/filter-controls';

// Mock data
const initialGoals: Goal[] = [
  {
    id: '1',
    title: 'Complete Advanced React Course',
    description: 'Finish all modules including hooks, context, and performance optimization',
    category: 'Learning',
    progress: 75,
    status: 'active',
    target_date: '2025-11-30',
    created_at: '2025-10-01T00:00:00Z',
    updated_at: '2025-10-15T00:00:00Z',
  },
  {
    id: '2',
    title: 'Build Portfolio Website',
    description: 'Design and deploy personal portfolio with 5 featured projects',
    category: 'Career',
    progress: 45,
    status: 'active',
    target_date: '2025-11-15',
    created_at: '2025-09-15T00:00:00Z',
    updated_at: '2025-10-14T00:00:00Z',
  },
  {
    id: '3',
    title: 'Morning Run 5K',
    description: 'Maintain weekly running habit for better health and energy',
    category: 'Health',
    progress: 100,
    status: 'completed',
    target_date: '2025-10-31',
    created_at: '2025-09-01T00:00:00Z',
    updated_at: '2025-10-15T00:00:00Z',
  },
  {
    id: '4',
    title: 'Read 2 Books Monthly',
    description: 'Focus on technical and personal development books',
    category: 'Personal',
    progress: 30,
    status: 'active',
    target_date: '2025-12-31',
    created_at: '2025-10-01T00:00:00Z',
    updated_at: '2025-10-10T00:00:00Z',
  },
  {
    id: '5',
    title: 'Master TypeScript',
    description: 'Learn TypeScript fundamentals and advanced patterns',
    category: 'Learning',
    progress: 90,
    status: 'active',
    target_date: '2025-10-20',
    created_at: '2025-09-01T00:00:00Z',
    updated_at: '2025-10-15T00:00:00Z',
  },
  {
    id: '6',
    title: 'Network with 10 Professionals',
    description: 'Attend meetups and connect on LinkedIn with industry experts',
    category: 'Career',
    progress: 20,
    status: 'active',
    created_at: '2025-10-01T00:00:00Z',
    updated_at: '2025-10-05T00:00:00Z',
  },
];

export default function DashboardExample() {
  const [goals, setGoals] = useState<Goal[]>(initialGoals);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Calculate stats
  const activeGoals = goals.filter((g) => g.status === 'active').length;
  const completedGoals = goals.filter((g) => g.status === 'completed').length;
  const inProgressGoals = goals.filter(
    (g) => g.status === 'active' && g.progress > 0 && g.progress < 100
  ).length;
  const avgProgress = Math.round(
    goals.reduce((sum, g) => sum + g.progress, 0) / goals.length
  );

  // Generate filter options
  const categories: FilterOption[] = [
    { value: 'all', label: 'All Categories', count: goals.length },
    {
      value: 'learning',
      label: 'Learning',
      count: goals.filter((g) => g.category === 'Learning').length,
    },
    {
      value: 'career',
      label: 'Career',
      count: goals.filter((g) => g.category === 'Career').length,
    },
    {
      value: 'health',
      label: 'Health',
      count: goals.filter((g) => g.category === 'Health').length,
    },
    {
      value: 'personal',
      label: 'Personal',
      count: goals.filter((g) => g.category === 'Personal').length,
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
      goal.category.toLowerCase() === selectedCategory;
    const statusMatch =
      selectedStatus === 'all' || goal.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  // Handle adding new goal
  const handleAddGoal = async (title: string) => {
    const newGoal: Goal = {
      id: Date.now().toString(),
      title,
      category: 'Personal',
      progress: 0,
      status: 'active',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    setGoals([newGoal, ...goals]);
  };

  // Handle goal click
  const handleGoalClick = (goalId: string) => {
    console.log('Goal clicked:', goalId);
    // In real app: navigate to goal detail page or open modal
  };

  return (
    <DashboardLayout
      header={
        <DashboardHeader
          title="My Goals"
          description="Track your progress and achieve your ambitions"
          actions={
            <button
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground
                         font-medium hover:bg-primary/90 transition-all
                         flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New Goal</span>
            </button>
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
            trend={{ value: 15, label: 'vs last week' }}
            variant="info"
          />
          <StatCard
            label="Completed"
            value={completedGoals}
            icon={<CheckCircle2 className="w-5 h-5" />}
            trend={{ value: 25, label: 'this month' }}
            variant="success"
          />
          <StatCard
            label="In Progress"
            value={inProgressGoals}
            icon={<Clock className="w-5 h-5" />}
            trend={{ value: -10, label: 'vs last week' }}
          />
          <StatCard
            label="Avg Progress"
            value={`${avgProgress}%`}
            icon={<TrendingUp className="w-5 h-5" />}
            trend={{ value: 12, label: 'improvement' }}
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
          {/* Header with count */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">
              {selectedCategory === 'all' ? 'All Goals' : selectedCategory}{' '}
              <span className="text-muted-foreground">
                ({filteredGoals.length})
              </span>
            </h2>
          </div>

          {/* Goals Grid or Empty State */}
          {filteredGoals.length > 0 ? (
            <GoalsGrid>
              {filteredGoals.map((goal, index) => (
                <div
                  key={goal.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <GoalCard goal={goal} onClick={() => handleGoalClick(goal.id)} />
                </div>
              ))}
            </GoalsGrid>
          ) : (
            <div className="goal-card">
              <EmptyState
                icon={<Trophy className="w-8 h-8" />}
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
