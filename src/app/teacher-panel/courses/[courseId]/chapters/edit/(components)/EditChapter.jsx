"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import Input from "@/app/(components)/Input";
import useGet from "@/app/(hooks)/useGet";
import useMutationData from "@/app/(hooks)/useMutationData";

export function EditChapter() {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const { chapterId } = useParams();
  const initialized = useRef(false);

  const listPath = pathname.replace(/\/[^/]+\/edit$/, "");

  const { data: chapter, isLoading } = useGet(
    `section/${chapterId}`,
    ["chapter_detail", chapterId],
    { enabled: !!chapterId },
  );

  const { mutate: updateChapter, isPending } = useMutationData(
    `section/${chapterId}`,
    "put",
    "update_chapter",
    "فصل با موفقیت ویرایش شد",
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["get_chapters"] });
        queryClient.invalidateQueries({
          queryKey: ["chapter_detail", chapterId],
        });
        router.push(listPath);
      },
    },
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { title: "" },
  });

  useEffect(() => {
    if (!chapter || initialized.current) return;
    initialized.current = true;

    reset({ title: chapter.title ?? "" });
  }, [chapter, reset]);

  function onSubmit(values) {
    updateChapter({
      data: { title: values.title },
    });
  }

  if (isLoading) {
    return (
      <div className="py-16 text-slate-400 text-sm text-center">
        در حال دریافت اطلاعات فصل...
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="py-16 text-slate-400 text-sm text-center">
        فصل پیدا نشد
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 max-w-xl"
    >
      <h1 className="font-bold text-slate-900 text-xl">ویرایش فصل</h1>

      <Input
        label="عنوان فصل"
        registerName="title"
        register={register}
        errors={errors}
        validation={{
          required: "عنوان فصل الزامی است",
        }}
        className="input"
      />

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="min-w-40 btn btn-success"
        >
          {isPending ? "در حال ذخیره..." : "ذخیره تغییرات"}
        </button>

        <Link href={listPath} className="btn btn-primary">
          انصراف
        </Link>
      </div>
    </form>
  );
}
