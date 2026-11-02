import TeacherRequestsList from "./(components)/TeacherRequestsList";

export default function TeacherRequestsPage() {
  return (
    <div dir="rtl" className="space-y-8 p-2">
      <h1 className="text-3xl font-bold tracking-tight text-[#1d1d1f]">درخواست‌های مدرس</h1>
      <TeacherRequestsList />
    </div>
  );
}
