import RequestsList from "./(components)/RequestsList";

export default function CourseRequestsPage() {
  return (
    <div className="space-y-6 p-2">
      <h1 className="text-2xl font-bold text-gray-800">درخواست‌های دوره</h1>
      <RequestsList />
    </div>
  );
}
