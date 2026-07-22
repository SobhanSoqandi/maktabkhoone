import ExpandableText from "@/app/Utils/ExpandableText";


export default function Description({ course }) {
  return (
    <section className="rounded-3xl shadow bg-white p-8">
      <h2 className="mb-8 text-2xl font-black">
        توضیحات دوره
      </h2>

      <ExpandableText
        text={course.description}
        maxLength={50}
      />
    </section>
  );
}