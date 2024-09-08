import { IconSun, IconMoon } from "@/assets/icons/nav-icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(
    document.body.classList.contains("dark")
  );

  function toggleTheme() {
    setIsDark((prev) => {
      prev
        ? document.body.classList.remove("dark")
        : document.body.classList.add("dark");

      return document.body.classList.contains("dark");
    });
  }

  console.log(isDark);

  return (
    <div className="relative h-0">
      <button
        onClick={toggleTheme}
        className="
          absolute -top-12 xs:-top-[54px] right-[78px] xs:right-[90px] overflow-hidden 
          rounded-full w-16 h-8 shadow-toggler
          border border-slate-200 dark:border-slate-700
          bg-slate-50 dark:bg-slate-800 
          
          transition duration-300"
      >
        <motion.div
          animate={{
            left: isDark ? "-25px" : "6px",
            top: isDark ? "25px" : "6px",
          }}
          transition={{
            type: "spring",
            stiffness: 200,
          }}
          className="absolute"
        >
          <IconSun className="size-5 text-slate-500 transition duration-300" />
        </motion.div>

        <motion.div
          animate={{ left: isDark ? "6px" : "38px" }}
          transition={{
            type: "spring",
            stiffness: 200,
          }}
          className={`size-5 rounded-full bg-amber-500 absolute top-[5px] shadow-text dark:shadow-dark-pic transition duration-300`}
        />
        <motion.div
          animate={{
            right: isDark ? "6px" : "-25px",
            top: isDark ? "6px" : "25px",
          }}
          transition={{ type: "spring", stiffness: 200 }}
          className="absolute"
        >
          <IconMoon className="size-5 text-slate-200 transition duration-300" />
        </motion.div>
      </button>
    </div>
  );
}
