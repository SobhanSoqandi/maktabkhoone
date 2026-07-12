import Input from "@/app/(components)/Input";
import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <h2 className="font-bold text-xl">ورود / ثبت نام</h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Input
          label={"ایمیل یا شماره همراه"}
          placeholder="ایمل یا شماره همراه خود را وارد کنید"
          registerName={"login_input"}
          register={register}
          className="input"
        />
        <button
          type="submit"
          className="bg-blue-600 m-auto py-1 rounded-sm w-37.5 text-white"
        >
          تایید
        </button>
      </form>
    </div>
  );
}
