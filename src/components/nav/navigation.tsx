"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Hamb from "./hamb";
import Links from "./links";
import Logo from "./logo";
import Overlay from "./overlay";

export default function Navigation() {
  const is640 = useMediaQuery("(min-width: 640px)");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen && !is640) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      document.documentElement.classList.add("overflow-hidden");
    }

    if (is640) document.documentElement.classList.remove("overflow-hidden");
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [isOpen, is640]);

  function toggleTheme() {
    const isActive = document.body.classList.contains("dark");
    isActive
      ? document.body.classList.remove("dark")
      : document.body.classList.add("dark");
  }

  return (
    <nav
      onClick={toggleTheme}
      className="
        w-full max-w-[420px] 
        sm:w-[100px] mlg:w-[250px]"
    >
      <div className="rounded-2xl shadow-2xl bg-white dark:bg-slate-800 transition duration-300">
        <div className="flex items-center justify-between px-5 py-3 xs:px-6 xs:py-4 ms:py-5 sm:flex-col sm:p-0">
          <Logo />
          <Hamb openNav={() => setIsOpen(true)} />

          {isOpen && !is640 && <Overlay closeNav={() => setIsOpen(false)} />}
          <AnimatePresence>
            {(isOpen || is640) && <Links is640={is640} />}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
