"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import useGet from "@/app/(hooks)/useGet";
import { UnitsList } from "./(components)/UnitsList";

export default function UnitsPage() {
  const { chapterid } = useParams();

  const { data } = useGet("lesson/", "get_units");

  const units = useMemo(
    () => data?.filter((u) => u.section_id === Number(chapterid)) ?? [],
    [data, chapterid],
  );

  return <UnitsList initialUnits={units} />;
}
