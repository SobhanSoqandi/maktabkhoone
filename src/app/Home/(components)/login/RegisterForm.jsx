"use client";

import Input from "@/app/(components)/Input";
import useMutationData from "@/app/(hooks)/useMutationData";
import React from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm({ setForm }) {
  const { register, handleSubmit } = useForm();

  const { mutate } = useMutationData(
    "auth/Register",
    "post",
    "register_toast",
    "ثبت نام با موفقیت انجام شد",
    {
      onSuccess: (response) => {
        setForm("login");
      },
    },
  );

  return (
    <div className="flex flex-col items-center gap-8 mt-3">
      <h2 className="font-bold text-xl">ثبت نام</h2>

      <form
        className="flex flex-col gap-5 w-[90%]"
        onSubmit={handleSubmit((data) => {
          mutate({
            data: data,
          });
        })}
      >
        <Input
          label="نام کاربری"
          placeholder="نام کاربری خود را وارد کنید"
          registerName="username"
          register={register}
          className="input"
        />

        <Input
          label="رمز عبور"
          type="password"
          placeholder="رمز عبور خود را وارد کنید"
          registerName="password"
          register={register}
          className="input"
        />
        <Input
          label="شماره همراه"
          type="number"
          placeholder="شماره همراه خود را وارد کنید"
          registerName="phone_number"
          register={register}
          className="input"
        />
        <button type="submit" className="justify-center p-3 btn btn-success">
          ثبت نام
        </button>
      </form>
    </div>
  );
}
