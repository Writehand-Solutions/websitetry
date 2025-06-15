import React from 'react';

import { Heart, UserCog, Lightbulb, Shield } from 'lucide-react';

import SectionHeader from '../section-header';

const values = [
  {
    title: 'Smarter Than Forms ',
    description:
      'Forms have been around for 20+ years—getting prettier but still static. With AI Productisation™, 
      we’ve turned those fields into dynamic, intelligent workflows that adapt, engage, and deliver value in real time.',
    icon: UserCog,
  },
  {
    title: 'Built for Modern Delivery',
    description:
      'The way people share knowledge is changing. Static PDFs and generic forms no longer cut it. We’re building 
      tools for a new kind of expert—those who want to deliver value instantly, interactively, and at scale. 
  Productised makes that possible without needing a dev team or technical background.',
    icon: Lightbulb,
  },
  {
    title: 'Designed to Stay Out of Your Way',
    description:
      'You shouldn’t have to learn a new system just to ship your ideas. We focus on building 
      tools that feel intuitive from the start—so you can go from concept to live AI product without 
  friction, complexity, or unnecessary steps.',
    icon: Shield,
  },
];

const Values = () => {
  return (
    <section>
      <SectionHeader
        iconTitle="We live by"
        title="What Guides Us"
        icon={Heart}
        description="Our approach is shaped by the realities of modern work, not outdated systems."
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
