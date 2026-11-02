import { teachers } from "../../teachers";
import TeacherRequestCard from "./TeacherRequestCard";

export default function TeacherRequestsList() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {teachers.map((teacher) => (
        <TeacherRequestCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
}
