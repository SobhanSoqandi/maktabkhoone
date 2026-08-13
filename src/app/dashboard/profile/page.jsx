"use client";
import useGet from "@/app/(hooks)/useGet";
import ProfileForm from "./complete-profile/ProfileForm";

export default function Page() {
  const { data: profile, isLoading } = useGet("users/me", ["user_profile"]);
  return (
    <div className="mx-auto py-10 max-w-4xl container">
      {isLoading ? <div>loading</div> : <ProfileForm user={profile} />}
    </div>
  );
}
