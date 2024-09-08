import HireButton from "./hire-button";
import LocalTime from "./local-time";
import NameAndTitle from "./name-and-title";
import ProfilePicture from "./profile-picture";
import ShortBio from "./short-bio";
import SocialIcons from "./social-icons";

export default function ProfileCard() {
  return (
    <section className="relative w-full max-w-[420px] ms:h-[700px] rounded-2xl shadow-2xl pt-10 xs:pt-12 ms:pt-16">
      <CardOverlay />
      <div className="relative z-20 flex flex-col h-full">
        <ProfilePicture />
        <NameAndTitle />
        <ShortBio />
        <SocialIcons />
        <LocalTime />
        <HireButton />
      </div>
    </section>
  );
}

function CardOverlay() {
  return (
    <>
      <div className="absolute left-0 top-0 z-20 h-[120px] xs:h-[140px] ms:h-[165px] w-full shadow-light-header dark:shadow-dark-header bg-card-header rounded-t-2xl transition duration-300" />
      <div className="absolute z-10 top-0 left-0 size-full rounded-2xl bg-card-light-bg transition duration-300 dark:opacity-0" />
      <div className="absolute z-10 top-0 left-0 size-full rounded-2xl bg-card-dark-bg transition duration-300 opacity-0 dark:opacity-100" />
    </>
  );
}
