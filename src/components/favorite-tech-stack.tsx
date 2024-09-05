import { motion } from "framer-motion";
import Link from "next/link";
import { IconTypeScript, IconReact, IconNext } from "@/assets/icon-test";
import nextIconTest from "@/assets/tech-stack/nextjs-icon.svg";
import tailwind from "@/assets/tech-stack/tailwindcss-icon.svg";
import framer from "@/assets/tech-stack/framer.svg";
import supabase from "@/assets/tech-stack/supabase-icon.svg";
import reactQuery from "@/assets/tech-stack/react-query-icon.svg";
import Image from "next/image";

// 1. TypeScript
// 2. React

// 3. Tailwind
// 4. Framer Motion

// Next.js
// Supabase
// React Query

export default function FavoriteTechStack() {
  return (
    <section className=" w-[420px] ml-auto bg-white shadow-2xl rounded-[20px] py-5">
      <h2 className="text-2xl font-medium px-6 border-b border-gray-200 pb-4 mb-4 text-blue-800">
        Favorite Tech Stack
      </h2>
      <ul className="flex items-center gap-4 px-6">
        <li>
          <Link href="/">
            <IconTypeScript className="size-10" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <IconReact className="size-10" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src={nextIconTest}
              width={10}
              height={10}
              className="size-10"
              alt=""
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src={supabase}
              width={10}
              height={10}
              className="size-10"
              alt=""
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src={tailwind}
              width={10}
              height={10}
              className="size-10"
              alt=""
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src={framer}
              width={10}
              height={10}
              className="size-10"
              alt=""
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src={reactQuery}
              width={10}
              height={10}
              className="size-10"
              alt=""
            />
          </Link>
        </li>
      </ul>
    </section>
  );
}
