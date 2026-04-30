import type { StreakData } from "@/types";
import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TODAY = () => new Date().toISOString().split("T")[0];

const initialStreak: StreakData = {
  currentStreak: 0,
  lastSessionDate: "",
};

export function useStreak() {
  const [streak, setStreak] = useLocalStorage<StreakData>(
    "typeflow-streak",
    initialStreak,
  );

  const recordSession = useCallback(() => {
    const today = TODAY();
    setStreak((prev) => {
      if (prev.lastSessionDate === today) {
        // already recorded today — no change
        return prev;
      }

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];

      const isConsecutive = prev.lastSessionDate === yesterdayStr;

      return {
        currentStreak: isConsecutive ? prev.currentStreak + 1 : 1,
        lastSessionDate: today,
      };
    });
  }, [setStreak]);

  const resetStreak = useCallback(() => {
    setStreak(initialStreak);
  }, [setStreak]);

  // Check if streak is broken (last session wasn't yesterday or today)
  const isStreakActive = (() => {
    if (!streak.lastSessionDate) return false;
    const today = TODAY();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];
    return (
      streak.lastSessionDate === today ||
      streak.lastSessionDate === yesterdayStr
    );
  })();

  return {
    streak,
    recordSession,
    resetStreak,
    isStreakActive,
    currentStreak: streak.currentStreak,
  };
}
