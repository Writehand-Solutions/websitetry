import React from 'react';

import Faq from '@/components/sections/faq';

export const metadata = {
  title: 'FAQ | Productised.ai Answers on Credits, API Keys & Security',
  description: `Find quick answers about AI credits, API key
usage, integrations, plan limits, and data security—everything you
need to know before launching your first AI product with
Productised.ai.`,
};

const FaqPage = () => {
  return (
    <div className="py-14 md:py-20 lg:py-24">
      <Faq withBorders={false} />
    </div>
  );
};

export default FaqPage;
