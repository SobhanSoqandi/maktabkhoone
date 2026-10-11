import { UnitsList } from "./(components)/UnitsList";
import { units } from "./(components)/units-data";

export default async function UnitsPage({ params }) {
  const { chapterId } = await params;

  const chapterUnits = units.filter((u) => u.section_id === Number(chapterId));

  return <UnitsList initialUnits={chapterUnits} />;
}
