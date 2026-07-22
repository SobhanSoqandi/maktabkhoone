"use client";

import { useAuth } from "@/context/AuthContext";
import ChangePasswordForm from "./(components)/ChangePasswordForm";
import ChangePhoneNumber from "./(components)/ChangePhoneNumber";

import ProfileItem from "./(components)/ProfileItem";

export default function Page() {
  const { user } = useAuth();
  return (
    <div className="flex items-center gap-5">
      <ProfileItem
        title={"userName"}
        value={user?.username}
        field={"userName"}
      />
      <ProfileItem
        title={"phone_number"}
        value={user?.phone_number}
        window={<ChangePhoneNumber phone_in={user?.phone_number} />}
      />
      <ProfileItem
        title={"password"}
        value={"*******"}
        window={<ChangePasswordForm />}
      />
    </div>
  );
}
