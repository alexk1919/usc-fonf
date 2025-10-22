import { createClient } from '@/lib/supabase/server';

export type Goal = {
  id: string;
  user_id: string;
  title: string;
  description?: string | null;
  category?: string | null;
  target_date?: string | null;
  progress: number;
  status: 'active' | 'completed' | 'archived';
  created_at: string;
  updated_at: string;
};

export type NewGoal = Omit<Goal, 'id' | 'user_id' | 'created_at' | 'updated_at'>;
export type GoalUpdate = Partial<Omit<Goal, 'id' | 'user_id' | 'created_at' | 'updated_at'>>;

/**
 * Fetch all goals for the current user
 */
export async function getGoals(): Promise<Goal[]> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Not authenticated');
  }

  const { data, error } = await supabase
    .from('goals')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch goals: ${error.message}`);
  }

  return data as Goal[];
}

/**
 * Fetch a single goal by ID
 */
export async function getGoal(id: string): Promise<Goal | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Not authenticated');
  }

  const { data, error } = await supabase
    .from('goals')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return null; // Not found
    }
    throw new Error(`Failed to fetch goal: ${error.message}`);
  }

  return data as Goal;
}

/**
 * Create a new goal
 */
export async function createGoal(goalData: NewGoal): Promise<Goal> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Not authenticated');
  }

  const { data, error } = await supabase
    .from('goals')
    .insert({
      ...goalData,
      user_id: user.id,
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create goal: ${error.message}`);
  }

  return data as Goal;
}

/**
 * Update an existing goal
 */
export async function updateGoal(id: string, updates: GoalUpdate): Promise<Goal> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Not authenticated');
  }

  const { data, error } = await supabase
    .from('goals')
    .update(updates)
    .eq('id', id)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to update goal: ${error.message}`);
  }

  return data as Goal;
}

/**
 * Delete a goal
 */
export async function deleteGoal(id: string): Promise<void> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Not authenticated');
  }

  const { error } = await supabase
    .from('goals')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    throw new Error(`Failed to delete goal: ${error.message}`);
  }
}

/**
 * Update goal progress
 */
export async function updateProgress(id: string, progress: number): Promise<Goal> {
  if (progress < 0 || progress > 100) {
    throw new Error('Progress must be between 0 and 100');
  }

  return updateGoal(id, { progress });
}
