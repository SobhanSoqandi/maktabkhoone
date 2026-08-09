import ProfileForm from "./complete-profile/ProfileForm";
import { profile } from "./complete-profile/profile-data";

export default function Page() {
  return (
    <div className="container mx-auto max-w-4xl py-10">
      <ProfileForm user={profile} />
    </div>
  );
}