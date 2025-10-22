# Mini PRD: n8n AI Goal Suggestions Workflow

## Overview

An n8n workflow that generates personalized goal suggestions for users based on their profile, existing goals, and behavioral patterns. The workflow leverages AI (OpenAI/Claude) to provide contextually relevant, actionable goal recommendations.

## User Story

**As a** logged-in user
**I want** to receive intelligent goal suggestions based on my profile and existing goals
**So that** I can discover new meaningful goals to pursue without having to think of them myself

## Workflow Trigger

**Type**: Webhook (HTTP POST)
**URL Pattern**: `https://your-n8n-instance.com/webhook/goal-suggestions`
**Authentication**: Bearer token (n8n webhook secret)

## Input Payload Specification

### Request Structure

```json
{
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "user@example.com",
    "metadata": {
      "name": "John Doe",
      "preferences": {
        "categories": ["Career", "Learning"],
        "difficulty_preference": "moderate"
      }
    }
  },
  "context": {
    "existing_goals": [
      {
        "id": "goal-uuid-1",
        "title": "Learn TypeScript",
        "category": "Learning",
        "progress": 65,
        "status": "active",
        "target_date": "2025-12-31",
        "created_at": "2025-01-15T10:00:00Z"
      },
      {
        "id": "goal-uuid-2",
        "title": "Complete Next.js course",
        "category": "Learning",
        "progress": 30,
        "status": "active",
        "target_date": "2025-11-30",
        "created_at": "2025-02-01T14:00:00Z"
      }
    ],
    "completed_goals_count": 5,
    "active_goals_count": 2,
    "average_completion_rate": 0.72,
    "most_active_categories": ["Learning", "Career"],
    "request_params": {
      "suggestion_count": 5,
      "categories": ["Learning", "Career", "Health"],
      "exclude_similar_to": []
    }
  },
  "timestamp": "2025-10-21T15:30:00Z",
  "request_id": "req-uuid-123"
}
```

### Payload Field Definitions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user.id` | UUID | Yes | Supabase auth user ID |
| `user.email` | string | Yes | User email address |
| `user.metadata.name` | string | No | User display name |
| `user.metadata.preferences` | object | No | User preferences for goal types |
| `context.existing_goals` | Goal[] | Yes | Array of user's current goals |
| `context.completed_goals_count` | number | Yes | Total completed goals |
| `context.active_goals_count` | number | Yes | Current active goals |
| `context.average_completion_rate` | number | No | 0-1 decimal of completion rate |
| `context.most_active_categories` | string[] | No | Top goal categories for user |
| `context.request_params.suggestion_count` | number | No | Number of suggestions (default: 5, max: 10) |
| `context.request_params.categories` | string[] | No | Limit suggestions to categories |
| `context.request_params.exclude_similar_to` | string[] | No | Goal IDs to avoid similarity with |
| `timestamp` | ISO 8601 | Yes | Request timestamp |
| `request_id` | UUID | Yes | Unique request identifier for tracking |

## n8n Workflow Steps

### 1. Webhook Trigger Node
- **Node**: Webhook (POST)
- **Authentication**: Header Auth with Bearer token
- **Response Mode**: Wait for webhook completion
- **Timeout**: 30 seconds

### 2. Validate Input Node
- **Node**: Function/Code
- **Purpose**: Validate required fields exist
- **Validation**:
  - `user.id` is valid UUID
  - `user.email` is valid email format
  - `existing_goals` is array (can be empty)
  - `request_params.suggestion_count` <= 10

### 3. Build AI Prompt Node
- **Node**: Function/Code
- **Purpose**: Construct AI prompt with user context
- **Template**:

```
You are an AI goal coach helping a user discover meaningful personal goals.

USER PROFILE:
- Name: {{user.metadata.name || "User"}}
- Email: {{user.email}}
- Completed Goals: {{context.completed_goals_count}}
- Active Goals: {{context.active_goals_count}}
- Completion Rate: {{context.average_completion_rate * 100}}%
- Top Categories: {{context.most_active_categories.join(", ")}}

EXISTING GOALS:
{{#each context.existing_goals}}
- {{this.title}} ({{this.category}}, {{this.progress}}% complete, status: {{this.status}})
{{/each}}

TASK:
Generate {{context.request_params.suggestion_count || 5}} personalized goal suggestions for this user.

REQUIREMENTS:
1. Goals should complement their existing goals, not duplicate them
2. Consider their completion rate and category preferences
3. Mix aspirational goals with achievable quick wins
4. Provide goals across different categories unless specified otherwise
5. Each goal should be SMART (Specific, Measurable, Achievable, Relevant, Time-bound)

{{#if context.request_params.categories}}
ONLY suggest goals in these categories: {{context.request_params.categories.join(", ")}}
{{/if}}

OUTPUT FORMAT (JSON):
{
  "goal_suggestions": [
    {
      "id": "goal_001",
      "title": "Goal title",
      "description": "2-3 sentence description explaining what this goal entails and why it matters",
      "category": "Learning|Career|Health|Personal",
      "difficulty": "easy|medium|hard",
      "estimated_duration_days": 45,
      "why_suggested": "Why this goal fits the user's profile and complements their existing goals",
      "milestones": [
        "First milestone step",
        "Second milestone step",
        "Third milestone step",
        "..."
      ]
    }
  ]
}
```

### 4. OpenAI/Claude API Node
- **Node**: OpenAI or HTTP Request (for Claude)
- **Model**: GPT-4 or Claude 3.5 Sonnet
- **Parameters**:
  - Temperature: 0.7
  - Max tokens: 2000
  - Response format: JSON mode
- **Error Handling**: Retry up to 2 times with exponential backoff

### 5. Parse & Validate AI Response Node
- **Node**: Function/Code
- **Purpose**: Validate AI response structure
- **Validation**:
  - Response is valid JSON
  - `suggestions` array exists
  - Each suggestion has required fields
  - Categories are valid enum values
  - Target dates are future dates

### 6. Format Response Node
- **Node**: Function/Code
- **Purpose**: Wrap suggestions in output structure
- **Output Structure**:
  ```json
  {
    "output": {
      "goal_suggestions": [...]
    }
  }
  ```

### 7. Return Response Node
- **Node**: Respond to Webhook
- **Status**: 200 OK
- **Content-Type**: application/json
- **Output**: Array containing the output object (see Response Format section)

## Response Format

### Actual n8n Response (Raw)

**IMPORTANT**: This is the actual response structure returned by the n8n workflow (as of 2025-10-21):

```json
[
  {
    "output": {
      "goal_suggestions": [
        {
          "id": "goal_001",
          "title": "Build a Full-Stack TypeScript Project",
          "description": "Create a complete full-stack application using TypeScript for both frontend and backend. This project will consolidate your TypeScript knowledge and Next.js skills by building a real-world application such as a task management system, blog platform, or API-driven dashboard. Include features like authentication, database integration, and deployment to production.",
          "category": "Learning",
          "difficulty": "medium",
          "estimated_duration_days": 45,
          "why_suggested": "This goal directly builds on your active TypeScript and Next.js learning. Since you've completed a portfolio website and are currently learning these technologies, creating a full-stack project is the natural next step. It bridges learning and practical application, aligning perfectly with your 72% completion rate for moderate difficulty challenges.",
          "milestones": [
            "Plan application architecture and choose tech stack",
            "Set up project structure with TypeScript configuration",
            "Implement frontend components and routing with Next.js",
            "Build backend API with TypeScript (Node.js/Express or Next.js API routes)",
            "Integrate database and implement CRUD operations",
            "Add authentication and authorization",
            "Write tests and documentation",
            "Deploy to production platform (Vercel, Railway, or similar)"
          ]
        },
        {
          "id": "goal_002",
          "title": "Contribute to 3 Open Source Projects",
          "description": "Make meaningful contributions to three open source projects on GitHub within your tech stack.",
          "category": "Career",
          "difficulty": "medium",
          "estimated_duration_days": 60,
          "why_suggested": "Open source contributions are excellent for career growth and will help you apply your TypeScript learning in real-world codebases.",
          "milestones": [
            "Research and identify 5-7 potential projects aligned with your skills",
            "Set up development environment and understand contribution guidelines",
            "Make first contribution (documentation, bug fix, or small feature)",
            "Complete second contribution with increased complexity",
            "Complete third contribution and engage with project maintainers",
            "Update your portfolio and LinkedIn with open source contributions"
          ]
        }
      ]
    }
  }
]
```

### App-Formatted Response (After Processing)

The Server Action transforms the n8n response and adds calculated fields:

```json
{
  "success": true,
  "request_id": "req-uuid-123",
  "user_id": "550e8400-e29b-41d4-a716-446655440000",
  "suggestions": [
    {
      "id": "goal_001",
      "title": "Build a Full-Stack TypeScript Project",
      "description": "Create a complete full-stack application using TypeScript...",
      "category": "Learning",
      "difficulty": "medium",
      "estimated_duration_days": 45,
      "why_suggested": "This goal directly builds on your active TypeScript and Next.js learning...",
      "milestones": [
        "Plan application architecture and choose tech stack",
        "Set up project structure with TypeScript configuration",
        "..."
      ],
      "suggested_target_date": "2025-12-05"
    }
  ]
}
```

### Error Response (400 Bad Request)

```json
{
  "success": false,
  "request_id": "req-uuid-123",
  "error": {
    "code": "INVALID_INPUT",
    "message": "Missing required field: user.id",
    "details": {
      "field": "user.id",
      "received": null,
      "expected": "UUID string"
    }
  },
  "timestamp": "2025-10-21T15:30:00Z"
}
```

### Error Response (500 Internal Server Error)

```json
{
  "success": false,
  "request_id": "req-uuid-123",
  "error": {
    "code": "AI_GENERATION_FAILED",
    "message": "Failed to generate suggestions after 3 retries",
    "details": {
      "last_error": "OpenAI API timeout"
    }
  },
  "timestamp": "2025-10-21T15:30:00Z"
}
```

## Integration with Next.js App

### 1. Environment Variable

Add to `.env.local`:

```bash
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/goal-suggestions
N8N_WEBHOOK_SECRET=your-webhook-secret-token
```

### 2. Server Action Implementation

Create `src/app/actions/goal-suggestions.ts`:

```typescript
'use server';

import { createClient } from '@/lib/supabase/server';
import { getGoals } from '@/lib/db/goals';
import type { Goal } from '@/lib/db/goals';

export interface GoalSuggestion {
  id: string;
  title: string;
  description: string;
  category: 'Learning' | 'Career' | 'Health' | 'Personal';
  difficulty: 'easy' | 'medium' | 'hard';
  estimated_duration_days: number;
  why_suggested: string;
  milestones: string[];
  // Calculated field (not from n8n)
  suggested_target_date?: string;
}

export interface GoalSuggestionsResponse {
  success: boolean;
  request_id: string;
  user_id: string;
  suggestions?: GoalSuggestion[];
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

export interface SuggestionRequestParams {
  suggestion_count?: number;
  categories?: ('Learning' | 'Career' | 'Health' | 'Personal')[];
  exclude_similar_to?: string[];
}

/**
 * Fetch AI-generated goal suggestions for the current user
 */
export async function getGoalSuggestions(
  params: SuggestionRequestParams = {}
): Promise<GoalSuggestionsResponse> {
  try {
    const supabase = await createClient();

    // 1. Get current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return {
        success: false,
        request_id: crypto.randomUUID(),
        user_id: '',
        error: {
          code: 'UNAUTHORIZED',
          message: 'User not authenticated',
        },
      };
    }

    // 2. Fetch user's existing goals
    const { data: existingGoals, error: goalsError } = await getGoals();

    if (goalsError) {
      return {
        success: false,
        request_id: crypto.randomUUID(),
        user_id: user.id,
        error: {
          code: 'GOALS_FETCH_FAILED',
          message: 'Failed to fetch existing goals',
          details: goalsError,
        },
      };
    }

    // 3. Calculate goal statistics
    const completedGoals = existingGoals.filter((g) => g.status === 'completed');
    const activeGoals = existingGoals.filter((g) => g.status === 'active');

    // Calculate category frequency
    const categoryCount: Record<string, number> = {};
    existingGoals.forEach((goal) => {
      if (goal.category) {
        categoryCount[goal.category] = (categoryCount[goal.category] || 0) + 1;
      }
    });
    const mostActiveCategories = Object.entries(categoryCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([category]) => category);

    // Calculate completion rate
    const totalGoals = existingGoals.length;
    const averageCompletionRate = totalGoals > 0
      ? completedGoals.length / totalGoals
      : 0;

    // 4. Build webhook payload
    const requestId = crypto.randomUUID();
    const payload = {
      user: {
        id: user.id,
        email: user.email || '',
        metadata: {
          name: user.user_metadata?.name || user.email?.split('@')[0] || 'User',
          preferences: user.user_metadata?.preferences || {},
        },
      },
      context: {
        existing_goals: existingGoals.map((goal) => ({
          id: goal.id,
          title: goal.title,
          category: goal.category || 'Personal',
          progress: goal.progress,
          status: goal.status,
          target_date: goal.target_date,
          created_at: goal.created_at,
        })),
        completed_goals_count: completedGoals.length,
        active_goals_count: activeGoals.length,
        average_completion_rate: averageCompletionRate,
        most_active_categories: mostActiveCategories,
        request_params: {
          suggestion_count: params.suggestion_count || 5,
          categories: params.categories || ['Learning', 'Career', 'Health', 'Personal'],
          exclude_similar_to: params.exclude_similar_to || [],
        },
      },
      timestamp: new Date().toISOString(),
      request_id: requestId,
    };

    // 5. Call n8n webhook
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    const webhookSecret = process.env.N8N_WEBHOOK_SECRET;

    if (!webhookUrl || !webhookSecret) {
      return {
        success: false,
        request_id: requestId,
        user_id: user.id,
        error: {
          code: 'CONFIGURATION_ERROR',
          message: 'n8n webhook not configured',
        },
      };
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${webhookSecret}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return {
        success: false,
        request_id: requestId,
        user_id: user.id,
        error: {
          code: 'WEBHOOK_ERROR',
          message: `n8n webhook returned ${response.status}`,
          details: errorText,
        },
      };
    }

    // 6. Parse and return suggestions
    const result: GoalSuggestionsResponse = await response.json();
    return result;

  } catch (error) {
    console.error('Error fetching goal suggestions:', error);
    return {
      success: false,
      request_id: crypto.randomUUID(),
      user_id: '',
      error: {
        code: 'INTERNAL_ERROR',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
    };
  }
}
```

### 3. UI Component Example

Create `src/components/goal-suggestions-button.tsx`:

```typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Loader2 } from 'lucide-react';
import { getGoalSuggestions, type GoalSuggestion } from '@/app/actions/goal-suggestions';
import { createGoal } from '@/app/actions/goals';
import { toast } from 'sonner';

export function GoalSuggestionsButton() {
  const [suggestions, setSuggestions] = useState<GoalSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleGetSuggestions = async () => {
    setLoading(true);
    try {
      const result = await getGoalSuggestions({
        suggestion_count: 5,
      });

      if (result.success && result.suggestions) {
        setSuggestions(result.suggestions);
        setShowSuggestions(true);
        toast.success(`Generated ${result.suggestions.length} suggestions!`);
      } else {
        toast.error(result.error?.message || 'Failed to generate suggestions');
      }
    } catch (error) {
      toast.error('Failed to fetch suggestions');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddGoal = async (suggestion: GoalSuggestion) => {
    const result = await createGoal({
      title: suggestion.title,
      description: suggestion.description,
      category: suggestion.category,
      target_date: suggestion.suggested_target_date,
      progress: 0,
      status: 'active',
    });

    if (result.success) {
      toast.success('Goal added to your list!');
      // Remove suggestion from list
      setSuggestions(suggestions.filter((s) => s.suggestion_id !== suggestion.suggestion_id));
    } else {
      toast.error(result.error || 'Failed to add goal');
    }
  };

  return (
    <div className="space-y-4">
      <Button
        onClick={handleGetSuggestions}
        disabled={loading}
        className="w-full sm:w-auto"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating suggestions...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            Get AI Goal Suggestions
          </>
        )}
      </Button>

      {showSuggestions && suggestions.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {suggestions.map((suggestion) => (
            <Card key={suggestion.suggestion_id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{suggestion.title}</CardTitle>
                  <Badge variant="outline">{suggestion.category}</Badge>
                </div>
                <CardDescription>{suggestion.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <Badge variant="secondary">{suggestion.difficulty}</Badge>
                  <span>📅 {suggestion.estimated_duration_weeks} weeks</span>
                  {suggestion.metadata.quick_win && (
                    <Badge variant="outline">⚡ Quick Win</Badge>
                  )}
                </div>

                <p className="text-sm text-muted-foreground italic">
                  💡 {suggestion.rationale}
                </p>

                <Button
                  onClick={() => handleAddGoal(suggestion)}
                  className="w-full"
                  variant="default"
                  size="sm"
                >
                  Add to My Goals
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
```

## Error Handling

### Error Codes

| Code | HTTP Status | Description | Recovery Action |
|------|-------------|-------------|-----------------|
| `INVALID_INPUT` | 400 | Missing or invalid required fields | Fix payload structure |
| `UNAUTHORIZED` | 401 | Invalid or missing webhook secret | Check authentication |
| `USER_NOT_FOUND` | 404 | User ID doesn't exist | Verify user_id is valid |
| `AI_GENERATION_FAILED` | 500 | AI model failed to generate suggestions | Retry with exponential backoff |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests | Wait and retry after delay |
| `TIMEOUT` | 504 | Request took too long | Reduce suggestion_count or retry |
| `INTERNAL_ERROR` | 500 | Unknown server error | Check n8n logs |

### Retry Strategy

- Retry failed AI calls up to 2 times
- Exponential backoff: 1s, 2s, 4s
- Return partial results if some suggestions succeed
- Log all errors for debugging

## Success Metrics

### Performance Targets
- **Response Time**: < 5 seconds (p95)
- **Success Rate**: > 95% of requests
- **AI Quality**: > 80% of suggestions rated as "relevant" by users

### Analytics to Track
1. Suggestion generation requests per user
2. Suggestions accepted vs. dismissed
3. Time from suggestion to goal creation
4. Completion rate of AI-suggested goals vs. manual goals
5. Category distribution of accepted suggestions

## Security Considerations

1. **Authentication**:
   - Webhook protected with Bearer token
   - User ID validated against Supabase Auth

2. **Rate Limiting**:
   - Max 10 requests per user per hour
   - Max 100 requests per hour globally
   - Implement in n8n using Redis/memory store

3. **Data Privacy**:
   - Never log full user payloads
   - Anonymize data in error logs
   - Don't store suggestions long-term without user consent

4. **Input Validation**:
   - Sanitize all user inputs
   - Validate UUID formats
   - Limit array sizes (max 50 existing goals)

## Future Enhancements

1. **Personalization**:
   - Learn from user's accepted/rejected suggestions
   - A/B test different AI prompts
   - Include time-of-day and seasonal trends

2. **Smart Scheduling**:
   - Suggest optimal target dates based on user's velocity
   - Avoid goal overload (limit concurrent active goals)

3. **Social Features**:
   - Suggest goals popular among similar users
   - Include trending goals by category

4. **Multi-modal Input**:
   - Accept voice/text description of interests
   - Analyze user's calendar for time availability

## Testing Checklist

- [ ] Webhook accepts valid payloads
- [ ] Webhook rejects invalid payloads with proper error codes
- [ ] AI generates relevant suggestions for various user profiles
- [ ] Response time < 5 seconds for 5 suggestions
- [ ] Rate limiting enforces limits correctly
- [ ] Error handling covers all failure scenarios
- [ ] Integration with Next.js app works end-to-end
- [ ] UI component renders suggestions correctly
- [ ] Adding suggested goal to user's list works
- [ ] Analytics events fire correctly

## Dependencies

### n8n Nodes Required
- Webhook (Trigger)
- Function/Code (JavaScript)
- HTTP Request (for OpenAI/Claude API)
- Set (for data transformation)
- Merge (for combining data)
- IF (for conditional logic)

### External Services
- OpenAI API or Anthropic Claude API
- Redis (optional, for rate limiting)

### Environment Variables (n8n)
```bash
OPENAI_API_KEY=sk-...
# OR
ANTHROPIC_API_KEY=sk-ant-...
```

---

**Document Version**: 1.0
**Last Updated**: 2025-10-21
**Owner**: Product Team
**Status**: Draft - Ready for Review
