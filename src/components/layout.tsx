import ProfileCard from "./profile-card";
import Navigation from "./navigation";
import FavoriteTechStack from "./favorite-tech-stack";

export default function Layout() {
  return (
    <div>
      <main className="px-5 xs:px-6 mx-auto w-fit pb-10 sm:pt-10 sm:flex items-start gap-10 sm:px-8">
        <Navigation />
        <ProfileCard />
      </main>
      <div className="w-[556px] mx-auto">
        <FavoriteTechStack />
      </div>
    </div>
  );
}
