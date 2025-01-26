import { ThemeProvider } from "@/contexts/theme-provider";
import Navigation from "../nav/navigation";
import ProfileCard from "../profile-card/profile-card";

export default function HomeLayout() {
  return (
    <ThemeProvider>
      <main>
        <div
          className="
          grid w-fit mx-auto
          py-6 ms:py-8 sm:py-14 mlg:py-16 xlg:py-20 px-5 xs:px-6 sm:px-8 md:px-10 
          gap-7 ms:gap-8 md:gap-10 mlg:gap-x-12 mlg:gap-y-10
          sm:grid-cols-[100px,_minmax(0,420px)] mlg:grid-cols-[250px,_minmax(0,420px)]
        "
        >
          <div className="sm:col-start-1 sm:col-end-2">
            <Navigation />
          </div>
          <div className="sm:col-start-2 sm:col-end-3">
            <ProfileCard />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
