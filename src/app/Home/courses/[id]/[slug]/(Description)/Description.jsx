import ExpandableText from "@/app/Utils/ExpandableText";

export default function Description({ response }) {
  return (
    <section className="bg-white shadow p-8 rounded-3xl">
      <h2 className="mb-8 font-black text-2xl">توضیحات دوره</h2>

      <ExpandableText text={response.course.description} maxLength={50} />
    </section>
  );
}
