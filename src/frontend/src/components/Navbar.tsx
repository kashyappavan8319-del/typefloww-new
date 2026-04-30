import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useStreak } from "@/hooks/useStreak";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Flame, Keyboard, Moon, Sun } from "lucide-react";

export function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { currentStreak, isStreakActive } = useStreak();

  return (
    <header
      className="sticky top-0 z-50 w-full bg-card border-b border-border shadow-subtle"
      data-ocid="navbar"
    >
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group transition-smooth"
          data-ocid="navbar.logo_link"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-smooth">
            <Keyboard className="h-4 w-4 text-primary" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-foreground">
            TypeFlow
          </span>
        </Link>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Streak badge */}
          <Badge
            variant="outline"
            className={cn(
              "flex items-center gap-1.5 px-3 py-1 h-8 font-body text-sm font-medium border transition-smooth",
              isStreakActive && currentStreak > 0
                ? "border-warning/40 bg-warning/10 text-warning"
                : "border-border bg-muted/50 text-muted-foreground",
            )}
            data-ocid="navbar.streak_badge"
          >
            <Flame
              className={cn(
                "h-3.5 w-3.5 transition-smooth",
                isStreakActive && currentStreak > 0
                  ? "text-warning"
                  : "text-muted-foreground",
              )}
            />
            <span>
              {currentStreak > 0
                ? `${currentStreak} day${currentStreak !== 1 ? "s" : ""}`
                : "Start streak"}
            </span>
          </Badge>

          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="h-8 w-8 rounded-lg border border-border bg-muted/50 hover:bg-muted transition-smooth"
            data-ocid="navbar.theme_toggle"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-foreground" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
