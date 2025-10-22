# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Personal Goal Tracker** web application built for college students and young professionals to set, track, and achieve personal and academic goals. The project emphasizes clarity, motivation, and quick interactions with a mobile-first approach.

## Development Commands

```bash
# Start development server (with Turbopack)
npm run dev

# Build for production (with Turbopack)
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Tech Stack

- **Framework**: Next.js 15 with App Router, React 19
- **Styling**: Tailwind CSS v4, shadcn/ui components (New York style)
- **Backend**: Supabase (database, authentication, storage)
- **Email**: Resend for transactional emails
- **Analytics**: PostHog + Google Analytics (planned)
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx       # Root layout with Geist fonts
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles with Tailwind
└── lib/
    └── utils.ts         # cn() utility for className merging
```

## Key Architecture Patterns

### Path Aliases
TypeScript paths are configured with `@/*` pointing to `./src/*`:
- `@/components` for UI components
- `@/lib` for utilities
- `@/hooks` for custom hooks

### shadcn/ui Integration
This project uses shadcn/ui with the following configuration:
- Style: "new-york"
- RSC: enabled (React Server Components)
- Base color: neutral
- CSS variables enabled
- Icon library: lucide-react

Components will be installed to `@/components/ui` using:
```bash
npx shadcn@latest add [component-name]
```

### Font Setup
Uses Geist Sans and Geist Mono fonts loaded via `next/font/google` with CSS variables:
- `--font-geist-sans`
- `--font-geist-mono`

## Product Features (from PRD)

### Core Data Model
**Goal Entity**:
- id, user_id, title, description, category
- target_date (nullable), progress (0-100%), status (active/completed/archived)
- timestamps (created_at, updated_at)

**User Entity**: Managed by Supabase Auth (id, email, name)

### Planned Features
1. Goal CRUD operations with inline editing
2. Dashboard with progress bars, summary stats, and filters
3. Quick-add input for rapid goal capture
4. Category and status filtering
5. Email/password authentication via Supabase
6. Row-level security for user-scoped data
7. Email reminders via Resend (for approaching deadlines)

### Advanced n8n Automation (Future)
The PRD includes extensive n8n workflow automation plans:
- Smart goal reminder system (scheduled checks)
- AI goal coach agent (OpenAI/Claude integration)
- Progress digest automation (weekly/monthly summaries)
- Smart deadline adjuster based on progress velocity
- Goal template generator with AI suggestions
- Accountability partner bot
- Data enrichment pipeline for auto-categorization
- Onboarding automation sequences

## MVP Scope

The current MVP focuses on:
- Core CRUD for goals
- Dashboard with progress bars and filters
- Email/password auth and basic onboarding
- Basic analytics tracking
- Vercel deployment

## Development Guidelines

### Core Principles

**KISS (Keep It Simple, Stupid)**
- Write simple, readable code over clever solutions
- Avoid premature optimization
- Use clear variable and function names
- Break complex logic into smaller, understandable functions
- Prefer explicit code over implicit magic

**DRY (Don't Repeat Yourself)**
- Extract repeated code into reusable functions/components
- Use shared utilities and hooks for common patterns
- Centralize configuration and constants
- Avoid duplicating business logic
- Create composable components

### Component Development
When creating components, follow these patterns:
- Use the `cn()` utility from `@/lib/utils` for conditional className merging
- Prefer shadcn/ui components over custom implementations
- Use TypeScript for all new files
- Follow the New York style guide for shadcn/ui components
- Keep components small and focused (single responsibility)
- Extract shared logic into custom hooks

### Styling
- Use Tailwind CSS utility classes
- Leverage CSS variables for theming
- Follow mobile-first responsive design
- Use semantic HTML for accessibility
- Avoid inline styles; use Tailwind utilities or CSS classes

### Authentication & Security
- Implement Supabase Auth for user management
- Enforce row-level security (RLS) in Supabase
- User-scoped goal data—users only access their own goals

### Performance Targets
- Dashboard load time: under 300ms for typical user (10-50 goals)
- Leverage caching and pagination for read-heavy operations

## Environment Variables

Expected environment variables (to be configured):
- Supabase connection credentials (URL, anon key)
- Resend API key for email functionality
- PostHog project key (for analytics)
- Google Analytics tracking ID (optional)

## TypeScript Configuration

- Target: ES2017
- Strict mode enabled
- Module resolution: bundler
- Path aliases configured for `@/*` imports

## Testing & Quality

- ESLint configured with Next.js core-web-vitals and TypeScript rules
- No test framework currently configured (consider adding Vitest/Jest)

## Deployment

Deploy to Vercel with environment variables for:
- Supabase project credentials
- Resend API key
- Analytics tracking IDs

Next.js configuration is minimal (default setup), ready for customization as needed.

## Documentation References

- [Next.js 15 Docs](https://nextjs.org/docs)
- [shadcn/ui Docs](https://ui.shadcn.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Resend Docs](https://resend.com/docs/send-with-nextjs)
- [Stripe Integration](https://docs.stripe.com/payments/checkout)
