import ProfileCard from "./profile-card";
import Navigation from "./nav/navigation";

export default function Layout() {
  return (
    <main className="py-10">
      <div
        className="
          px-5 xs:px-6 sm:px-8 md:px-10
          flex flex-col items-center 
          gap-5 xs:gap-6 ms:gap-8

          sm:flex-row sm:items-start sm:justify-center
          md:gap-10 mlg:gap-12
        "
      >
        <Navigation />
        <ProfileCard />
      </div>
    </main>
  );
}
