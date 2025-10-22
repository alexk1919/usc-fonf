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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Checkbox } from '@/components/ui/checkbox';
import { Sparkles, Loader2, ChevronDown, ChevronUp } from 'lucide-react';
import { getGoalSuggestions, type GoalSuggestion } from '@/app/actions/goal-suggestions';
import { createGoal } from '@/app/actions/goals';
import { toast } from 'sonner';

// Map n8n difficulty values to user-friendly display names
const difficultyMap: Record<GoalSuggestion['difficulty'], string> = {
  easy: 'Easy',
  medium: 'Moderate',
  hard: 'Challenging',
};

// Color variants for difficulty badges
const difficultyVariant: Record<GoalSuggestion['difficulty'], 'default' | 'secondary' | 'destructive' | 'outline'> = {
  easy: 'outline',
  medium: 'secondary',
  hard: 'default',
};

/**
 * Button component that fetches and displays AI-generated goal suggestions
 * Allows users to expand milestones and add suggestions directly to their goal list
 */
export function GoalSuggestionsButton() {
  const [suggestions, setSuggestions] = useState<GoalSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [expandedSuggestions, setExpandedSuggestions] = useState<Set<string>>(new Set());

  const handleGetSuggestions = async () => {
    setLoading(true);
    try {
      const result = await getGoalSuggestions({
        suggestion_count: 5,
      });

      if (result.success && result.suggestions) {
        setSuggestions(result.suggestions);
        setShowSuggestions(true);
        toast.success(`Generated ${result.suggestions.length} personalized suggestions!`);
      } else {
        toast.error(result.error?.message || 'Failed to generate suggestions');
        console.error('Goal suggestions error:', result.error);
      }
    } catch (error) {
      toast.error('Failed to fetch suggestions');
      console.error('Unexpected error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddGoal = async (suggestion: GoalSuggestion) => {
    const result = await createGoal({
      title: suggestion.title,
      description: suggestion.description,
      category: suggestion.category,
      target_date: suggestion.suggested_target_date || null,
      progress: 0,
      status: 'active',
    });

    if (result.success) {
      toast.success('Goal added to your list!');
      // Remove suggestion from list
      setSuggestions(suggestions.filter((s) => s.id !== suggestion.id));

      // If no more suggestions, hide the section
      if (suggestions.length === 1) {
        setShowSuggestions(false);
      }
    } else {
      toast.error(result.error || 'Failed to add goal');
    }
  };

  const toggleMilestones = (suggestionId: string) => {
    setExpandedSuggestions((prev) => {
      const next = new Set(prev);
      if (next.has(suggestionId)) {
        next.delete(suggestionId);
      } else {
        next.add(suggestionId);
      }
      return next;
    });
  };

  return (
    <div className="space-y-4">
      <Button
        onClick={handleGetSuggestions}
        disabled={loading}
        className="w-full sm:w-auto"
        size="lg"
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
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              Suggested Goals for You
            </h3>
            <Badge variant="outline">
              {suggestions.length} {suggestions.length === 1 ? 'suggestion' : 'suggestions'}
            </Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {suggestions.map((suggestion) => {
              const isExpanded = expandedSuggestions.has(suggestion.id);

              return (
                <Card key={suggestion.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg leading-tight">
                        {suggestion.title}
                      </CardTitle>
                      <Badge variant="outline" className="shrink-0">
                        {suggestion.category}
                      </Badge>
                    </div>
                    <CardDescription className="line-clamp-3">
                      {suggestion.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    {/* Metadata badges */}
                    <div className="flex flex-wrap gap-2 text-sm">
                      <Badge variant={difficultyVariant[suggestion.difficulty]}>
                        {difficultyMap[suggestion.difficulty]}
                      </Badge>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        📅 {suggestion.estimated_duration_days} days
                      </span>
                    </div>

                    {/* Why suggested */}
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground italic">
                        💡 {suggestion.why_suggested}
                      </p>
                    </div>

                    {/* Collapsible Milestones */}
                    {suggestion.milestones && suggestion.milestones.length > 0 && (
                      <Collapsible
                        open={isExpanded}
                        onOpenChange={() => toggleMilestones(suggestion.id)}
                      >
                        <CollapsibleTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-between"
                          >
                            <span className="text-sm font-medium">
                              {suggestion.milestones.length} milestone{suggestion.milestones.length !== 1 ? 's' : ''}
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pt-2">
                          <ul className="space-y-2 border-l-2 border-muted pl-4">
                            {suggestion.milestones.map((milestone, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Checkbox disabled className="mt-0.5" />
                                <span className="text-sm leading-snug">
                                  {milestone}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    )}

                    {/* Add to goals button */}
                    <Button
                      onClick={() => handleAddGoal(suggestion)}
                      className="w-full mt-auto"
                      size="sm"
                    >
                      Add to My Goals
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
