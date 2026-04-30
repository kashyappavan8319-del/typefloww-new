import { cn } from "@/lib/utils";
import type { SessionResult } from "@/types";

interface SpeedSegment {
  index: number;
  wpm: number;
  label: string;
}

function buildSpeedSegments(sessions: SessionResult[]): SpeedSegment[] {
  // Build segments from last 10 sessions, ordered oldest -> newest
  return [...sessions].slice(-10).map((s, i) => ({
    index: i,
    wpm: s.wpm,
    label: new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(new Date(s.timestamp)),
  }));
}

interface PerformanceChartProps {
  sessions: SessionResult[];
  className?: string;
}

export function PerformanceChart({
  sessions,
  className,
}: PerformanceChartProps) {
  if (sessions.length < 2) return null;

  const segments = buildSpeedSegments(sessions);
  const maxWpm = Math.max(...segments.map((s) => s.wpm));
  const minWpm = Math.min(...segments.map((s) => s.wpm));
  const range = maxWpm - minWpm || 1;

  // SVG dimensions
  const W = 600;
  const H = 120;
  const PAD_LEFT = 36;
  const PAD_RIGHT = 16;
  const PAD_TOP = 16;
  const PAD_BOTTOM = 28;
  const innerW = W - PAD_LEFT - PAD_RIGHT;
  const innerH = H - PAD_TOP - PAD_BOTTOM;

  const xOf = (i: number) => PAD_LEFT + (i / (segments.length - 1)) * innerW;
  const yOf = (wpm: number) =>
    PAD_TOP + innerH - ((wpm - minWpm) / range) * innerH;

  // Build smooth polyline path
  const points = segments.map(
    (s) => [xOf(s.index), yOf(s.wpm)] as [number, number],
  );

  // Catmull-Rom to bezier approximation
  const pathD = points.reduce((acc, [x, y], i) => {
    if (i === 0) return `M ${x},${y}`;
    const [px, py] = points[i - 1];
    const cpx1 = px + (x - px) * 0.45;
    const cpy1 = py;
    const cpx2 = x - (x - px) * 0.45;
    const cpy2 = y;
    return `${acc} C ${cpx1},${cpy1} ${cpx2},${cpy2} ${x},${y}`;
  }, "");

  // Fill area under curve
  const firstPt = points[0];
  const lastPt = points[points.length - 1];
  const fillD = `${pathD} L ${lastPt[0]},${PAD_TOP + innerH} L ${firstPt[0]},${PAD_TOP + innerH} Z`;

  // Y-axis labels (3 ticks)
  const yTicks = [minWpm, Math.round((minWpm + maxWpm) / 2), maxWpm];

  return (
    <div className={cn("card-surface p-4 sm:p-5", className)}>
      <div className="flex items-center justify-between mb-3">
        <span className="font-display text-sm font-semibold text-foreground">
          Speed Progression
        </span>
        <span className="font-body text-xs text-muted-foreground">
          Last {segments.length} sessions
        </span>
      </div>

      <div className="w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          className="w-full"
          style={{ height: 120 }}
          aria-label="WPM progression chart"
          role="img"
        >
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="oklch(var(--primary))"
                stopOpacity="0.25"
              />
              <stop
                offset="100%"
                stopColor="oklch(var(--primary))"
                stopOpacity="0.02"
              />
            </linearGradient>
          </defs>

          {/* Y-axis ticks */}
          {yTicks.map((tick) => (
            <g key={tick}>
              <line
                x1={PAD_LEFT}
                y1={yOf(tick)}
                x2={W - PAD_RIGHT}
                y2={yOf(tick)}
                stroke="oklch(var(--border))"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <text
                x={PAD_LEFT - 6}
                y={yOf(tick)}
                textAnchor="end"
                dominantBaseline="middle"
                fontSize="9"
                fill="oklch(var(--muted-foreground))"
                fontFamily="var(--font-body)"
              >
                {tick}
              </text>
            </g>
          ))}

          {/* Fill */}
          <path d={fillD} fill="url(#chartFill)" />

          {/* Line */}
          <path
            d={pathD}
            fill="none"
            stroke="oklch(var(--primary))"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points + X labels */}
          {points.map(([x, y], i) => (
            <g key={`pt-${segments[i].label}-${segments[i].wpm}`}>
              <circle
                cx={x}
                cy={y}
                r="4"
                fill="oklch(var(--card))"
                stroke="oklch(var(--primary))"
                strokeWidth="2"
              />
              {(segments.length <= 6 || i % 2 === 0) && (
                <text
                  x={x}
                  y={H - 4}
                  textAnchor="middle"
                  fontSize="8.5"
                  fill="oklch(var(--muted-foreground))"
                  fontFamily="var(--font-body)"
                >
                  {segments[i].label}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Color legend for per-session bars */}
      <div className="flex items-center gap-4 mt-2 flex-wrap">
        {segments.map((seg, i) => {
          const relativeSpeed = (seg.wpm - minWpm) / range;
          const barColor =
            relativeSpeed > 0.66
              ? "bg-success/70"
              : relativeSpeed < 0.33
                ? "bg-destructive/60"
                : "bg-primary/60";
          return (
            <div
              key={`seg-${seg.label}-${seg.wpm}`}
              className="flex items-center gap-1.5 min-w-0"
              data-ocid={`chart.bar_segment.${i + 1}`}
            >
              <div
                className={cn("h-2 rounded-full flex-shrink-0", barColor)}
                style={{ width: `${Math.max(8, relativeSpeed * 32 + 8)}px` }}
              />
              <span className="font-mono text-[10px] text-muted-foreground truncate">
                {seg.wpm} WPM
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
