import { type ReactNode } from "react";
import TechsIcons from "./techs-icons";

export default function AboutCard() {
  return (
    <AboutLayout>
      <Article
        title="Who I Am & What I Do"
        text="I'm a self-taught Web Developer with 3+ years of experience, specializing in TypeScript, React, Next.js, and Supabase. I build clean, fast, and modern web apps that deliver seamless user experiences."
      />
      <div>
        <h3 className="text-lg ms:text-xl font-semibold mb-4 text-slate-700 dark:text-slate-200 transition duration-300">
          Favorite Tech Stack
        </h3>
        <TechsIcons />
      </div>
      <Article
        title="My Expertise & Freelance"
        text="Detail-oriented and skilled at solving complex problems through code. Open to freelance opportunities and ready for new projects."
      />
      <Article
        title="What's Next"
        text="Currently exploring Node.js and backend development to expand my full-stack skills, focusing on server-side programming and databases."
      />
    </AboutLayout>
  );
}

function Article({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="text-base xs:text-lg ms:text-xl font-semibold mb-1 ms:mb-2 text-slate-700 dark:text-slate-200 transition duration-300">
        {title}
      </h3>
      <p className="text-sm xs:text-base text-slate-500 dark:text-slate-400 transition duration-300">
        {text}
      </p>
    </div>
  );
}

function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <section className="relative size-full rounded-2xl shadow-2xl max-w-[420px] w-full sm:max-w-full">
      <Overlay />
      <div className="relative z-20">
        <div className="bg-card-header rounded-t-2xl shadow-light-header dark:shadow-dark-header transition duration-300 py-3 ms:py-4 px-5 ms:px-6">
          <h2 className="text-white text-xl ms:text-2xl font-semibold text-center">About Me</h2>
        </div>
        <div
          className="
              px-5 xs:px-6
              pt-4 xs:pt-4 ms:pt-5
              pb-5 xs:pb-5 ms:pb-6
              space-y-4 mlg:space-y-8 xlg:space-y-4 mlg:max-w-[600px] mlg:mx-auto
              text-center
              flex flex-col items-center justify-center
            "
        >
          {children}
        </div>
      </div>
    </section>
  );
}

function Overlay() {
  return (
    <>
      <div className="absolute z-10 top-0 left-0 size-full rounded-2xl bg-card-light-bg transition duration-300 dark:opacity-0" />
      <div className="absolute z-10 top-0 left-0 size-full rounded-2xl bg-card-dark-bg transition duration-300 opacity-0 dark:opacity-100" />
    </>
  );
}
