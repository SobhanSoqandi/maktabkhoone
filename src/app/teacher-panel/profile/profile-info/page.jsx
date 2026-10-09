"use client";

import { useForm } from "react-hook-form";

import Input from "@/app/(components)/Input";

import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import { useEffect, useState } from "react";
import useGet from "@/app/(hooks)/useGet";
import useMutationData from "@/app/(hooks)/useMutationData";

// *TODO: این دیتای دستیه، بعداً با فراخوانی GET از بک‌اند جایگزین می‌شه*

function ProfileInfoPage() {
  const { data: CURRENT_PROFILE, isLoading } = useGet(
    "teachers/me",
    "teacher_profile",
  );
  const { mutate } = useMutationData("teachers/me", "patch", "update_info");
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();

  const [birthDate, setBirthDate] = useState(null);

  useEffect(() => {
    if (!isLoading && CURRENT_PROFILE) {
      console.log("CURRENT_PROFILE:", CURRENT_PROFILE);
      console.log("isLoading:", isLoading);
      const user = CURRENT_PROFILE.user;
      const studentProfile = user.student_profile;
      reset({
        first_name: studentProfile.name,
        last_name: studentProfile.last_name,
        national_code: CURRENT_PROFILE.national_code,
        mobile: user.phone_number,
        education: CURRENT_PROFILE.education,
        bio: CURRENT_PROFILE.bio,
      });
      const birthday = CURRENT_PROFILE.user.student_profile.birthday;
      if (birthday) {
        const date = new DateObject({
          date: new Date(birthday),
        });

        date.convert(persian, persian_fa);

        setBirthDate(date);
      }
    }
  }, [isLoading, CURRENT_PROFILE, reset]);
  if (isLoading || !CURRENT_PROFILE) {
    return (
      <div dir="rtl" className="flex justify-center items-center min-h-screen">
        در حال دریافت اطلاعات...
      </div>
    );
  }
  return (
    <div dir="rtl" className="bg-gray-50 md:p-10 min-h-screen">
      <div className="mx-auto max-w-4xl">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(birthDate.toDate());

            mutate({
              data: {
                ...data,
                birthday: birthDate ? birthDate.toDate() : null,
              },
            });
          })}
          className="flex flex-col gap-8 bg-white shadow-sm p-6 md:p-10 rounded-2xl"
        >
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-gray-900 text-lg">
              ویرایش اطلاعات هویتی
            </h2>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
            <Input
              label="نام"
              registerName="first_name"
              register={register}
              errors={errors}
              validation={{ required: "نام را وارد کنید" }}
              className="input"
              lableClassName="text-sm font-medium text-gray-700"
            />

            <Input
              label="نام خانوادگی"
              registerName="last_name"
              register={register}
              errors={errors}
              validation={{ required: "نام خانوادگی را وارد کنید" }}
              className="input"
              lableClassName="text-sm font-medium text-gray-700"
            />

            <Input
              label="کد ملی"
              registerName="national_code"
              register={register}
              errors={errors}
              validation={{
                required: "کد ملی را وارد کنید",
                pattern: {
                  value: /^\d{10}$/,
                  message: "کد ملی باید ۱۰ رقم باشد",
                },
              }}
              className="input"
              lableClassName="text-sm font-medium text-gray-700"
            />

            <Input
              label="شماره همراه"
              registerName="mobile"
              register={register}
              errors={errors}
              validation={{
                required: "شماره همراه را وارد کنید",
                pattern: {
                  value: /^09\d{9}$/,
                  message: "شماره همراه معتبر نیست",
                },
              }}
              className="input"
              lableClassName="text-sm font-medium text-gray-700"
            />

            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700 text-sm">
                تاریخ تولد
              </label>

              <DatePicker
                value={birthDate}
                onChange={setBirthDate}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                format="YYYY/MM/DD"
                inputClass="input w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700 text-sm">
                تحصیلات
              </label>

              <textarea
                {...register("education")}
                className="w-full min-h-28 resize-none input"
                placeholder="مقطع یا رشته تحصیلی خود را وارد کنید"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700 text-sm">
              درباره من
            </label>

            <textarea
              {...register("bio")}
              className="w-full min-h-32 resize-none input"
              placeholder="درباره خودتان بنویسید..."
            />

            {errors.bio && (
              <span className="text-red-500 text-sm">{errors.bio.message}</span>
            )}
          </div>

          <button type="submit" className="self-start px-10 btn btn-success">
            ذخیره تغییرات
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileInfoPage;
