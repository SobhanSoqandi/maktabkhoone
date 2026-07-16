import { teacherCourses } from "./cources-data";
import CourcesCard from "./CourcesCard";


export default function CourcesGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {teacherCourses.map((course) => (
        <CourcesCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}