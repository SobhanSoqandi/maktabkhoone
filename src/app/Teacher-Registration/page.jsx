
"use client";

import { useAuth } from "@/context/AuthContext";
import React from "react";
import Input from "../(components)/Input";
import { useForm } from "react-hook-form";
import useMutationData from "../(hooks)/useMutationData";
import { useRouter } from "next/navigation";
import { FiBookOpen, FiUser, FiShield, FiArrowLeft } from "react-icons/fi";

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
    <main dir="rtl" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f8ff] px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-28 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-white bg-white shadow-[0_24px_80px_-24px_rgba(37,99,235,0.18)]">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-10 text-white lg:flex xl:p-12">
            <div className="pointer-events-none absolute -left-20 -top-16 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-white/5" />

            <div className="relative">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                <FiBookOpen size={27} />
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-blue-50">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                پنل اختصاصی مدرس
              </span>

              <h2 className="mt-6 text-3xl font-extrabold leading-[1.8] xl:text-4xl">
                شروع مسیر حرفه‌ای تدریس شما
              </h2>

              <p className="mt-4 text-sm leading-8 text-blue-100">
                اطلاعات خود را تکمیل کنید و وارد فضای مدیریت دوره‌های آموزشی شوید.
              </p>
            </div>

            <div className="relative mt-12 flex items-center gap-3 border-t border-white/15 pt-5 text-xs leading-6 text-blue-100">
              <FiShield size={17} className="shrink-0" />
              اطلاعات خود را با دقت وارد کنید.
            </div>
          </aside>

          <section className="p-6 sm:p-10 lg:p-12 xl:p-14">
            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <FiBookOpen size={24} />
              </div>
              <div>
                <p className="font-extrabold text-slate-800">پنل استاد</p>
                <p className="mt-1 text-xs text-slate-500">تکمیل اطلاعات حساب</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                <FiUser size={14} />
                ثبت‌نام مدرس
              </div>

              <h1 className="text-2xl font-extrabold leading-relaxed text-slate-900 sm:text-3xl">
                تکمیل اطلاعات
              </h1>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                اطلاعات موردنیاز برای ساخت حساب استاد را وارد کنید.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-5 w-1 rounded-full bg-blue-600" />
                  <h2 className="text-sm font-bold text-slate-800">اطلاعات شخصی</h2>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
              </div>

              <div>
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-5 w-1 rounded-full bg-blue-600" />
                  <h2 className="text-sm font-bold text-slate-800">اطلاعات تماس و هویت</h2>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-l from-blue-700 to-blue-600 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-800 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-600/25 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isPending ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    در حال ثبت اطلاعات...
                  </>
                ) : (
                  <>
                    ثبت اطلاعات و ادامه
                    <FiArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-6 text-slate-400">
                پس از ثبت موفق، به پنل مدیریت دوره‌ها منتقل می‌شوید.
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
