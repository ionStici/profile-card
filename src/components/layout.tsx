import Navigation from "./nav/navigation";
import ProfileCard from "./profile-card";

export default function Layout() {
  return (
    <main className="sm:py-10">
      <div
        className="
          pt-5 xs:pt-6 ms:pt-8 sm:pt-0
          px-5 xs:px-6 sm:px-8 md:px-10
          gap-5 xs:gap-6 ms:gap-8 md:gap-10
          flex flex-col items-center sm:flex-row sm:items-start sm:justify-center
        "
      >
        <Navigation />
        <div>
          <ProfileCard />
        </div>
      </div>
    </main>
  );
}
