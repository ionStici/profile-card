import {
  IconGithub,
  IconLinkedin,
  IconTwitter,
} from "@/assets/icons/profile-card-icons";

export default function SocialIcons() {
  return (
    <ul className="flex items-center justify-center gap-3 mb-2 ms:mb-4">
      {SocialLinks.map(({ href, Icon }, i) => {
        return (
          <li key={i}>
            <a
              href={href}
              target="_blank"
              className="block p-[6px] border border-transparent rounded-lg transition duration-300 hover:shadow-inner hover:border-gray-300 hover:dark:border-slate-600 group focus:outline-none focus:shadow-inner focus:border-gray-300 focus:dark:border-slate-600"
            >
              <Icon className="size-7 ms:size-8 fill-gray-600 dark:fill-slate-200 group-hover:fill-amber-500 transition duration-300" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

const SocialLinks = [
  { href: "https://github.com/ionStici", Icon: IconGithub },
  { href: "https://www.linkedin.com/in/ionstici/", Icon: IconLinkedin },
  { href: "https://x.com/ionsticidev", Icon: IconTwitter },
];
