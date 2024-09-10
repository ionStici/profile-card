import iconFramer from "@/assets/icons/fav-techs/framer.svg";
import iconNext from "@/assets/icons/fav-techs/nextjs-icon.svg";
import iconQuery from "@/assets/icons/fav-techs/react-query-icon.svg";
import iconReact from "@/assets/icons/fav-techs/react.svg";
import iconSupabase from "@/assets/icons/fav-techs/supabase-icon.svg";
import iconTailwind from "@/assets/icons/fav-techs/tailwindcss-icon.svg";
import iconTypescriptRound from "@/assets/icons/fav-techs/typescript-icon-round.svg";
import Image from "next/image";

export default function TechsIcons() {
  return (
    <ul className="flex flex-wrap gap-3 xl:justify-between">
      {icons.map(({ icon, alt }) => {
        return (
          <li key={alt}>
            <Image src={icon} alt={alt} width={50} height={50} className="size-[40px]" />
          </li>
        );
      })}
    </ul>
  );
}

const icons = [
  { icon: iconTypescriptRound, alt: "TypeScript" },
  { icon: iconReact, alt: "React" },
  { icon: iconQuery, alt: "React Query" },
  { icon: iconNext, alt: "Next.js" },
  { icon: iconTailwind, alt: "Tailwind CSS" },
  { icon: iconFramer, alt: "Framer Motion" },
  { icon: iconSupabase, alt: "Supabase" },
];
