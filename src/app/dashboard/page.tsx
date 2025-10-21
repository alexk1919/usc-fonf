import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { getGoals } from '@/lib/db/goals';
import { DashboardClient } from './dashboard-client';

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  // Fetch goals server-side
  const goals = await getGoals();

  return <DashboardClient initialGoals={goals} user={user} />;
}
