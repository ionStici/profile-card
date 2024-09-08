import { IconMoon, IconSun } from "@/assets/icons/nav-icons";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(() => {
    return document.body.classList.contains("dark");
  });

  function toggleTheme() {
    setIsDark((prev) => {
      prev
        ? document.body.classList.remove("dark")
        : document.body.classList.add("dark");

      return document.body.classList.contains("dark");
    });
  }

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      onClick={toggleTheme}
      className="
          overflow-hidden 
          absolute -top-[49px] right-[78px] xs:-top-[56px] xs:right-[90px] ms:-top-[61px] ms:right-[95px]
          sm:relative sm:top-0 sm:right-0
          rounded-full w-[72px] h-9
          shadow-light-toggler dark:shadow-dark-toggler 
          border border-slate-200 dark:border-slate-700
          bg-slate-50 dark:bg-slate-800 
          transition duration-300 focus:outline-none
          focus:border-amber-500
          "
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
        initial={{ left: "-6px", top: "5px" }}
        animate={{ left: isDark ? "6px" : "38px", top: "5px" }}
        transition={{ type: "spring", stiffness: 200 }}
        className={`size-6 rounded-full bg-amber-500 absolute shadow-light-circle dark:shadow-dark-pic transition duration-300`}
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
    </motion.button>
  );
}
