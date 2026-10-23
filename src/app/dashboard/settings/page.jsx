"use client";

import { HiOutlineUser, HiOutlineDevicePhoneMobile, HiOutlineLockClosed } from "react-icons/hi2";
import { useAuth } from "@/context/AuthContext";
import ChangePasswordForm from "./(components)/ChangePasswordForm";
import ChangePhoneNumber from "./(components)/ChangePhoneNumber";
import ChangeUsername from "./(components)/ChangeUsername";
import ProfileItem from "./(components)/ProfileItem";

export default function Page() {
  const { user } = useAuth();

  return (
    <section className="flex flex-col gap-8">
      <header>
        <h1 className="text-2xl font-black text-slate-900 sm:text-3xl">تنظیمات حساب کاربری</h1>
        <p className="mt-2 leading-8 text-slate-500">اطلاعات حساب خود را از اینجا مشاهده و مدیریت کنید.</p>
      </header>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <ProfileItem
          icon={HiOutlineUser}
          title={"نام کاربری"}
          value={user?.username}
          window={<ChangeUsername username_in={user?.username} />}
        />
        <ProfileItem
          icon={HiOutlineDevicePhoneMobile}
          title={"شماره همراه"}
          value={user?.phone_number}
          window={<ChangePhoneNumber phone_in={user?.phone_number} />}
        />
        <ProfileItem
          icon={HiOutlineLockClosed}
          title={"رمز عبور"}
          value={"*******"}
          window={<ChangePasswordForm />}
        />
      </div>
    </section>
  );
}
