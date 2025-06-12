import React from 'react';

import Image from 'next/image';

import {
  LayoutList,
  LocateFixed,
  Users,
  Cpu,
  Rocket,
  LucideIcon,
} from 'lucide-react';

import DiagonalPattern from '../diagonal-pattern';
import TitleTag from '../title-tag';
import { cn } from '@/lib/utils';

const TIMELINE_ITEMS = [
  {
    title: 'Pick a Blueprint',
    description:
      'Browse expert-designed AI Product templates or start from a blank canvas. Choose the structure that fits your workflow and skip the heavy lifting.',
    icon: LayoutList,
    image: {
      src: '/images/homepage/blueprint_launch.svg',
      alt: 'Get Organized',
    },
  },
  {
    title: 'Add Questions & Data, Then Connect to AI',
    description:
      'Write the client-facing questions, then upload any supporting materials (PDFs, spreadsheets, links). Every input helps the AI reflect your unique expertise.',
    icon: LocateFixed,
    image: {
      src: '/images/homepage/openai_launch.svg',
      alt: 'Track Progress',
    },
    reverse: true,
  },
  {
    title: 'Design, Brand & Invite Team',
    description:
      'Design your landing and AI Output pages, add your logo, fonts, and colours, and invite your team and clients to join in on the action!',
    icon: Users,
    image: {
      src: '/images/homepage/members_launch.svg',
      alt: 'Collaborate Seamlessly',
    },
  },
  {
    title: 'Publish, Share & Track',
    description:
      'Launch on a custom sub-domain (e.g., audit.yourbrand.com), share the link anywhere, and watch live analytics to refine and convert high-value leads.',
    icon: Cpu,
    image: {
      src: '/images/homepage/usage_launch.svg',
      alt: 'Integrate Seamlessly',
    },
    reverse: true,
  },
];

const Accelerate = () => {
  return (
    <section id="create-product" className="">
      <div className="border-b">
        <SectionHeader
          iconTitle="Launch"
          title="From Idea to Live AI Product"
          icon={Rocket}
          description={
            'Go from blank canvas to fully branded AI experience in four quick steps—pick a blueprint, add questions and data, brand & automate, then publish and track.'
          }
        />
      </div>

      <div className="container border-x pb-40 lg:pt-20 [&>*:last-child]:pb-20 [&>div>div:first-child]:!pt-20">
        {TIMELINE_ITEMS.map((item, index) => (
          <TimelineItem
            key={index}
            index={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            image={item.image}
            reverse={item.reverse}
          />
        ))}
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export default Accelerate;

interface TimelineItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: {
    src: string;
    alt: string;
  };
  reverse?: boolean;
  index: number;
}

const TimelineItem = ({
  title,
  description,
  icon: Icon,
  image,
  reverse,
  index,
}: TimelineItemProps) => (
  <div className={`relative flex`}>
    <div
      className={`flex w-full justify-center px-1 py-10 text-end md:gap-6 lg:gap-10 ${reverse ? 'lg:flex-row-reverse lg:text-start' : ''} `}
    >
      <div className="flex-1 max-lg:hidden">
        <h3 className="text-2xl tracking-[-0.96px]">{title}</h3>
        <p
          className={`text-muted-foreground mt-2.5 max-w-[300px] tracking-[-0.32px] text-balance ${reverse ? '' : 'ml-auto'}`}
        >
          {description}
        </p>
      </div>
      <div
        className={`bg-background z-[-1] size-fit -translate-y-5 p-4 max-lg:-translate-x-4`}
      >
        <div className="bg-card rounded-[10px] border p-[5px] shadow-md">
          <div className="bg-muted size-fit rounded-md border p-1">
            <Icon className="size-4 shrink-0" />
          </div>
        </div>
      </div>
      <div className="flex-1 max-lg:-translate-x-4">
        <div className={`text-start lg:pointer-events-none lg:hidden`}>
          <h3 className="text-2xl tracking-[-0.96px]">{title}</h3>
          <p className="text-muted-foreground mt-2.5 mb-10 max-w-[300px] tracking-[-0.32px] text-balance">
            {description}
          </p>
        </div>
        <div className="flex items-start justify-start">
          <div className={` ${reverse ? 'lg:ml-auto' : ''}`}>
            <div className="px-6 lg:px-10">
              <DiagonalPattern className="h-6 lg:h-10" />
            </div>
            <div className="relative grid grid-cols-[auto_1fr_auto] items-stretch">
              <DiagonalPattern className="h-full w-6 lg:w-10" />
              <Image
                src={image.src}
                width={400}
                height={500}
                alt={image.alt}
                className="mt-2 rounded-md object-contain shadow-md lg:rounded-xl lg:shadow-lg dark:invert"
              />
              <DiagonalPattern className="w-6 lg:w-10" />
            </div>
            <div className="px-6 lg:px-10">
              <DiagonalPattern className="h-6 lg:h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className={`absolute z-[-2] h-full w-[3px] translate-x-5 rounded-full lg:left-1/2 lg:-translate-x-1/2 ${index === TIMELINE_ITEMS.length - 1 ? 'from-foreground/10 via-foreground/10 bg-gradient-to-b to-transparent' : 'bg-foreground/10'}`}
    >
      {index == 0 && (
        <div
          className={`to-foreground/10 h-4 w-[3px] -translate-y-full bg-gradient-to-b from-transparent`}
        ></div>
      )}
    </div>
  </div>
);

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon: LucideIcon;
  iconTitle: string;
  description: React.ReactNode;
}

const SectionHeader = ({
  className,
  title,
  icon: Icon,
  iconTitle,
  description,
}: SectionHeaderProps) => {
  return (
    <div>
      <div
        className={cn(
          'container flex flex-col items-center gap-6 border-x py-4 max-lg:border-x lg:flex-row lg:py-8',
          className,
        )}
      >
        {/* Left side - Title and Description */}
        <div className="flex flex-1 flex-col gap-6">
          <TitleTag title={iconTitle} icon={Icon} />
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-[600px] tracking-[-0.32px]">
            {description}
          </p>
        </div>

        {/* Right side - Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/homepage/hexagon_launch.svg"
            alt="logo"
            width={500}
            height={60}
            className="dark:invert"
          />
        </div>
      </div>
    </div>
  );
};
