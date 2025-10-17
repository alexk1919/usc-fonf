# Personal Goal Tracker

A modern, motivational web application for college students and young professionals to set, track, and achieve their personal and academic goals.

## Features

- Clean, energizing UI designed around goal achievement psychology
- Quick goal capture with inline editing
- Visual progress tracking with dynamic color-coded progress bars
- Category and status filtering
- Responsive mobile-first design
- Comprehensive stats dashboard
- Motivational microcopy and celebrations

## Tech Stack

- **Framework**: Next.js 15 with App Router, React 19
- **Styling**: Tailwind CSS v4, shadcn/ui components (New York style)
- **Fonts**: Geist Sans & Geist Mono
- **Backend** (Planned): Supabase (database, authentication, storage)
- **Email** (Planned): Resend for transactional emails
- **Analytics** (Planned): PostHog + Google Analytics
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### View Design System

The comprehensive design system is showcased at:

```
http://localhost:3000/design-demo
```

Or view a working dashboard example at:

```
http://localhost:3000/dashboard-example
```

## Design System

We've created a complete design system optimized for rapid development and motivational UX:

### Color Palette

- **Primary Purple**: Ambition & creativity (CTAs, focus states)
- **Secondary Blue**: Focus & progress (supporting elements)
- **Accent Coral**: Energy & motivation (highlights)
- **Success Green**: Achievement (completions)
- **Progress Colors**: Dynamic colors based on completion (0-39% coral, 40-69% amber, 70-99% teal, 100% green)

### Key Components

All components are pre-built and ready to use:

- **Goal Card** - Primary content container with progress visualization
- **Stat Card** - Metrics display with trend indicators
- **Quick Add Input** - Rapid goal entry with inline submit
- **Filter Controls** - Category and status filtering
- **Dashboard Layout** - Complete page structure

### Documentation

- **[Design System Guide](docs/DESIGN_SYSTEM.md)** - Complete design documentation
- **[Quick Start Guide](docs/DESIGN_QUICK_START.md)** - Get building in 5 minutes
- **[Screen Mockups](docs/SCREEN_MOCKUPS.md)** - Visual descriptions of all screens

### Usage Example

```tsx
import { GoalCard } from '@/components/dashboard/goal-card';
import { StatCard } from '@/components/dashboard/stat-card';

<StatCard
  label="Active Goals"
  value={12}
  trend={{ value: 15, label: 'vs last week' }}
  variant="info"
/>

<GoalCard
  goal={{
    title: 'Complete React Course',
    category: 'Learning',
    progress: 75,
    status: 'active'
  }}
/>
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with fonts
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Design system styles
│   ├── design-demo/            # Design system showcase
│   └── dashboard-example/      # Working dashboard example
├── components/
│   └── dashboard/              # All dashboard components
│       ├── goal-card.tsx
│       ├── stat-card.tsx
│       ├── quick-add-goal.tsx
│       ├── filter-controls.tsx
│       └── dashboard-layout.tsx
└── lib/
    └── utils.ts                # Utility functions

docs/
├── DESIGN_SYSTEM.md            # Complete design documentation
├── DESIGN_QUICK_START.md       # Quick reference guide
└── SCREEN_MOCKUPS.md           # Visual mockup descriptions
```

## Development Commands

```bash
# Development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Design Principles

1. **Motivational First** - Colors and interactions energize users
2. **Clarity Over Complexity** - Clean layouts with clear hierarchy
3. **Mobile-First** - Optimized for thumb-reach and quick interactions
4. **Progress-Focused** - Visual feedback celebrates every step
5. **Accessibility Built-In** - WCAG 2.1 AA compliance

## Roadmap

### MVP (Current Phase)
- [x] Design system implementation
- [x] Core UI components
- [x] Dashboard layout
- [ ] Supabase integration
- [ ] Authentication (email/password)
- [ ] CRUD operations for goals
- [ ] Basic analytics tracking

### Phase 2
- [ ] Email reminders (Resend)
- [ ] Advanced filtering
- [ ] Goal templates
- [ ] Sharing & social features
- [ ] Mobile app (React Native)

### Phase 3 (Advanced Automation)
- [ ] AI goal coach integration
- [ ] Smart deadline adjustments
- [ ] Accountability partner bot
- [ ] Progress digest automation
- [ ] n8n workflow automation

## Contributing

This project follows the [CLAUDE.md](CLAUDE.md) guidelines for development with Claude Code.

## License

[Add your license here]

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Lucide Icons](https://lucide.dev)

---

Built with Next.js 15, Tailwind CSS v4, and shadcn/ui
