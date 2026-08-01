import FAQItem from "./FAQItem";
import faqData from "./faq-data";

export default function FAQ() {
  return (
    <section className="rounded-3xl bg-white p-8">

      <h2 className="mb-8 text-xl font-black">
        سوالات پرتکرار
      </h2>

      <div className="space-y-4">

        {faqData.map((item) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}

      </div>

    </section>
  );
}