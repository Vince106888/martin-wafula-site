"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = resolvedTheme ?? theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 hover:bg-muted transition"
      aria-label="Toggle theme"
    >
      {mounted ? (currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />) : null}
    </button>
  );
}
