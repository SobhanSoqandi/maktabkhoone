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
        localStorage.removeItem("access_token");
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
      console.log(user);
      setValue("email", user.email ?? "");
      setValue("first_name", user.student_profile.name ?? "");
      setValue("last_name", user.student_profile.last_name ?? "");
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
    <main
      dir="rtl"
      className="relative flex justify-center items-center bg-[#f5f8ff] px-4 sm:px-6 lg:px-8 py-10 min-h-screen overflow-hidden"
    >
      <div className="-top-32 -right-32 absolute bg-blue-200/40 blur-3xl rounded-full w-80 h-80 pointer-events-none" />
      <div className="-bottom-40 -left-28 absolute bg-indigo-200/30 blur-3xl rounded-full w-96 h-96 pointer-events-none" />

      <div className="relative bg-white shadow-[0_24px_80px_-24px_rgba(37,99,235,0.18)] border border-white rounded-[32px] w-full max-w-5xl overflow-hidden">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="hidden relative lg:flex flex-col justify-between bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-10 xl:p-12 overflow-hidden text-white">
            <div className="-top-16 -left-20 absolute border border-white/10 rounded-full w-64 h-64 pointer-events-none" />
            <div className="-right-20 -bottom-24 absolute bg-white/5 rounded-full w-72 h-72 pointer-events-none" />

            <div className="relative">
              <div className="flex justify-center items-center bg-white/10 mb-8 border border-white/20 rounded-2xl w-14 h-14">
                <FiBookOpen size={27} />
              </div>

              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 border border-white/20 rounded-full font-medium text-blue-50 text-xs">
                <span className="bg-sky-300 rounded-full w-1.5 h-1.5" />
                پنل اختصاصی مدرس
              </span>

              <h2 className="mt-6 font-extrabold text-3xl xl:text-4xl leading-[1.8]">
                شروع مسیر حرفه‌ای تدریس شما
              </h2>

              <p className="mt-4 text-blue-100 text-sm leading-8">
                اطلاعات خود را تکمیل کنید و وارد فضای مدیریت دوره‌های آموزشی
                شوید.
              </p>
            </div>

            <div className="relative flex items-center gap-3 mt-12 pt-5 border-white/15 border-t text-blue-100 text-xs leading-6">
              <FiShield size={17} className="shrink-0" />
              اطلاعات خود را با دقت وارد کنید.
            </div>
          </aside>

          <section className="p-6 sm:p-10 lg:p-12 xl:p-14">
            <div className="lg:hidden flex items-center gap-3 mb-8">
              <div className="flex justify-center items-center bg-blue-600 shadow-blue-600/20 shadow-lg rounded-2xl w-12 h-12 text-white">
                <FiBookOpen size={24} />
              </div>
              <div>
                <p className="font-extrabold text-slate-800">پنل استاد</p>
                <p className="mt-1 text-slate-500 text-xs">
                  تکمیل اطلاعات حساب
                </p>
              </div>
            </div>

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 mb-3 px-3 py-1.5 rounded-full font-bold text-blue-700 text-xs">
                <FiUser size={14} />
                ثبت‌نام مدرس
              </div>

              <h1 className="font-extrabold text-slate-900 text-2xl sm:text-3xl leading-relaxed">
                تکمیل اطلاعات
              </h1>

              <p className="mt-2 text-slate-500 text-sm leading-7">
                اطلاعات موردنیاز برای ساخت حساب استاد را وارد کنید.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-600 rounded-full w-1 h-5" />
                  <h2 className="font-bold text-slate-800 text-sm">
                    اطلاعات شخصی
                  </h2>
                </div>

                <div className="gap-5 grid grid-cols-1 sm:grid-cols-2">
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
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-600 rounded-full w-1 h-5" />
                  <h2 className="font-bold text-slate-800 text-sm">
                    اطلاعات تماس و هویت
                  </h2>
                </div>

                <div className="gap-5 grid grid-cols-1 sm:grid-cols-2">
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
                className="group flex justify-center items-center gap-3 bg-gradient-to-l from-blue-700 hover:from-blue-800 to-blue-600 hover:to-indigo-700 disabled:opacity-60 shadow-blue-600/20 shadow-lg hover:shadow-blue-600/25 hover:shadow-xl px-5 py-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 w-full font-bold text-white text-sm transition-all hover:-translate-y-0.5 disabled:hover:translate-y-0 duration-300 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <>
                    <span className="border-2 border-white/30 border-t-white rounded-full w-5 h-5 animate-spin" />
                    در حال ثبت اطلاعات...
                  </>
                ) : (
                  <>
                    ثبت اطلاعات و ادامه
                    <FiArrowLeft
                      size={18}
                      className="transition-transform group-hover:-translate-x-1 duration-300"
                    />
                  </>
                )}
              </button>

              <p className="text-slate-400 text-xs text-center leading-6">
                پس از ثبت موفق، به پنل مدیریت دوره‌ها منتقل می‌شوید.
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
