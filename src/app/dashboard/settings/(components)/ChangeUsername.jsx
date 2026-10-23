"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineUser } from "react-icons/hi2";
import Input from "@/app/(components)/Input";
import { useModal } from "@/app/(components)/modal";
import useMutationData from "@/app/(hooks)/useMutationData";
import { useAuth } from "@/context/AuthContext";

const URL = "auth/change-username";
const METHOD = "post";
const FIELD = "username";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100";

export default function ChangeUsername({ username_in }) {
  const [serverError, setServerError] = useState("");
  const { setActiveModal } = useModal();
  const { setUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useMutationData(URL, METHOD, "change-username");

  function onSubmit(data) {
    setServerError("");
    mutate(
      { data: { [FIELD]: data.username } },
      {
        onSuccess: () => {
          setUser((prev) => ({ ...prev, username: data.username }));
          setActiveModal(null);
        },
        onError: (error) =>
          setServerError(error?.response?.data?.message || "ذخیره نام کاربری انجام نشد"),
      },
    );
  }

  return (
    <div className="w-[90vw] max-w-md overflow-hidden rounded-3xl bg-white">
      <div className="flex items-center gap-4 border-b border-slate-100 bg-blue-50/60 px-8 py-7">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
          <HiOutlineUser size={28} />
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">تغییر نام کاربری</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">نام کاربری جدید خود را وارد کنید.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-8">
        <Input
          registerName="username"
          register={register}
          defaultValue={username_in}
          label="نام کاربری"
          className={inputClass}
          validation={{ required: "نام کاربری نمی‌تواند خالی باشد" }}
        />

        {(errors.username || serverError) && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            {errors.username?.message || serverError}
          </p>
        )}

        <button
          disabled={isPending}
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 active:scale-[0.98] disabled:opacity-60"
        >
          {isPending ? "در حال ذخیره..." : "ذخیره تغییرات"}
        </button>
      </form>
    </div>
  );
}
