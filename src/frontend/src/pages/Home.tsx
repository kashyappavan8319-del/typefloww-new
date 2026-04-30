import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useStreak } from "@/hooks/useStreak";
import { cn } from "@/lib/utils";
import type { SessionResult, TypingMode } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import {
  AlignLeft,
  ArrowRight,
  BarChart2,
  Code2,
  Flame,
  MessageSquare,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

// ── Mode card data ─────────────────────────────────────────────────────────────

const MODE_CARDS = [
  {
    mode: "paragraph" as TypingMode,
    icon: AlignLeft,
    title: "Paragraph Practice",
    description:
      "Train with real-world passages. Choose your difficulty from beginner (level 1) to expert (level 10).",
    badge: "Levels 1–10",
    badgeVariant: "secondary" as const,
    iconBg: "bg-primary/10 border-primary/20 text-primary",
    ctaColor: "text-primary",
    cardBg: "hover:border-primary/40",
  },
  {
    mode: "chat" as TypingMode,
    icon: MessageSquare,
    title: "Chat Simulation",
    description:
      "Practice with realistic Hinglish & English chat messages. Type like you actually talk.",
    badge: "Hinglish",
    badgeVariant: "outline" as const,
    iconBg: "bg-accent/10 border-accent/20 text-accent",
    ctaColor: "text-accent",
    cardBg: "hover:border-accent/40",
  },
  {
    mode: "coding" as TypingMode,
    icon: Code2,
    title: "Coding Mode",
    description:
      "Master symbols like {}, [], </>, () and indentation. Build real coding muscle memory.",
    badge: "Syntax",
    badgeVariant: "default" as const,
    iconBg: "bg-muted border-border text-foreground",
    ctaColor: "text-foreground",
    cardBg: "hover:border-border",
  },
] as const;

const FEATURE_PILLS = [
  { icon: Zap, label: "Real-time WPM" },
  { icon: Target, label: "Accuracy tracking" },
  { icon: BarChart2, label: "10 difficulty levels" },
];

// ── Stat Card ─────────────────────────────────────────────────────────────────

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  ocid,
  highlight,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  sub: string;
  ocid: string;
  highlight?: boolean;
}) {
  return (
    <div
      data-ocid={ocid}
      className={cn(
        "flex flex-col items-center justify-center gap-1 py-5 px-3 rounded-2xl",
        "bg-card border shadow-sm transition-smooth",
        highlight ? "border-primary/30 shadow-primary/5" : "border-border",
        "hover:shadow-md hover:border-primary/30",
      )}
    >
      <Icon
        className={cn(
          "w-5 h-5 mb-0.5",
          highlight ? "text-primary" : "text-muted-foreground",
        )}
      />
      <span className="text-[10px] font-body uppercase tracking-widest text-muted-foreground leading-none">
        {label}
      </span>
      <span className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-none mt-1">
        {value}
      </span>
      <span className="text-[10px] font-body text-muted-foreground">{sub}</span>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function HomePage() {
  const navigate = useNavigate();
  const { currentStreak, isStreakActive } = useStreak();
  const [sessions] = useLocalStorage<SessionResult[]>("typeflow-sessions", []);

  const totalSessions = sessions.length;
  const bestWpm =
    sessions.length > 0 ? Math.max(...sessions.map((s) => s.wpm)) : 0;

  function goToPractice(mode: TypingMode) {
    navigate({ to: "/practice", search: { mode } as Record<string, string> });
  }

  return (
    <div data-ocid="home.page" className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="flex flex-col items-center justify-center px-4 pt-14 pb-8 sm:pt-20 sm:pb-10 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-xl mx-auto w-full"
        >
          {/* Feature pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-6">
            {FEATURE_PILLS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-[11px] font-body text-muted-foreground bg-muted/60 border border-border rounded-full px-3 py-1.5"
              >
                <Icon className="w-3 h-3 text-primary" />
                {label}
              </span>
            ))}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-4">
            Type better.
            <br />
            <span className="text-primary">Feel faster.</span>
          </h1>

          <p className="font-body text-base sm:text-lg text-muted-foreground max-w-sm mx-auto leading-relaxed mb-8">
            A calm, premium typing experience built for real-life practice — not
            rigid drills.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              data-ocid="home.start_button"
              onClick={() => goToPractice("paragraph")}
              className="rounded-full h-12 px-8 font-display font-semibold gap-2 shadow-md transition-smooth hover:scale-[1.03] active:scale-[0.98]"
            >
              Start Typing
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              data-ocid="home.stats_button"
              onClick={() => navigate({ to: "/results" })}
              className="rounded-full h-12 px-8 font-display font-semibold transition-smooth hover:scale-[1.02]"
            >
              View My Stats
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ── Mode Cards ───────────────────────────────────────────────────────── */}
      <section
        data-ocid="home.modes_section"
        className="px-4 pb-8 sm:pb-10 bg-muted/30 border-t border-border pt-8 sm:pt-10"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-center mb-6"
          >
            <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-1">
              Choose your mode
            </h2>
            <p className="font-body text-sm text-muted-foreground">
              Three distinct experiences, each tuned for a different typing
              goal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {MODE_CARDS.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.button
                  key={card.mode}
                  type="button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25 + index * 0.1,
                    duration: 0.45,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  onClick={() => goToPractice(card.mode)}
                  data-ocid={`home.mode_card.${index + 1}`}
                  className={cn(
                    "group w-full text-left rounded-2xl p-5 border border-border",
                    "bg-card shadow-sm",
                    "transition-smooth hover:shadow-md",
                    card.cardBg,
                    "hover:scale-[1.02] active:scale-[0.99]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  )}
                >
                  {/* Icon + Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={cn(
                        "p-2.5 rounded-xl border transition-smooth group-hover:scale-105",
                        card.iconBg,
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge
                      variant={card.badgeVariant}
                      className="text-[10px] font-body"
                    >
                      {card.badge}
                    </Badge>
                  </div>

                  <h3 className="font-display font-semibold text-foreground text-sm mb-1.5 leading-tight">
                    {card.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed mb-4">
                    {card.description}
                  </p>

                  <div
                    className={cn(
                      "inline-flex items-center gap-1.5 text-xs font-display font-semibold transition-all duration-200",
                      "group-hover:gap-2.5",
                      card.ctaColor,
                    )}
                    data-ocid={`home.mode_cta.${index + 1}`}
                  >
                    Start practice
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Stats Strip ──────────────────────────────────────────────────────── */}
      <section
        data-ocid="home.stats_section"
        className="px-4 pt-8 pb-12 sm:pb-16 bg-background border-t border-border"
      >
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="text-[11px] font-body uppercase tracking-widest text-muted-foreground text-center mb-4"
          >
            Your progress
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.4 }}
            className="grid grid-cols-3 gap-3"
          >
            <StatCard
              ocid="home.streak_stat"
              icon={Flame}
              label="Streak"
              value={currentStreak}
              sub={currentStreak === 1 ? "day" : "days"}
              highlight={isStreakActive && currentStreak > 0}
            />
            <StatCard
              ocid="home.best_wpm_stat"
              icon={Trophy}
              label="Best WPM"
              value={bestWpm > 0 ? bestWpm : "—"}
              sub={bestWpm > 0 ? "words/min" : "not yet"}
              highlight={bestWpm > 0}
            />
            <StatCard
              ocid="home.sessions_stat"
              icon={BarChart2}
              label="Sessions"
              value={totalSessions}
              sub={totalSessions === 1 ? "session" : "sessions"}
              highlight={totalSessions > 0}
            />
          </motion.div>

          {totalSessions === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.4 }}
              data-ocid="home.stats_empty_state"
              className="text-center text-xs text-muted-foreground font-body mt-4"
            >
              Complete your first session to start tracking progress.
            </motion.p>
          )}
        </div>
      </section>
    </div>
  );
}
