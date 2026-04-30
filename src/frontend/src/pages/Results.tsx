import { PerformanceChart } from "@/components/PerformanceChart";
import { SessionHistory } from "@/components/SessionHistory";
import { StatCard } from "@/components/StatCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useStreak } from "@/hooks/useStreak";
import { cn } from "@/lib/utils";
import type { SessionResult } from "@/types";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  AlertTriangle,
  BarChart2,
  Download,
  Flame,
  Keyboard,
  Repeat2,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";

const MODE_LABELS: Record<string, string> = {
  paragraph: "Paragraph",
  chat: "Chat",
  coding: "Code",
};

const LANG_LABELS: Record<string, string> = {
  english: "English",
  hinglish: "Hinglish",
};

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
}

function StreakBadge({ streak }: { streak: number }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-2 rounded-xl border",
        "bg-warning/10 border-warning/30 text-warning animate-pulse-once",
      )}
      data-ocid="results.streak_badge"
    >
      <Flame className="h-4 w-4 fill-warning text-warning" />
      <span className="font-display font-bold text-sm">
        {streak} Day Streak!
      </span>
      <Sparkles className="h-3.5 w-3.5 text-warning" />
    </div>
  );
}

interface LatestSessionCardProps {
  session: SessionResult;
  animated: boolean;
}

function LatestSessionCard({ session, animated }: LatestSessionCardProps) {
  return (
    <div
      className="card-surface p-5 sm:p-6 space-y-5"
      data-ocid="results.latest_session_card"
    >
      {/* Title row */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-lg font-bold text-foreground">
            Latest Session
          </h2>
          <p className="font-body text-xs text-muted-foreground mt-0.5">
            {formatDuration(session.duration)} —{" "}
            {new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }).format(new Date(session.timestamp))}
          </p>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap justify-end">
          <Badge variant="secondary" className="font-body text-xs">
            {MODE_LABELS[session.mode] ?? session.mode}
          </Badge>
          <Badge variant="outline" className="font-body text-xs">
            {LANG_LABELS[session.language] ?? session.language}
          </Badge>
          {session.mode === "paragraph" && (
            <Badge variant="outline" className="font-body text-xs">
              Lvl {session.difficulty}
            </Badge>
          )}
        </div>
      </div>

      {/* Big WPM hero */}
      <div className="flex items-end justify-center gap-4 py-2">
        <div className="text-center">
          <div
            className="font-display font-bold text-6xl sm:text-7xl text-primary leading-none tabular-nums"
            data-ocid="results.wpm_display"
          >
            {animated ? session.wpm : 0}
          </div>
          <div className="font-body text-sm text-muted-foreground mt-1 uppercase tracking-wider">
            Words / Min
          </div>
        </div>
      </div>

      {/* Stat grid */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard
          icon={Target}
          label="Accuracy"
          value={session.accuracy}
          suffix="%"
          sub="precision"
          animate={animated}
          colorClass={
            session.accuracy >= 90
              ? "text-success"
              : session.accuracy < 70
                ? "text-destructive"
                : undefined
          }
        />
        <StatCard
          icon={AlertTriangle}
          label="Mistakes"
          value={session.mistakesCount}
          sub="total errors"
          animate={animated}
          colorClass={
            session.mistakesCount > 0 ? "text-destructive" : "text-success"
          }
        />
        <StatCard
          icon={Keyboard}
          label="Words"
          value={session.totalWords}
          sub="typed"
          animate={animated}
        />
      </div>

      {/* Word accuracy bar */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-body text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-success/70" />
            Correct:{" "}
            <strong className="text-success ml-0.5">
              {session.correctWords}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            Incorrect:{" "}
            <strong className="text-destructive ml-0.5">
              {session.mistakesCount}
            </strong>
            <span className="inline-block w-2 h-2 rounded-full bg-destructive/70" />
          </span>
        </div>
        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-success/70 rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${session.totalWords > 0 ? (session.correctWords / session.totalWords) * 100 : 0}%`,
            }}
            data-ocid="results.accuracy_bar"
          />
        </div>
      </div>
    </div>
  );
}

export function ResultsPage() {
  const [sessions, setSessions] = useLocalStorage<SessionResult[]>(
    "typeflow-sessions",
    [],
  );
  const { streak, isStreakActive } = useStreak();
  const navigate = useNavigate();

  // Force a fresh read from localStorage on every mount to avoid stale state
  // (the hook initializes state once; after navigation from Practice the write
  // may have just happened, so we sync the React state from the real storage)
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("typeflow-sessions");
      const parsed = raw ? (JSON.parse(raw) as SessionResult[]) : [];
      setSessions(parsed);
    } catch {
      // keep existing state on error
    }
  }, [setSessions]);

  // Trigger animated count-up after mount
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 150);
    return () => clearTimeout(t);
  }, []);

  const latestSession =
    sessions.length > 0 ? sessions[sessions.length - 1] : null;

  const allTimeBestWpm =
    sessions.length > 0 ? Math.max(...sessions.map((r) => r.wpm)) : 0;
  const avgWpm =
    sessions.length > 0
      ? Math.round(sessions.reduce((s, r) => s + r.wpm, 0) / sessions.length)
      : 0;
  const avgAccuracy =
    sessions.length > 0
      ? Math.round(
          sessions.reduce((s, r) => s + r.accuracy, 0) / sessions.length,
        )
      : 0;
  const totalSessions = sessions.length;

  const clearSessions = () => setSessions([]);

  const handlePracticeAgain = () => {
    if (latestSession) {
      void navigate({
        to: "/practice",
        search: { mode: latestSession.mode },
      });
    } else {
      void navigate({ to: "/practice" });
    }
  };

  return (
    <div
      className="min-h-[calc(100dvh-3.5rem)] bg-background"
      data-ocid="results.page"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-6 sm:py-8 space-y-5">
        {/* Page header */}
        <div
          className="flex items-start justify-between gap-3"
          data-ocid="results.header"
        >
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Your Progress
            </h1>
            <p className="font-body text-sm text-muted-foreground mt-0.5">
              {totalSessions} session{totalSessions !== 1 ? "s" : ""} completed
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {isStreakActive && streak.currentStreak > 0 && (
              <StreakBadge streak={streak.currentStreak} />
            )}
          </div>
        </div>

        {/* Streak celebration (prominent if just increased) */}
        {isStreakActive && streak.currentStreak >= 3 && (
          <div
            className="card-surface p-4 flex items-center gap-3 border-warning/30 bg-warning/5"
            data-ocid="results.streak_celebration"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-warning/15 border border-warning/30 shrink-0">
              <Trophy className="h-5 w-5 text-warning" />
            </div>
            <div className="min-w-0">
              <p className="font-display font-semibold text-sm text-foreground">
                {streak.currentStreak}-day streak! Keep it up!
              </p>
              <p className="font-body text-xs text-muted-foreground">
                Come back tomorrow to extend your streak.
              </p>
            </div>
          </div>
        )}

        {sessions.length > 0 ? (
          <>
            {/* Latest session results card */}
            {latestSession && (
              <LatestSessionCard session={latestSession} animated={animated} />
            )}

            {/* All-time historical stats */}
            <section data-ocid="results.historical_stats_section">
              <h2 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                All-time stats
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <StatCard
                  icon={TrendingUp}
                  label="Best WPM"
                  value={allTimeBestWpm}
                  sub="personal record"
                  animate={animated}
                  colorClass="text-primary"
                />
                <StatCard
                  icon={Keyboard}
                  label="Avg WPM"
                  value={avgWpm}
                  sub="words / min"
                  animate={animated}
                />
                <StatCard
                  icon={Target}
                  label="Avg Accuracy"
                  value={avgAccuracy}
                  suffix="%"
                  sub="precision"
                  animate={animated}
                  colorClass={avgAccuracy >= 90 ? "text-success" : undefined}
                />
                <StatCard
                  icon={BarChart2}
                  label="Sessions"
                  value={totalSessions}
                  sub="completed"
                  animate={animated}
                />
              </div>
            </section>

            {/* Speed progression chart */}
            {sessions.length >= 2 && (
              <PerformanceChart
                sessions={sessions}
                data-ocid="results.chart_section"
              />
            )}

            {/* Session history */}
            <section data-ocid="results.history_section">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Session History
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearSessions}
                  className="h-7 px-2 font-body text-xs text-destructive hover:bg-destructive/10 hover:text-destructive rounded-lg transition-smooth"
                  data-ocid="results.clear_button"
                >
                  Clear all
                </Button>
              </div>
              <SessionHistory sessions={sessions} />
            </section>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 pt-2"
              data-ocid="results.cta_section"
            >
              <Button
                size="lg"
                onClick={handlePracticeAgain}
                className="flex-1 h-12 gap-2 font-body font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-elevated transition-smooth"
                data-ocid="results.practice_again_button"
              >
                <Repeat2 className="h-4 w-4" />
                Practice Again
              </Button>
              <Link to="/" className="flex-1" data-ocid="results.new_mode_link">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-12 gap-2 font-body font-semibold rounded-xl border-border hover:bg-muted transition-smooth"
                  data-ocid="results.new_mode_button"
                >
                  Try a New Mode
                </Button>
              </Link>

              {/* Export / share placeholder */}
              <div className="flex gap-2 sm:flex-col">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-xl border-border hover:bg-muted transition-smooth shrink-0"
                  aria-label="Share results (coming soon)"
                  data-ocid="results.share_button"
                  onClick={() => {}}
                >
                  <Share2 className="h-4 w-4 text-muted-foreground" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-xl border-border hover:bg-muted transition-smooth shrink-0"
                  aria-label="Export stats (coming soon)"
                  data-ocid="results.export_button"
                  onClick={() => {}}
                >
                  <Download className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          /* Empty state */
          <div
            className="card-surface flex flex-col items-center justify-center py-16 gap-5"
            data-ocid="results.empty_state"
          >
            <div
              className={cn(
                "flex h-20 w-20 items-center justify-center rounded-2xl",
                "bg-muted/50 border border-border",
              )}
            >
              <BarChart2 className="h-10 w-10 text-muted-foreground" />
            </div>
            <div className="text-center space-y-1.5">
              <h3 className="font-display font-semibold text-xl text-foreground">
                No sessions yet
              </h3>
              <p className="font-body text-sm text-muted-foreground max-w-xs leading-relaxed">
                Complete a typing session to see your WPM, accuracy, and
                progress over time.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/practice" data-ocid="results.start_practice_link">
                <Button
                  size="lg"
                  className="h-12 px-8 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-body font-semibold gap-2"
                >
                  <Keyboard className="h-4 w-4" />
                  Start your first session
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
