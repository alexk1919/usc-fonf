# Personal Goal Tracker

A modern, motivational web application for college students and young professionals to set, track, and achieve their personal and academic goals.

## Features

- ✅ **Full Goal Management** - Create, update, complete, archive, and restore goals
- ✅ **Category Selection** - Organize goals into Learning, Career, Health, or Personal
- ✅ **Status Management** - Mark goals as completed, archive old goals, or reactivate them
- ✅ **Visual Progress Tracking** - Dynamic color-coded progress bars (0-100%)
- ✅ **Smart Filtering** - Filter by category and status for focused views
- ✅ **Real-time Sync** - All changes instantly saved to Supabase database
- ✅ **Secure Authentication** - Email/password login with row-level security
- ✅ **Responsive Design** - Mobile-first UI optimized for quick interactions
- ✅ **Stats Dashboard** - Track active goals, completions, and average progress
- Clean, energizing UI designed around goal achievement psychology

## Tech Stack

- **Framework**: Next.js 15 with App Router, React 19
- **Styling**: Tailwind CSS v4, shadcn/ui components (New York style)
- **Fonts**: Geist Sans & Geist Mono
- **Backend**: Supabase (PostgreSQL database, authentication, file storage)
- **Email** (Planned): Resend for transactional emails
- **Analytics** (Planned): PostHog + Google Analytics
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Supabase account (for database and authentication)

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
# Copy .env.example to .env.local and add your Supabase credentials
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### First Time Setup

1. **Sign up** - Create an account at `/auth/signup`
2. **Create a goal** - Use the quick-add form to create your first goal
3. **Choose a category** - Select from Learning, Career, Health, or Personal
4. **Track progress** - Mark goals as complete or archive them when done

### Application Routes

- `/` - Landing page (redirects to dashboard if logged in)
- `/auth/login` - Sign in
- `/auth/signup` - Create account
- `/dashboard` - Main dashboard (requires authentication)
- `/dashboard-example` - UI demo with mock data
- `/design-demo` - Design system showcase

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

- **[Design System Guide](docs/251016/DESIGN_SYSTEM.md)** - Complete design documentation
- **[Quick Start Guide](docs/251016/DESIGN_QUICK_START.md)** - Get building in 5 minutes
- **[Screen Mockups](docs/251016/SCREEN_MOCKUPS.md)** - Visual descriptions of all screens

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
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Design system styles
│   ├── actions/
│   │   └── goals.ts            # Server actions for CRUD
│   ├── auth/
│   │   ├── login/              # Login page
│   │   ├── signup/             # Signup page
│   │   └── callback/           # OAuth callback
│   ├── dashboard/
│   │   ├── page.tsx            # Main dashboard (server component)
│   │   └── dashboard-client.tsx # Client interactions
│   ├── dashboard-example/      # UI demo with mock data
│   └── design-demo/            # Design system showcase
├── components/
│   └── dashboard/              # All dashboard components
│       ├── goal-card.tsx       # Goal display with status actions
│       ├── stat-card.tsx       # Metrics display
│       ├── quick-add-goal.tsx  # Quick add with category selector
│       ├── filter-controls.tsx # Category/status filters
│       └── dashboard-layout.tsx # Page layout structure
└── lib/
    ├── supabase/
    │   ├── client.ts           # Browser Supabase client
    │   ├── server.ts           # Server Supabase client
    │   └── middleware.ts       # Auth middleware helpers
    ├── db/
    │   └── goals.ts            # Database operations
    └── utils.ts                # Utility functions

middleware.ts                   # Next.js middleware (route protection)

docs/
├── 251021/
│   ├── implementation-plan.md  # Complete implementation details
│   ├── completion-summary.md   # Detailed completion report
│   ├── feature-update.md       # New features documentation
│   └── BONUS-FEATURES.md       # Category & status management
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

### ✅ MVP - COMPLETED (October 21, 2025)
- [x] Design system implementation
- [x] Core UI components
- [x] Dashboard layout
- [x] **Supabase integration** (PostgreSQL + RLS)
- [x] **Authentication** (email/password with session management)
- [x] **CRUD operations for goals** (create, read, update, delete)
- [x] **File storage** (avatars bucket with user-scoped policies)
- [x] **Category selection** (Learning, Career, Health, Personal)
- [x] **Status management** (complete, archive, restore)
- [x] **Smart filtering** (by category and status)
- [x] **Production build** (deployed-ready)

### Phase 2 (Next Steps)
- [ ] Progress editing (slider/input for updating percentage)
- [ ] Goal details modal/page (edit all fields)
- [ ] Email reminders (Resend integration)
- [ ] Basic analytics tracking (PostHog)
- [ ] Goal templates by category
- [ ] Delete confirmation dialogs
- [ ] Bulk actions (multi-select)

### Phase 3 (Enhanced Features)
- [ ] Target date picker
- [ ] Goal descriptions/notes
- [ ] Sharing & social features
- [ ] Dark mode toggle
- [ ] Keyboard shortcuts
- [ ] Goal history/activity log
- [ ] Mobile app (React Native)

### Phase 4 (Advanced Automation)
- [ ] AI goal coach integration
- [ ] Smart deadline adjustments
- [ ] Accountability partner bot
- [ ] Progress digest automation
- [ ] n8n workflow automation

## Database Schema

The app uses Supabase with the following schema:

### Goals Table
- `id` - UUID primary key
- `user_id` - UUID foreign key to auth.users
- `title` - Text (required)
- `description` - Text (nullable)
- `category` - Text (nullable) - Learning, Career, Health, or Personal
- `target_date` - Date (nullable)
- `progress` - Integer (0-100)
- `status` - Text (active/completed/archived)
- `created_at` - Timestamp with timezone
- `updated_at` - Timestamp with timezone (auto-updated)

### Security
- Row Level Security (RLS) enabled
- Users can only access their own goals
- 4 RLS policies (SELECT, INSERT, UPDATE, DELETE)
- All operations are user-scoped

## Environment Variables

Create a `.env.local` file with:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Contributing

This project follows the [CLAUDE.md](CLAUDE.md) guidelines for development with Claude Code.

For detailed implementation notes, see [docs/251021/implementation-plan.md](docs/251021/implementation-plan.md).

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
