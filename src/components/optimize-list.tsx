'use client';
import React from 'react';

import Image from 'next/image';

import { CircleHelp, Volume2, Lightbulb } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const OPTIMIZE_DATA = [
  {
    title: 'Custom Styling',
    description:
      'Apply your own fonts, colours, domains, and logos across every product and page.',
    icon: CircleHelp,
    image: '/images/homepage/web-editor.png',
  },
  {
    title: 'Drag & Drop Simplicity',
    description:
      'Assemble forms, quizzes, and output pages with intuitive blocks—no coding required.',
    icon: Volume2,
    image: '/images/homepage/workflow-builder-hero.svg',
  },
  {
    title: 'Easy Deployment',
    description:
      'Share with you custom domain, or embed via Iframe. *New: Template sharing now added!',
    icon: Lightbulb,
    image: '/images/homepage/share-product.png',
  },
];

const OptimizeList = () => {
  return (
    <Tabs defaultValue={OPTIMIZE_DATA[0].title} className="">
      <TabsList className="h-auto w-full bg-transparent p-0 max-lg:flex-col max-lg:divide-y lg:grid lg:grid-cols-3 lg:divide-x">
        {OPTIMIZE_DATA.map((item, index) => (
          <TabsTrigger
            key={item.title}
            value={item.title}
            className="group relative isolate inline-block h-full w-full rounded-none px-1 py-5 text-start whitespace-normal data-[state=active]:shadow-none max-lg:border-x last:max-lg:!border-b lg:border-b lg:px-8"
          >
            <div
              className={`absolute bottom-[-1px] left-0 h-[1px] w-0 bg-gradient-to-r from-blue-600 via-sky-300 to-transparent transition-all duration-300 group-data-[state=active]:w-1/2`}
            />
            <Accessory className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
            <Accessory className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
            {index === OPTIMIZE_DATA.length - 1 && (
              <>
                <Accessory className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2" />
                <Accessory className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2" />
              </>
            )}
            <div className="flex items-center gap-2">
              <div className="relative size-6">
                <div
                  className={`to-border absolute inset-0 -rotate-45 rounded-full bg-gradient-to-l from-blue-600 via-sky-300 to-50% transition-all duration-1000 group-data-[state=inactive]:opacity-0`}
                />
                <div className="absolute inset-[0.75px] rounded-full bg-gray-100"></div>
                <div className="bg-border absolute inset-[1.25px] grid place-items-center rounded-full">
                  <item.icon size={14} />
                </div>
              </div>
              <h3 className="text-2xl tracking-[-0.36px]">{item.title}</h3>
            </div>
            <p className="text-muted-foreground mt-2 text-lg tracking-[-0.32px]">
              {item.description}
            </p>
          </TabsTrigger>
        ))}
      </TabsList>

      {OPTIMIZE_DATA.map((item) => (
        <TabsContent key={item.title} value={item.title} className="mt-0">
          <div className="flex flex-1 flex-col max-lg:border-x">
            <Image
              src={item.image}
              alt={item.title}
              width={1200}
              height={700}
              className="p-3 h-auto w-full object-contain shadow-md lg:shadow-lg dark:invert"
            />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default OptimizeList;

const Accessory = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(`size-2 rounded-[1px] bg-red-400`, className)}
      style={{
        background:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 51.04%, rgba(0, 0, 0, 0.06) 100%), hsl(var(--background))',
        boxShadow:
          '0px 0px 0px 0.1px rgba(0, 0, 0, 0.05), 0px 0.5px 1px 0px rgba(0, 0, 0, 0.25)',
      }}
    ></div>
  );
};
