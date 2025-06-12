import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Users } from 'lucide-react';

import SectionHeader from '../section-header';

const teamMembers = [
  {
    name: 'Sam Sutherland, MBA',
    role: 'CEO & Co-Founder',
    image: '/images/team/sam_pp.png',
    bio: 'AI Productisation consultant, and chief overthinker at Productised.ai.',
    social: {
      email: 'sam@productised.ai',
    },
  },
  {
    name: 'Tinara Nathania',
    role: 'CTO & Co-Founder',
    image: '/images/team/tinara_pp.png',
    bio: 'Leading the development and Innovation of the Productised platform.',
    social: {
      email: 'tinara@productised.ai',
    },
  },

  {
    name: 'Will Flannery',
    role: 'COO & Co-Founder',
    image: '/images/team/will_pp.png',
    bio: 'Building scalable foundations and systems for productised.ai.',
    social: {
      email: 'will@productised.ai',
    },
  },
];

const Team = () => {
  return (
    <section className="">
      <SectionHeader
        iconTitle="Leadership Team"
        title="The Minds Behind the Mission"
        icon={Users}
        description="Our dedicated leadership team passionate about shaping the future of AI Productisation."
        className={'border-none'}
      />

      <div className="container mt-10 grid gap-x-16 gap-y-20 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 xl:gap-x-20">
        {teamMembers.map((member) => (
          <div key={member.name} className="group flex flex-col">
            <Image
              src={member.image}
              alt={member.name}
              width={120}
              height={120}
              className="rounded-full object-contain"
            />
            <div className="mt-8 flex flex-col tracking-[-0.32px]">
              <h3 className="text-xl font-medium">{member.name}</h3>
              <p className="text-muted-foreground-subtle mt-1 text-base">
                {member.role}
              </p>
              <p className="text-muted-foreground mt-6 text-base leading-relaxed tracking-[-0.36px]">
                {member.bio}
              </p>
              <div className="mt-8 flex gap-3">
                {member.social.email && (
                  <Link
                    href={member.social.email}
                    className="rounded-full transition-colors"
                  >
                    {member.social.email}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
