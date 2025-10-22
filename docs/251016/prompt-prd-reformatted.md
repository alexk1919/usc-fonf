% Personal Goal Tracker — Product Requirements Document

## Overview

A lightweight web application to help college students and young professionals set, track, and achieve personal and academic goals. The product focuses on clarity, motivation, and quick interactions so users can capture goals and monitor progress with minimal friction.

## Key Features

- Create, edit, and delete goals
- Goal fields: title, description, target date, category, progress status (e.g., 0-100% or steps)
- Dashboard showing all goals with progress bars and summary stats
- Filtering by category and status (active, completed, archived)
- Quick-add input for capturing goals rapidly
- Visual progress indicators and motivational microcopy

## User Experience

- Clean, modern UI with a motivational tone
- Mobile-first, responsive design
- Fast interactions: inline editing, quick-add, keyboard shortcuts
- Accessibility basics (semantic HTML, ARIA where needed, keyboard navigation)

## Data Model (high level)

- Goal
  - id: string (UUID)
  - user_id: string (references User)
  - title: string
  - description: string
  - category: string
  - target_date: date | null
  - progress: integer (0-100)
  - status: enum (active, completed, archived)
  - created_at: timestamp
  - updated_at: timestamp

- User (handled by Supabase Auth)
  - id: string (UUID)
  - email: string
  - name: string | null

## Technical Stack

- Frontend: React with Next.js (v15) for routing, SSR/SSG, and app structure
- UI: shadcn/ui components and Tailwind CSS for styling
- Backend: Supabase for database, authentication, and storage
- Email: RESend for transactional emails (email confirmations, reminders)
- Analytics: PostHog + Google Analytics
- Deployment: Vercel

## Authentication & Security

- Email/password authentication via Supabase Auth
- User-scoped goal data; enforce row-level security in Supabase
- Use HTTPS, secure cookies, and standard token management provided by Supabase

## Notifications & Email

- Optional email reminders for approaching target dates
- Use RESend for sending transactional messages

## n8n Workflows & Automation

### Core Automation Workflows

**1. Smart Goal Reminder System**
- Trigger: Scheduled check (daily at 9 AM)
- Logic: Query goals with target dates in next 7 days, 3 days, and 1 day
- Actions:
  - Send personalized email reminders via RESend
  - Include progress percentage and motivational message
  - Adjust reminder tone based on progress status
  - Log reminder events to analytics

**2. AI Goal Coach Agent**
- Trigger: User creates new goal or updates progress
- Logic: Send goal data to OpenAI/Claude API
- Actions:
  - Analyze goal feasibility based on target date and user history
  - Generate personalized sub-tasks and milestones
  - Suggest progress tracking strategies
  - Store AI suggestions in Supabase for user review
  - Send coaching tips via email or in-app notification

**3. Progress Digest Automation**
- Trigger: Weekly (Sunday evening) and Monthly (last day of month)
- Logic: Aggregate user's goal progress and completion data
- Actions:
  - Calculate completion rates, streak counts, and category performance
  - Generate AI-powered insights using LLM analysis
  - Create personalized weekly/monthly summary email
  - Identify goals at risk of missing deadlines
  - Send motivational content based on performance trends

**4. Smart Deadline Adjuster**
- Trigger: Goal progress update or scheduled check
- Logic: Analyze progress velocity vs. time remaining
- Actions:
  - Calculate if current progress rate will meet deadline
  - Use AI to suggest realistic deadline adjustments
  - Notify user of at-risk goals with suggestions
  - Optionally auto-adjust deadlines with user consent
  - Track adjustment patterns for learning

**5. Goal Template Generator**
- Trigger: User searches for goal ideas or clicks "Get Suggestions"
- Logic: Analyze user's category preferences and past goals
- Actions:
  - Use AI to generate relevant goal templates
  - Include pre-defined milestones and sub-tasks
  - Suggest realistic timelines based on similar user data
  - Store popular templates for quick access
  - Personalize based on user's completion history

**6. Accountability Partner Bot**
- Trigger: User opts into accountability feature
- Logic: Schedule check-ins based on goal urgency
- Actions:
  - Send conversational AI messages asking about progress
  - Process user responses to update goal status
  - Provide encouragement or course correction advice
  - Escalate to human intervention if user consistently struggles
  - Create accountability reports for shared goals

**7. Data Enrichment Pipeline**
- Trigger: New goal created or edited
- Logic: Extract key information from goal description
- Actions:
  - Use AI to auto-categorize goals if category not set
  - Extract actionable tasks from description
  - Suggest relevant resources (articles, videos, tools)
  - Auto-generate tags for better filtering
  - Identify dependencies between related goals

**8. Onboarding Automation**
- Trigger: New user signs up
- Logic: Multi-step onboarding sequence
- Actions:
  - Send welcome email with getting started guide
  - Create sample goals based on user profile
  - Schedule onboarding emails (Day 1, 3, 7)
  - Use AI to personalize onboarding based on user responses
  - Track onboarding completion and optimize flow

### Technical Implementation

- **n8n Hosting**: Self-hosted n8n instance or n8n Cloud
- **Webhook Integration**: Supabase database triggers → n8n webhooks
- **API Connections**:
  - Supabase REST API for data operations
  - OpenAI/Claude API for AI agent functionality
  - RESend API for email delivery
  - PostHog API for event tracking
- **Data Security**: Environment variables for API keys, encrypted credential storage
- **Error Handling**: Retry logic, fallback mechanisms, error notifications to admin
- **Monitoring**: Workflow execution logs, success/failure metrics, performance tracking

### AI Agent Configuration

- **Primary LLM**: OpenAI GPT-5 or Claude 4.5 Sonnet for complex reasoning
- **Embedding Model**: OpenAI text-embedding-3-small for semantic search
- **Context Management**: Store user goal history and preferences for personalized responses
- **Prompt Templates**: Pre-defined prompts for goal coaching, task generation, and insights
- **Rate Limiting**: Implement usage quotas to manage API costs
- **Response Caching**: Cache similar AI responses to reduce API calls

## Monitoring & Analytics

- PostHog for product analytics and feature funnels
- Google Analytics for additional traffic metrics

## Non-Functional Requirements

- Performance: Dashboard load under 300ms for typical user (10–50 goals)
- Availability: 99.9% uptime (leveraging Vercel + Supabase managed services)
- Scalability: Scale read-heavy dashboard via caching and pagination

## MVP Scope

- Core CRUD for goals
- Dashboard with progress bars and filters
- Email/password auth and basic onboarding
- Basic analytics tracking and deployment to Vercel

## Future Enhancements

- Social sharing or accountability circles
- Habit templates and recurring goals
- Push notifications (mobile/web)
- Goal templates and recommended milestones

## Deployment Notes

- Deploy frontend to Vercel; connect environment variables for Supabase and RESend
- Use Supabase project for DB, Auth, and file storage

---

If you want, I can also:

- Expand the data model into SQL create statements for Supabase (tables + RLS policies)
- Create a minimal Next.js starter with pages for Dashboard and Goal CRUD
- Draft email templates for RESend reminders

Tell me which of those you'd like next.
