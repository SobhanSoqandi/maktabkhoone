import FaqList from './FaqList';
import CtaBanner from './CtaBanner';
import { defaultFaqTitle, defaultFaqItems, defaultIllustrationSrc, defaultCta } from './data';

export default function Faq({
  title = defaultFaqTitle,
  items = defaultFaqItems,
  illustrationSrc = defaultIllustrationSrc,
  cta = defaultCta,
  onCtaClick,
}) {
  return (
    <section dir='ltr' className="flex w-full flex-col gap-20 px-8 py-16 font-sans md:px-20">
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_auto]">
        <FaqList items={items} />
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
          <img src={illustrationSrc} alt="" className="w-64" />
        </div>
      </div>
      <CtaBanner {...cta} onCtaClick={onCtaClick} />
    </section>
  );
}
