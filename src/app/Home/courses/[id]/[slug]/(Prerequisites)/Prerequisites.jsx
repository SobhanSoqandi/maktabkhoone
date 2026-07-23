export default function Prerequisites({ response }) {
  return (
    <section className="bg-white shadow p-8 rounded-3xl">
      <h2 className="mb-8 font-black text-3xl">پیش‌نیازها</h2>

      <p className="text-gray-700 text-lg leading-10">
        {response.course.prerequisites}
      </p>
    </section>
  );
}
