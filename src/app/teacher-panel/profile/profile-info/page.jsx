"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";

import Input from "@/app/(components)/Input";
import useGet from "@/app/(hooks)/useGet";
import useMutationData from "@/app/(hooks)/useMutationData";
import { useQueryClient } from "@tanstack/react-query";
import { Quando } from "next/font/google";

const PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

function toEnglishDigits(value) {
  if (typeof value !== "string") return value;
  return value
    .replace(/[۰-۹]/g, (d) => String(PERSIAN_DIGITS.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String(ARABIC_DIGITS.indexOf(d)));
}

function ProfileInfoPage() {
  const { data: CURRENT_PROFILE, isLoading } = useGet(
    "teachers/me",
    "teacher_profile",
  );
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutationData(
    "teachers/me",
    "patch",
    "update_info",
    "اپدیت با موفقیت انجام شد ",
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["teacher_profile"],
        });
      },
    },
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [birthDate, setBirthDate] = useState(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!CURRENT_PROFILE || initialized.current) return;
    initialized.current = true;

    const profile = CURRENT_PROFILE.user?.student_profile;

    reset({
      first_name: profile?.name ?? "",
      last_name: profile?.last_name ?? "",
      national_code: CURRENT_PROFILE.national_code ?? "",
      mobile: CURRENT_PROFILE.user?.phone_number ?? "",
      education: CURRENT_PROFILE.education ?? "",
      bio: CURRENT_PROFILE.bio ?? "",
    });

    if (profile?.birthday) {
      const date = new DateObject({
        date: String(profile.birthday).slice(0, 10),
        format: "YYYY-MM-DD",
        calendar: gregorian,
        locale: gregorian_en,
      }).convert(persian, persian_fa);

      setBirthDate(date);
    }
  }, [CURRENT_PROFILE, reset]);

  const onSubmit = (formData) => {
    const birthday = birthDate
      ? new DateObject(birthDate)
          .convert(gregorian, gregorian_en)
          .format("YYYY-MM-DD")
      : null;

    mutate({
      data: {
        ...formData,
        national_code: toEnglishDigits(formData.national_code),
        mobile: toEnglishDigits(formData.mobile),
        birthday,
      },
    });
  };

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
          onSubmit={handleSubmit(onSubmit)}
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
                  value: /^[0-9۰-۹٠-٩]{10}$/,
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
                  value: /^(09|۰۹)[0-9۰-۹]{9}$/,
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
              {...register("bio", {
                maxLength: {
                  value: 1000,
                  message: "حداکثر ۱۰۰۰ کاراکتر مجاز است",
                },
              })}
              className="w-full min-h-32 resize-none input"
              placeholder="درباره خودتان بنویسید..."
            />

            {errors.bio && (
              <span className="text-red-500 text-sm">{errors.bio.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="self-start px-10 btn btn-success"
          >
            {isPending ? "در حال ذخیره..." : "ذخیره تغییرات"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileInfoPage;
