import NavigationLayout from "@/components/nav/navigation-layout";
import ProfileCard from "@/components/profile-card/profile-card";

export default function page() {
  return (
    <NavigationLayout>
      <ProfileCard />
      <ProfileCard />
    </NavigationLayout>
  );
}
