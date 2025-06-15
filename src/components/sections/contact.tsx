'use client';

import React, { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Mail, Phone, Building, ChevronRight, LucideIcon } from 'lucide-react';

import SectionHeader from '../section-header';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description:
      "Have a question or need help? Drop us an email, and we'll respond within 24 hours.",
    contact: 'hello@productised.ai',
  },
  {
    icon: Phone,
    title: 'Phone',
    description:
      'Prefer to chat? Give us on live chat Monday–Friday, 9 AM–5 PM (PST).',
    contact: '',
  },
  {
    icon: Building,
    title: 'Office',
    description:
      'Stop by our office @ Level 1, 130 St Georges Bay Road, Parnell, Auckland',
    contact: (
      <Link
        href="https://maps.app.goo.gl/bAyzfRJqA7pTAMr27"
        className="text-foreground inline-flex items-center gap-1 text-sm font-medium hover:underline"
      >
        Get Directions
        <ChevronRight className="size-4" />
      </Link>
    ),
  },
];

const formFields = [
  {
    id: 'name',
    label: 'Name',
    type: 'text' as const,
    component: Input,
    required: true,
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email' as const,
    component: Input,
    required: true,
  },
  {
    id: 'message',
    label: 'Message',
    component: Textarea,
    required: true,
    props: {
      placeholder: 'Type Your Message...',
      rows: 4,
    },
  },
];

interface SubmitStatus {
  type: 'success' | 'error' | '';
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: "Message sent successfully! We'll get back to you soon.",
        });
        form.reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please try again.',
      });
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-14 md:py-20 lg:py-24">
      <SectionHeader
        icon={Mail}
        iconTitle="Reach Out"
        title="Get in Touch"
        description="We're here to help—reach out with any questions or feedback."
        className="border-none !pb-0"
      />

      <div className="container flex justify-between gap-10 py-12 max-md:flex-col">
        <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-6">
          {/* Status Messages */}
          {submitStatus.type === 'success' && (
            <div className="rounded-md border border-green-200 bg-green-50 p-4 text-green-800">
              {submitStatus.message}
            </div>
          )}
          {submitStatus.type === 'error' && (
            <div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-800">
              {submitStatus.message}
            </div>
          )}

          {formFields.map((field) => (
            <div key={field.id} className="space-y-2">
              <Label className="text-sm font-normal" htmlFor={field.id}>
                {field.label}
                {field.required && ' *'}
              </Label>
              <field.component
                id={field.id}
                name={field.id}
                type={field.type}
                required={field.required}
                className="border-border bg-card"
                {...field.props}
              />
            </div>
          ))}

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" name="terms" required />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="terms"
                className="text-sm font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I accept the{' '}
                <Link href="/terms-of-service" className="underline">
                  Terms
                </Link>
              </Label>
            </div>
          </div>

          <Button type="submit" variant="productised" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </Button>
        </form>

        <div className="grid flex-1">
          <div className="grid flex-1 gap-6 self-start lg:grid-cols-2">
            {contactMethods.map((method, index) => (
              <ContactMethod key={index} {...method} />
            ))}
          </div>
          <Image
            src="/images/homepage/hexagon_contact.svg"
            alt="logo"
            width={200}
            height={60}
            className="mt-4 dark:invert"
          />
        </div>
      </div>
    </section>
  );
};

interface ContactMethodProps {
  icon: LucideIcon;
  title: string;
  description: string;
  contact: React.ReactNode;
}

const ContactMethod = ({
  icon: Icon,
  title,
  description,
  contact,
}: ContactMethodProps) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <Icon className="size-5" />
      <h3 className="text-2xl tracking-[-0.96px]">{title}</h3>
    </div>
    <div className="space-y-2 tracking-[-0.32px]">
      <p className="text-muted-foreground text-sm">{description}</p>
      <div className="text-muted-foreground text-sm">{contact}</div>
    </div>
  </div>
);

export default Contact;
