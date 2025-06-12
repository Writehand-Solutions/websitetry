import React from 'react';

import { Heart, UserCog, Lightbulb, Shield } from 'lucide-react';

import SectionHeader from '../section-header';

const values = [
  {
    title: 'Community Over Competition ',
    description:
      'We grow by learning together. Templates, tutorials, and community help every user level-up and share wins.',
    icon: UserCog,
  },
  {
    title: 'Continuous Innovation',
    description:
      'AI moves fast—so do we. Weekly releases, open roadmaps, and customer-led iterations keep us ahead.',
    icon: Lightbulb,
  },
  {
    title: 'Integrity and Transparency',
    description:
      'Clear pricing, no hidden fees, and honest data practices. Your trust is worth more than any feature.',
    icon: Shield,
  },
];

const Values = () => {
  return (
    <section>
      <SectionHeader
        iconTitle="We live by"
        title="Our Core Values"
        icon={Heart}
        description="We believe in principles that guide our growth and inspire our community."
        className="border-none"
      />

      <div className="container mt-10 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div className="flex gap-2.5" key={index}>
              <Icon className="mt-0.5 size-[18px] shrink-0" />
              <div>
                <h3 className="text-lg !leading-none tracking-[-0.96px] lg:text-2xl">
                  {value.title}
                </h3>
                <p className="text-muted-foreground mt-2.5 text-sm tracking-[-0.36px]">
                  {value.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Values;
