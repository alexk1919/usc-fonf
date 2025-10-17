# CLAUDE.md

**Personal Goal Tracker** — A mobile-first web app for college students to track goals with clarity and motivation.

## Tech Stack
- **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS v4, shadcn/ui (New York)
- **Backend**: Supabase (auth, database, storage)
- **Services**: Resend (email), PostHog/GA (analytics)
- **Fonts**: Geist Sans + Geist Mono via CSS variables

## Quick Start
```bash
npm run dev    # Dev server with Turbopack
npm run build  # Production build
npm run lint   # Run ESLint
```

## Core Patterns

**Path Aliases**: `@/*` → `./src/*` (e.g., `@/components`, `@/lib`, `@/hooks`)

**Components**:
- Use `cn()` from `@/lib/utils` for className merging
- Install shadcn/ui components: `npx shadcn@latest add [component-name]`
- TypeScript required, React Server Components enabled
- Follow New York style guide

**Styling**:
- Tailwind utility-first, mobile-first responsive
- CSS variables for theming (see `globals.css`)
- Semantic HTML for accessibility

**Auth & Security**:
- Supabase Auth with row-level security (RLS)
- User-scoped data only

## Data Model
```typescript
Goal {
  id: UUID
  user_id: UUID
  title: string
  description: string
  category: string
  target_date: Date | null
  progress: 0-100
  status: 'active' | 'completed' | 'archived'
  created_at: timestamp
  updated_at: timestamp
}
```

## MVP Features
1. Goal CRUD with inline editing
2. Dashboard: progress bars, stats, filters (category/status)
3. Quick-add input
4. Email/password authentication
5. Basic analytics
6. Email reminders (Resend)

## Environment Variables
```
SUPABASE_URL=
SUPABASE_ANON_KEY=
RESEND_API_KEY=
POSTHOG_KEY=
GA_TRACKING_ID=  # optional
```

## Performance Target
Dashboard < 300ms load time (10-50 goals typical user)

## Docs
- [Next.js 15](https://nextjs.org/docs) | [shadcn/ui](https://ui.shadcn.com/docs)
- [Supabase](https://supabase.com/docs) | [Resend](https://resend.com/docs/send-with-nextjs)
