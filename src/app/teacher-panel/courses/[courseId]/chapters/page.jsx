"use client";

import { useParams, useSearchParams } from "next/navigation";
import { req } from "@/app/(function)/request";
import { ChaptersList } from "./(components)/ChaptersList";
import useGet from "@/app/(hooks)/useGet";

export default function ChaptersPage() {
  const { courseId } = useParams();

  const { data } = useGet(`section/course_id`, "get_chapters", {
    params: {
      id: courseId,
    },
    staleTime: 0,
  });
  console.log(data);

  return <ChaptersList initialChapters={data ?? []} />;
}
