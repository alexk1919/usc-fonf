'use server';

import { revalidatePath } from 'next/cache';
import {
  createGoal as dbCreateGoal,
  updateGoal as dbUpdateGoal,
  deleteGoal as dbDeleteGoal,
  updateProgress as dbUpdateProgress,
  type NewGoal,
  type GoalUpdate,
} from '@/lib/db/goals';

/**
 * Server action to create a new goal
 */
export async function createGoal(goalData: NewGoal) {
  try {
    const goal = await dbCreateGoal(goalData);
    revalidatePath('/dashboard');
    return { success: true, data: goal };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An error occurred';
    return { success: false, error: message };
  }
}

/**
 * Server action to update a goal
 */
export async function updateGoal(id: string, updates: GoalUpdate) {
  try {
    const goal = await dbUpdateGoal(id, updates);
    revalidatePath('/dashboard');
    return { success: true, data: goal };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An error occurred';
    return { success: false, error: message };
  }
}

/**
 * Server action to delete a goal
 */
export async function deleteGoal(id: string) {
  try {
    await dbDeleteGoal(id);
    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An error occurred';
    return { success: false, error: message };
  }
}

/**
 * Server action to update goal progress
 */
export async function updateProgress(id: string, progress: number) {
  try {
    const goal = await dbUpdateProgress(id, progress);
    revalidatePath('/dashboard');
    return { success: true, data: goal };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An error occurred';
    return { success: false, error: message };
  }
}
