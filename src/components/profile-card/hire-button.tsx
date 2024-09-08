import { IconRocket } from "@/assets/icons/profile-card-icons";

export default function HireButton() {
  return (
    <button
      className="
              mt-auto
              w-full px-4 flex items-center justify-center gap-2 pt-3 pb-4 ms:pt-4 ms:pb-5 rounded-b-2xl
              border-t border-gray-300 dark:border-slate-600 
              text-amber-600 dark:text-amber-600 shadow-inner
              bg-transparent dark:bg-slate-900/40  
              transition duration-300 focus:outline-none
              hover:text-slate-800 hover:bg-amber-500 
              focus:text-slate-800 focus:bg-amber-500
              "
    >
      <IconRocket className="size-6 ms:size-7 sm:size-8" />
      <span className="ms:text-lg sm:text-xl">Available for Hire</span>
    </button>
  );
}
