import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { Target } from 'lucide-react';

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If user is logged in, redirect to dashboard
  if (user) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Target className="w-10 h-10 text-primary" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Personal Goal Tracker
        </h1>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Set, track, and achieve your personal and academic goals.
          Stay motivated with progress tracking and organized goal management.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/auth/signup"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg
                     font-medium text-lg hover:bg-primary/90 transition-all
                     shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
          <Link
            href="/auth/login"
            className="px-8 py-4 border border-border rounded-lg
                     font-medium text-lg hover:bg-muted transition-all"
          >
            Sign In
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p className="text-muted-foreground">
              Monitor your goals with visual progress bars and completion stats.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-semibold mb-2">Stay Organized</h3>
            <p className="text-muted-foreground">
              Categorize goals and filter by status to stay focused on what matters.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-semibold mb-2">Quick Add</h3>
            <p className="text-muted-foreground">
              Rapidly capture new goals as they come to mind with quick-add functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
