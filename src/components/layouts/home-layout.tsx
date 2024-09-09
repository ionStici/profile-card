import AboutCard from "../about-card/about-card";
import Navigation from "../nav/navigation";
import ProfileCard from "../profile-card/profile-card";

export default function HomeLayout() {
  return (
    <main>
      {/* <div>
        <h1 className="py-6 bg-red-400 w-full flex items-center justify-center px-6 text-lg text-center">
          This website is currently in development and not feature-ready. Some sections may be
          incomplete or change frequently.
        </h1>
      </div> */}
      <div
        className="
          grid w-fit mx-auto
          py-5 xs:py-6 ms:py-8 sm:py-14 mlg:py-16 xlg:py-20 px-5 xs:px-6 sm:px-8 md:px-10 
          gap-5 xs:gap-6 ms:gap-8 md:gap-10 mlg:gap-12
          sm:grid-cols-[100px,_minmax(0,420px)] mlg:grid-cols-[250px,_minmax(0,420px)] xlg:grid-cols-[250px,_minmax(0,420px),_minmax(0,400px)]
        "
      >
        <div className="sm:col-start-1 sm:col-end-2">
          <Navigation />
        </div>
        <div className="sm:col-start-2 sm:col-end-3">
          <ProfileCard />
        </div>
        <div className="sm:col-start-1 sm:col-end-3 xlg:col-start-3 xlg:col-end-4">
          <AboutCard />
        </div>
      </div>
    </main>
  );
}
