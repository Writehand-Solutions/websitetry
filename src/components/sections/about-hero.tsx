import React from 'react';

import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="py-14 md:py-20 lg:py-24">
      <div className="lg:border-y">
        <div className="container flex flex-col max-lg:divide-y lg:flex-row">
          {/* Left side with mission text */}
          <div className="flex-[2] lg:border-l">
            <div className="lg:border-b lg:pr-8 lg:pb-5 lg:pl-2">
              <h1 className="mx-auto text-[2.5rem] leading-[1.2] tracking-[-1.6px] md:text-[4rem] md:!leading-[1.15] md:tracking-[-4.32px] lg:text-7xl">
                Empowering Experts with AI Productisation
              </h1>
              <p className="text-muted-foreground mt-6 tracking-[-0.32px]">
                Our mission is to put powerful, no-code AI tools in the hands of
                every expert, coach, and agency—so they can turn knowledge into
                scalable products and help more people.
              </p>
            </div>
            <div className="relative mt-10 aspect-[3/3.25] overflow-hidden md:mt-14 lg:mr-8 lg:mb-10 lg:ml-2">
              <Image
                src="/images/about/groupwork.png"
                alt="About hero image"
                fill
                className="object-cover"
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
              />
            </div>
          </div>

          {/* Right side with images */}
          <div className="flex-[1] lg:border-x lg:px-8">
            <div className="flex justify-center gap-6 lg:gap-8">
              <div className="relative mt-20 aspect-[1/1.1] h-[200px] overflow-hidden lg:mt-32 lg:h-[296px]">
                <Image
                  src="/images/about/mentoring.png"
                  alt="Team meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative mt-10 aspect-[1/1.1] h-[200px] overflow-hidden lg:mt-16 lg:h-[296px]">
                <Image
                  src="/images/about/discuss.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-muted-foreground mt-10 px-4 tracking-[-0.32px] md:mt-14">
              We believe the future of work is expert-led and AI-powered.
              Productised.ai exists to bridge that gap, giving professionals the
              super-powers they need to deliver personalised value at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
