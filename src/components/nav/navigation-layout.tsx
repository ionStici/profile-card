import { type ReactNode } from "react";
import Navigation from "./navigation";

type NavigationLayoutProps = {
  children: ReactNode;
};

export default function NavigationLayout({ children }: NavigationLayoutProps) {
  return (
    <main>
      <div
        className="
          pt-5 xs:pt-6 ms:pt-8 sm:pt-14 mlg:pt-16
          pb-5 xs:pb-6 ms:pb-8 sm:pb-14 mlg:pb-16
          px-5 xs:px-6 sm:px-8 md:px-10 mlg:px-12
          gap-5 xs:gap-6 ms:gap-8 md:gap-10 mlg:gap-12
          flex flex-col items-center sm:flex-row sm:items-start sm:justify-center
        "
      >
        <Navigation />
        <div
          className="flex flex-col 
          gap-5 xs:gap-6 ms:gap-8 md:gap-10 mlg:gap-12"
        >
          {children}
        </div>
      </div>
    </main>
  );
}
