import { IconHamb } from "@/assets/icons/nav-icons";

type HambProps = {
  openNav: () => void;
};

export default function Hamb({ openNav }: HambProps) {
  return (
    <button
      onClick={openNav}
      className="sm:hidden size-10 xs:size-11 ms:size-12 flex items-center justify-center border border-slate-300 dark:border-slate-600 rounded-lg 
      transition duration-300 focus:outline-none hover:bg-slate-100 hover:shadow-inner hover:dark:bg-slate-700 hover:border-slate-200 hover:dark:border-slate-600 ring-2 ring-transparent focus:ring-amber-500 focus:border-transparent"
    >
      <IconHamb className="size-7 xs:size-8 ms:size-9 text-slate-600 dark:text-white transition duration-300" />
    </button>
  );
}
