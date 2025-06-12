import React from 'react';

import { PocketKnife } from 'lucide-react';

import FeaturesList from '../features-list';
import SectionHeader from '../section-header';

const Features = () => {
  return (
    <section id="ai-productisation" className="pt-12 lg:pt-20">
      <div className="border-y">
        <SectionHeader
          iconTitle="Introducing AI Productisation"
          title="Productised Delivery, Powered by AI"
          icon={PocketKnife}
          description={
            'Launch expert-grade AI products that attract, engage, and convert — all in one seamless flow.'
          }
        />
      </div>

      <div className="container border-x lg:!px-0">
        <FeaturesList />
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export default Features;
