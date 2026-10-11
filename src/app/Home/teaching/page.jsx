import Hero from './(hero)/Hero';
import WhyTeach from './(whyteach)/WhyTeach';
import StatsBar from './(stats)/StatsBar';
import Faq from './(FAQ)/Faq';
import { Herow, tWhyTeach, Stats } from './data';

export default function TeachingPage({ hero = Herow, whyTeach = tWhyTeach, stats = Stats, onCtaClick }) {
  return (
    <main dir="rtl" className="w-full overflow-hidden bg-[#f8fafc] font-sans text-slate-900">
      <Hero {...hero} onCtaClick={onCtaClick} />
      <WhyTeach {...whyTeach} />
      <StatsBar stats={stats} />
      <Faq onCtaClick={onCtaClick} />
    </main>
  );
}
