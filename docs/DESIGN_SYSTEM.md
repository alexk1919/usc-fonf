# Personal Goal Tracker - Design System

## Overview

This design system creates a motivational, energizing experience for college students and young professionals tracking their goals. The palette balances ambition with clarity, using vibrant colors that encourage action while maintaining professional polish.

---

## Design Philosophy

### Core Principles

1. **Motivational First**: Colors and interactions should energize and inspire action
2. **Clarity Over Complexity**: Clean layouts with clear visual hierarchy
3. **Mobile-First**: Optimized for thumb-reach and quick interactions
4. **Progress-Focused**: Visual feedback celebrates achievement at every step
5. **Accessibility Built-In**: WCAG 2.1 AA compliance minimum

### Tone & Voice

- **Visual**: Modern, energizing, confident but not overwhelming
- **Interaction**: Quick, satisfying, celebratory
- **Typography**: Clear, scannable, with personality in headlines

---

## Color System

### Psychology & Usage

Our color palette is designed around goal achievement psychology:

- **Purple (Primary)**: Ambition, creativity, transformation
- **Blue (Secondary)**: Focus, progress, trust
- **Coral (Accent)**: Energy, motivation, warmth
- **Green (Success)**: Achievement, growth, completion

### Color Palette

#### Primary Colors

```css
/* Primary - Vibrant Purple */
--primary: oklch(0.55 0.22 285);           /* Main brand color */
--primary-foreground: oklch(0.99 0 0);     /* Text on primary */

Use for: CTAs, focus states, primary actions, brand elements
```

#### Secondary Colors

```css
/* Secondary - Electric Blue */
--secondary: oklch(0.92 0.02 240);         /* Background */
--secondary-foreground: oklch(0.35 0.15 240); /* Text */

Use for: Category pills, supporting elements, secondary actions
```

#### Accent Colors

```css
/* Accent - Coral/Salmon */
--accent: oklch(0.91 0.03 25);             /* Background */
--accent-foreground: oklch(0.45 0.18 25);  /* Text */

Use for: Highlights, special callouts, motivational elements
```

#### Semantic Colors

```css
/* Success - Fresh Green */
--success: oklch(0.65 0.19 150);
--success-foreground: oklch(0.99 0 0);

/* Warning - Warm Amber */
--warning: oklch(0.75 0.15 75);
--warning-foreground: oklch(0.25 0.05 75);

/* Info - Calm Blue */
--info: oklch(0.62 0.17 235);
--info-foreground: oklch(0.99 0 0);

/* Destructive - Confident Red */
--destructive: oklch(0.58 0.22 25);
--destructive-foreground: oklch(0.99 0 0);
```

#### Progress Colors

Special gradient colors that visualize goal progress:

```css
--progress-low: oklch(0.72 0.18 25);      /* Coral - just started (0-39%) */
--progress-medium: oklch(0.75 0.15 75);   /* Amber - making progress (40-69%) */
--progress-high: oklch(0.68 0.17 160);    /* Teal - almost there (70-99%) */
--progress-complete: oklch(0.65 0.19 150); /* Green - achieved! (100%) */
```

#### Neutral Colors

```css
--background: oklch(0.99 0 0);            /* Near-white, slight warmth */
--foreground: oklch(0.15 0.01 270);       /* Deep charcoal */
--muted: oklch(0.96 0.005 270);           /* Subtle backgrounds */
--muted-foreground: oklch(0.50 0.01 270); /* Secondary text */
--border: oklch(0.90 0.005 270);          /* Light borders */
--card: oklch(1 0 0);                     /* Pure white cards */
```

### Dark Mode Adaptations

Dark mode uses lighter, more vibrant versions of colors for better contrast:

- Primary purple becomes more luminous
- Backgrounds shift to deep charcoal (not pure black)
- Colors maintain their relative relationships
- Increased saturation for better visibility

---

## Typography

### Font Families

```css
--font-sans: "Geist Sans"  /* Primary - UI text */
--font-mono: "Geist Mono"  /* Secondary - stats, numbers */
```

### Type Scale

Mobile-first responsive scale:

```css
/* Display - Hero Headlines */
h1: 36px/40px (mobile) → 48px/52px (tablet) → 60px/64px (desktop)
line-height: 1.1
font-weight: 600 (semibold)

/* H2 - Page Titles */
h2: 30px/36px → 36px/42px → 48px/54px
line-height: 1.15
font-weight: 600

/* H3 - Section Headers */
h3: 24px/32px → 30px/38px → 36px/44px
line-height: 1.2
font-weight: 600

/* H4 - Card Titles */
h4: 20px/28px → 24px/32px
line-height: 1.3
font-weight: 600

/* Body Text */
p: 16px/24px (1.5 line-height)
font-weight: 400

/* Small Text */
small: 14px/20px
font-weight: 400

/* Tiny/Caption */
12px/16px
font-weight: 400
```

### Type Usage Guidelines

- **Headlines**: Use gradient text effects for hero moments
- **Stats/Numbers**: Use monospace font for better readability
- **Labels**: UPPERCASE, tracking-wide, small size (12px)
- **Body**: Generous line-height (1.5+) for readability

---

## Spacing System

Based on 4px grid system (Tailwind default):

```
xs:  4px   (0.25rem) - Tight spacing, badges
sm:  8px   (0.5rem)  - Small gaps
md:  16px  (1rem)    - Default spacing
lg:  24px  (1.5rem)  - Section spacing
xl:  32px  (2rem)    - Large gaps
2xl: 48px  (3rem)    - Hero spacing
3xl: 64px  (4rem)    - Extra large
```

### Component Spacing Patterns

- **Cards**: p-5 (20px padding) or p-6 (24px)
- **Sections**: py-12 sm:py-16 lg:py-20
- **Grid gaps**: gap-4 (standard), gap-6 (generous)
- **Stack spacing**: space-y-4 (standard vertical)

---

## Border Radius

Friendly, modern roundness:

```css
--radius: 12px (0.75rem)     /* Base radius */
--radius-sm: 8px             /* Calc(--radius - 4px) */
--radius-md: 10px            /* Calc(--radius - 2px) */
--radius-lg: 12px            /* Base */
--radius-xl: 16px            /* Calc(--radius + 4px) */
--radius-2xl: 20px           /* Calc(--radius + 8px) */
```

### Usage

- **Cards**: rounded-xl (12px)
- **Buttons**: rounded-lg (12px)
- **Inputs**: rounded-xl (12px)
- **Pills/Badges**: rounded-full
- **Progress bars**: rounded-full

---

## Components

### Goal Card

**Purpose**: Primary content container for displaying goal information

**Variants**:
- `goal-card`: Default card with hover effects
- `goal-card-interactive`: Adds click interaction with scale
- `GoalCardCompact`: List-view variant with circular progress

**Key Features**:
- Category pill in corner
- Status badge
- Progress bar with color coding
- Optional target date
- Hover effects with border color change

**Example**:
```tsx
<GoalCard
  goal={{
    id: '1',
    title: 'Complete React Course',
    description: 'Finish all modules by end of month',
    category: 'Learning',
    progress: 65,
    status: 'active',
    target_date: '2025-11-30'
  }}
  onClick={() => {}}
/>
```

### Stat Card

**Purpose**: Display key metrics and statistics

**Features**:
- Large monospace numbers
- Optional trend indicators (up/down/neutral)
- Icon support
- Color variants (default, success, warning, info)
- Gradient background options

**Example**:
```tsx
<StatCard
  label="Active Goals"
  value={12}
  icon={<Target className="w-5 h-5" />}
  trend={{ value: 15, label: 'vs last week' }}
  variant="info"
/>
```

### Progress Bar

**Purpose**: Visual progress indication

**Classes**:
- `.progress-bar`: Container
- `.progress-bar-fill`: Animated fill
- `.progress-low`: 0-39% (coral)
- `.progress-medium`: 40-69% (amber)
- `.progress-high`: 70-99% (teal)
- `.progress-complete`: 100% (green)

**Features**:
- Smooth 500ms transitions
- Automatic color based on percentage
- Gradient fills for visual appeal

### Quick Add Input

**Purpose**: Rapid goal entry without forms

**Features**:
- Large, friendly input field
- Icon on left (Sparkles)
- Inline submit button when text entered
- Enter key submit
- Loading states
- Helper text below

**UX Pattern**: Netflix/Notion-style quick capture

### Filter Controls

**Purpose**: Category and status filtering

**Variants**:
- `FilterControls`: Full desktop version
- `FilterControlsCompact`: Mobile collapsible

**Features**:
- Count badges
- Active state with checkmark
- Smooth transitions
- Keyboard accessible

### Status Badges

**Classes**:
- `.badge-active`: Blue, for in-progress goals
- `.badge-completed`: Green, for achieved goals
- `.badge-archived`: Gray, for archived goals

**Style**: Subtle backgrounds with border, not too loud

---

## Layout Patterns

### Dashboard Layout

Standard structure for main dashboard:

```tsx
<DashboardLayout
  header={<DashboardHeader title="My Goals" />}
  quickAdd={<QuickAddGoal onAdd={handleAdd} />}
  stats={<StatCardGrid>...</StatCardGrid>}
  filters={<FilterControls />}
  goals={<GoalsGrid>...</GoalsGrid>}
/>
```

### Container Utilities

```css
.container-narrow: max-w-4xl (1024px)
.container-standard: max-w-7xl (1280px)
```

### Grid Patterns

```css
/* Responsive stat cards */
grid-cols-1 sm:grid-cols-2 lg:grid-cols-4

/* Goal cards */
grid-cols-1 md:grid-cols-2 xl:grid-cols-3

/* Two-column with sidebar */
lg:grid-cols-[280px_1fr]
```

---

## Interactions & Animations

### Micro-interactions

All interactive elements have feedback:

```css
/* Scale on hover */
hover:scale-[1.02]

/* Shadow on hover */
hover:shadow-md hover:border-primary/20

/* Scale on press */
active:scale-[0.98]

/* Smooth transitions */
transition-all duration-200
```

### Animations

```css
/* Scale in */
.animate-scale-in
/* Usage: New cards, modals */

/* Slide up */
.animate-slide-up
/* Usage: Staggered list items */

/* Progress bar fill */
transition-all duration-500 ease-out
/* Usage: Progress bars update smoothly */
```

### Loading States

- Spinner: 2px border, primary color, smooth rotation
- Skeleton screens: Subtle pulse animation
- Disabled states: 50% opacity, no pointer events

---

## Accessibility

### Focus States

```css
.focus-ring
/* Provides visible focus outline */
outline-ring/50 (default)
focus-visible:ring-2 focus-visible:ring-ring
```

### Color Contrast

All color combinations meet WCAG AA standards:
- Text on background: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: Clear focus indicators

### Screen Readers

- Semantic HTML (nav, main, section)
- ARIA labels on icon buttons
- Form labels properly associated
- Status announcements for dynamic content

### Keyboard Navigation

- All interactive elements keyboard accessible
- Logical tab order
- Enter/Space for activation
- Escape to close modals

---

## Responsive Breakpoints

```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Mobile-First Strategy

1. Design for 375px (iPhone SE) first
2. Scale up with `sm:` and `md:` modifiers
3. Optimize touch targets (min 44x44px)
4. Thumb-reach zones for primary actions
5. Bottom navigation for mobile

---

## Best Practices

### Do's

- Use utility classes from the design system
- Leverage pre-built components
- Follow spacing system consistently
- Add micro-animations for delight
- Test on mobile devices
- Provide empty states
- Celebrate progress visually

### Don'ts

- Don't use arbitrary values (stick to system)
- Don't create custom components unnecessarily
- Don't ignore loading states
- Don't forget error states
- Don't overcomplicate interactions
- Don't sacrifice performance for beauty

---

## Quick Reference: Common Patterns

### Button Styles

```tsx
/* Primary CTA */
className="px-4 py-2 rounded-lg bg-primary text-primary-foreground
          hover:bg-primary/90 transition-all"

/* Secondary */
className="px-4 py-2 rounded-lg border border-border
          hover:bg-muted transition-all"

/* Ghost */
className="px-4 py-2 rounded-lg hover:bg-muted transition-all"
```

### Card Pattern

```tsx
className="goal-card p-5 space-y-4"
```

### Input Pattern

```tsx
className="quick-add"
/* or */
className="w-full px-4 py-2 rounded-lg border border-border
          focus:outline-none focus:ring-2 focus:ring-ring"
```

### Layout Stack

```tsx
className="space-y-6" /* Vertical spacing */
className="flex gap-4" /* Horizontal spacing */
```

---

## Social Media Optimization

### Screenshot-Worthy Moments

Design elements optimized for sharing:

1. **Hero gradient backgrounds** - Looks great in 9:16 crops
2. **Progress celebrations** - 100% completion animations
3. **Stat cards with trends** - Shareable achievements
4. **Empty states with personality** - First-time user onboarding

### Color Vibrancy

Colors chosen to "pop" on social feeds:
- High saturation for primary colors
- Strong contrast between elements
- Gradient effects catch the eye

---

## Implementation Speed Hacks

### Copy-Paste Utilities

```tsx
/* Quick goal card */
<div className="goal-card p-5">...</div>

/* Quick stat display */
<div className="stat-card">
  <p className="stat-label">Label</p>
  <p className="stat-value">42</p>
</div>

/* Quick progress bar */
<div className="progress-bar">
  <div className="progress-bar-fill progress-high" style={{ width: '75%' }} />
</div>
```

### Component Imports

```tsx
// Dashboard page imports
import { DashboardLayout, DashboardHeader, GoalsGrid, EmptyState } from '@/components/dashboard/dashboard-layout';
import { GoalCard, GoalCardCompact } from '@/components/dashboard/goal-card';
import { StatCard, StatCardGrid } from '@/components/dashboard/stat-card';
import { QuickAddGoal, QuickAddFAB } from '@/components/dashboard/quick-add-goal';
import { FilterControls, FilterControlsCompact } from '@/components/dashboard/filter-controls';
```

---

## Future Enhancements

Planned design system additions:

- [ ] Motion presets library (Framer Motion)
- [ ] Illustration system for empty states
- [ ] Confetti effects for goal completion
- [ ] Dark mode toggle component
- [ ] Toast notification system
- [ ] Modal/Dialog components
- [ ] Achievement badge designs
- [ ] Streak counter visuals
- [ ] Calendar view components

---

## Resources

- **Figma File**: [Coming soon]
- **Component Storybook**: [Coming soon]
- **Icon Set**: Lucide React (https://lucide.dev)
- **Tailwind Docs**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com

---

**Last Updated**: 2025-10-16
**Version**: 1.0.0
**Maintained by**: Design Team
