"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import Input from "@/app/(components)/Input";
import useMutationData from "@/app/(hooks)/useMutationData";
import { FormField } from "./FormField";

const numberFields = [
  { name: "order_index", label: "ترتیب جلسه" },
  { name: "duration", label: "مدت زمان (ثانیه)" },
];

export function LectureForm({ unit }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { chapterid, unitId } = useParams();
  const listPath = usePathname().replace(/\/edit\/[^/]+$/, "");
  const isEdit = Boolean(unit);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: unit?.title ?? "",
      content: unit?.content ?? "",
      order_index: unit?.order_index ?? "",
      duration: unit?.duration ?? "",
      is_free: unit?.is_free ?? false,
    },
  });

  const { mutate: save, isPending } = useMutationData(
    isEdit ? `lesson/${unitId}` : "lesson/",
    isEdit ? "put" : "post",
    "save_lesson",
    isEdit ? "جلسه با موفقیت ویرایش شد" : "جلسه با موفقیت اضافه شد",
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["get_units"] });
        queryClient.invalidateQueries({ queryKey: ["get_unit"] });
        router.push(listPath);
      },
    },
  );

  function onSubmit({ video, ...values }) {
    const data = new FormData();

    Object.entries(isEdit ? values : { ...values, section_id: chapterid }).forEach(
      ([key, value]) => value !== "" && data.append(key, value),
    );
    if (video?.length) data.append("video", video[0]);

    save({ data });
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
        className="input"
        lableClassName="form-label"
      />

      <FormField label="شرح ارائه" htmlFor="content">
        <textarea
          id="content"
          rows={8}
          {...register("content")}
          className="input resize-y"
        />
      </FormField>

      <FormField
        label="ویدیو"
        htmlFor="video"
        hint={isEdit ? "در صورت انتخاب ویدیوی جدید، ویدیوی فعلی جایگزین می‌شود" : undefined}
        error={errors.video?.message}
      >
        <input
          id="video"
          type="file"
          accept="video/*"
          {...register("video", {
            validate: (files) => isEdit || files?.length > 0 || "ویدیو الزامی است",
          })}
          className="input file:ml-3 file:rounded file:border file:border-slate-300 file:bg-white file:px-3 file:py-1"
        />
      </FormField>

      <div className="grid gap-10 sm:grid-cols-2">
        {numberFields.map(({ name, label }) => (
          <FormField key={name} label={label} htmlFor={name}>
            <input
              id={name}
              type="number"
              min={0}
              {...register(name)}
              className="input"
            />
          </FormField>
        ))}
      </div>

      <label className="flex w-fit items-center gap-2 text-sm text-slate-700">
        <input type="checkbox" {...register("is_free")} className="size-4" />
        این جلسه رایگان باشد
      </label>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="min-w-40 btn btn--light"
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
