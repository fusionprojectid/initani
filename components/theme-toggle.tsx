import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-24 rounded-xl bg-neutral-150 dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 animate-pulse" />
    );
  }

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getThemeInfo = () => {
    switch (theme) {
      case "light":
        return {
          icon: <Sun className="h-4.5 w-4.5 text-amber-500" />,
          label: "Terang",
        };
      case "dark":
        return {
          icon: <Moon className="h-4.5 w-4.5 text-indigo-400" />,
          label: "Gelap",
        };
      default:
        return {
          icon: <Monitor className="h-4.5 w-4.5 text-emerald-500" />,
          label: "Sistem",
        };
    }
  };

  const info = getThemeInfo();

  return (
    <button
      onClick={cycleTheme}
      className="group relative flex items-center space-x-2 border px-3.5 py-2.5 rounded-xl transition duration-300 shadow-sm cursor-pointer border-neutral-200 dark:border-slate-750 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 text-neutral-600 dark:text-slate-200"
      title="Perbarui Tema"
    >
      <div className="relative h-5 w-5 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ y: 15, rotate: 90, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -15, rotate: -90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 15 }}
            className="absolute flex items-center justify-center"
          >
            {info.icon}
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="text-[10px] font-black uppercase tracking-wider">{info.label}</span>
    </button>
  );
}
