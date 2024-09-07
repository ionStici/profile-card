import Link from "next/link";
import { IconCode } from "@/assets/icons/nav-icons";

export default function Logo() {
  return (
    <div className="sm:py-4">
      <Link
        href="/"
        className="
        h-10 xs:h-11 ms:h-12 flex gap-[2px] items-center
        transition duration-300 focus:outline-none rounded-xl px-2 -ml-2 sm:ml-0 sm:p-1 mlg:px-4 mlg:pb-2 mlg:pt-1 ring-2 ring-transparent focus:ring-red-400
        sm:flex-col sm:size-auto"
      >
        <IconCode className="size-8 xs:size-9 ms:size-11 sm:size-10 mlg:size-16 text-slate-600 dark:text-white transition duration-300" />
        <p className="text-xl xs:text-2xl ms:text-3xl mlg:font-medium">
          <span className="text-slate-600 dark:text-white hidden mlg:inline transition duration-300">
            ionStici
          </span>
          <span className="text-red-400">.dev</span>
        </p>
      </Link>
    </div>
  );
}
