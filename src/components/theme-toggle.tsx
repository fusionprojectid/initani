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
      <div className="h-10 w-24 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 animate-pulse" />
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
          colorClass: "text-amber-500 border-amber-200/50 bg-amber-500/10",
        };
      case "dark":
        return {
          icon: <Moon className="h-4.5 w-4.5 text-indigo-400" />,
          label: "Gelap",
          colorClass: "text-indigo-400 border-indigo-500/35 bg-indigo-500/10",
        };
      default:
        return {
          icon: <Monitor className="h-4.5 w-4.5 text-emerald-500" />,
          label: "Sistem",
          colorClass: "text-emerald-500 border-emerald-500/25 bg-emerald-500/10",
        };
    }
  };

  const info = getThemeInfo();

  return (
    <button
      onClick={cycleTheme}
      className={`group relative flex items-center space-x-2 border px-3.5 py-2.5 rounded-xl transition duration-300 shadow-sm cursor-pointer border-neutral-200 dark:border-slate-750 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-neutral-300 dark:hover:border-slate-600`}
      title={`Perbarui Tema (Aktif: ${info.label})`}
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

      <span className="text-[10px] font-black uppercase tracking-wider text-neutral-600 dark:text-slate-200 group-hover:text-[#11341C] dark:group-hover:text-[#8FC14E] transition-colors leading-none select-none">
        {info.label}
      </span>
    </button>
  );
}
