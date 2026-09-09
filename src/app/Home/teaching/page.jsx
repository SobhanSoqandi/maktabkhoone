import Hero from './(hero)/Hero';
import WhyTeach from './(whyteach)/WhyTeach';
import StatsBar from './(stats)/StatsBar';
import { Herow, tWhyTeach, Stats } from './data';
import Faq from './(FAQ)/Faq';

export default function page({
  hero = Herow ,
  whyTeach = tWhyTeach,
  stats = Stats,
  onCtaClick,
}) {
  return (
    <section className="w-full font-sans">
      <Hero {...hero} onCtaClick={onCtaClick} />
      <WhyTeach {...whyTeach} />
      <StatsBar stats={stats} />
      <Faq />
    </section>
  );
}
