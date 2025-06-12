import React from 'react';

import AboutHero from '@/components/sections/about-hero';
import Team from '@/components/sections/team';
import Values from '@/components/sections/values';

export const metadata = {
  title: 'About Productised.ai | Empowering Experts with AI Productisation',
  description: `Meet the team behind Productised.ai and learn
how our mission, values, and technology help consultants,
coaches, and agencies transform know-how into scalable AI
products.`,
};

const page = () => {
  return (
    <div>
      <AboutHero />

      <div className="py-14 md:py-20 lg:py-24">
        <Values />
      </div>

      <div className="py-14 md:py-20 lg:py-24">
        <Team />
      </div>
    </div>
  );
};

export default page;
