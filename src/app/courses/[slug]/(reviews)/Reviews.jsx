import ReviewSlider from "./ReviewSlider";
import ReviewSummary from "./ReviewSummary";

export default function Reviews({ reviews }) {
  return (
    <section className=" bg-white p-8">

      <div className="grid gap-10 lg:grid-cols-[320px_1fr]">

        <ReviewSummary reviews={reviews} />

        <ReviewSlider reviews={reviews.items} />

      </div>

    </section>
  );
}