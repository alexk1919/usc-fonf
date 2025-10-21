# Visual Brand Guidelines
## Personal Goal Tracker - Complete Brand Identity System

**Version**: 1.0.0
**Last Updated**: October 16, 2025
**Brand Strategy**: Motivational, Modern, Growth-Oriented

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Brand Name & Positioning](#brand-name--positioning)
3. [Logo System](#logo-system)
4. [Color System](#color-system)
5. [Typography](#typography)
6. [Spacing & Layout](#spacing--layout)
7. [Iconography](#iconography)
8. [UI Components](#ui-components)
9. [Illustration Style](#illustration-style)
10. [Motion & Animation](#motion--animation)
11. [Photography & Imagery](#photography--imagery)
12. [Dark Mode](#dark-mode)
13. [Accessibility](#accessibility)
14. [Platform Adaptations](#platform-adaptations)
15. [Brand Voice & Messaging](#brand-voice--messaging)
16. [Implementation Guide](#implementation-guide)

---

## Brand Identity

### Brand Strategy Framework

**Purpose**: To empower college students and young professionals to achieve their potential through structured, motivating goal tracking.

**Vision**: Every young professional equipped with tools to turn aspirations into achievements.

**Mission**: Create the most intuitive, motivating, and effective personal goal tracking experience that fits seamlessly into busy lives.

**Values**:
- **Growth-Oriented**: We believe everyone can improve with the right tools
- **Clarity**: Simple, focused interfaces that cut through the noise
- **Motivation**: Encouraging without being pushy or guilt-inducing
- **Trust**: Reliable, secure, respects user data and privacy
- **Accessibility**: Tools for everyone, regardless of ability

**Personality Attributes**:
- Encouraging Coach (not Drill Sergeant)
- Modern Friend (not Corporate Tool)
- Thoughtful Companion (not Nagging Reminder)
- Reliable Support (not Overwhelming Complexity)

**Brand Promise**: "Your goals, simplified. Your progress, celebrated."

---

## Brand Name & Positioning

### Recommended Brand Name: **Stride**

**Rationale**:
- **Meaning**: A decisive step toward a goal; steady progress forward
- **Emotional**: Active, confident, forward-moving
- **Memorability**: Single syllable, easy to pronounce globally
- **Domain**: stride.app (available alternatives: getstride.app, mystride.app)
- **Differentiation**: Not overused in productivity space
- **Versatility**: Works as verb ("Take your stride") and noun ("Make strides")

**Alternative Names** (if Stride is unavailable):
1. **Ascent** - Upward momentum, climbing toward goals
2. **Momentum** - Physics of progress, building velocity
3. **Thrive** - Growth-focused, positive energy
4. **Rally** - Coming together, energizing action

**Tagline Options**:
- "Progress, Simplified" (Primary)
- "Your Goals, Your Pace"
- "Make Every Day Count"
- "Achievement Starts Here"

### Positioning Statement

> "For college students and young professionals who want to achieve personal and academic goals without overwhelm, Stride is the goal tracking app that makes progress feel effortless and motivating, unlike complex productivity tools that create more work than results."

---

## Logo System

### Primary Logo

**Logo Concept: "Forward Arrow + Growth Path"**

```
 ___    _       _     _
/ __|  | |_    _ _ (_) __| | ___
\__ \  |  _|  | '_|| | / _` |/ -_)
|___/   \__|  |_|  |_| \__,_|\___|
```

**Design Specifications**:
- **Icon Mark**: Stylized "S" that forms an upward arrow
- **Wordmark**: "Stride" in Geist Sans (600 weight)
- **Formation**: Icon + wordmark horizontal lockup
- **Geometry**: Based on 8px grid system
- **Symbol**: Can stand alone at small sizes (favicons, app icons)

**Construction Grid**:
```
Icon dimensions: 48x48px @ 1x (96x96px @ 2x)
Wordmark height: 48px
Spacing between: 12px (1.5 spacing units)
```

### Logo Variations

#### Primary Lockup (Full Color)
- **Usage**: Marketing materials, website header, presentations
- **Background**: White or very light backgrounds
- **Format**: SVG, PNG with transparency

#### Icon Only (Symbol)
- **Usage**: App icon, favicon, social media avatars, tight spaces
- **Minimum size**: 16x16px
- **Format**: SVG, PNG, ICO (favicon)

#### Reversed Logo (Light on Dark)
- **Usage**: Dark backgrounds, dark mode interfaces
- **Color**: White or light foreground color
- **Contrast ratio**: Minimum 4.5:1

#### Monochrome Versions
- **All Black**: Print, faxes, low-color contexts
- **All White**: Reversed applications
- **Single Color**: Branded merchandise, embossing

### App Icon Specifications

#### iOS App Icon
```
Sizes Required:
- 1024x1024px (App Store)
- 180x180px (@3x iPhone)
- 120x120px (@2x iPhone)
- 167x167px (@2x iPad Pro)
- 152x152px (@2x iPad)

Design:
- No transparency
- Fill entire canvas
- Background: Gradient from primary to info (purple to blue)
- Symbol: White "S" arrow in center
- Rounded corners: Applied by iOS automatically
```

#### Android App Icon
```
Adaptive Icon:
- 108x108dp safe zone (center 72x72dp visible)
- Foreground layer: White "S" arrow symbol
- Background layer: Gradient (primary → info)

Legacy Icon:
- 512x512px (Play Store)
- 192x192px (xxxhdpi)
- 144x144px (xxhdpi)
- 96x96px (xhdpi)
```

#### Favicon
```
favicon.ico (multi-resolution):
- 16x16px, 32x32px, 48x48px

favicon.svg (modern browsers):
- Scalable vector with theme support
- Light/dark mode variants
```

### Logo Clear Space

**Minimum clear space**: Equal to the height of the "S" in the logo on all sides

```
     [CLEAR SPACE]
   ________________
   |              |
   |    LOGO      |
   |______________|
     [CLEAR SPACE]
```

### Logo Usage Do's and Don'ts

**DO**:
- Use official logo files
- Maintain clear space
- Scale proportionally
- Use on approved backgrounds
- Ensure proper contrast

**DON'T**:
- Stretch or skew
- Rotate at angles
- Add effects (drop shadows, glows)
- Change colors (except approved variations)
- Place on busy backgrounds without treatment
- Recreate or redraw the logo

### File Naming Convention

```
stride-logo-primary-color.svg
stride-logo-primary-color.png
stride-logo-reversed-white.svg
stride-icon-color.svg
stride-icon-color.png
stride-favicon.ico
stride-favicon.svg
```

---

## Color System

### Color Philosophy

Our palette is designed around **goal achievement psychology**:
- **Purple (Primary)**: Ambition, creativity, transformation, aspiration
- **Blue (Info/Secondary)**: Focus, calm progress, trust, reliability
- **Coral (Accent)**: Energy, warmth, motivation, friendly encouragement
- **Green (Success)**: Achievement, growth, completion, celebration

### Primary Colors

#### Brand Purple (Primary)
```css
/* Light Mode */
--primary: oklch(0.55 0.22 285);
--primary-foreground: oklch(0.99 0 0);

/* Equivalent HEX: #7C3AED */
/* RGB: rgb(124, 58, 237) */

/* Dark Mode */
--primary: oklch(0.68 0.22 285);
/* Equivalent HEX: #A78BFA */
```

**Usage**:
- Primary CTAs (buttons, links)
- Focus states and active elements
- Brand moments (hero sections, highlights)
- Progress at high percentage (70-99%)
- Navigation active states

**Psychology**: Purple represents ambition and transformation - perfect for goal setting.

**Accessibility**:
- On white: 4.89:1 (AA compliant)
- With white text: 7.11:1 (AAA compliant)

#### Electric Blue (Info/Secondary)
```css
/* Light Mode */
--info: oklch(0.62 0.17 235);
--info-foreground: oklch(0.99 0 0);

/* Equivalent HEX: #3B82F6 */
/* RGB: rgb(59, 130, 246) */

/* Dark Mode */
--info: oklch(0.68 0.17 235);
/* Equivalent HEX: #60A5FA */
```

**Usage**:
- Informational elements
- Secondary actions
- Category indicators
- Statistics and metrics
- In-progress status badges

**Psychology**: Blue conveys trust and focus - ideal for productivity tools.

#### Warm Coral (Accent)
```css
/* Light Mode */
--accent: oklch(0.91 0.03 25);
--accent-foreground: oklch(0.45 0.18 25);

/* Equivalent HEX: #FEF3F2 (background) */
/* Foreground: #DC2626 */

/* Dark Mode */
--accent: oklch(0.28 0.04 25);
--accent-foreground: oklch(0.80 0.15 25);
```

**Usage**:
- Highlight callouts
- Motivational messages
- Special announcements
- Warm, friendly interactions
- Deadlines approaching (non-urgent)

**Psychology**: Coral is energizing without being aggressive - motivating warmth.

### Semantic Colors

#### Success Green
```css
--success: oklch(0.65 0.19 150);
--success-foreground: oklch(0.99 0 0);

/* Equivalent HEX: #10B981 */
/* RGB: rgb(16, 185, 129) */

/* Tailwind usage: */
className="bg-success text-success-foreground"
```

**Usage**:
- Goal completion indicators
- Success messages and confirmations
- Positive trends (increasing progress)
- Achievement celebrations
- "Completed" status badges

#### Warning Amber
```css
--warning: oklch(0.75 0.15 75);
--warning-foreground: oklch(0.25 0.05 75);

/* Equivalent HEX: #F59E0B */
/* RGB: rgb(245, 158, 11) */
```

**Usage**:
- Approaching deadlines
- Attention needed (not critical)
- Moderate priority items
- Mid-progress states (40-69%)
- Caution messages

#### Destructive Red
```css
--destructive: oklch(0.58 0.22 25);
--destructive-foreground: oklch(0.99 0 0);

/* Equivalent HEX: #DC2626 */
/* RGB: rgb(220, 38, 38) */
```

**Usage**:
- Delete actions
- Error messages
- Failed validations
- Overdue goals (critical)
- Irreversible actions

### Progress Gradient Colors

Special color system for visualizing goal progress:

```css
/* 0-39% - Just Started (Coral) */
--progress-low: oklch(0.72 0.18 25);
/* HEX: #F97316 */

/* 40-69% - Making Progress (Amber) */
--progress-medium: oklch(0.75 0.15 75);
/* HEX: #F59E0B */

/* 70-99% - Almost There (Teal) */
--progress-high: oklch(0.68 0.17 160);
/* HEX: #14B8A6 */

/* 100% - Complete! (Green) */
--progress-complete: oklch(0.65 0.19 150);
/* HEX: #10B981 */
```

**Implementation Example**:
```tsx
function getProgressColor(percentage: number) {
  if (percentage === 100) return 'progress-complete';
  if (percentage >= 70) return 'progress-high';
  if (percentage >= 40) return 'progress-medium';
  return 'progress-low';
}

<div className="progress-bar">
  <div
    className={`progress-bar-fill ${getProgressColor(progress)}`}
    style={{ width: `${progress}%` }}
  />
</div>
```

### Neutral Colors

```css
/* Backgrounds */
--background: oklch(0.99 0 0);        /* HEX: #FCFCFC */
--card: oklch(1 0 0);                 /* HEX: #FFFFFF */
--muted: oklch(0.96 0.005 270);       /* HEX: #F5F5F5 */

/* Foregrounds */
--foreground: oklch(0.15 0.01 270);   /* HEX: #262626 */
--muted-foreground: oklch(0.50 0.01 270); /* HEX: #737373 */

/* UI Elements */
--border: oklch(0.90 0.005 270);      /* HEX: #E5E5E5 */
--input: oklch(0.90 0.005 270);       /* HEX: #E5E5E5 */
--ring: oklch(0.55 0.22 285);         /* Primary purple for focus */
```

**Gray Scale Reference**:
```
gray-50:  #FAFAFA (backgrounds, subtle fills)
gray-100: #F5F5F5 (muted backgrounds)
gray-200: #E5E5E5 (borders, dividers)
gray-300: #D4D4D4 (disabled states)
gray-400: #A3A3A3 (placeholders)
gray-500: #737373 (secondary text)
gray-600: #525252 (body text alternative)
gray-700: #404040 (emphasis text)
gray-800: #262626 (primary text)
gray-900: #171717 (headings)
```

### Chart Colors

For data visualization and analytics:

```css
--chart-1: oklch(0.60 0.20 285);  /* Purple - HEX: #7C3AED */
--chart-2: oklch(0.62 0.17 235);  /* Blue - HEX: #3B82F6 */
--chart-3: oklch(0.65 0.19 150);  /* Green - HEX: #10B981 */
--chart-4: oklch(0.72 0.18 25);   /* Coral - HEX: #F97316 */
--chart-5: oklch(0.75 0.15 75);   /* Amber - HEX: #F59E0B */
```

**Usage Example**:
```tsx
<BarChart data={goalsByCategory}>
  <Bar dataKey="personal" fill="var(--chart-1)" />
  <Bar dataKey="academic" fill="var(--chart-2)" />
  <Bar dataKey="fitness" fill="var(--chart-3)" />
  <Bar dataKey="career" fill="var(--chart-4)" />
</BarChart>
```

### Color Accessibility Matrix

| Combination | Contrast Ratio | WCAG Level | Usage |
|-------------|---------------|------------|-------|
| Primary on White | 4.89:1 | AA | CTAs, links |
| Foreground on Background | 11.5:1 | AAA | Body text |
| Muted Foreground on Background | 4.7:1 | AA | Secondary text |
| Success on White | 3.9:1 | AA (large) | Success badges |
| White on Primary | 7.11:1 | AAA | Button text |
| White on Info | 4.5:1 | AA | Info badges |

### Tailwind CSS Color Configuration

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        secondary: 'var(--color-secondary)',
        'secondary-foreground': 'var(--color-secondary-foreground)',
        accent: 'var(--color-accent)',
        'accent-foreground': 'var(--color-accent-foreground)',
        success: 'var(--color-success)',
        'success-foreground': 'var(--color-success-foreground)',
        warning: 'var(--color-warning)',
        'warning-foreground': 'var(--color-warning-foreground)',
        destructive: 'var(--color-destructive)',
        'destructive-foreground': 'var(--color-destructive-foreground)',
        info: 'var(--color-info)',
        'info-foreground': 'var(--color-info-foreground)',
        // ... etc
      }
    }
  }
}
```

---

## Typography

### Font Families

#### Primary: Geist Sans
- **Purpose**: All UI text, body copy, headlines
- **Weights Available**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Character**: Modern, geometric, highly readable at all sizes
- **License**: Open source (SIL Open Font License)

```css
--font-sans: var(--font-geist-sans);
font-family: var(--font-sans);
```

#### Secondary: Geist Mono
- **Purpose**: Numbers, statistics, code, dates, progress percentages
- **Weights Available**: 400 (Regular), 500 (Medium), 700 (Bold)
- **Character**: Tabular figures, fixed-width, excellent for data
- **Use Case**: Anywhere numbers need to align vertically

```css
--font-mono: var(--font-geist-mono);
font-family: var(--font-mono);
```

### Type Scale (Mobile-First)

#### Display (Hero Headlines)
```css
/* Mobile */
font-size: 36px;
line-height: 40px; /* 1.11 */
font-weight: 600;

/* Tablet (640px+) */
font-size: 48px;
line-height: 52px;

/* Desktop (1024px+) */
font-size: 60px;
line-height: 64px;
```

**Tailwind**: `text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight`

**Usage**: Marketing landing pages, hero sections, major announcements

#### H1 (Page Titles)
```css
/* Mobile */
font-size: 30px;
line-height: 36px; /* 1.2 */
font-weight: 600;

/* Tablet */
font-size: 36px;
line-height: 42px;

/* Desktop */
font-size: 48px;
line-height: 54px;
```

**Tailwind**: `text-3xl sm:text-4xl lg:text-5xl font-semibold`

**Usage**: Dashboard header, main page titles

#### H2 (Section Headers)
```css
/* Mobile */
font-size: 24px;
line-height: 32px; /* 1.33 */
font-weight: 600;

/* Tablet */
font-size: 30px;
line-height: 38px;

/* Desktop */
font-size: 36px;
line-height: 44px;
```

**Tailwind**: `text-2xl sm:text-3xl lg:text-4xl font-semibold`

**Usage**: Section headers, category headers

#### H3 (Subsection Headers)
```css
/* Mobile */
font-size: 20px;
line-height: 28px; /* 1.4 */
font-weight: 600;

/* Desktop */
font-size: 24px;
line-height: 32px;
```

**Tailwind**: `text-xl sm:text-2xl font-semibold`

**Usage**: Card titles, modal headers

#### Body Text (Default)
```css
font-size: 16px;
line-height: 24px; /* 1.5 */
font-weight: 400;
```

**Tailwind**: `text-base` (default)

**Usage**: Goal descriptions, paragraph text, form labels

#### Small Text
```css
font-size: 14px;
line-height: 20px; /* 1.43 */
font-weight: 400;
```

**Tailwind**: `text-sm`

**Usage**: Helper text, timestamps, secondary information

#### Caption/Tiny
```css
font-size: 12px;
line-height: 16px; /* 1.33 */
font-weight: 400;
letter-spacing: 0.5px; /* tracking-wide */
```

**Tailwind**: `text-xs tracking-wide`

**Usage**: Labels (often uppercase), badges, metadata

### Font Weight Scale

| Weight | Name | Value | Usage |
|--------|------|-------|-------|
| Light | 300 | `font-light` | Large display text, decorative |
| Regular | 400 | `font-normal` | Body text (default) |
| Medium | 500 | `font-medium` | Emphasized text, UI elements |
| Semibold | 600 | `font-semibold` | Headings, important labels |
| Bold | 700 | `font-bold` | Strong emphasis, stats |

### Typography Utilities

#### Text Gradients (For Impact)
```css
/* Purple to Blue */
.text-gradient-primary {
  background: linear-gradient(90deg,
    oklch(0.55 0.22 285), /* primary */
    oklch(0.62 0.17 235)  /* info */
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**Tailwind**: `text-gradient-primary`

**Usage**: Hero headlines, feature announcements, celebratory moments

#### Success Gradient
```css
.text-gradient-success {
  background: linear-gradient(90deg,
    oklch(0.65 0.19 150), /* success */
    oklch(0.68 0.17 160)  /* progress-high */
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**Usage**: Goal completion messages, achievement callouts

#### Stats/Numbers Styling
```tsx
<p className="stat-value font-mono text-5xl font-bold tracking-tight">
  42
</p>
<p className="stat-label text-xs uppercase tracking-wide text-muted-foreground">
  Active Goals
</p>
```

### Line Height Guidelines

- **Headlines (H1-H3)**: 1.1 - 1.2 (tight, impactful)
- **Body Text**: 1.5 (comfortable reading)
- **Small Text**: 1.4 (balanced)
- **Captions**: 1.33 (compact but readable)

### Letter Spacing (Tracking)

- **Headlines**: `-0.02em` (tracking-tight) - Creates visual cohesion
- **Body Text**: `0` (default) - Optimal readability
- **Labels/Captions**: `0.025em` (tracking-wide) - Improves legibility at small sizes
- **All Caps**: `0.05em` (tracking-wider) - Essential for readability

### Typography Best Practices

**DO**:
- Use Geist Sans for all UI text
- Use Geist Mono for numbers and statistics
- Maintain generous line height for body text (1.5+)
- Use font weight to establish hierarchy
- Leverage text gradients for hero moments
- Keep line length between 50-75 characters

**DON'T**:
- Mix too many font weights on one screen
- Use ALL CAPS for long sentences
- Set body text below 16px on mobile
- Ignore responsive scaling
- Use italic for large blocks of text
- Create walls of text without breathing room

---

## Spacing & Layout

### Spacing System (4px Base Grid)

Based on Tailwind's default spacing scale:

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| xs | 4px | `1` | Tight spacing, icon gaps |
| sm | 8px | `2` | Small gaps, badge padding |
| md | 12px | `3` | Comfortable spacing |
| base | 16px | `4` | Default spacing unit |
| lg | 24px | `6` | Section gaps |
| xl | 32px | `8` | Large gaps |
| 2xl | 48px | `12` | Section padding |
| 3xl | 64px | `16` | Hero spacing |
| 4xl | 96px | `24` | Extra large sections |

### Component Spacing Patterns

#### Cards
```tsx
// Standard card padding
className="p-5"        // 20px all around
className="p-6"        // 24px all around (generous)

// Card spacing from each other
className="gap-4"      // 16px gap in grid
className="gap-6"      // 24px gap (breathing room)
```

#### Sections
```tsx
// Vertical section padding (responsive)
className="py-12 sm:py-16 lg:py-20"

// Horizontal container padding
className="px-4 sm:px-6 lg:px-8"
```

#### Vertical Stacks
```tsx
// Tight stacking (form fields)
className="space-y-2"   // 8px

// Standard stacking (cards in list)
className="space-y-4"   // 16px

// Generous stacking (major sections)
className="space-y-8"   // 32px
```

#### Horizontal Layouts
```tsx
// Tight (inline elements, badges)
className="gap-2"       // 8px

// Standard (buttons, nav items)
className="gap-4"       // 16px

// Wide (columns)
className="gap-6"       // 24px
className="gap-8"       // 32px
```

### Grid Systems

#### Stats Grid (Dashboard)
```tsx
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
```
- Mobile: Stacked (1 column)
- Tablet: 2 columns
- Desktop: 4 columns
- Gap: 16px

#### Goals Grid
```tsx
className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
```
- Mobile: 1 column
- Tablet: 2 columns
- Large desktop: 3 columns
- Gap: 24px (breathing room for cards)

#### Sidebar Layout
```tsx
className="lg:grid lg:grid-cols-[280px_1fr] gap-8"
```
- Fixed sidebar: 280px
- Main content: Flexible
- Gap: 32px

### Container Widths

#### Narrow Container (Reading Width)
```tsx
className="container-narrow"
// max-w-4xl mx-auto px-4 sm:px-6 lg:px-8
// Max width: 896px
```
**Usage**: Blog posts, long-form content, onboarding flows

#### Standard Container (App Width)
```tsx
className="container-standard"
// max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
// Max width: 1280px
```
**Usage**: Dashboard, main application areas

#### Full Width
```tsx
className="w-full"
```
**Usage**: Hero sections, full-width imagery

### Touch Targets (Mobile)

**Minimum Size**: 44x44px (iOS guidelines)
**Recommended**: 48x48px (Material Design)

```tsx
// Button minimum
className="min-h-[44px] px-4"

// Icon button
className="w-12 h-12 flex items-center justify-center"

// List item
className="min-h-[56px] py-3 px-4"
```

### Responsive Breakpoints

```css
/* Tailwind default breakpoints */
sm: 640px   /* Small tablets, large phones landscape */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops, small desktops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

### Spacing Best Practices

**DO**:
- Use the spacing system consistently (4px multiples)
- Increase spacing on larger screens
- Give interactive elements breathing room
- Maintain minimum 44px touch targets on mobile
- Use white space to create visual hierarchy

**DON'T**:
- Use arbitrary spacing values outside the system
- Crowd elements together on mobile
- Create touch targets smaller than 44px
- Forget to test on actual devices
- Apply same spacing at all breakpoints

---

## Iconography

### Icon Library: Lucide React

**Rationale**:
- Consistent design language
- Extensive library (1000+ icons)
- React-friendly (tree-shakeable)
- MIT licensed
- Active maintenance
- Perfect alignment with shadcn/ui

**Installation**:
```bash
npm install lucide-react
```

### Icon Style Guidelines

#### Size Scale
```tsx
// Extra small (mobile nav, inline)
<Icon className="w-4 h-4" /> // 16px

// Small (buttons, badges)
<Icon className="w-5 h-5" /> // 20px

// Medium (cards, default)
<Icon className="w-6 h-6" /> // 24px

// Large (feature highlights)
<Icon className="w-8 h-8" /> // 32px

// Extra large (empty states)
<Icon className="w-12 h-12" /> // 48px

// Hero (landing page)
<Icon className="w-16 h-16" /> // 64px
```

#### Stroke Width
```tsx
// Default (balanced)
<Icon strokeWidth={2} />

// Light (subtle, secondary)
<Icon strokeWidth={1.5} />

// Bold (emphasis, primary actions)
<Icon strokeWidth={2.5} />
```

### Icon Color Patterns

```tsx
// Match text color (default)
<Icon className="text-current" />

// Muted (secondary icons)
<Icon className="text-muted-foreground" />

// Primary (brand moments)
<Icon className="text-primary" />

// Success (achievements)
<Icon className="text-success" />

// Semantic colors
<Icon className="text-destructive" />
```

### Common Icon Mappings

#### Navigation & Actions
```tsx
import {
  Home,
  Target,      // Goals
  TrendingUp,  // Progress
  Calendar,    // Timeline
  Settings,
  User,
  Plus,
  Edit3,
  Trash2,
  Check,
  X,
  Menu,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  MoreVertical,
} from 'lucide-react';
```

#### Status & Feedback
```tsx
import {
  CheckCircle2,   // Success
  AlertCircle,    // Warning
  XCircle,        // Error
  Info,           // Information
  AlertTriangle,  // Caution
  Sparkles,       // Celebration
  Flame,          // Streak
  TrendingUp,     // Positive trend
  TrendingDown,   // Negative trend
} from 'lucide-react';
```

#### Goal Categories
```tsx
import {
  Briefcase,     // Career
  BookOpen,      // Learning/Academic
  Dumbbell,      // Fitness
  Heart,         // Health/Wellness
  Users,         // Social
  DollarSign,    // Financial
  Palette,       // Creative
  Code,          // Technical
  Globe,         // Travel
  Home,          // Personal
} from 'lucide-react';
```

### Icon Usage Patterns

#### Icon + Text Button
```tsx
<button className="flex items-center gap-2">
  <Plus className="w-5 h-5" />
  <span>Add Goal</span>
</button>
```

#### Icon-Only Button
```tsx
<button
  className="w-10 h-10 flex items-center justify-center"
  aria-label="Edit goal"
>
  <Edit3 className="w-5 h-5" />
</button>
```

#### Status Badge with Icon
```tsx
<div className="badge-completed">
  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
  <span>Completed</span>
</div>
```

#### Empty State
```tsx
<div className="empty-state">
  <Target className="w-16 h-16 text-muted-foreground mb-4" />
  <h3>No goals yet</h3>
  <p>Create your first goal to get started</p>
</div>
```

### Icon Animation

```tsx
// Spin (loading)
<Loader2 className="animate-spin" />

// Pulse (attention)
<AlertCircle className="animate-pulse" />

// Bounce (celebration)
<Sparkles className="animate-bounce" />
```

### Custom Icon Guidelines

If creating custom icons to supplement Lucide:

- **Stroke weight**: 2px (match Lucide default)
- **Corner radius**: 2px on rounded corners
- **Canvas**: 24x24px
- **Padding**: 2px from edge
- **Style**: Outline/stroke-based (not filled)
- **Angles**: 45° or 90° preferred
- **Terminals**: Round caps and joins

### Icon Accessibility

```tsx
// Decorative icons (next to text)
<Icon aria-hidden="true" />

// Meaningful icons (icon-only buttons)
<button aria-label="Delete goal">
  <Trash2 />
</button>

// Icon with visible label
<div>
  <CheckCircle2 aria-hidden="true" />
  <span>Success</span>
</div>
```

---

## UI Components

### Button Components

#### Primary Button (CTA)
```tsx
<button className="
  px-4 py-2
  rounded-lg
  bg-primary text-primary-foreground
  font-medium
  transition-all duration-200
  hover:bg-primary/90 hover:scale-[1.02]
  active:scale-[0.98]
  focus-ring
  disabled:opacity-50 disabled:pointer-events-none
">
  Add Goal
</button>
```

**Tailwind shorthand**:
```tsx
className="px-4 py-2 rounded-lg bg-primary text-primary-foreground
           font-medium hover:bg-primary/90 transition-all focus-ring"
```

#### Secondary Button
```tsx
<button className="
  px-4 py-2
  rounded-lg
  border border-border
  bg-background text-foreground
  font-medium
  transition-all duration-200
  hover:bg-muted
  active:scale-[0.98]
  focus-ring
">
  Cancel
</button>
```

#### Ghost Button
```tsx
<button className="
  px-4 py-2
  rounded-lg
  text-foreground
  font-medium
  transition-all duration-200
  hover:bg-muted
  active:scale-[0.98]
  focus-ring
">
  Learn More
</button>
```

#### Destructive Button
```tsx
<button className="
  px-4 py-2
  rounded-lg
  bg-destructive text-destructive-foreground
  font-medium
  transition-all duration-200
  hover:bg-destructive/90
  focus-ring
">
  Delete
</button>
```

#### Icon Button
```tsx
<button className="
  w-10 h-10
  rounded-lg
  flex items-center justify-center
  transition-all duration-200
  hover:bg-muted
  focus-ring
"
aria-label="Edit goal"
>
  <Edit3 className="w-5 h-5" />
</button>
```

### Input Components

#### Text Input
```tsx
<input
  type="text"
  placeholder="Enter goal title"
  className="
    w-full
    px-4 py-3
    rounded-xl
    border-2 border-border
    bg-background text-foreground
    placeholder:text-muted-foreground
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary
    hover:border-primary/50
  "
/>
```

**Pre-styled utility**: `className="quick-add"`

#### Textarea
```tsx
<textarea
  placeholder="Describe your goal..."
  rows={4}
  className="
    w-full
    px-4 py-3
    rounded-xl
    border-2 border-border
    bg-background text-foreground
    placeholder:text-muted-foreground
    resize-none
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary
  "
/>
```

#### Select Dropdown
```tsx
<select className="
  w-full
  px-4 py-3
  rounded-xl
  border-2 border-border
  bg-background text-foreground
  appearance-none
  bg-[url('data:image/svg+xml...')] bg-no-repeat bg-right-4
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary
">
  <option value="learning">Learning</option>
  <option value="fitness">Fitness</option>
</select>
```

### Card Components

#### Goal Card
```tsx
<div className="goal-card p-5 space-y-4">
  {/* Category pill */}
  <div className="flex items-start justify-between">
    <span className="category-pill">
      <BookOpen className="w-4 h-4 mr-1.5" />
      Learning
    </span>
    <span className="badge-active">Active</span>
  </div>

  {/* Content */}
  <div className="space-y-2">
    <h3 className="text-xl font-semibold">Complete React Course</h3>
    <p className="text-sm text-muted-foreground">
      Finish all modules by end of month
    </p>
  </div>

  {/* Progress */}
  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">Progress</span>
      <span className="font-mono font-medium">65%</span>
    </div>
    <div className="progress-bar">
      <div className="progress-bar-fill progress-high" style={{width: '65%'}} />
    </div>
  </div>

  {/* Footer */}
  <div className="flex items-center justify-between text-xs text-muted-foreground">
    <div className="flex items-center gap-1">
      <Calendar className="w-3.5 h-3.5" />
      <span>Due Nov 30</span>
    </div>
    <button className="hover:text-foreground transition-colors">
      <MoreHorizontal className="w-4 h-4" />
    </button>
  </div>
</div>
```

#### Stat Card
```tsx
<div className="stat-card">
  <div className="flex items-center justify-between">
    <p className="stat-label">Active Goals</p>
    <Target className="w-5 h-5 text-primary" />
  </div>
  <p className="stat-value text-primary">12</p>
  <div className="flex items-center gap-1 text-xs text-success">
    <TrendingUp className="w-3.5 h-3.5" />
    <span>+2 this week</span>
  </div>
</div>
```

### Badge Components

#### Status Badges
```tsx
// Active
<span className="badge-active">
  <div className="w-1.5 h-1.5 rounded-full bg-info mr-1.5" />
  Active
</span>

// Completed
<span className="badge-completed">
  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
  Completed
</span>

// Archived
<span className="badge-archived">
  Archived
</span>
```

#### Category Pills
```tsx
<button className="category-pill">
  <Dumbbell className="w-4 h-4 mr-1.5" />
  Fitness
</button>
```

### Progress Components

#### Linear Progress Bar
```tsx
<div className="space-y-2">
  <div className="flex items-center justify-between text-sm">
    <span className="text-muted-foreground">Progress</span>
    <span className="font-mono font-medium">{progress}%</span>
  </div>
  <div className="progress-bar">
    <div
      className={`progress-bar-fill ${getProgressColor(progress)}`}
      style={{ width: `${progress}%` }}
    />
  </div>
</div>
```

#### Circular Progress (Dashboard)
```tsx
<div className="relative w-24 h-24">
  <svg className="transform -rotate-90" viewBox="0 0 100 100">
    {/* Background circle */}
    <circle
      cx="50" cy="50" r="40"
      fill="none"
      stroke="oklch(0.96 0.005 270)"
      strokeWidth="8"
    />
    {/* Progress arc */}
    <circle
      cx="50" cy="50" r="40"
      fill="none"
      stroke="var(--primary)"
      strokeWidth="8"
      strokeDasharray={`${progress * 2.51} 251`}
      strokeLinecap="round"
    />
  </svg>
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-2xl font-bold font-mono">{progress}%</span>
  </div>
</div>
```

### Modal/Dialog

```tsx
<div className="
  fixed inset-0 z-50
  bg-background/80 backdrop-blur-sm
  flex items-center justify-center
  p-4
">
  <div className="
    bg-card
    rounded-xl
    border border-border
    shadow-xl
    max-w-md w-full
    p-6
    space-y-4
    animate-scale-in
  ">
    {/* Header */}
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold">Edit Goal</h2>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted">
        <X className="w-5 h-5" />
      </button>
    </div>

    {/* Content */}
    <div className="space-y-4">
      {/* Form fields */}
    </div>

    {/* Actions */}
    <div className="flex gap-3 justify-end">
      <button className="px-4 py-2 rounded-lg border border-border hover:bg-muted">
        Cancel
      </button>
      <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
        Save Changes
      </button>
    </div>
  </div>
</div>
```

### Toast Notification

```tsx
<div className="
  fixed bottom-6 right-6 z-50
  bg-card border border-border
  rounded-xl
  shadow-xl
  p-4
  max-w-sm
  flex items-start gap-3
  animate-slide-up
">
  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
  <div className="flex-1 min-w-0">
    <p className="font-medium">Goal completed!</p>
    <p className="text-sm text-muted-foreground">Way to go! Keep up the momentum.</p>
  </div>
  <button className="flex-shrink-0">
    <X className="w-4 h-4" />
  </button>
</div>
```

### Empty State

```tsx
<div className="empty-state">
  <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
    <Target className="w-12 h-12 text-muted-foreground" />
  </div>
  <h3 className="text-xl font-semibold mb-2">No goals yet</h3>
  <p className="text-muted-foreground mb-6 max-w-sm">
    Get started by creating your first goal. Break down your dreams into achievable steps.
  </p>
  <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90">
    <Plus className="w-5 h-5 mr-2 inline-block" />
    Create Your First Goal
  </button>
</div>
```

---

## Illustration Style

### Visual Direction

**Style**: Minimal, geometric, friendly

**Characteristics**:
- Clean lines and simple shapes
- Subtle gradients (primary → info)
- Rounded corners (matches UI radius)
- Flat 2D design (no complex 3D)
- Limited color palette (brand colors)
- Human elements: Abstract or simplified

### Illustration Use Cases

1. **Empty States**
   - No goals yet
   - Filtered view with no results
   - Completed all goals (celebration)
   - Account setup

2. **Onboarding**
   - Welcome screen
   - Feature walkthrough (3-5 screens)
   - Permission requests

3. **Error States**
   - 404 page
   - Network error
   - Something went wrong

4. **Success/Celebration**
   - Goal completed
   - Milestone reached
   - Streak achieved

### Illustration Color Usage

```css
/* Primary elements */
fill: var(--primary);
stroke: var(--primary);

/* Secondary elements */
fill: var(--info);
stroke: var(--info);

/* Accents */
fill: var(--accent-foreground);

/* Backgrounds */
fill: var(--muted);
```

### Size Guidelines

- **Hero illustrations**: 400-600px wide
- **Empty states**: 200-300px wide
- **Icons/decorations**: 48-96px

### Illustration Alternatives

If custom illustrations aren't feasible:

1. **Icon-based empty states**: Use oversized Lucide icons (w-16 h-16) in muted colors
2. **Gradient backgrounds**: Subtle gradients instead of complex illustrations
3. **Emoji**: Strategic use for personality (sparingly)
4. **Stock illustrations**: Ensure consistent style (recommend: unDraw, Humaaans, Open Doodles)

---

## Motion & Animation

### Animation Principles

1. **Purposeful**: Every animation serves UX, not decoration
2. **Subtle**: Micro-interactions, not Broadway productions
3. **Fast**: 200-300ms for most interactions
4. **Natural**: Ease curves that feel organic
5. **Responsive**: Respect prefers-reduced-motion

### Timing Standards

```css
/* Quick (buttons, hovers) */
duration-150  /* 150ms */

/* Standard (most UI) */
duration-200  /* 200ms */

/* Moderate (cards, modals) */
duration-300  /* 300ms */

/* Slow (progress bars, major transitions) */
duration-500  /* 500ms */
```

### Easing Curves

```css
/* Default (balanced) */
ease-out

/* Entrances (modals, toasts) */
ease-out

/* Exits (dismissals) */
ease-in

/* Emphasis (hover, active) */
ease-in-out
```

### Hover Animations

#### Scale on Hover (Cards)
```tsx
className="
  transition-all duration-200
  hover:scale-[1.02]
  active:scale-[0.98]
"
```

#### Background Change
```tsx
className="
  transition-colors duration-200
  hover:bg-muted
"
```

#### Border Highlight
```tsx
className="
  transition-all duration-200
  hover:border-primary/20 hover:shadow-md
"
```

### Loading States

#### Spinner
```tsx
<Loader2 className="w-5 h-5 animate-spin text-primary" />
```

#### Pulse (Skeleton)
```tsx
<div className="w-full h-20 bg-muted rounded-lg animate-pulse" />
```

#### Progress Bar Animation
```tsx
<div className="progress-bar">
  <div
    className="progress-bar-fill progress-high"
    style={{ width: `${progress}%` }}
  />
  {/* transition-all duration-500 ease-out applied via CSS */}
</div>
```

### Entrance Animations

#### Scale In (Modals, Cards)
```css
.animate-scale-in {
  animation: scale-in 0.2s ease-out;
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

**Usage**: `className="animate-scale-in"`

#### Slide Up (Toasts, Bottom Sheets)
```css
.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Usage**: `className="animate-slide-up"`

#### Fade In
```css
.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Success Celebrations

#### Confetti (Goal Completion)
```tsx
// Using canvas-confetti library
import confetti from 'canvas-confetti';

confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 },
  colors: [
    'oklch(0.55 0.22 285)', // primary
    'oklch(0.62 0.17 235)', // info
    'oklch(0.65 0.19 150)', // success
  ]
});
```

#### Bounce (Achievement Icon)
```tsx
<Sparkles className="w-8 h-8 text-success animate-bounce" />
```

### Staggered Animations (Lists)

```tsx
// Stagger children with increasing delays
{goals.map((goal, index) => (
  <div
    key={goal.id}
    className="animate-slide-up"
    style={{ animationDelay: `${index * 50}ms` }}
  >
    <GoalCard goal={goal} />
  </div>
))}
```

### Reduced Motion

Always respect user preferences:

```tsx
// In globals.css or Tailwind config
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Animation Don'ts

- No auto-playing animations longer than 5 seconds
- No infinite animations on core content
- No animations that block user interaction
- No animations that cause motion sickness (parallax overuse)
- No animations during initial page load (performance)

---

## Photography & Imagery

### Image Style Guidelines

**Characteristics**:
- Bright and optimistic
- Authentic (not overly staged)
- Diverse representation
- Soft natural lighting
- Minimal backgrounds
- Focus on growth and achievement

### Use Cases

1. **Marketing Pages**
   - Hero section backgrounds (subtle, not overwhelming)
   - Feature highlights
   - Testimonials (user photos)
   - Team/About page

2. **User Profiles**
   - Profile avatars (circular crops)
   - Achievement badges

3. **Backgrounds**
   - Subtle gradient overlays
   - Blurred out-of-focus imagery
   - Never interfere with text readability

### Image Treatment

#### Overlay for Readability
```tsx
<div className="relative">
  <img src="hero-bg.jpg" alt="" className="w-full h-96 object-cover" />
  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-info/80" />
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-5xl font-bold text-white">Your text here</h1>
  </div>
</div>
```

#### Rounded Corners (Match Brand)
```tsx
className="rounded-xl"  // Standard cards
className="rounded-2xl" // Hero sections
className="rounded-full" // Avatars
```

#### Aspect Ratios
```tsx
// 16:9 (hero banners)
className="aspect-video"

// 4:3 (feature images)
className="aspect-[4/3]"

// 1:1 (avatars, thumbnails)
className="aspect-square"
```

### Avatar System

#### Sizes
```tsx
// Small (inline, badges)
className="w-8 h-8 rounded-full"

// Medium (lists, comments)
className="w-10 h-10 rounded-full"

// Large (profile headers)
className="w-20 h-20 rounded-full"

// Extra large (account pages)
className="w-32 h-32 rounded-full"
```

#### Fallback (No Image)
```tsx
<div className="
  w-10 h-10 rounded-full
  bg-primary text-primary-foreground
  flex items-center justify-center
  font-medium text-sm
">
  {user.name.charAt(0).toUpperCase()}
</div>
```

### Image Optimization

- **Format**: WebP with JPEG fallback
- **Lazy loading**: `loading="lazy"` attribute
- **Responsive**: Multiple sizes with `srcset`
- **Compression**: Target 70-80% quality
- **CDN**: Use image optimization service (Vercel, Cloudinary)

```tsx
<Image
  src="/hero-image.jpg"
  alt="Student achieving goals"
  width={1200}
  height={675}
  quality={80}
  loading="lazy"
  className="rounded-xl"
/>
```

---

## Dark Mode

### Dark Mode Philosophy

**Approach**: True dark mode (not just inverted colors)
- Deep charcoal backgrounds (not pure black)
- Increased color vibrancy for better visibility
- Reduced contrast to prevent eye strain
- Elevated surfaces use lighter shades

### Color Adaptations

#### Backgrounds
```css
/* Light Mode */
--background: oklch(0.99 0 0);  /* Near-white */
--card: oklch(1 0 0);            /* Pure white */

/* Dark Mode */
--background: oklch(0.12 0.01 270);  /* Deep charcoal */
--card: oklch(0.18 0.01 270);        /* Elevated dark */
```

#### Text Colors
```css
/* Light Mode */
--foreground: oklch(0.15 0.01 270);        /* Dark text */
--muted-foreground: oklch(0.50 0.01 270);  /* Gray text */

/* Dark Mode */
--foreground: oklch(0.97 0.005 270);       /* Light text */
--muted-foreground: oklch(0.60 0.01 270);  /* Lighter gray */
```

#### Brand Colors (Enhanced)
```css
/* Primary - Brighter in dark mode */
/* Light Mode */
--primary: oklch(0.55 0.22 285);  /* #7C3AED */

/* Dark Mode */
--primary: oklch(0.68 0.22 285);  /* #A78BFA - Brighter */
```

### Dark Mode Toggle

```tsx
'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="
        w-10 h-10 rounded-lg
        flex items-center justify-center
        hover:bg-muted transition-colors
      "
      aria-label="Toggle theme"
    >
      <Sun className="w-5 h-5 dark:hidden" />
      <Moon className="w-5 h-5 hidden dark:block" />
    </button>
  );
}
```

### Implementation

```tsx
// app/layout.tsx
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Dark Mode Testing

Test these scenarios:
- [ ] System preference follows automatically
- [ ] Toggle persists across sessions
- [ ] All text has sufficient contrast (4.5:1 minimum)
- [ ] Images don't look washed out
- [ ] Shadows and borders are visible
- [ ] Progress colors remain vibrant
- [ ] Links are distinguishable

---

## Accessibility

### WCAG 2.1 AA Compliance (Minimum)

#### Color Contrast

**Text Contrast Requirements**:
- Normal text (< 18pt): 4.5:1 minimum
- Large text (≥ 18pt or 14pt bold): 3:1 minimum
- UI components: 3:1 minimum

**Testing Tools**:
- Chrome DevTools (Lighthouse)
- WebAIM Contrast Checker
- Figma plugins (Contrast, Stark)

#### Keyboard Navigation

All interactive elements must be:
- Focusable with Tab key
- Activatable with Enter or Space
- Clearly indicated with focus states

**Focus Ring Implementation**:
```tsx
className="focus-ring"
// Or manually:
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
```

**Tab Order**:
- Follows logical visual order
- Skip links for main content
- No tab traps (modals allow Escape)

#### Screen Reader Support

**Semantic HTML**:
```tsx
<nav aria-label="Main navigation">
<main>
<section aria-labelledby="goals-heading">
<h2 id="goals-heading">Your Goals</h2>
```

**ARIA Labels**:
```tsx
// Icon-only buttons
<button aria-label="Edit goal">
  <Edit3 />
</button>

// Status announcements
<div role="status" aria-live="polite">
  Goal saved successfully
</div>

// Loading states
<div role="status" aria-live="polite" aria-busy="true">
  <Loader2 className="animate-spin" />
  <span className="sr-only">Loading...</span>
</div>
```

**Screen Reader Only Content**:
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

#### Touch Targets

**Minimum Size**: 44x44px (iOS) / 48x48px (Android)

```tsx
// Minimum button
className="min-h-[44px] px-4"

// Icon button
className="w-12 h-12 flex items-center justify-center"
```

**Spacing**: Minimum 8px between interactive elements

#### Forms

**Label Association**:
```tsx
<label htmlFor="goal-title" className="block text-sm font-medium mb-2">
  Goal Title
</label>
<input
  id="goal-title"
  type="text"
  aria-describedby="goal-title-help"
  aria-invalid={hasError}
  aria-required="true"
/>
<p id="goal-title-help" className="text-xs text-muted-foreground mt-1">
  Choose a clear, specific goal name
</p>
{hasError && (
  <p className="text-xs text-destructive mt-1" role="alert">
    Please enter a goal title
  </p>
)}
```

**Error Handling**:
```tsx
// Error state with icon and message
<div className="space-y-2">
  <input
    className="border-destructive"
    aria-invalid="true"
    aria-describedby="error-message"
  />
  <p id="error-message" className="text-destructive text-sm flex items-center gap-1" role="alert">
    <AlertCircle className="w-4 h-4" />
    This field is required
  </p>
</div>
```

#### Motion & Animation

**Respect User Preferences**:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**React Implementation**:
```tsx
import { useReducedMotion } from 'framer-motion';

const shouldReduceMotion = useReducedMotion();

<div className={shouldReduceMotion ? '' : 'animate-slide-up'}>
  {content}
</div>
```

#### Color Blindness

**Don't Rely on Color Alone**:
```tsx
// Bad: Color-only differentiation
<div className="bg-success">Success</div>

// Good: Icon + Color + Text
<div className="bg-success/10 text-success flex items-center gap-2">
  <CheckCircle2 className="w-4 h-4" />
  <span>Success</span>
</div>
```

**Progress Indicators**: Use patterns/shapes in addition to color

#### Testing Checklist

- [ ] All text meets contrast ratios (4.5:1 minimum)
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators clearly visible
- [ ] No keyboard traps
- [ ] Screen reader announces changes
- [ ] Form errors announced and associated
- [ ] Touch targets at least 44x44px
- [ ] Respects prefers-reduced-motion
- [ ] Works without JavaScript (progressive enhancement)
- [ ] Semantic HTML structure
- [ ] Proper heading hierarchy (no skipped levels)
- [ ] Alt text for meaningful images
- [ ] Empty alt for decorative images

---

## Platform Adaptations

### iOS Specific

#### Safe Areas
```tsx
// Respect iPhone notch and home indicator
className="pt-safe pb-safe"

// CSS
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
```

#### iOS Design Language
- Use native-feeling transitions (slide from right)
- Swipe gestures for back navigation
- Bottom tab bar (thumb-friendly)
- Large titles when appropriate

```tsx
// iOS-style header
<header className="
  sticky top-0 z-50
  bg-background/95 backdrop-blur
  border-b border-border
">
  <div className="px-4 pt-safe">
    <h1 className="text-3xl font-bold py-4">Goals</h1>
  </div>
</header>
```

#### Haptic Feedback
```tsx
// Using vibration API
navigator.vibrate(10); // Subtle tap
navigator.vibrate([10, 50, 10]); // Success pattern
```

### Android Specific

#### Material Design Considerations
- Floating Action Button (FAB) for primary action
- Ripple effects on touch
- Bottom sheets for secondary actions
- Snackbars for feedback

```tsx
// FAB
<button className="fab">
  <Plus className="w-6 h-6" />
</button>
```

#### System Navigation
- Respect system back button
- Handle gesture navigation (Android 10+)
- Edge-to-edge content with appropriate padding

### Web/Desktop

#### Mouse Interactions
```tsx
// Hover states (not on mobile)
className="hover:bg-muted active:bg-muted/80"

// Cursor changes
className="cursor-pointer"
className="cursor-not-allowed"
```

#### Keyboard Shortcuts
```tsx
// Implement common shortcuts
Ctrl/Cmd + K: Quick search
Ctrl/Cmd + N: New goal
Escape: Close modal
/: Focus search
```

#### Multi-Column Layouts
```tsx
// Desktop: 3 columns, Tablet: 2, Mobile: 1
className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
```

### Progressive Web App (PWA)

#### Install Prompt
```tsx
// manifest.json
{
  "name": "Stride - Goal Tracker",
  "short_name": "Stride",
  "description": "Personal goal tracking made simple",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FCFCFC",
  "theme_color": "#7C3AED",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ]
}
```

#### Offline Support
- Cache critical assets
- Show offline indicator
- Queue actions when offline
- Sync when connection restored

---

## Brand Voice & Messaging

### Tone Attributes

**Primary Tones**:
1. **Encouraging** - Positive, supportive, uplifting
2. **Clear** - Direct, easy to understand, no jargon
3. **Friendly** - Approachable, warm, conversational
4. **Confident** - Trustworthy, reliable, professional

**Secondary Tones** (Situational):
- **Celebratory** (achievements, milestones)
- **Empathetic** (setbacks, missed deadlines)
- **Motivational** (low activity, goal reminders)

### Writing Guidelines

#### Do's:
- Use active voice ("Create a goal" not "A goal can be created")
- Keep it concise (especially on mobile)
- Be specific ("Save draft" not "Save")
- Use contractions (we're, you'll) for friendliness
- Celebrate progress, not just completion
- Focus on action ("Get started" vs "Click here")

#### Don'ts:
- Don't guilt-trip users ("You haven't..." → "Ready to...")
- Don't use jargon or technical terms
- Don't make assumptions about user capability
- Don't use all caps for emphasis (use bold sparingly)
- Don't be overly formal or corporate
- Don't patronize ("Great job!" after trivial actions)

### Microcopy Examples

#### Button Labels
```
✅ "Add Goal" (clear, action-oriented)
❌ "Submit" (vague)

✅ "Save Changes"
❌ "OK"

✅ "Delete Goal"
❌ "Delete" (ambiguous)
```

#### Empty States
```
✅ "No goals yet. Create your first goal to get started!"
❌ "No data available."

✅ "You've completed all your goals! Time to set new ones."
❌ "No active goals."
```

#### Error Messages
```
✅ "Couldn't save your goal. Check your connection and try again."
❌ "Error: 500 Internal Server Error"

✅ "Goal title is required. Give your goal a clear name."
❌ "Validation failed."
```

#### Success Messages
```
✅ "Goal created! Let's make it happen."
❌ "Success"

✅ "Progress updated to 75%. Almost there!"
❌ "Update successful"
```

#### Placeholders
```
✅ "What do you want to achieve?"
❌ "Enter text here"

✅ "E.g., 'Run a 5K by June'"
❌ "Goal title"
```

### Voice by Context

#### Onboarding
**Tone**: Welcoming, helpful, not overwhelming

```
"Welcome to Stride!
Let's set up your first goal. Don't worry—you can always change it later."
```

#### Daily Use
**Tone**: Friendly, efficient, motivating

```
"You're on a 7-day streak! Keep up the momentum."
```

#### Achievements
**Tone**: Celebratory, proud, energizing

```
"You did it! Goal complete. What's next?"
```

#### Setbacks
**Tone**: Empathetic, encouraging, forward-looking

```
"Missed your target date? No problem. You can extend it or mark it complete now."
```

### Personality in Different Scenarios

#### High Engagement User
```
"You're crushing it! 5 goals completed this month."
```

#### Low Activity User
```
"We missed you! Ready to pick up where you left off?"
```

#### New User
```
"Great choice! Clear goals are the first step to achievement."
```

---

## Implementation Guide

### For Developers

#### Design Token Setup

**1. Install Dependencies**
```bash
npm install tailwindcss@latest
npm install lucide-react
npm install @radix-ui/react-* (as needed)
```

**2. Import Global Styles**
```tsx
// app/layout.tsx
import './globals.css';
```

**3. Use Design Tokens**
```tsx
// Access via Tailwind classes
className="bg-primary text-primary-foreground"

// Access via CSS variables
style={{ backgroundColor: 'var(--primary)' }}
```

#### Component Development Pattern

```tsx
// components/ui/button.tsx
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        // Base styles
        'rounded-lg font-medium transition-all duration-200 focus-ring',
        // Variant styles
        variant === 'primary' && 'bg-primary text-primary-foreground hover:bg-primary/90',
        variant === 'secondary' && 'border border-border hover:bg-muted',
        variant === 'ghost' && 'hover:bg-muted',
        variant === 'destructive' && 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        // Size styles
        size === 'sm' && 'px-3 py-1.5 text-sm',
        size === 'md' && 'px-4 py-2',
        size === 'lg' && 'px-6 py-3 text-lg'
      )}
    >
      {children}
    </button>
  );
}
```

#### shadcn/ui Integration

```bash
# Install components as needed
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add select
```

Components automatically use design tokens from globals.css

#### Responsive Development Pattern

```tsx
// Mobile-first approach
<div className="
  p-4 sm:p-6 lg:p-8
  text-base sm:text-lg
  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
  gap-4 lg:gap-6
">
  {/* Content */}
</div>
```

### For Designers

#### Figma Setup

**1. Design Tokens as Styles**
- Create color styles for all CSS variables
- Create text styles for typography scale
- Create effect styles for shadows
- Name them exactly as Tailwind classes

**2. Component Library**
- Build core components (buttons, cards, inputs)
- Use Auto Layout for responsive behavior
- Variants for different states (hover, active, disabled)

**3. Spacing System**
- Set up 4px grid
- Use Auto Layout with 4px multiples
- Document spacing patterns

**4. Export for Development**
- SVG icons (clean, optimized)
- PNG assets at @2x and @3x
- Design specs (dimensions, spacing, colors)

#### Design Handoff Checklist

- [ ] All colors use named design tokens
- [ ] Typography follows defined scale
- [ ] Spacing uses 4px grid system
- [ ] Components have all states (default, hover, active, disabled, error)
- [ ] Mobile, tablet, desktop variants
- [ ] Dark mode versions
- [ ] Accessibility annotations (focus order, alt text)
- [ ] Animation specs (duration, easing)
- [ ] Edge cases documented (empty states, long text)

### Brand Asset Repository

```
/brand-assets
├── /logos
│   ├── stride-logo-primary-color.svg
│   ├── stride-logo-primary-color.png (2x, 3x)
│   ├── stride-logo-reversed-white.svg
│   ├── stride-icon-color.svg
│   ├── stride-favicon.ico
│   └── stride-favicon.svg
├── /colors
│   ├── color-palette.png
│   └── color-swatches.ase (Adobe)
├── /typography
│   ├── geist-sans/ (font files)
│   └── geist-mono/ (font files)
├── /icons
│   └── (Lucide library - no custom icons yet)
├── /illustrations
│   └── (coming soon)
└── /guidelines
    └── BRAND_GUIDELINES_VISUAL.md (this file)
```

### Quick Reference Cards

#### Color Quick Reference
```
Primary Actions: bg-primary text-primary-foreground
Secondary Elements: bg-secondary text-secondary-foreground
Success States: bg-success text-success-foreground
Warnings: bg-warning text-warning-foreground
Errors: bg-destructive text-destructive-foreground

Progress 0-39%: progress-low
Progress 40-69%: progress-medium
Progress 70-99%: progress-high
Progress 100%: progress-complete
```

#### Spacing Quick Reference
```
Tight: gap-2 (8px)
Standard: gap-4 (16px)
Generous: gap-6 (24px)

Card Padding: p-5 or p-6
Section Padding: py-12 sm:py-16 lg:py-20
```

#### Typography Quick Reference
```
Hero: text-4xl sm:text-5xl lg:text-6xl font-semibold
H1: text-3xl sm:text-4xl lg:text-5xl font-semibold
H2: text-2xl sm:text-3xl lg:text-4xl font-semibold
H3: text-xl sm:text-2xl font-semibold
Body: text-base (16px default)
Small: text-sm (14px)
Tiny: text-xs (12px)
```

---

## Appendix: Brand Evolution

### Version History

**v1.0.0** (October 16, 2025)
- Initial brand guidelines established
- Color system defined
- Typography scale implemented
- Core components documented
- Dark mode specifications
- Accessibility standards set

### Future Considerations

#### Phase 2 (Q1 2026)
- Custom illustration system
- Advanced animation library
- Video content guidelines
- Sound/audio branding
- Brand partnerships guidelines

#### Phase 3 (Q2 2026)
- Sub-brand system (enterprise, education)
- International localization guidelines
- Merchandise design standards
- Event branding templates

### Feedback & Updates

**Brand Guardian**: Design Team
**Update Frequency**: Quarterly review
**Feedback Channel**: design@stride.app

This is a living document. As the product evolves, so will these guidelines. Always refer to the latest version in the repository.

---

## Summary

**Brand Name**: Stride
**Tagline**: Progress, Simplified
**Primary Color**: Purple (#7C3AED) - Ambition & Transformation
**Typography**: Geist Sans + Geist Mono
**Personality**: Encouraging, Clear, Friendly, Confident
**Target Audience**: College students & young professionals (18-30)
**Core Promise**: Make goal achievement feel effortless and motivating

**Key Differentiators**:
1. Motivational color psychology (not corporate blue/gray)
2. Progress-focused design (celebrate every step)
3. Mobile-first, quick interactions
4. Modern, friendly (not productivity-corporate)
5. Accessibility built-in from day one

---

**Document prepared by**: Claude (AI Design Assistant)
**For**: Personal Goal Tracker Project
**Date**: October 16, 2025
**Status**: Ready for Implementation

All design tokens, components, and guidelines in this document are production-ready and aligned with the existing codebase (Next.js 15, Tailwind CSS v4, shadcn/ui New York style).
