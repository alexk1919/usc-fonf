'use server';

import { createClient } from '@/lib/supabase/server';
import { getGoals } from '@/lib/db/goals';

/**
 * Goal suggestion returned by the n8n AI workflow
 * Structure matches actual n8n output (as of 2025-10-21)
 */
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

/**
 * Response wrapper from n8n webhook
 * Actual structure: [{ output: { goal_suggestions: [...] } }]
 */
interface N8nGoalSuggestionsResponse {
  output: {
    goal_suggestions: Array<{
      id: string;
      title: string;
      description: string;
      category: 'Learning' | 'Career' | 'Health' | 'Personal';
      difficulty: 'easy' | 'medium' | 'hard';
      estimated_duration_days: number;
      why_suggested: string;
      milestones: string[];
    }>;
  };
}

/**
 * Response returned by the Server Action
 */
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

/**
 * Request parameters for customizing suggestions
 */
export interface SuggestionRequestParams {
  suggestion_count?: number;
  categories?: ('Learning' | 'Career' | 'Health' | 'Personal')[];
  exclude_similar_to?: string[];
}

/**
 * Calculate target date from estimated duration in days
 * @param durationDays - Number of days to complete the goal
 * @returns ISO date string (YYYY-MM-DD)
 */
function calculateTargetDate(durationDays: number): string {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + durationDays);
  return targetDate.toISOString().split('T')[0]; // YYYY-MM-DD
}

/**
 * Fetch AI-generated goal suggestions for the current user
 * Calls the n8n webhook endpoint with user context and existing goals
 *
 * @param params - Optional parameters to customize suggestions
 * @returns GoalSuggestionsResponse with suggestions or error details
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
          message: 'n8n webhook not configured. Please set N8N_WEBHOOK_URL and N8N_WEBHOOK_SECRET environment variables.',
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

    // 6. Parse n8n response
    const rawData: N8nGoalSuggestionsResponse[] = await response.json();

    // Extract suggestions from wrapper structure
    if (!rawData || !Array.isArray(rawData) || rawData.length === 0) {
      return {
        success: false,
        request_id: requestId,
        user_id: user.id,
        error: {
          code: 'INVALID_RESPONSE',
          message: 'n8n returned empty or invalid response',
        },
      };
    }

    const n8nOutput = rawData[0]?.output?.goal_suggestions;

    if (!n8nOutput || !Array.isArray(n8nOutput)) {
      return {
        success: false,
        request_id: requestId,
        user_id: user.id,
        error: {
          code: 'INVALID_RESPONSE',
          message: 'n8n response missing goal_suggestions array',
          details: rawData,
        },
      };
    }

    // 7. Transform suggestions and add calculated target dates
    const suggestions: GoalSuggestion[] = n8nOutput.map((suggestion) => ({
      ...suggestion,
      suggested_target_date: calculateTargetDate(suggestion.estimated_duration_days),
    }));

    return {
      success: true,
      request_id: requestId,
      user_id: user.id,
      suggestions,
    };

  } catch (error) {
    console.error('Error fetching goal suggestions:', error);
    return {
      success: false,
      request_id: crypto.randomUUID(),
      user_id: '',
      error: {
        code: 'INTERNAL_ERROR',
        message: error instanceof Error ? error.message : 'Unknown error occurred',
      },
    };
  }
}
