"use client";

import Image from "next/image";
import { useTheme } from "@/contexts/theme-provider";
import profilePictureDark from "@/assets/profile-picture-dark.jpg";
import profilePictureLight from "@/assets/profile-picture-light.jpg";
import { useState } from "react";

export default function ProfilePicture() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-[140px] h-[140px] xs:w-[160px] xs:h-[160px] ms:w-[180px] ms:h-[180px] mx-auto rounded-[45px] shadow-light-pic dark:shadow-dark-pic p-1 xs:p-[5px] bg-white dark:bg-slate-200 mb-8 xs:mb-10 ms:mb-12 transition duration-300">
      <div className="relative size-full">
        {isLoading && (
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%]" />
        )}
        <Image
          src={profilePictureLight}
          alt="Ion Stici's Profile Picture"
          width={180}
          height={180}
          className={`size-full object-cover rounded-[40px] transition-opacity duration-300 absolute top-0 left-0 
            ${theme === "light" ? "opacity-100" : "opacity-0"}`}
          priority
          onLoad={() => setIsLoading(false)}
        />
        <Image
          src={profilePictureDark}
          alt="Ion Stici's Profile Picture"
          width={180}
          height={180}
          className={`size-full object-cover rounded-[40px] transition-opacity duration-300 
              ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
          priority
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
}
