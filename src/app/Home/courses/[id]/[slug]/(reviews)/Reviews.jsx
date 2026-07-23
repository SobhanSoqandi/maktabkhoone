import ReviewSlider from "./ReviewSlider";
import ReviewSummary from "./ReviewSummary";

export default function Reviews({ response }) {
  return (
    <section className="bg-white p-6 md:p-8 border border-gray-200 rounded-3xl">
      <div className="mb-8">
        <h2 className="font-extrabold text-gray-900 text-2xl">
          نظرات دانشجویان
        </h2>

        <p className="mt-2 text-gray-500">
          تجربه دانشجویانی که این دوره را گذرانده‌اند.
        </p>
      </div>

      <div className="gap-10 grid lg:grid-cols-[320px_1fr]">
        <ReviewSummary response={response} />

        <ReviewSlider reviews={response.review} />
      </div>
    </section>
  );
}
