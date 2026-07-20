export default function Prerequisites({ course }) {
  return (
    <section className="rounded-3xl shadow bg-white p-8">
      <h2 className="mb-8 text-3xl font-black">
        پیش‌نیازها
      </h2>

      <p className="leading-10 text-lg text-gray-700">
        {course.prerequisites}
      </p>
    </section>
  );
}