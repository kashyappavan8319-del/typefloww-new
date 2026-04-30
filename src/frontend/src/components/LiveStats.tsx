import { cn } from "@/lib/utils";
import { AlertTriangle, Gauge, Target, Timer } from "lucide-react";
import { useEffect, useState } from "react";

interface LiveStatsProps {
  wpm: number;
  accuracy: number;
  mistakesCount: number;
  isStarted: boolean;
  isFinished: boolean;
  startTime: number | null;
  correctWords?: number;
  totalTyped?: number;
  className?: string;
}

export function LiveStats({
  wpm,
  accuracy,
  mistakesCount,
  isStarted,
  isFinished,
  startTime,
  correctWords = 0,
  totalTyped = 0,
  className,
}: LiveStatsProps) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!isStarted || isFinished || !startTime) return;
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, [isStarted, isFinished, startTime]);

  const formatTime = (secs: number): string => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return m > 0 ? `${m}:${s.toString().padStart(2, "0")}` : `${s}s`;
  };

  const accuracyColor =
    accuracy >= 90
      ? "text-success"
      : accuracy < 70
        ? "text-destructive"
        : "text-foreground";

  const mistakesColor =
    mistakesCount > 0 ? "text-destructive" : "text-foreground";

  return (
    <div
      className={cn("card-surface p-4 sm:p-5 space-y-3", className)}
      data-ocid="practice.stats_panel"
    >
      {/* Main stats row */}
      <div className="flex items-center justify-around gap-2">
        {/* WPM */}
        <div
          className="flex flex-col items-center gap-0.5 min-w-[52px]"
          data-ocid="practice.stats_wpm"
        >
          <Gauge className="h-4 w-4 text-primary mb-0.5" />
          <span className="font-display font-bold text-2xl leading-none text-foreground">
            {wpm}
          </span>
          <span className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">
            WPM
          </span>
        </div>

        <div className="h-8 w-px bg-border" />

        {/* Accuracy */}
        <div
          className="flex flex-col items-center gap-0.5 min-w-[60px]"
          data-ocid="practice.stats_accuracy"
        >
          <Target className="h-4 w-4 text-primary mb-0.5" />
          <span
            className={cn(
              "font-display font-bold text-2xl leading-none",
              accuracyColor,
            )}
          >
            {accuracy}%
          </span>
          <span className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">
            Accuracy
          </span>
        </div>

        <div className="h-8 w-px bg-border" />

        {/* Mistakes */}
        <div
          className="flex flex-col items-center gap-0.5 min-w-[52px]"
          data-ocid="practice.stats_mistakes"
        >
          <AlertTriangle
            className={cn(
              "h-4 w-4 mb-0.5",
              mistakesCount > 0 ? "text-destructive" : "text-primary",
            )}
          />
          <span
            className={cn(
              "font-display font-bold text-2xl leading-none",
              mistakesColor,
            )}
          >
            {mistakesCount}
          </span>
          <span className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">
            Mistakes
          </span>
        </div>

        <div className="h-8 w-px bg-border" />

        {/* Timer */}
        <div
          className="flex flex-col items-center gap-0.5 min-w-[52px]"
          data-ocid="practice.stats_timer"
        >
          <Timer className="h-4 w-4 text-primary mb-0.5" />
          <span className="font-display font-bold text-2xl leading-none text-foreground">
            {isStarted ? formatTime(elapsed) : "—"}
          </span>
          <span className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">
            Time
          </span>
        </div>
      </div>

      {/* Progress bar — show once typing has started */}
      {totalTyped > 0 && (
        <div
          className="flex items-center gap-2.5 pt-0.5"
          data-ocid="practice.stats_progress"
        >
          <span className="font-body text-xs text-muted-foreground shrink-0">
            Incorrect:{" "}
            <span className="text-destructive font-semibold">
              {totalTyped - correctWords}
            </span>
          </span>
          <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-smooth"
              style={{
                width: `${totalTyped > 0 ? (correctWords / totalTyped) * 100 : 0}%`,
              }}
            />
          </div>
          <span className="font-body text-xs text-primary font-semibold shrink-0">
            Correct: {correctWords}
          </span>
        </div>
      )}
    </div>
  );
}
