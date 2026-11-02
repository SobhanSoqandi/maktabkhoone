import CoursesList from "./(components)/CoursesList";

export default function CoursesPage() {
  return (
    <div className="space-y-6 p-2">
      <h1 className="text-2xl font-bold text-gray-800">دوره‌ها</h1>
      <CoursesList />
    </div>
  );
}
