"use client";

import { useThemeStore } from "@/lib/store";
import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    // Initialize theme from localStorage on mount
    const stored = localStorage.getItem("theme_preference");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const savedTheme = parsed.state?.theme || "light";
        setTheme(savedTheme);
      } catch {
        setTheme("light");
      }
    }
  }, [setTheme]);

  useEffect(() => {
    // Apply theme to document element
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return <>{children}</>;
}
