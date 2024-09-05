import { IconHamb } from "@/assets/icons/nav-icons";

type HambProps = {
  openNav: () => void;
};

export default function Hamb({ openNav }: HambProps) {
  return (
    <button
      onClick={openNav}
      className="sm:hidden size-10 xs:size-11 ms:size-12 flex items-center justify-center border border-slate-600 rounded-lg 
      transition duration-200 focus:outline-none hover:bg-slate-700 hover:border-transparent ring-2 ring-transparent focus:ring-red-400 focus:border-transparent"
    >
      <IconHamb className="size-7 xs:size-8 text-white" />
    </button>
  );
}
