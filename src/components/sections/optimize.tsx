import React from 'react';

import { Eye } from 'lucide-react';

import OptimizeList from '../optimize-list';
import SectionHeader from '../section-header';

const Optimize = () => {
  return (
    <section id="your-brand" className="">
      <div className="border-b">
        <SectionHeader
          iconTitle="Future-Proof your brand"
          title="Your Product, Your Brand"
          icon={Eye}
          description={
            'Keep every pixel on-brand with custom styling, drag-and-drop layouts, and smart templates.'
          }
        />
      </div>

      <div className="container border-x lg:!px-0">
        <OptimizeList />
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export default Optimize;
