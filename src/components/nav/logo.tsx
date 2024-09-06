import Link from "next/link";
import { IconCode } from "@/assets/icons/nav-icons";

export default function Logo() {
  return (
    <div className="sm:pt-5 sm:pb-6">
      <Link
        href="/"
        className="h-10 xs:h-11 ms:h-12 flex gap-[2px] items-center
        transition duration-200 focus:outline-none rounded-lg px-2 -ml-2 sm:p-1 mlg:px-3 sm:ml-0 ring-2 ring-transparent focus:ring-red-400
        sm:flex-col sm:size-auto"
      >
        <IconCode className="size-8 xs:size-9 ms:size-11 sm:size-10 mlg:size-16 text-white" />
        <p className="text-xl xs:text-2xl ms:text-3xl mlg:font-medium">
          <span className="text-white hidden mlg:inline">ionStici</span>
          <span className="text-red-400">.dev</span>
        </p>
      </Link>
    </div>
  );
}
