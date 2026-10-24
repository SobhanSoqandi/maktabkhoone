"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Input from "@/app/(components)/Input";
import useMutationData from "@/app/(hooks)/useMutationData";

export function Edit() {
  const router = useRouter();
  const pathname = usePathname();
  const { courseId } = useParams();
  console.log(courseId);
  const listPath = pathname.replace(/\/edit$/, "");

  const { mutate: createChapter } = useMutationData(
    "section/",
    "post",
    "create_chapter",
    "فصل با موفقیت اضافه شد",
    {
      onSuccess: () => {
        router.push(listPath);
      },
    },
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(values) {
    createChapter({
      data: { ...values, course_id: courseId },
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 max-w-xl"
    >
      <h1 className="font-bold text-slate-900 text-xl">افزودن فصل</h1>

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

      {/* <Input
        label="ترتیب فصل"
        registerName="order_index"
        register={register}
        errors={errors}
        validation={{
          required: "ترتیب فصل الزامی است",
          valueAsNumber: true,
        }}
        className="input"
      /> */}

      <div className="flex items-center gap-3">
        <button type="submit" className="min-w-40 btn btn-success">
          افزودن فصل
        </button>

        <Link href={listPath} className="btn btn-primary">
          انصراف
        </Link>
      </div>
    </form>
  );
}
