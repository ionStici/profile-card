import Image from "next/image";
import profilePicture from "@/assets/profile-picture.jpg";

export default function ProfilePicture() {
  return (
    <div className="w-[140px] xs:w-[160px] ms:w-[180px] mx-auto rounded-[45px] shadow-light-pic dark:shadow-dark-pic p-1 xs:p-[5px] bg-white dark:bg-slate-200 mb-8 xs:mb-10 ms:mb-12 transition duration-300">
      <Image
        src={profilePicture}
        alt="Ion Stici's Profile Picture"
        width={180}
        height={180}
        className="size-full object-cover rounded-[40px]"
        priority
      />
    </div>
  );
}
