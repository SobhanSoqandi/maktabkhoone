import { notFound } from "next/navigation";
import { Edit } from "./(components)/Edit";
import { chapters } from "../../chapters/(components)/chapters-data";

export default async function EditPage({ searchParams }) {
  const { chapterId } = await searchParams;


  const chapter = chapterId
    ? chapters.find((c) => String(c.id) === chapterId)
    : null;

  if (chapterId && !chapter) notFound();

  return <Edit chapter={chapter} />;
}
