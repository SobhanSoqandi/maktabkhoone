"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Input from "@/app/(components)/Input";

export function Edit({ chapter }) {
  const router = useRouter();
  const pathname = usePathname();

  
  const listPath = pathname.replace(/\/edit$/, "");

  
  const isEdit = Boolean(chapter);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { title: chapter?.title ?? "" },
  });

  function onSubmit(values) {
    console.log(isEdit ? "ویرایش" : "افزودن", values);
    router.push(listPath);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex max-w-xl flex-col gap-8"
    >
      <h1 className="text-xl font-bold text-slate-900">
        {isEdit ? "ویرایش فصل" : "افزودن فصل"}
      </h1>

      <Input
        label="عنوان فصل"
        registerName="title"
        register={register}
        errors={errors}
        validation={{ required: "عنوان فصل الزامی است" }}
        className="input"
      />

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="min-w-40 btn btn-success"
        >
          {isEdit ? "ذخیره تغییرات" : "افزودن فصل"}
        </button>

        <Link
          href={listPath}
          className="btn btn-primary"
        >
          انصراف
        </Link>
      </div>
    </form>
  );
}
