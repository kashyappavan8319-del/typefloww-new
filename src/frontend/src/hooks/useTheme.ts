import type { Theme } from "@/types";
import { useCallback, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useTheme() {
  const [theme, setThemeValue] = useLocalStorage<Theme>(
    "typeflow-theme",
    "dark",
  );

  useEffect(() => {
    const root = document.documentElement;
    // Apply theme without flash
    root.style.setProperty("color-scheme", theme);
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setThemeValue((prev) => (prev === "dark" ? "light" : "dark"));
  }, [setThemeValue]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeValue(newTheme);
    },
    [setThemeValue],
  );

  return { theme, setTheme, toggleTheme, isDark: theme === "dark" };
}
