"use client";
import Input from "@/app/(components)/Input";
import { useModal } from "@/app/(components)/modal";

import useMutationData from "@/app/(hooks)/useMutationData";

import React, { useContext } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm({ islogin }) {
  const { register, handleSubmit } = useForm();
  const { mutate } = useMutationData("auth/login", "post", "login_tost", {
    onSuccess: (response) => {
      localStorage.setItem("personalInfo", JSON.stringify(response.data.data));
      setActiveModal(null);
      islogin(true);
    },
  });
  const { setActiveModal } = useModal();
  return (
    <div className="flex flex-col items-center gap-8 mt-3">
      <h2 className="font-bold text-xl">ورود / ثبت نام</h2>
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit((data) => {
          mutate(data);
        })}
      >
        <Input
          label={"نام کاربری"}
          placeholder="نام کاربری خود را وارد کنید"
          registerName={"user_name"}
          register={register}
          className="input"
        />

        <Input
          label={"رمز عبور"}
          type="password"
          placeholder="رمز عبور خود را وارد کنید "
          registerName={"password"}
          register={register}
          className="input"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 m-auto py-2 rounded-lg w-75 text-white transition cursor-pointer"
        >
          تایید
        </button>
      </form>
      <div className="flex justify-between items-center gap-4 w-75">
        <div className="hover:bg-blue-500 px-4 py-2 border border-blue-500 rounded-lg text-blue-500 hover:text-white transition cursor-pointer">
          ثبت نام
        </div>

        <div className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white transition cursor-pointer">
          ورود با شماره همراه
        </div>
      </div>
    </div>
  );
}
