# Design System Quick Start Guide

> Get up and running with the Personal Goal Tracker design system in minutes

## 🎨 Philosophy in 3 Points

1. **Motivational**: Colors energize and encourage action (purple = ambition, green = achievement)
2. **Clarity-First**: Clean layouts, generous whitespace, clear visual hierarchy
3. **Mobile-Optimized**: Touch-friendly, thumb-reach zones, responsive by default

---

## 🚀 Quick Setup

### 1. Import Base Styles

Already configured in `src/app/globals.css` - just use the utility classes!

### 2. Import Components

```tsx
// Dashboard components
import { GoalCard } from '@/components/dashboard/goal-card';
import { StatCard } from '@/components/dashboard/stat-card';
import { QuickAddGoal } from '@/components/dashboard/quick-add-goal';
```

### 3. Use the System

```tsx
<div className="goal-card p-5">
  <h3>Your content here</h3>
</div>
```

---

## 📦 Essential Components

### Goal Card

Display a goal with progress bar:

```tsx
<GoalCard
  goal={{
    id: '1',
    title: 'Complete React Course',
    category: 'Learning',
    progress: 65,
    status: 'active'
  }}
  onClick={() => {}}
/>
```

### Stat Card

Show key metrics:

```tsx
<StatCard
  label="Active Goals"
  value={12}
  icon={<Target className="w-5 h-5" />}
  trend={{ value: 15, label: 'vs last week' }}
  variant="info"
/>
```

### Quick Add

Rapid goal entry:

```tsx
<QuickAddGoal
  onAdd={async (title) => {
    // Add your goal logic
  }}
/>
```

---

## 🎨 Color Usage

### When to Use What

```tsx
// Primary Actions (CTAs, main buttons)
className="bg-primary text-primary-foreground"

// Success States (completed, achieved)
className="bg-success text-success-foreground"

// Progress < 40% (just started)
className="progress-low"

// Progress 40-69% (making progress)
className="progress-medium"

// Progress 70-99% (almost there)
className="progress-high"

// Progress 100% (complete!)
className="progress-complete"

// Category tags
className="category-pill"

// Status badges
className="badge-active" // or badge-completed, badge-archived
```

---

## 📏 Spacing Cheat Sheet

```tsx
// Card padding
className="p-5"  // Standard (20px)
className="p-6"  // Generous (24px)

// Section spacing
className="space-y-6"  // Standard vertical stack
className="gap-4"      // Grid gaps

// Container widths
className="container-standard"  // max-w-7xl
className="container-narrow"    // max-w-4xl

// Section padding
className="section-padding"  // py-12 sm:py-16 lg:py-20
```

---

## 🔄 Common Patterns

### Card with Hover

```tsx
<div className="goal-card-interactive">
  {/* Includes scale and shadow on hover */}
</div>
```

### Progress Bar

```tsx
<div className="progress-bar">
  <div
    className="progress-bar-fill progress-high"
    style={{ width: '75%' }}
  />
</div>
```

### Button Styles

```tsx
// Primary CTA
<button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground
                   hover:bg-primary/90 transition-all">
  Click Me
</button>

// Secondary
<button className="px-4 py-2 rounded-lg border border-border
                   hover:bg-muted transition-all">
  Secondary
</button>

// Ghost
<button className="px-4 py-2 rounded-lg hover:bg-muted transition-all">
  Ghost
</button>
```

### Gradient Background

```tsx
<div className="gradient-hero">
  {/* Subtle motivational gradient */}
</div>
```

### Glass Effect

```tsx
<div className="glass p-6 rounded-xl">
  {/* Semi-transparent with blur */}
</div>
```

---

## 📱 Responsive Grid Patterns

```tsx
// Stat cards (1-2-4 columns)
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

// Goal cards (1-2-3 columns)
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

// Sidebar layout
<div className="grid lg:grid-cols-[280px_1fr] gap-8">
```

---

## 🎭 Text Gradients

```tsx
// Primary gradient (purple to blue)
<h1 className="text-gradient-primary">Amazing Title</h1>

// Success gradient (green to teal)
<h1 className="text-gradient-success">100% Complete!</h1>
```

---

## ✨ Animations

```tsx
// Scale in (for new items)
className="animate-scale-in"

// Slide up (for list items)
className="animate-slide-up"

// Stagger delays
style={{ animationDelay: '0.1s' }}
```

---

## 🎯 Layout Templates

### Dashboard Page

```tsx
import {
  DashboardLayout,
  DashboardHeader,
  GoalsGrid
} from '@/components/dashboard/dashboard-layout';

export default function Dashboard() {
  return (
    <DashboardLayout
      header={
        <DashboardHeader
          title="My Goals"
          description="Track your progress"
        />
      }
      quickAdd={<QuickAddGoal onAdd={handleAdd} />}
      stats={<StatCardGrid>...</StatCardGrid>}
      filters={<FilterControls />}
      goals={<GoalsGrid>...</GoalsGrid>}
    />
  );
}
```

---

## 🧪 Testing Your Design

Visit `/design-demo` to see all components in action!

```bash
npm run dev
# Navigate to http://localhost:3000/design-demo
```

---

## 🎨 Color Reference (Copy-Paste)

```css
/* Primary - Vibrant Purple */
--primary: oklch(0.55 0.22 285);

/* Success - Fresh Green */
--success: oklch(0.65 0.19 150);

/* Warning - Warm Amber */
--warning: oklch(0.75 0.15 75);

/* Info - Calm Blue */
--info: oklch(0.62 0.17 235);

/* Progress Colors */
--progress-low: oklch(0.72 0.18 25);      /* Coral */
--progress-medium: oklch(0.75 0.15 75);   /* Amber */
--progress-high: oklch(0.68 0.17 160);    /* Teal */
--progress-complete: oklch(0.65 0.19 150); /* Green */
```

---

## 📚 Icon Library

Using Lucide React - highly recommended icons:

```tsx
import {
  Target,        // Goals
  TrendingUp,    // Progress
  CheckCircle2,  // Completed
  Clock,         // In progress
  Sparkles,      // Motivation
  Trophy,        // Achievement
  Star,          // Featured
  Plus,          // Add
  Filter,        // Filters
  ArrowRight,    // Navigation
} from 'lucide-react';
```

---

## ⚡ Performance Tips

1. **Use the pre-built classes** - Avoid arbitrary values
2. **Leverage CSS variables** - Colors update automatically in dark mode
3. **Keep animations subtle** - 200-500ms durations max
4. **Mobile-first always** - Design for 375px first, scale up

---

## 🚨 Common Mistakes to Avoid

❌ Don't create custom colors outside the system
❌ Don't use arbitrary padding/margin values
❌ Don't forget hover/focus states
❌ Don't ignore loading and error states
❌ Don't skip empty states

✅ Do use utility classes from the system
✅ Do follow the spacing scale
✅ Do add micro-interactions
✅ Do provide feedback for all actions
✅ Do celebrate user achievements

---

## 🔗 Resources

- **Full Documentation**: `docs/DESIGN_SYSTEM.md`
- **Demo Page**: `/design-demo`
- **Component Files**: `src/components/dashboard/`
- **Global Styles**: `src/app/globals.css`

---

## 💡 Pro Tips

1. **Start with components** - Don't reinvent the wheel
2. **Use the demo page** - Copy working code
3. **Think mobile-first** - Touch targets 44x44px minimum
4. **Celebrate progress** - Show visual feedback for every step
5. **Keep it simple** - Clarity beats complexity

---

**Happy Building!** 🚀

Questions? Check the full docs or ask the team.
