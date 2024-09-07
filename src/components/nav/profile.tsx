import Image from "next/image";
import profileImage from "@/assets/profile.jpg";

export default function Profile() {
  return (
    <div className="sm:hidden flex items-center justify-center gap-3 xs:gap-4 ms:gap-5 py-8 xs:py-10 ms:py-12">
      <div className="p-[2px] ms:p-[3px] flex-shrink-0 rounded-xl shadow-profilePicture bg-white dark:bg-slate-200 transition duration-300">
        <Image
          src={profileImage}
          alt="Ion Stici's Profile Picture"
          width={70}
          height={70}
          className="size-[50px] xs:size-[60px] ms:size-[70px] rounded-xl object-cover"
        />
      </div>
      <div>
        <p className="text-slate-800 dark:text-slate-200 text-lg xs:text-xl ms:text-2xl font-medium transition duration-300">
          Ion Stici
        </p>
        <p className="text-slate-500 dark:text-slate-400 text-sm xs:text-base ms:text-lg transition duration-300">
          Web Developer
        </p>
      </div>
    </div>
  );
}
