import { courses } from "../../courses";
import RequestCard from "./RequestCard";

export default function RequestsList() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <RequestCard key={course.id} course={course} />
      ))}
    </div>
  );
}
