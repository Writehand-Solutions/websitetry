import Accelerate from '@/components/sections/accelerate';
import Adaptive from '@/components/sections/adaptive';
import Faq from '@/components/sections/faq';
import Features from '@/components/sections/features';
import Hero from '@/components/sections/hero';
import Optimize from '@/components/sections/optimize';
import Pricing from '@/components/sections/pricing';
export default function Home() {
  return (
    <>
      <Hero />
      {/* <Partners /> */}
      <Features />
      <Adaptive />
      <Optimize />
      <Accelerate />
      {/* <Testimonials /> */}
      <Pricing />
      <Faq />
    </>
  );
}
