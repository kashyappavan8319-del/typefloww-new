import { c as createLucideIcon, j as jsxRuntimeExports, d as cn, e as Badge, r as reactExports, b as useLocalStorage, a as useStreak, u as useNavigate, K as Keyboard, B as Button, L as Link, F as Flame } from "./index-B1Z6BCCy.js";
import { C as ChartNoAxesColumn, T as Trophy } from "./trophy-CcfYcoAr.js";
import { T as Target } from "./target-FRSZEhuL.js";
import { T as TriangleAlert } from "./triangle-alert-BY0MxWO9.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m2 9 3-3 3 3", key: "1ltn5i" }],
  ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6", key: "1r6tfw" }],
  ["path", { d: "m22 15-3 3-3-3", key: "4rnwn2" }],
  ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10", key: "2f72bc" }]
];
const Repeat2 = createLucideIcon("repeat-2", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
function buildSpeedSegments(sessions) {
  return [...sessions].slice(-10).map((s, i) => ({
    index: i,
    wpm: s.wpm,
    label: new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric"
    }).format(new Date(s.timestamp))
  }));
}
function PerformanceChart({
  sessions,
  className
}) {
  if (sessions.length < 2) return null;
  const segments = buildSpeedSegments(sessions);
  const maxWpm = Math.max(...segments.map((s) => s.wpm));
  const minWpm = Math.min(...segments.map((s) => s.wpm));
  const range = maxWpm - minWpm || 1;
  const W = 600;
  const H = 120;
  const PAD_LEFT = 36;
  const PAD_RIGHT = 16;
  const PAD_TOP = 16;
  const PAD_BOTTOM = 28;
  const innerW = W - PAD_LEFT - PAD_RIGHT;
  const innerH = H - PAD_TOP - PAD_BOTTOM;
  const xOf = (i) => PAD_LEFT + i / (segments.length - 1) * innerW;
  const yOf = (wpm) => PAD_TOP + innerH - (wpm - minWpm) / range * innerH;
  const points = segments.map(
    (s) => [xOf(s.index), yOf(s.wpm)]
  );
  const pathD = points.reduce((acc, [x, y], i) => {
    if (i === 0) return `M ${x},${y}`;
    const [px, py] = points[i - 1];
    const cpx1 = px + (x - px) * 0.45;
    const cpy1 = py;
    const cpx2 = x - (x - px) * 0.45;
    const cpy2 = y;
    return `${acc} C ${cpx1},${cpy1} ${cpx2},${cpy2} ${x},${y}`;
  }, "");
  const firstPt = points[0];
  const lastPt = points[points.length - 1];
  const fillD = `${pathD} L ${lastPt[0]},${PAD_TOP + innerH} L ${firstPt[0]},${PAD_TOP + innerH} Z`;
  const yTicks = [minWpm, Math.round((minWpm + maxWpm) / 2), maxWpm];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("card-surface p-4 sm:p-5", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-semibold text-foreground", children: "Speed Progression" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs text-muted-foreground", children: [
        "Last ",
        segments.length,
        " sessions"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        viewBox: `0 0 ${W} ${H}`,
        preserveAspectRatio: "none",
        className: "w-full",
        style: { height: 120 },
        "aria-label": "WPM progression chart",
        role: "img",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "chartFill", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: "oklch(var(--primary))",
                stopOpacity: "0.25"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: "oklch(var(--primary))",
                stopOpacity: "0.02"
              }
            )
          ] }) }),
          yTicks.map((tick) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "line",
              {
                x1: PAD_LEFT,
                y1: yOf(tick),
                x2: W - PAD_RIGHT,
                y2: yOf(tick),
                stroke: "oklch(var(--border))",
                strokeWidth: "1",
                strokeDasharray: "4 4"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "text",
              {
                x: PAD_LEFT - 6,
                y: yOf(tick),
                textAnchor: "end",
                dominantBaseline: "middle",
                fontSize: "9",
                fill: "oklch(var(--muted-foreground))",
                fontFamily: "var(--font-body)",
                children: tick
              }
            )
          ] }, tick)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: fillD, fill: "url(#chartFill)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: pathD,
              fill: "none",
              stroke: "oklch(var(--primary))",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          points.map(([x, y], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: x,
                cy: y,
                r: "4",
                fill: "oklch(var(--card))",
                stroke: "oklch(var(--primary))",
                strokeWidth: "2"
              }
            ),
            (segments.length <= 6 || i % 2 === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "text",
              {
                x,
                y: H - 4,
                textAnchor: "middle",
                fontSize: "8.5",
                fill: "oklch(var(--muted-foreground))",
                fontFamily: "var(--font-body)",
                children: segments[i].label
              }
            )
          ] }, `pt-${segments[i].label}-${segments[i].wpm}`))
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 mt-2 flex-wrap", children: segments.map((seg, i) => {
      const relativeSpeed = (seg.wpm - minWpm) / range;
      const barColor = relativeSpeed > 0.66 ? "bg-success/70" : relativeSpeed < 0.33 ? "bg-destructive/60" : "bg-primary/60";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-1.5 min-w-0",
          "data-ocid": `chart.bar_segment.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn("h-2 rounded-full flex-shrink-0", barColor),
                style: { width: `${Math.max(8, relativeSpeed * 32 + 8)}px` }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] text-muted-foreground truncate", children: [
              seg.wpm,
              " WPM"
            ] })
          ]
        },
        `seg-${seg.label}-${seg.wpm}`
      );
    }) })
  ] });
}
const MODE_LABELS$1 = {
  paragraph: "Paragraph",
  chat: "Chat",
  coding: "Code"
};
const LANG_LABELS$1 = {
  english: "EN",
  hinglish: "Hinglish"
};
function formatDuration$1(seconds) {
  if (seconds < 60) return `${seconds}s`;
  return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
}
function formatDate(ts) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(ts));
}
function SessionHistory({ sessions, className }) {
  const displayed = [...sessions].reverse().slice(0, 10);
  if (displayed.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("space-y-2", className), children: displayed.map((session, i) => {
    const isHighAccuracy = session.accuracy >= 90;
    const isLowAccuracy = session.accuracy < 70;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "card-surface flex items-center gap-3 p-3 sm:p-4 transition-smooth hover:border-primary/30",
        "data-ocid": `results.session_item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "h-4 w-4 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "text-xs h-5 px-2 font-body",
                  children: MODE_LABELS$1[session.mode] ?? session.mode
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs h-5 px-2 font-body", children: LANG_LABELS$1[session.language] ?? session.language }),
              session.mode === "paragraph" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: "text-xs h-5 px-2 font-body",
                  children: [
                    "Lvl ",
                    session.difficulty
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs text-muted-foreground flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                formatDate(session.timestamp)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground", children: formatDuration$1(session.duration) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs text-muted-foreground", children: [
                session.mistakesCount,
                " mistake",
                session.mistakesCount !== 1 ? "s" : ""
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-lg text-foreground leading-none tabular-nums", children: session.wpm }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-xs text-muted-foreground", children: "WPM" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: cn(
                    "font-display font-bold text-lg leading-none tabular-nums",
                    isHighAccuracy ? "text-success" : isLowAccuracy ? "text-destructive" : "text-foreground"
                  ),
                  children: [
                    session.accuracy,
                    "%"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-xs text-muted-foreground", children: "Acc" })
            ] })
          ] })
        ]
      },
      `${session.timestamp}-${session.mode}`
    );
  }) });
}
function useCountUp(target, duration = 1200, enabled = true) {
  const [count, setCount] = reactExports.useState(0);
  const rafRef = reactExports.useRef(null);
  const startRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!enabled || typeof target !== "number") {
      setCount(target);
      return;
    }
    setCount(0);
    startRef.current = null;
    const step = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, enabled]);
  return count;
}
function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  className,
  animate = false,
  colorClass,
  suffix = ""
}) {
  const numericValue = typeof value === "number" ? value : Number.parseFloat(String(value)) || 0;
  const isNumeric = typeof value === "number" || !Number.isNaN(numericValue) && suffix !== "";
  const animated = useCountUp(numericValue, 1200, animate && isNumeric);
  const displayValue = animate && isNumeric ? `${animated}${suffix}` : value;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "card-surface flex flex-col items-center gap-1 p-4 text-center transition-smooth",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: cn("h-5 w-5 mb-1", colorClass ?? "text-primary") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "font-display font-bold text-2xl text-foreground tabular-nums",
              colorClass
            ),
            children: displayValue
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs font-medium text-foreground/80 leading-tight", children: label }),
        sub && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[11px] text-muted-foreground leading-tight", children: sub })
      ]
    }
  );
}
const MODE_LABELS = {
  paragraph: "Paragraph",
  chat: "Chat",
  coding: "Code"
};
const LANG_LABELS = {
  english: "English",
  hinglish: "Hinglish"
};
function formatDuration(seconds) {
  if (seconds < 60) return `${seconds}s`;
  return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
}
function StreakBadge({ streak }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "inline-flex items-center gap-2 px-3 py-2 rounded-xl border",
        "bg-warning/10 border-warning/30 text-warning animate-pulse-once"
      ),
      "data-ocid": "results.streak_badge",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-4 w-4 fill-warning text-warning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-sm", children: [
          streak,
          " Day Streak!"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-warning" })
      ]
    }
  );
}
function LatestSessionCard({ session, animated }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "card-surface p-5 sm:p-6 space-y-5",
      "data-ocid": "results.latest_session_card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold text-foreground", children: "Latest Session" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-muted-foreground mt-0.5", children: [
              formatDuration(session.duration),
              " —",
              " ",
              new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
              }).format(new Date(session.timestamp))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "font-body text-xs", children: MODE_LABELS[session.mode] ?? session.mode }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "font-body text-xs", children: LANG_LABELS[session.language] ?? session.language }),
            session.mode === "paragraph" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "font-body text-xs", children: [
              "Lvl ",
              session.difficulty
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-center gap-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "font-display font-bold text-6xl sm:text-7xl text-primary leading-none tabular-nums",
              "data-ocid": "results.wpm_display",
              children: animated ? session.wpm : 0
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-sm text-muted-foreground mt-1 uppercase tracking-wider", children: "Words / Min" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: Target,
              label: "Accuracy",
              value: session.accuracy,
              suffix: "%",
              sub: "precision",
              animate: animated,
              colorClass: session.accuracy >= 90 ? "text-success" : session.accuracy < 70 ? "text-destructive" : void 0
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: TriangleAlert,
              label: "Mistakes",
              value: session.mistakesCount,
              sub: "total errors",
              animate: animated,
              colorClass: session.mistakesCount > 0 ? "text-destructive" : "text-success"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: Keyboard,
              label: "Words",
              value: session.totalWords,
              sub: "typed",
              animate: animated
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-body text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-success/70" }),
              "Correct:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-success ml-0.5", children: session.correctWords })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              "Incorrect:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-destructive ml-0.5", children: session.mistakesCount }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-destructive/70" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full bg-success/70 rounded-full transition-all duration-1000 ease-out",
              style: {
                width: `${session.totalWords > 0 ? session.correctWords / session.totalWords * 100 : 0}%`
              },
              "data-ocid": "results.accuracy_bar"
            }
          ) })
        ] })
      ]
    }
  );
}
function ResultsPage() {
  const [sessions, setSessions] = useLocalStorage(
    "typeflow-sessions",
    []
  );
  const { streak, isStreakActive } = useStreak();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    try {
      const raw = window.localStorage.getItem("typeflow-sessions");
      const parsed = raw ? JSON.parse(raw) : [];
      setSessions(parsed);
    } catch {
    }
  }, [setSessions]);
  const [animated, setAnimated] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 150);
    return () => clearTimeout(t);
  }, []);
  const latestSession = sessions.length > 0 ? sessions[sessions.length - 1] : null;
  const allTimeBestWpm = sessions.length > 0 ? Math.max(...sessions.map((r) => r.wpm)) : 0;
  const avgWpm = sessions.length > 0 ? Math.round(sessions.reduce((s, r) => s + r.wpm, 0) / sessions.length) : 0;
  const avgAccuracy = sessions.length > 0 ? Math.round(
    sessions.reduce((s, r) => s + r.accuracy, 0) / sessions.length
  ) : 0;
  const totalSessions = sessions.length;
  const clearSessions = () => setSessions([]);
  const handlePracticeAgain = () => {
    if (latestSession) {
      void navigate({
        to: "/practice",
        search: { mode: latestSession.mode }
      });
    } else {
      void navigate({ to: "/practice" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "min-h-[calc(100dvh-3.5rem)] bg-background",
      "data-ocid": "results.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl px-4 sm:px-6 py-6 sm:py-8 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-start justify-between gap-3",
            "data-ocid": "results.header",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl sm:text-3xl font-bold text-foreground", children: "Your Progress" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-muted-foreground mt-0.5", children: [
                  totalSessions,
                  " session",
                  totalSessions !== 1 ? "s" : "",
                  " completed"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 shrink-0", children: isStreakActive && streak.currentStreak > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(StreakBadge, { streak: streak.currentStreak }) })
            ]
          }
        ),
        isStreakActive && streak.currentStreak >= 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "card-surface p-4 flex items-center gap-3 border-warning/30 bg-warning/5",
            "data-ocid": "results.streak_celebration",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-warning/15 border border-warning/30 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-5 w-5 text-warning" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-semibold text-sm text-foreground", children: [
                  streak.currentStreak,
                  "-day streak! Keep it up!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: "Come back tomorrow to extend your streak." })
              ] })
            ]
          }
        ),
        sessions.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          latestSession && /* @__PURE__ */ jsxRuntimeExports.jsx(LatestSessionCard, { session: latestSession, animated }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "results.historical_stats_section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "All-time stats" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  icon: TrendingUp,
                  label: "Best WPM",
                  value: allTimeBestWpm,
                  sub: "personal record",
                  animate: animated,
                  colorClass: "text-primary"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  icon: Keyboard,
                  label: "Avg WPM",
                  value: avgWpm,
                  sub: "words / min",
                  animate: animated
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  icon: Target,
                  label: "Avg Accuracy",
                  value: avgAccuracy,
                  suffix: "%",
                  sub: "precision",
                  animate: animated,
                  colorClass: avgAccuracy >= 90 ? "text-success" : void 0
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  icon: ChartNoAxesColumn,
                  label: "Sessions",
                  value: totalSessions,
                  sub: "completed",
                  animate: animated
                }
              )
            ] })
          ] }),
          sessions.length >= 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            PerformanceChart,
            {
              sessions,
              "data-ocid": "results.chart_section"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "results.history_section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Session History" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: clearSessions,
                  className: "h-7 px-2 font-body text-xs text-destructive hover:bg-destructive/10 hover:text-destructive rounded-lg transition-smooth",
                  "data-ocid": "results.clear_button",
                  children: "Clear all"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SessionHistory, { sessions })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col sm:flex-row gap-3 pt-2",
              "data-ocid": "results.cta_section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    onClick: handlePracticeAgain,
                    className: "flex-1 h-12 gap-2 font-body font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-elevated transition-smooth",
                    "data-ocid": "results.practice_again_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Repeat2, { className: "h-4 w-4" }),
                      "Practice Again"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex-1", "data-ocid": "results.new_mode_link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "lg",
                    className: "w-full h-12 gap-2 font-body font-semibold rounded-xl border-border hover:bg-muted transition-smooth",
                    "data-ocid": "results.new_mode_button",
                    children: "Try a New Mode"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 sm:flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "icon",
                      className: "h-12 w-12 rounded-xl border-border hover:bg-muted transition-smooth shrink-0",
                      "aria-label": "Share results (coming soon)",
                      "data-ocid": "results.share_button",
                      onClick: () => {
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4 text-muted-foreground" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "icon",
                      className: "h-12 w-12 rounded-xl border-border hover:bg-muted transition-smooth shrink-0",
                      "aria-label": "Export stats (coming soon)",
                      "data-ocid": "results.export_button",
                      onClick: () => {
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4 text-muted-foreground" })
                    }
                  )
                ] })
              ]
            }
          )
        ] }) : (
          /* Empty state */
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "card-surface flex flex-col items-center justify-center py-16 gap-5",
              "data-ocid": "results.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: cn(
                      "flex h-20 w-20 items-center justify-center rounded-2xl",
                      "bg-muted/50 border border-border"
                    ),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "h-10 w-10 text-muted-foreground" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-xl text-foreground", children: "No sessions yet" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground max-w-xs leading-relaxed", children: "Complete a typing session to see your WPM, accuracy, and progress over time." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/practice", "data-ocid": "results.start_practice_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "h-12 px-8 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-body font-semibold gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Keyboard, { className: "h-4 w-4" }),
                      "Start your first session"
                    ]
                  }
                ) }) })
              ]
            }
          )
        )
      ] })
    }
  );
}
export {
  ResultsPage
};
