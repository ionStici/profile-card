"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Hamb from "./hamb";
import Links from "./links";
import Logo from "./logo";
import Overlay from "./overlay";
import dynamic from "next/dynamic";

const ThemeSwitcher = dynamic(() => import("./theme-switcher"), { ssr: false });

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

  return (
    <nav
      className="
        w-full max-w-[420px] flex-shrink-0
        sm:w-[100px] mlg:w-[250px] sm:min-h-[700px] h-full"
    >
      <div className="rounded-2xl shadow-2xl bg-white dark:bg-slate-800 transition duration-300 sm:h-full">
        <div className="flex items-center px-5 py-3 xs:px-6 xs:py-4 ms:py-5 sm:flex-col sm:p-0 sm:h-full sm:relative">
          <Logo />

          {isOpen && !is640 && <Overlay closeNav={() => setIsOpen(false)} />}
          <AnimatePresence>{(isOpen || is640) && <Links is640={is640} />}</AnimatePresence>

          <div className="relative flex ml-auto mr-5 xs:mr-6 sm:z-30 sm:m-0 sm:absolute sm:left-[50%] sm:translate-x-[-50%] sm:bottom-[85px]">
            <ThemeSwitcher />
          </div>

          <Hamb openNav={() => setIsOpen(true)} />
        </div>
      </div>
    </nav>
  );
}
