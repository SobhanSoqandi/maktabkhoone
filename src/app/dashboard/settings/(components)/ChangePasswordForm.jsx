"use client";

import { HiOutlineShieldCheck } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import Input from "@/app/(components)/Input";
import useMutationData from "@/app/(hooks)/useMutationData";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100";

export default function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useMutationData(
    "auth/change-password",
    "post",
    "change-password",
  );

  const newPassword = watch("new_pass");

  function onSubmit(data) {
    mutate({
      data: {
        pre_pass: data.pre_pass,
        new_pass: data.new_pass,
      },
    });
  }

  return (
    <div className="w-[90vw] max-w-lg overflow-hidden rounded-3xl bg-white">
      <div className="flex items-center gap-4 border-b border-slate-100 bg-blue-50/60 px-8 py-7">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
          <HiOutlineShieldCheck size={28} />
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">تغییر رمز عبور</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            برای افزایش امنیت حساب، رمز عبور جدید انتخاب کنید.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-8">
        <Input
          label="رمز عبور فعلی"
          type="password"
          register={register}
          registerName="pre_pass"
          className={inputClass}
        />

        <Input
          label="رمز عبور جدید"
          type="password"
          register={register}
          registerName="new_pass"
          className={inputClass}
        />

        <Input
          label="تکرار رمز عبور جدید"
          type="password"
          register={register}
          registerName="confirm_password"
          className={inputClass}
          validation={{
            validate: (value) =>
              value === newPassword || "رمزهای عبور با هم مطابقت ندارند",
          }}
        />

        {errors.confirm_password && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            {errors.confirm_password.message}
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
