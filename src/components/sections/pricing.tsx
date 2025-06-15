'use client';

import React from 'react';

import {
  Rocket,
  Briefcase,
  Building,
  BadgeDollarSign,
  BadgeCheck,
  LucideIcon,
} from 'lucide-react';

import SectionHeader from '../section-header';
import { Button } from '../ui/button';

interface PricingPlan {
  icon: LucideIcon;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  market: string;
}

interface ComparisonFeature {
  name: string;
  basic: string | boolean;
  business: string | boolean;
  enterprise: string | boolean;
}

interface FeatureSection {
  category: string;
  features: ComparisonFeature[];
}

const pricingPlans: PricingPlan[] = [
  {
    icon: Rocket,
    name: 'Starter plan',
    price: {
      monthly: 29,
      yearly: 279,
    },
    features: [
      '1 User',
      '5 Products',
      '1 Workspace',
      'Unlimited Product Submissions',
      '1,000 Starter Credits',
    ],
    market: 'Solo pros & freelancers',
  },
  {
    icon: Briefcase,
    name: 'Pro plan',
    price: {
      monthly: 59,
      yearly: 566,
    },
    features: [
      '3 Users',
      '15 Products',
      '3 Workspaces',
      'Unlimited Product Submissions',
      '1,500 Starter Credits',
      'Custom Domain & Branding',
    ],
    market: 'Small teams & growing knowledge workers',
  },
  {
    icon: Building,
    name: 'Pro+ plan',
    price: {
      monthly: 99,
      yearly: 950,
    },
    features: [
      '5 Users',
      '20 Products',
      '5 Workspaces',
      'Unlimited Product Submissions',
      '2,000 Starter Credits',
      'Custom Domain & Branding',
    ],
    market: 'Agencies & consulting teams',
  },
];

const comparisonFeatures: FeatureSection[] = [
  {
    category: 'AI',
    features: [
      {
        name: 'AI Credits',
        basic: '1000',
        business: '1500',
        enterprise: '2000',
      },
      {
        name: 'AI Product Builder Credits',
        basic: '500',
        business: '750',
        enterprise: '1000',
      },
      {
        name: 'AI Conversations',
        basic: '250',
        business: '500',
        enterprise: '750',
      },
      {
        name: 'API Key Option',
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: 'Custom Domains and Branding',
        basic: true,
        business: true,
        enterprise: true,
      },
    ],
  },
  {
    category: 'AI Widgets (Coming soon)',
    features: [
      {
        name: 'Conversations',
        basic: '250',
        business: '500',
        enterprise: '750',
      },
      {
        name: 'AI Widgets',
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: 'Custom Domains & Branding',
        basic: true,
        business: true,
        enterprise: true,
      },
    ],
  },
  {
    category: 'AI Forms & Landing Pages',
    features: [
      {
        name: 'Unlimited Landing Pages',
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: 'Unlimited Forms',
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: 'Page Builder Templates',
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: 'Webhooks',
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: 'Integrations (Soon)',
        basic: false,
        business: true,
        enterprise: true,
      },
    ],
  },
];

const Pricing = ({ withBorders = true }: { withBorders?: boolean }) => {
  const [isMonthly, setIsMonthly] = React.useState(true);

  return (
    <section className="">
      <div className={withBorders ? 'border-b' : ''}>
        <SectionHeader
          className={
            withBorders ? '' : 'border-none lg:items-center lg:text-center'
          }
          iconTitle="Affordable Pricing"
          title="Deliver more value"
          icon={BadgeDollarSign}
          description="Over-deliver on value, and reap the results. Pick a plan to get started."
        />
      </div>

      <div className="container mt-10 lg:mt-14">
        <section className="grid border max-lg:divide-y lg:grid-cols-3 lg:divide-x">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              index={index}
              isMonthly={isMonthly}
            />
          ))}
        </section>

        {!withBorders && (
          <section className="py-14 md:py-20 lg:py-24">
            <div className="flex justify-center">
              <div className="inline-flex gap-[2px] rounded-md border p-[2px]">
                <Button
                  variant={isMonthly ? 'default' : 'outline'}
                  onClick={() => setIsMonthly(true)}
                  className="transition-colors"
                >
                  Monthly
                </Button>
                <Button
                  variant={!isMonthly ? 'default' : 'outline'}
                  onClick={() => setIsMonthly(false)}
                  className="transition-colors"
                >
                  Yearly
                </Button>
              </div>
            </div>
            <div className="mt-12 overflow-x-auto">
              <PlanHeaders isMonthly={isMonthly} />
              <FeatureSections />
            </div>
          </section>
        )}
      </div>

      {withBorders && (
        <div className="mt-12 h-8 w-full border-y md:h-12 lg:h-[112px]">
          <div className="container h-full w-full border-x"></div>
        </div>
      )}
    </section>
  );
};

const PricingCard = ({
  plan,
  index,
  isMonthly,
}: {
  plan: PricingPlan;
  index: number;
  isMonthly: boolean;
}) => {
  const Icon = plan.icon;
  return (
    <div className="flex flex-col justify-between p-6">
      <div className="space-y-2 border-b pb-6">
        <div className="text-muted-foreground flex items-center gap-2.5">
          <Icon className="size-4" />
          <h3 className="text-xl tracking-[-0.8px]">{plan.name}</h3>
        </div>

        <PriceDisplay plan={plan} isMonthly={isMonthly} />
      </div>

      <FeatureList features={plan.features} />

      <Button
        variant={index === 1 ? 'productised' : 'secondary'}
        className="mt-12"
      >
        Get started
      </Button>
    </div>
  );
};

const PriceDisplay = ({
  plan,
  isMonthly,
}: {
  plan: PricingPlan;
  isMonthly: boolean;
}) => (
  <>
    <div className="flex items-baseline font-medium">
      <span className="text-[3.5rem] leading-[120%] tracking-[-3.92px]">
        ${isMonthly ? plan.price.monthly : plan.price.yearly}
      </span>
      <span className="text-muted-foreground-subtle text-2xl tracking-[-0.96px]">
        {isMonthly ? '/mo' : '/yr'}
      </span>
    </div>
    {/* <p className="text-muted-foreground">
      {isMonthly
        ? `or $${plan.price.yearly} yearly`
        : `or $${plan.price.monthly}/mo monthly`}
    </p> */}
    <p className="text-muted-foreground">{plan.market}</p>
  </>
);

const FeatureList = ({ features }: { features: string[] }) => (
  <div className="pt-6">
    <h4 className="text-muted-foreground-subtle">Features Included</h4>
    <ul className="mt-4 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-4">
          <BadgeCheck className="text-muted-foreground size-6" />
          <span className="text-muted-foreground tracking-[-0.32px]">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const PlanHeaders = ({ isMonthly }: { isMonthly: boolean }) => (
  <div className="grid grid-cols-4">
    <div className="col-span-1 max-lg:hidden"></div>
    <div className="col-span-4 grid gap-4 border-t max-lg:divide-y max-lg:border lg:col-span-3 lg:grid-cols-3 lg:divide-x">
      {pricingPlans.map((plan, index) => (
        <div key={index} className="flex flex-col p-6">
          <div className="space-y-2 pb-6">
            <div className="text-muted-foreground flex items-center gap-2.5">
              <plan.icon className="size-4" />
              <h3 className="text-xl tracking-[-0.8px]">{plan.name}</h3>
            </div>
            <PriceDisplay plan={plan} isMonthly={isMonthly} />
          </div>
          <Button
            variant={index === 1 ? 'productised' : 'default'}
            className="mt-auto"
          >
            Get started
          </Button>
        </div>
      ))}
    </div>
  </div>
);

const FeatureSections = () => (
  <>
    {comparisonFeatures.map((section, sectionIndex) => (
      <div
        key={sectionIndex}
        className={`border-b first:border-t ${sectionIndex === 0 ? 'border-t' : ''}`}
      >
        <div className="py-4">
          <h3 className="text-lg tracking-[-0.36px]">{section.category}</h3>
        </div>
        {section.features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="text-muted-foreground grid border-t tracking-[-0.32px] max-lg:grid-rows-[auto_1fr] lg:grid-cols-4"
          >
            <span className="inline-flex items-center py-4">
              {feature.name}
            </span>
            <div className="col-span-3 grid grid-cols-3 divide-x text-center max-lg:border-t">
              {[feature.basic, feature.business, feature.enterprise].map(
                (value, i) => (
                  <FeatureValue key={i} value={value} />
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    ))}
  </>
);

const FeatureValue = ({ value }: { value: string | boolean }) => (
  <div className={`flex items-center justify-center py-4`}>
    {typeof value === 'boolean' ? (
      value ? (
        <BadgeCheck className="text-muted-foreground mx-auto size-5" />
      ) : null
    ) : (
      <span className="text-muted-foreground-subtle font-semibold">
        {value}
      </span>
    )}
  </div>
);

export default Pricing;
