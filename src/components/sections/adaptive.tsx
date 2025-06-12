import React from 'react';
import { Shapes } from 'lucide-react';
import AdaptiveList from '../adaptive-list';
import { LucideIcon } from 'lucide-react';
import TitleTag from '@/components/title-tag';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Adaptive = () => {
  return (
    <section id="personalisation" className="">
      <div className="border-b">
        <SectionHeader
          iconTitle="Hyper Personalisation"
          title="Adaptive, Intelligent Experiences"
          icon={Shapes}
          description={
            'Let AI personalise every journey. From input to insight, your product evolves in real time.'
          }
        />
      </div>

      <div className="container border-x lg:!px-0">
        <AdaptiveList />
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export default Adaptive;

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
            src="/images/homepage/hexagon_adaptive.svg"
            alt="logo"
            width={150}
            height={60}
            className="dark:invert"
          />
        </div>
      </div>
    </div>
  );
};
