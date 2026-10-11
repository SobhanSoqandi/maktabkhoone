import { ChaptersList } from "./(components)/ChaptersList";
import { chapters } from "./(components)/chapters-data";

export default function ChaptersPage() {
  return <ChaptersList initialChapters={chapters} />;
}
