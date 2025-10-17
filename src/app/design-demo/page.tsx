'use client';

import {
  Target,
  TrendingUp,
  CheckCircle2,
  Clock,
  Sparkles,
  Trophy,
  Star,
} from 'lucide-react';
import { GoalCard, GoalCardCompact } from '@/components/dashboard/goal-card';
import { StatCard, StatCardGrid } from '@/components/dashboard/stat-card';
import {
  QuickAddGoal,
  QuickAddFAB,
} from '@/components/dashboard/quick-add-goal';
import { FilterControls } from '@/components/dashboard/filter-controls';
import {
  DashboardLayout,
  DashboardHeader,
  GoalsGrid,
  EmptyState,
} from '@/components/dashboard/dashboard-layout';

// Sample data
const sampleGoals = [
  {
    id: '1',
    title: 'Complete React Advanced Course',
    description: 'Finish all 12 modules including the final project',
    category: 'Learning',
    progress: 75,
    status: 'active' as const,
    target_date: '2025-11-30',
    created_at: '2025-10-01',
    updated_at: '2025-10-15',
  },
  {
    id: '2',
    title: 'Build Personal Portfolio Website',
    description: 'Design and deploy portfolio with 5 projects',
    category: 'Career',
    progress: 45,
    status: 'active' as const,
    target_date: '2025-11-15',
    created_at: '2025-09-15',
    updated_at: '2025-10-14',
  },
  {
    id: '3',
    title: 'Run 5K Every Week',
    description: 'Maintain weekly running habit for better health',
    category: 'Health',
    progress: 100,
    status: 'completed' as const,
    target_date: '2025-10-31',
    created_at: '2025-09-01',
    updated_at: '2025-10-15',
  },
  {
    id: '4',
    title: 'Read 2 Books Per Month',
    description: 'Focus on technical and personal development books',
    category: 'Personal',
    progress: 30,
    status: 'active' as const,
    target_date: '2025-12-31',
    created_at: '2025-10-01',
    updated_at: '2025-10-10',
  },
  {
    id: '5',
    title: 'Learn TypeScript',
    description: 'Master TypeScript fundamentals and advanced patterns',
    category: 'Learning',
    progress: 90,
    status: 'active' as const,
    target_date: '2025-10-20',
    created_at: '2025-09-01',
    updated_at: '2025-10-15',
  },
  {
    id: '6',
    title: 'Network with 10 Industry Professionals',
    description: 'Attend meetups and connect on LinkedIn',
    category: 'Career',
    progress: 15,
    status: 'active' as const,
    created_at: '2025-10-01',
    updated_at: '2025-10-05',
  },
];

const categories = [
  { value: 'all', label: 'All Categories', count: 6 },
  { value: 'learning', label: 'Learning', count: 2 },
  { value: 'career', label: 'Career', count: 2 },
  { value: 'health', label: 'Health', count: 1 },
  { value: 'personal', label: 'Personal', count: 1 },
];

const statuses = [
  { value: 'all', label: 'All Status', count: 6 },
  { value: 'active', label: 'Active', count: 5 },
  { value: 'completed', label: 'Completed', count: 1 },
  { value: 'archived', label: 'Archived', count: 0 },
];

export default function DesignDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero border-b border-border">
        <div className="container-standard section-padding">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Design System Demo
            </div>
            <h1 className="text-gradient-primary mb-4">
              Personal Goal Tracker
            </h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive design system showcasing the motivational UI
              components for tracking and achieving your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Design System Showcase */}
      <div className="container-standard py-12 space-y-16">
        {/* Color Palette */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Color Palette</h2>
            <p className="text-muted-foreground">
              Energizing colors designed around goal achievement psychology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSwatch
              name="Primary"
              description="Ambition & Creativity"
              className="bg-primary text-primary-foreground"
            />
            <ColorSwatch
              name="Secondary"
              description="Focus & Progress"
              className="bg-secondary text-secondary-foreground"
            />
            <ColorSwatch
              name="Accent"
              description="Energy & Motivation"
              className="bg-accent text-accent-foreground"
            />
            <ColorSwatch
              name="Success"
              description="Achievement"
              className="bg-success text-success-foreground"
            />
            <ColorSwatch
              name="Warning"
              description="Attention"
              className="bg-warning text-warning-foreground"
            />
            <ColorSwatch
              name="Info"
              description="Information"
              className="bg-info text-info-foreground"
            />
            <ColorSwatch
              name="Destructive"
              description="Delete Actions"
              className="bg-destructive text-destructive-foreground"
            />
            <ColorSwatch
              name="Muted"
              description="Backgrounds"
              className="bg-muted text-muted-foreground border border-border"
            />
          </div>
        </section>

        {/* Progress Colors */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Progress Indicators</h2>
            <p className="text-muted-foreground">
              Dynamic colors that celebrate progress at every stage
            </p>
          </div>

          <div className="space-y-4">
            <ProgressDemo percentage={25} label="Just Started (0-39%)" />
            <ProgressDemo percentage={55} label="Making Progress (40-69%)" />
            <ProgressDemo percentage={85} label="Almost There (70-99%)" />
            <ProgressDemo percentage={100} label="Achieved! (100%)" />
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Typography</h2>
            <p className="text-muted-foreground">
              Clear, scannable hierarchy using Geist Sans
            </p>
          </div>

          <div className="space-y-4 goal-card p-8">
            <h1>Heading 1 - Hero Headlines</h1>
            <h2>Heading 2 - Page Titles</h2>
            <h3>Heading 3 - Section Headers</h3>
            <h4>Heading 4 - Card Titles</h4>
            <h5>Heading 5 - Subsections</h5>
            <h6>Heading 6 - Small Headers</h6>
            <p>
              Body text - Default paragraph text with generous line-height for
              readability. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
            <p className="text-sm text-muted-foreground">
              Small text - Secondary information and descriptions
            </p>
            <p className="text-xs text-muted-foreground">
              Tiny text - Captions and labels
            </p>
            <p className="stat-value">1,234</p>
            <p className="text-sm text-muted-foreground">
              Stats - Using monospace font (Geist Mono)
            </p>
          </div>
        </section>

        {/* Stat Cards */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Stat Cards</h2>
            <p className="text-muted-foreground">
              Display key metrics with trend indicators
            </p>
          </div>

          <StatCardGrid>
            <StatCard
              label="Active Goals"
              value={12}
              icon={<Target className="w-5 h-5" />}
              trend={{ value: 15, label: 'vs last week' }}
              variant="info"
            />
            <StatCard
              label="Completed"
              value={8}
              icon={<CheckCircle2 className="w-5 h-5" />}
              trend={{ value: 25, label: 'this month' }}
              variant="success"
            />
            <StatCard
              label="In Progress"
              value={4}
              icon={<Clock className="w-5 h-5" />}
              trend={{ value: -10, label: 'vs last week' }}
            />
            <StatCard
              label="Avg Progress"
              value="67%"
              icon={<TrendingUp className="w-5 h-5" />}
              trend={{ value: 12, label: 'improvement' }}
              variant="success"
            />
          </StatCardGrid>
        </section>

        {/* Goal Cards */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Goal Cards</h2>
            <p className="text-muted-foreground">
              Primary content container with progress visualization
            </p>
          </div>

          <GoalsGrid>
            {sampleGoals.slice(0, 3).map((goal) => (
              <GoalCard key={goal.id} goal={goal} onClick={() => {}} />
            ))}
          </GoalsGrid>

          <div>
            <h3 className="text-xl font-semibold mb-4">Compact Variant</h3>
            <div className="space-y-3 max-w-2xl">
              {sampleGoals.slice(0, 3).map((goal) => (
                <GoalCardCompact key={goal.id} goal={goal} onClick={() => {}} />
              ))}
            </div>
          </div>
        </section>

        {/* Quick Add */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Quick Add Input</h2>
            <p className="text-muted-foreground">
              Rapid goal entry with inline submit button
            </p>
          </div>

          <div className="max-w-2xl">
            <QuickAddGoal
              onAdd={async (title) => {
                console.log('Adding goal:', title);
              }}
            />
          </div>
        </section>

        {/* Filters */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Filter Controls</h2>
            <p className="text-muted-foreground">
              Category and status filtering with count badges
            </p>
          </div>

          <div className="max-w-3xl goal-card p-6">
            <FilterControls
              categories={categories}
              statuses={statuses}
              selectedCategory="all"
              selectedStatus="all"
              onCategoryChange={(cat) => console.log('Category:', cat)}
              onStatusChange={(status) => console.log('Status:', status)}
            />
          </div>
        </section>

        {/* Badges & Pills */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Badges & Pills</h2>
            <p className="text-muted-foreground">
              Status indicators and category labels
            </p>
          </div>

          <div className="space-y-4 goal-card p-6">
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">
                Status Badges
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge-active">Active</span>
                <span className="badge-completed">Completed</span>
                <span className="badge-archived">Archived</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">
                Category Pills
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="category-pill">Learning</span>
                <span className="category-pill">Career</span>
                <span className="category-pill">Health</span>
                <span className="category-pill">Personal</span>
                <span className="category-pill">Finance</span>
              </div>
            </div>
          </div>
        </section>

        {/* Empty State */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Empty State</h2>
            <p className="text-muted-foreground">
              Encouraging users to take their first action
            </p>
          </div>

          <div className="goal-card">
            <EmptyState
              icon={<Trophy className="w-8 h-8" />}
              title="No goals yet"
              description="Start your journey by creating your first goal. What do you want to achieve today?"
              action={
                <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all">
                  Create Your First Goal
                </button>
              }
            />
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Buttons</h2>
            <p className="text-muted-foreground">
              Interactive elements with hover and active states
            </p>
          </div>

          <div className="goal-card p-6 space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">
                Primary Actions
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all">
                  Primary Button
                </button>
                <button className="px-4 py-2 rounded-lg bg-success text-success-foreground font-medium hover:bg-success/90 transition-all">
                  Success Button
                </button>
                <button className="px-4 py-2 rounded-lg bg-destructive text-destructive-foreground font-medium hover:bg-destructive/90 transition-all">
                  Destructive Button
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">
                Secondary Actions
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 rounded-lg border border-border bg-card font-medium hover:bg-muted transition-all">
                  Secondary Button
                </button>
                <button className="px-4 py-2 rounded-lg font-medium hover:bg-muted transition-all">
                  Ghost Button
                </button>
                <button className="px-4 py-2 rounded-lg border border-primary text-primary font-medium hover:bg-primary/5 transition-all">
                  Outline Button
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">
                Icon Buttons
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="p-2 rounded-lg hover:bg-muted transition-all">
                  <Star className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                  <Star className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Glass Morphism */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Glass Morphism</h2>
            <p className="text-muted-foreground">
              Subtle backdrop blur effects for modern depth
            </p>
          </div>

          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Glass Card</h3>
              <p className="text-muted-foreground">
                Semi-transparent background with backdrop blur creates a floating
                effect perfect for overlays and modals.
              </p>
            </div>
          </div>
        </section>

        {/* Text Gradients */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Text Gradients</h2>
            <p className="text-muted-foreground">
              Eye-catching gradient text for hero moments
            </p>
          </div>

          <div className="goal-card p-8 space-y-4">
            <h1 className="text-gradient-primary">
              Achieve Your Goals
            </h1>
            <h1 className="text-gradient-success">
              100% Complete!
            </h1>
          </div>
        </section>
      </div>

      {/* FAB Demo */}
      <QuickAddFAB onClick={() => console.log('FAB clicked')} />
    </div>
  );
}

// Helper Components
function ColorSwatch({
  name,
  description,
  className,
}: {
  name: string;
  description: string;
  className: string;
}) {
  return (
    <div className={`${className} p-6 rounded-xl`}>
      <div className="font-semibold mb-1">{name}</div>
      <div className="text-sm opacity-90">{description}</div>
    </div>
  );
}

function ProgressDemo({
  percentage,
  label,
}: {
  percentage: number;
  label: string;
}) {
  const getProgressClass = (progress: number) => {
    if (progress === 100) return 'progress-complete';
    if (progress >= 70) return 'progress-high';
    if (progress >= 40) return 'progress-medium';
    return 'progress-low';
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-mono font-semibold">{percentage}%</span>
      </div>
      <div className="progress-bar h-3">
        <div
          className={`progress-bar-fill ${getProgressClass(percentage)}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
