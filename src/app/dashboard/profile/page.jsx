"use client";
import useGet from "@/app/(hooks)/useGet";
import ProfileForm from "./complete-profile/ProfileForm";
import Loading from "@/app/(components)/Loading";

export default function Page() {
  const { data: profile, isLoading } = useGet("users/me", ["user_profile"]);
  return (
    <div className="mx-auto py-10 max-w-4xl container">
      {isLoading ?
        <Loading /> 
        :
        <ProfileForm user={profile} />}
    </div>
  );
}
