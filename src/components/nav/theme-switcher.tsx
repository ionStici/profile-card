import { IconMoon, IconSun } from "@/assets/icons/nav-icons";
import { useTheme } from "@/contexts/theme-provider";
import { motion } from "framer-motion";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark" ? true : false;

  return (
    <button
      onClick={toggleTheme}
      className="
          overflow-hidden 
          relative
          rounded-full w-[72px] h-9
          shadow-light-toggler dark:shadow-dark-toggler 
          border border-slate-200 dark:border-slate-700
          bg-slate-50 dark:bg-slate-800 
          transition duration-300 focus:outline-none
          "
      tabIndex={-1}
    >
      {/* SUN */}
      <motion.div
        animate={{
          left: isDark ? "-25px" : "6px",
          top: isDark ? "25px" : "6px",
          transform: isDark ? "scale(0.25)" : "scale(1)",
        }}
        transition={{ type: "spring", stiffness: 200 }}
        className="absolute"
      >
        <IconSun className="size-6 text-slate-500" />
      </motion.div>

      {/* CIRCLE */}
      <motion.div
        tabIndex={0}
        initial={{ left: "-6px", top: "5px", transform: "scale(0.25)" }}
        animate={{ left: isDark ? "6px" : "38px", top: "5px", transform: "scale(1)" }}
        transition={{ type: "spring", stiffness: 200 }}
        className={`size-6 rounded-full bg-amber-500 absolute shadow-light-circle dark:shadow-dark-pic transition duration-300 focus:outline-none focus:bg-amber-400 hover:bg-amber-400`}
      />

      {/* MOON */}
      <motion.div
        initial={{
          right: isDark ? "-6px" : "6px",
          top: isDark ? "6px" : "6px",
        }}
        animate={{
          right: isDark ? "6px" : "-25px",
          top: isDark ? "6px" : "25px",
          transform: isDark ? "scale(1)" : "scale(0.25)",
        }}
        transition={{ type: "spring", stiffness: 200 }}
        className="absolute"
      >
        <IconMoon className="size-6 text-slate-200" />
      </motion.div>
    </button>
  );
}
