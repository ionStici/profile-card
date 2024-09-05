"use client";

import Link from "next/link";
import { type ReactNode } from "react";

type NavLinkProps = {
  text: string;
  href: string;
  Icon: ReactNode;
};

export default function NavLink(props: NavLinkProps) {
  const { text, href, Icon } = props.link;
  return (
    <li key={href}>
      <Link
        href={href}
        className="flex items-center gap-2 transition duration-200 border border-transparent hover:border-gray-200 rounded-lg px-3 py-2"
      >
        <Icon className="size-6 stroke-gray-600" />
        <span className="text-gray-600">{text}</span>
      </Link>
    </li>
  );
}
