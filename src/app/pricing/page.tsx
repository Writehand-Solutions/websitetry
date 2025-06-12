import React from 'react';

import Faq from '@/components/sections/faq';
import Pricing from '@/components/sections/pricing';
import Testimonials from '@/components/sections/testimonials';

export const metadata = {
  title: 'Pricing | Productised.ai Plans for Experts, Teams & Agencies',
  description: `Compare Starter, Pro, and Agency plans.
Choose the package that fits your goals and unlock unlimited AI
products, custom branding, and seamless integrations— get
productised today!`,
};

const PricingPage = () => {
  return (
    <div className="py-14 md:py-20 lg:py-24">
      <Pricing withBorders={false} />
      <div className="pt-14 md:pt-20 lg:pt-24">
        <Faq withBorders={false} />
      </div>
    </div>
  );
};

export default PricingPage;
