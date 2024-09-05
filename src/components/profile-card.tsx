"use client";

import {
  IconGithub,
  IconLinkedin,
  IconMessage,
  IconTwitter,
} from "@/assets/icons";
import profileImage from "@/assets/profile.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

const options = {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Bucharest",
};

export default function ProfileCard() {
  const [localTime, setLocalTime] = useState("");

  function updateLocalTime() {
    const now = new Date();
    const timeString = new Intl.DateTimeFormat("ro", options).format(now);
    setLocalTime(timeString);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      updateLocalTime();
    }, 60000);

    updateLocalTime();

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full max-w-[420px] shadow-2xl rounded-[20px] bg-white pt-10 xs:pt-12 ms:pt-16">
      <div className="absolute left-0 top-0 z-10 h-[120px] xs:h-[140px] ms:h-[165px] w-full bg-blue-500 rounded-t-[20px] sm:shadow-profileHeader" />

      <div className="relative z-20 w-[140px] xs:w-[160px] ms:w-[180px] mx-auto rounded-[45px] shadow-profilePicture p-1 xs:p-[5px] bg-white mb-8 xs:mb-10 ms:mb-12">
        <Image
          src={profileImage}
          alt="Ion Stici Profile Picture"
          width={200}
          height={200}
          className="size-full object-cover rounded-[40px]"
          priority
        />
      </div>

      <div className="text-center mb-8 ms:mb-10">
        <p className="text-gray-800 text-3xl ms:text-4xl font-bold mb-2">
          Ion Stici
        </p>
        <p className="text-gray-500 text-base ms:text-lg">
          Freelance Web Developer
        </p>
      </div>

      <p className="text-gray-600 text-center px-4 ms:px-5 mb-6 ms:mb-8">
        Crafting clean code and brewing strong coffee. Let&apos;s build
        something amazing together!
      </p>

      <ul className="flex items-center justify-center gap-3 mb-2 ms:mb-4">
        {SocialLinks.map(({ href, Icon }, i) => {
          return (
            <li key={i}>
              <a
                href={href}
                target="_blank"
                className="block p-[6px] border border-transparent rounded-lg transition duration-200 hover:shadow-inner hover:border-gray-300 group focus:outline-none focus:shadow-inner focus:border-gray-300"
              >
                <Icon className="size-7 ms:size-8 fill-gray-600 group-hover:fill-blue-500 transition duration-200" />
              </a>
            </li>
          );
        })}
      </ul>

      <p className="text-center text-sm ms:text-base text-gray-500/85 mb-8 xs:mb-10 ms:mb-12">
        <span>Local time: </span>
        <span className="font-medium">{localTime}</span>
      </p>

      <button className="w-full px-4 flex gap-2 border-t border-gray-300 shadow-inner items-center justify-center pt-3 pb-4 ms:pt-4 ms:pb-5 text-green-600 rounded-b-[20px] transition duration-200 hover:text-green-700 hover:bg-green-100 focus:outline-none focus:text-green-700 focus:bg-green-100">
        <IconMessage className="size-6 ms:size-7" />
        <span className="ms:text-lg">Available for Hire</span>
      </button>
    </section>
  );
}

const SocialLinks = [
  { href: "https://github.com/ionStici", Icon: IconGithub },
  { href: "https://www.linkedin.com/in/ionstici/", Icon: IconLinkedin },
  { href: "https://x.com/ionsticidev", Icon: IconTwitter },
];
