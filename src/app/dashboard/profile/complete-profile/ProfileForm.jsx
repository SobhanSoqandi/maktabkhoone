"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import Input from "@/app/(components)/Input";
import AvatarUploader from "./AvatarUploader";
import useMutationData from "@/app/(hooks)/useMutationData";
import { base_url } from "../../../../../data/info";
import { useQueryClient } from "@tanstack/react-query";

export default function ProfileForm({ user }) {
  const [avatarPreview, setAvatarPreview] = useState(
    user?.avatar ? base_url + user.avatar : null,
  );

  const [avatarFile, setAvatarFile] = useState(null);
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutationData(
    "users/",
    "patch",
    "profile",
    "پروفایل بروزرسانی شد",
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["user_profile"],
        });
      },
    },
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user?.username ?? "",
      name: user?.student_profile?.name ?? "",
      last_name: user?.student_profile?.last_name ?? "",
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    if (data.username) {
      formData.append("username", data.username);
    }

    if (data.name) {
      formData.append("name", data.name);
    }

    if (data.last_name) {
      formData.append("last_name", data.last_name);
    }

    if (avatarFile) {
      formData.append("avatar", avatarFile);
    }

    mutate({
      data: formData,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-4 border border-gray-200 rounded-3xl"
    >
      <h1 className="mb-10 font-black text-3xl">پروفایل</h1>

      <div className="flex justify-center mb-10">
        <AvatarUploader
          preview={avatarPreview}
          setPreview={setAvatarPreview}
          setFile={setAvatarFile}
        />
      </div>

      <div className="gap-4 grid md:grid-cols-2">
        <Input
          label="نام کاربری"
          placeholder="نام کاربری"
          register={register}
          registerName="username"
          errors={errors}
          className="input"
        />

        <Input
          label="نام"
          placeholder="نام دانش آموز"
          register={register}
          registerName="name"
          errors={errors}
          className="input"
        />

        <Input
          label="نام خانوادگی"
          placeholder="نام خانوادگی دانش آموز"
          register={register}
          registerName="last_name"
          errors={errors}
          className="input"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-10 w-full btn btn-success"
      >
        {isPending ? "در حال ذخیره..." : "ذخیره تغییرات"}
      </button>
    </form>
  );
}
