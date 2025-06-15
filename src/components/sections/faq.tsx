import React from 'react';

import { MessageCircleQuestion } from 'lucide-react';

import SectionHeader from '../section-header';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: 'Do I need to know how to code?',
    answer:
      'No. Productised.ai is 100 % no-code—you drag, drop, and type. The platform handles the AI logic behind the scenes.',
  },
  {
    question:
      'How is Productised.ai different from a normal form, funnel or chatbot?',
    answer: `1. It turns answers into instant value.
    
Forms and bots just stash information. Productised.ai runs the answers through AI and returns a personalised action plan on a fully-branded page—right away.

2. It sorts your visitors for you.

The same AI pin-points who is ready to buy, who needs nurturing, and what each person cares about most, so you can follow up with the right message instead of a generic blast.

3. The tool itself becomes an offer.

Because the AI output is useful on its own, you can place it behind an email wall or even charge for access.`,
  },
  {
    question: 'What is an "AI credit"?',
    answer: `Think of an AI credit as a token pack. About 750 tokens (the text the AI reads and writes) equals one credit. A short reply usually costs one credit; big, detailed replies may use two or more.

Credit Type | What it powers | Starter Example

AI Credits | Regular AI workflows (your questions + AI answers) | 1,000 starter credits
AI Product Builder Credits | The special AI steps inside the drag-and-drop Builder | 500 starter credits
AI Conversations | Chat-style widgets you embed for customers | 250 starter chats

Each higher plan bumps these numbers up.`,
  },
  {
    question: 'Can I buy more credits?',
    answer:
      'Yes. You can add credits any time in your dashboard or move to a bigger plan for a larger starter bundle.',
  },
  {
    question: 'What does "unlimited AI usage with my own API key" mean?',
    answer: `If you paste in your personal OpenAI key, we stop counting or charging Productised credits. You pay OpenAI directly, so you can run as many prompts as your OpenAI account allows.`,
  },
  {
    question: 'Do I still have limits when I use my own key?',
    answer: `A few small ones:
    
1. OpenAI's speed limits (how many calls per minute) now apply to you.
2. Plan features—like how many live products or workspaces you get—stay the same.
3. Fair-use rules—we block spam or unsafe content to protect everyone.

We never store your raw key; it's encrypted and only used for your prompts.`,
  },
];

const Faq = ({ withBorders = true }: { withBorders?: boolean }) => {
  return (
    <section className="">
      <div className="">
        <SectionHeader
          className={
            withBorders
              ? ''
              : '!max-w-[480px] !border-none lg:items-center lg:text-center'
          }
          iconTitle="FAQ"
          title="Everything You Need to Know"
          icon={MessageCircleQuestion}
          description={
            <>
              Looking for quick answers? Check out our{' '}
              <span className="underline">Knowledgebase</span>.
            </>
          }
        />
      </div>

      <div className={withBorders ? 'container border-x' : 'container'}>
        <div className="mx-auto max-w-3xl pt-8 pb-4 md:pb-8 lg:pt-[3.75rem] lg:pb-[50px]">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="text-primary rounded-[7px] border px-6 data-[state=open]:pb-2"
              >
                <AccordionTrigger className="py-5 text-base tracking-[-0.32px]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base tracking-[-0.32px]">
                  <div className="space-y-4">
                    {item.answer.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      {withBorders && (
        <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
          <div className="container h-full w-full border-x"></div>
        </div>
      )}
    </section>
  );
};

export default Faq;
