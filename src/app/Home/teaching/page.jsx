import Hero from './(hero)/Hero';
import StatsBar from './(stats)/StatsBar';
import WhyTeach from './(whyteach)/WhyTeach';
import Steps from './(steps)/Steps';
import Faq from './(FAQ)/Faq';
import { Herow, tWhyTeach, tSteps, Stats } from './data';

export default function TeachingPage({ hero = Herow, whyTeach = tWhyTeach, steps = tSteps, stats = Stats, onCtaClick }) {
  return (
    <main dir="rtl" className="w-full overflow-hidden bg-white font-sans text-slate-900">
      <Hero {...hero} onCtaClick={onCtaClick} />
      <StatsBar stats={stats} />
      <WhyTeach {...whyTeach} />
      <Steps {...steps} />
      <Faq onCtaClick={onCtaClick} />
    </main>
  );
}
