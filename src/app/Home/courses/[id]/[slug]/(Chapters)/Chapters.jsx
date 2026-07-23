import ChapterAccordion from "./ChapterAccordion";
import ChapterSummary from "./ChapterSummary";

export default function Chapters({ chapters }) {
  console.log(chapters);
  const chapterCount = chapters.length;

  const lessonCount = chapters.reduce(
    (sum, chapter) => sum + chapter.lessons.length,
    0,
  );

  const totalMinutes = chapters.reduce(
    (sum, chapter) =>
      sum +
      chapter.lessons.reduce(
        (lessonSum, lesson) => lessonSum + lesson.duration,
        0,
      ),
    0,
  );

  return (
    <>
      <ChapterSummary
        chapterCount={chapterCount}
        lessonCount={lessonCount}
        totalMinutes={totalMinutes}
      />

      <ChapterAccordion chapters={chapters} />
    </>
  );
}
