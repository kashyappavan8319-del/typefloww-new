import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: number | string;
  sub?: string;
  className?: string;
  animate?: boolean;
  colorClass?: string;
  suffix?: string;
}

function useCountUp(target: number, duration = 1200, enabled = true) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled || typeof target !== "number") {
      setCount(target);
      return;
    }
    setCount(0);
    startRef.current = null;

    const step = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
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

export function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  className,
  animate = false,
  colorClass,
  suffix = "",
}: StatCardProps) {
  const numericValue =
    typeof value === "number" ? value : Number.parseFloat(String(value)) || 0;
  const isNumeric =
    typeof value === "number" || (!Number.isNaN(numericValue) && suffix !== "");
  const animated = useCountUp(numericValue, 1200, animate && isNumeric);

  const displayValue = animate && isNumeric ? `${animated}${suffix}` : value;

  return (
    <div
      className={cn(
        "card-surface flex flex-col items-center gap-1 p-4 text-center transition-smooth",
        className,
      )}
    >
      <Icon className={cn("h-5 w-5 mb-1", colorClass ?? "text-primary")} />
      <span
        className={cn(
          "font-display font-bold text-2xl text-foreground tabular-nums",
          colorClass,
        )}
      >
        {displayValue}
      </span>
      <span className="font-body text-xs font-medium text-foreground/80 leading-tight">
        {label}
      </span>
      {sub && (
        <span className="font-body text-[11px] text-muted-foreground leading-tight">
          {sub}
        </span>
      )}
    </div>
  );
}
