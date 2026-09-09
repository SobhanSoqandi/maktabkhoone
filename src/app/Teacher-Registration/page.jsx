"use client";

import { useAuth } from "@/context/AuthContext";
import React from "react";
import Input from "../(components)/Input";
import { useForm } from "react-hook-form";
import useMutationData from "../(hooks)/useMutationData";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user } = useAuth();
  const router = useRouter();

  const { mutate: register_teacher, isPending } = useMutationData(
    "teachers/",
    "post",
    "create_teacher",
    "معلم با موفقیت ایجاد شد",
    {
      onSuccess: () => {
        router.push("/teacher-panel/courses");
      },
    },
  );

  const { register, setValue, handleSubmit } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      national_code: "",
    },
  });

  React.useEffect(() => {
    if (user) {
      setValue("email", user.email ?? "");
    }
  }, [user, setValue]);

  const onSubmit = (data) => {
    console.log(data);

    register_teacher({
      data: {
        ...data,
        user_id: user.id,
      },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-20 p-5">
      <h1 className="font-bold text-3xl text-center">
        برای تکمیل ثبت نام به عنوان استاد، لطفا اطلاعات خواسته شده را وارد
        کنید.
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-10 w-[700px]"
      >
        <div className="flex justify-between items-center gap-3">
          <Input
            label="نام"
            placeholder="نام خود را وارد کنید"
            registerName="first_name"
            register={register}
            className="input"
          />

          <Input
            label="نام خانوادگی"
            placeholder="نام خانوادگی خود را وارد کنید"
            registerName="last_name"
            register={register}
            className="input"
          />
        </div>

        <div className="flex justify-between items-center gap-3">
          <Input
            label="ایمیل"
            placeholder="ایمیل خود را وارد کنید"
            registerName="email"
            register={register}
            className="input"
          />

          <Input
            label="کد ملی"
            placeholder="کد ملی خود را وارد کنید"
            registerName="national_code"
            register={register}
            className="input"
          />
        </div>

        <div className="m-auto w-[50%]">
          <button
            type="submit"
            disabled={isPending}
            className="bg-green-800 disabled:opacity-50 w-full text-white btn-primary btn"
          >
            {isPending ? "در حال ثبت..." : "ثبت اطلاعات"}
          </button>
        </div>
      </form>
    </div>
  );
}