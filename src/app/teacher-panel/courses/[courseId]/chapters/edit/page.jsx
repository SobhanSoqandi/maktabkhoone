"use client";
import { notFound, useSearchParams } from "next/navigation";
import { Edit } from "./(components)/Edit";
import useGet from "@/app/(hooks)/useGet";

export default function EditPage({ searchParams }) {
  const { chapterId } = useSearchParams;

  return <Edit chapter={chapterId} />;
}
