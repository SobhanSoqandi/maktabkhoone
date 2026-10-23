"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Input from "@/app/(components)/Input";
import { FormField } from "./FormField";

const fileInputClass =
  "form-input file:ml-3 file:rounded file:border file:border-slate-300 file:bg-white file:px-3 file:py-1";

export function LectureForm({ unit }) {
  const router = useRouter();
  const pathname = usePathname();

  // …/units/edit/lecture (یا …/edit/5)  ->  …/units
  const listPath = pathname.replace(/\/edit\/[^/]+$/, "");

  const isEdit = Boolean(unit);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: unit?.title ?? "",
      content: unit?.content ?? "",
    },
  });

  function onSubmit(values) {
    console.log(isEdit ? "ویرایش" : "ایجاد", values);
    router.push(listPath);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
      <h1 className="text-xl font-bold text-slate-900">
        {isEdit ? "ویرایش جلسه ویدئویی" : "ایجاد جلسه ویدئویی"}
      </h1>

      <Input
        label="عنوان ارائه"
        placeholder="عنوان ارائه را وارد کنید"
        registerName="title"
        register={register}
        errors={errors}
        validation={{ required: "عنوان ارائه الزامی است" }}
        className="form-input"
        lableClassName="form-label"
      />

      <FormField label="شرح ارائه" htmlFor="content">
        <textarea
          id="content"
          rows={8}
          {...register("content")}
          className="form-input resize-y"
        />
      </FormField>

      <FormField
        label="جزوه"
        htmlFor="notes"
        hint="جزوه، اسلاید و ... (این فیلد اختیاری است، فرمت‌های قابل قبول: xls, xlsx, doc, docx, ppt, pptx, pdf, mp3)"
      >
        <input
          id="notes"
          type="file"
          accept=".xls,.xlsx,.doc,.docx,.ppt,.pptx,.pdf,.mp3"
          {...register("notes")}
          className={fileInputClass}
        />
      </FormField>

      <FormField
        label="زیرنویس (با فرمت vtt)"
        htmlFor="subtitle"
        hint="با فرمت vtt (این فیلد اختیاری است، فرمت‌های قابل قبول: vtt)"
      >
        <input
          id="subtitle"
          type="file"
          accept=".vtt"
          {...register("subtitle")}
          className={fileInputClass}
        />
      </FormField>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="min-w-40 rounded bg-blue-600 px-5 py-3 text-white hover:bg-blue-500"
        >
          {isEdit ? "ذخیره تغییرات" : "ایجاد جلسه"}
        </button>

        <Link
          href={listPath}
          className="rounded border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-50"
        >
          انصراف
        </Link>
      </div>
    </form>
  );
}
