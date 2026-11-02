import TeachersList from "./(components)/TeachersList";

export default function TeachersPage() {
  return (
    <div dir="rtl" className="space-y-8 p-2">
      <h1 className="text-3xl font-bold tracking-tight text-[#1d1d1f]">مدرسین</h1>
      <TeachersList />
    </div>
  );
}
