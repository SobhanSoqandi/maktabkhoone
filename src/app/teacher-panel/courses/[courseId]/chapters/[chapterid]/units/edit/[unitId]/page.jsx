"use client";

import { useParams } from "next/navigation";
import useGet from "@/app/(hooks)/useGet";
import { LectureForm } from "./(components)/LectureForm";
import Loading from "@/app/(components)/Loading";

export default function UnitEditPage() {
  const { unitId } = useParams();
  const isNew = unitId === "new";

  const { data, isPending } = useGet(`lesson/${unitId}`, ["get_unit", unitId], {
    enabled: !isNew,
  });

  if (!isNew && isPending) {
    return <Loading />;
  }

  return <LectureForm unit={isNew ? undefined : data} />;
}
