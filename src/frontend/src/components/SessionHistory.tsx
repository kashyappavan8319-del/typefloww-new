import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { SessionResult } from "@/types";
import { BarChart2, Clock } from "lucide-react";

const MODE_LABELS: Record<string, string> = {
  paragraph: "Paragraph",
  chat: "Chat",
  coding: "Code",
};

const LANG_LABELS: Record<string, string> = {
  english: "EN",
  hinglish: "Hinglish",
};

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
}

function formatDate(ts: number): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(ts));
}

interface SessionHistoryProps {
  sessions: SessionResult[];
  className?: string;
}

export function SessionHistory({ sessions, className }: SessionHistoryProps) {
  const displayed = [...sessions].reverse().slice(0, 10);

  if (displayed.length === 0) return null;

  return (
    <div className={cn("space-y-2", className)}>
      {displayed.map((session, i) => {
        const isHighAccuracy = session.accuracy >= 90;
        const isLowAccuracy = session.accuracy < 70;

        return (
          <div
            key={`${session.timestamp}-${session.mode}`}
            className="card-surface flex items-center gap-3 p-3 sm:p-4 transition-smooth hover:border-primary/30"
            data-ocid={`results.session_item.${i + 1}`}
          >
            {/* Icon */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
              <BarChart2 className="h-4 w-4 text-primary" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <Badge
                  variant="secondary"
                  className="text-xs h-5 px-2 font-body"
                >
                  {MODE_LABELS[session.mode] ?? session.mode}
                </Badge>
                <Badge variant="outline" className="text-xs h-5 px-2 font-body">
                  {LANG_LABELS[session.language] ?? session.language}
                </Badge>
                {session.mode === "paragraph" && (
                  <Badge
                    variant="outline"
                    className="text-xs h-5 px-2 font-body"
                  >
                    Lvl {session.difficulty}
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                <span className="font-body text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {formatDate(session.timestamp)}
                </span>
                <span className="font-body text-xs text-muted-foreground">
                  {formatDuration(session.duration)}
                </span>
                <span className="font-body text-xs text-muted-foreground">
                  {session.mistakesCount} mistake
                  {session.mistakesCount !== 1 ? "s" : ""}
                </span>
              </div>
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right">
                <div className="font-display font-bold text-lg text-foreground leading-none tabular-nums">
                  {session.wpm}
                </div>
                <div className="font-body text-xs text-muted-foreground">
                  WPM
                </div>
              </div>
              <div className="text-right">
                <div
                  className={cn(
                    "font-display font-bold text-lg leading-none tabular-nums",
                    isHighAccuracy
                      ? "text-success"
                      : isLowAccuracy
                        ? "text-destructive"
                        : "text-foreground",
                  )}
                >
                  {session.accuracy}%
                </div>
                <div className="font-body text-xs text-muted-foreground">
                  Acc
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
