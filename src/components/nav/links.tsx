import {
  IconContact,
  IconHome,
  IconProjects,
  IconResume,
} from "@/assets/icons/nav-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Copyright from "./copyright";
import Profile from "./profile";

type LinksProps = {
  is640: boolean;
};

export default function Links({ is640 }: LinksProps) {
  const path = usePathname();

  return (
    <motion.div
      initial={!is640 && { right: "-300px" }}
      animate={!is640 && { right: "0" }}
      exit={!is640 ? { right: "-300px" } : {}}
      className="
        flex flex-col absolute z-30 top-0 right-0 
        bg-white dark:bg-slate-800 sm:dark:bg-transparent sm:bg-transparent transition duration-300
        w-[250px] xs:w-[275px] ms:w-[310px]
        scrollbar-hide overflow-y-scroll max-h-dvh h-full
        sm:static sm:w-full sm:h-auto sm:min-h-fit"
    >
      <Profile />

      <ul
        className="
            flex flex-col 
            gap-4 xs:gap-5 
            px-5 xs:px-6 ms:px-7 sm:px-0 
            py-8 xs:py-10 ms:py-12 
            border-t border-b border-slate-200 dark:border-slate-600 transition duration-300"
      >
        {links.map(({ text, href, Icon }) => {
          const isActive = href === path;

          return (
            <li key={text}>
              <Link
                tabIndex={isActive ? -1 : 0}
                href={href}
                className={`
                  flex items-center gap-2 xs:gap-3 px-4 xs:px-5 py-2 xs:py-3
                  rounded-lg border border-transparent
                  transition duration-300 focus:outline-none 
                  ring-2 ring-transparent focus:ring-red-400
                  sm:mx-auto sm:p-0 sm:size-[60px] sm:justify-center
                  mlg:mx-6 mlg:size-auto mlg:justify-start mlg:py-3 mlg:px-5
                  ${
                    isActive
                      ? "stroke-slate-600 text-slate-700 dark:stroke-slate-200 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 font-medium transition duration-300"
                      : "stroke-slate-500/85 text-slate-500/85 dark:stroke-slate-400 dark:text-slate-400 hover:border-slate-300 hover:dark:border-slate-600 transition duration-300"
                  }`}
              >
                <Icon className="size-6 xs:size-7 sm:size-8 stroke-inherit" />
                <span className="text-base xs:text-[17px] ms:text-lg sm:hidden mlg:inline-block">
                  {text}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <Copyright />
    </motion.div>
  );
}

const links = [
  { text: "Home", href: "/", Icon: IconHome },
  { text: "Projects", href: "/projects", Icon: IconProjects },
  { text: "Resume", href: "/resume", Icon: IconResume },
  { text: "Contact", href: "/contact", Icon: IconContact },
];
