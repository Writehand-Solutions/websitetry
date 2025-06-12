import React from 'react';

import Image from 'next/image';

const DATA = [
  {
    subTitle: 'Control Design',
    title: 'Custom AI Output Results Pages',
    description:
      'Create unique, high-context results pages on the fly with AI.',
    icon: 'CircleHelp',
    image: '/images/homepage/custom-output.png',
  },
  {
    subTitle: 'Personalisation',
    title: 'Personalisation at Scale',
    description:
      'Tailor every journey with dynamic logic, custom values and AI-driven responses.',
    icon: 'Volume2',
    image: '/images/homepage/personalisation.png',
  },
  {
    subTitle: 'Analytics',
    title: 'Insightful Product Analytics',
    description: 'Track usage and conversion data, then refine with evidence.',
    icon: 'Lightbulb',
    image: '/images/homepage/analytics.png',
  },
];

const AdaptiveList = () => {
  return (
    <div className="items-center">
      <div className="grid flex-1 max-lg:divide-y max-lg:border-x lg:grid-cols-3 lg:divide-x">
        {DATA.map((item, index) => (
          <div
            key={index}
            className={`relative isolate pt-5 text-start lg:pt-20`}
          >
            <span className="px-1 tracking-[-0.32px] lg:px-8">
              {item.subTitle}
            </span>
            <h3 className={`mt-2 px-1 text-lg tracking-[-0.36px] lg:px-8`}>
              {item.title}
            </h3>
            <p className="text-muted-foreground px-1 py-4 tracking-[-0.32px] lg:px-8">
              {item.description}
            </p>
            <div className="border-t pt-4">
              <Image
                src={item.image}
                alt={item.title}
                width={416}
                height={233}
                className="h-auto w-full rounded-none shadow-md lg:shadow-lg dark:invert"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdaptiveList;
