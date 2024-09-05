"use client";

import {
  IconCode,
  IconMenu,
  IconHome,
  IconProjects,
  IconResume,
} from "@/assets/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Navigation() {
  return (
    <>
      <div className="h-5 xs:h-6 ms:h-8 sm:hidden" />
      <nav className="w-full max-w-[420px]  bg-white shadow-2xl rounded-[20px] sm:w-fit mb-5 xs:mb-6 ms:mb-8 sm:mb-0">
        <div
          className="
          flex items-center justify-between
          sm:flex-col
          px-5 xs:px-6 ms:px-7 py-3 xs:py-4 ms:py-5
          sm:px-0
          "
        >
          <Logo />
          <MenuButton />
          <Links />
        </div>
      </nav>
    </>
  );
}

function Logo() {
  return (
    <div>
      <Link
        href="/"
        className="
        h-10 xs:h-11 ms:h-12
        flex gap-[2px] items-center
        sm:flex-col sm:h-auto sm:gap-0 sm:mx-auto
        rounded-lg 
        transition duration-200 focus:outline-none px-2 -ml-2 ring-2 ring-transparent hover:ring-accent focus:ring-accent
        
        "
      >
        <IconCode className="size-8 xs:size-9 ms:size-11 text-gray-600 sm:size-10" />
        <p className="text-xl xs:text-2xl ms:text-3xl">
          <span className="hidden text-gray-600">ionStici</span>
          <span className="text-accent">.dev</span>
        </p>
      </Link>
    </div>
  );
}

function MenuButton() {
  return (
    <button className="sm:hidden size-10 xs:size-11 ms:size-12 flex items-center justify-center border border-gray-200 rounded-lg transition duration-200 hover:border-gray-300 hover:shadow-inner focus:outline-none focus:border-gray-300 focus:shadow-inner">
      <IconMenu className="size-7 xs:size-8" />
    </button>
  );
}

function Links() {
  const path = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("overflow-y-hidden");
    return () => document.documentElement.classList.remove("overflow-y-hidden");
  }, []);

  return (
    <>
      <div className="sm:hidden absolute z-30 top-0 left-0 size-full bg-black/25 backdrop-blur-sm" />
      <ul className="sm:relative absolute top-0 right-0 bg-white w-[250px] min-h-dvh sm:w-full sm:min-h-fit sm:px-0 z-30 flex flex-col gap-5 px-5 py-20">
        {links.map(({ text, href, Icon }) => {
          const isActive = href === path;

          return (
            <li key={href} className="sm:px-5">
              <Link
                href={href}
                className={`
                flex items-center gap-2
                border border-transparent rounded-lg px-3 py-2
                sm:p-0 sm:justify-center sm:size-14
                transition duration-200
                hover:border-gray-200
                ${
                  isActive
                    ? "stroke-blue-800 text-blue-500 bg-blue-50 hover:border-transparent hover:text-blue-50"
                    : "stroke-gray-600 text-gray-600 "
                }
                `}
              >
                <Icon className="size-6 stroke-inherit sm:size-8" />
                <span className="sm:hidden mlg:inline-block">{text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

//       <div className="border-b border-gray-200 pt-6 pb-7 mb-6 px-6">
//         <Link href="/" className="flex gap-2 flex-col items-center">
//           <IconCode className="size-12 text-gray-600" />
//           <p className="text-2xl font-medium rounded-lg">
//             <span className="text-gray-600">ionStici</span>
//             <span className="text-accent">.dev</span>
//           </p>
//         </Link>
//       </div>

//       <ul className="flex flex-col gap-5 px-6">
//         {links.map(({ text, href, Icon }) => {
//           const isActive = href === path;

//           return (
//             <li key={href}>
//               <Link
//                 href={href}
//                 className={`
//                 flex items-center gap-2
//                 border border-transparent rounded-lg px-3 py-2
//                 transition duration-200
//                 hover:border-gray-300
//                 ${
//                   isActive
//                     ? "stroke-blue-500 text-blue-500 bg-blue-50  hover:border-transparent hover:text-blue-50"
//                     : "stroke-gray-600 text-gray-600 "
//                 }
//                 `}
//               >
//                 <Icon className="size-6 stroke-inherit " />
//                 <span>{text}</span>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>

const links = [
  { text: "Home", href: "/", Icon: IconHome },
  { text: "Projects", href: "/projects", Icon: IconProjects },
  { text: "Resume", href: "/resume", Icon: IconResume },
];
