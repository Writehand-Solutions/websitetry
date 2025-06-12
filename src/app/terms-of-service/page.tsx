'use client';

import Terms from './terms.mdx';

const Page = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 lg:py-32">
      <div className="space-y-6 pb-20 text-center lg:pb-32">
        <h1 className="text-[2.5rem] font-semibold tracking-[-1.6px] md:text-5xl lg:text-7xl lg:tracking-[-4.32px]">
          Terms of Service
        </h1>
        <p className="text-muted-foreground-subtle tracking-[-0.32px]">
          Effective date: March 1, 2025
        </p>
      </div>

      <article className="prose dark:prose-invert text-muted-foreground mx-auto">
        <h4>
          PLEASE READ THESE TERMS OF USE CAREFULLY. ONCE ACCEPTED, THESE TERMS
          OF USE, TOGETHER WITH OUR PRIVACY POLICY, CCPA DECLARATION AND
          AFFILIATE AGREEMENT (COLLECTIVELY, THE “TERMS”), BECOME A BINDING
          LEGAL COMMITMENT BETWEEN YOU (OR TPLEASE READ THESE TERMS OF USE
          CAREFULLY. ONCE ACCEPTED, THESE TERMS OF USE, IN COMBINATION WITH OUR
          PRIVACY POLICY, CCPA DECLARATION AND AFFILIATE AGREEMENT (COLLECTIVELY
          THE “TERMS”), BECOME A BINDING LEGAL COMMITMENT BETWEEN YOU (OR THE
          BUSINESS ENTITY THAT YOU REPRESENT) AND PRODUCTISED LIMITED AND ITS
          RESPECTIVE OFFICERS, DIRECTORS, SUCCESSORS AND ASSIGNS (HEREINAFTER
          REFERRED TO AS “COMPANY,” “WE” “OUR” OR “US”) AND WILL GOVERN YOUR
          ACCESS TO AND USE OF THE SITE, AND ALL OTHER INTERACTIONS WITH
          PRODUCTISED RELATED TO THE SITE AND APPLICATION.{' '}
        </h4>
        <Terms />
      </article>
    </div>
  );
};

export default Page;
