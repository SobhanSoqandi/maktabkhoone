import FaqList from './FaqList';
import CtaBanner from './CtaBanner';
import { defaultFaqTitle, defaultFaqItems, defaultIllustrationSrc, defaultCta } from './data';

export default function Faq({ title = defaultFaqTitle, items = defaultFaqItems, illustrationSrc = defaultIllustrationSrc, cta = defaultCta, onCtaClick }) {
  return (
    <section dir="rtl" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="text-center lg:text-right">
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">{title}</h2>
            <p className="mt-4 leading-8 text-slate-500">هر چیزی که برای شروع همکاری نیاز داری، اینجا پیدا می‌کنی.</p>
            <img src={illustrationSrc} alt="" className="mx-auto mt-7 w-48 object-contain lg:mx-0" />
          </div>
          <FaqList items={items} />
        </div>
        <div className="mt-20">
          <CtaBanner {...cta} onCtaClick={onCtaClick} />
        </div>
      </div>
    </section>
  );
}
