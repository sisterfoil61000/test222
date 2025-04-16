import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  PricingDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'test223';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/products',
      label: 'products',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },

    {
      href: '/pricing',
      label: 'pricing',
    },
  ];

  const pricing_features = {
    standard: {
      features: [
        'Basic Inventory Management',
        'Order Tracking',
        'Customer Database Access',
      ],
      limited_features: ['Limited Customer Support', 'Basic Analytics'],
    },
    premium: {
      features: [
        'Advanced Inventory Management',
        'Comprehensive Order Processing',
        'Enhanced Customer Database',
      ],
      also_included: [
        'Priority Customer Support',
        'Detailed Analytics',
        'Monthly Webinars',
      ],
    },
    business: {
      features: [
        'Full Inventory Control',
        'Complete Order Management',
        'Extensive Customer Database',
        'Customizable Analytics',
        'Dedicated Account Manager',
      ],
    },
  };

  const description = {
    standard:
      'Ideal for individual coffee enthusiasts or small home-based businesses looking to manage their coffee inventory and orders efficiently.',
    premium:
      'Perfect for small coffee shops or startups seeking to expand their offerings and enhance customer engagement with advanced features.',
    business:
      'Designed for large enterprises or multi-location coffee chains that require comprehensive management tools and personalized support to optimize their business operations.',
  };

  const faqs = [
    {
      question: 'What payment methods are accepted?',
      answer:
        'We accept all major credit cards, PayPal, and bank transfers. You can choose your preferred payment method during the checkout process.',
    },
    {
      question: 'Can I change my plan later?',
      answer:
        'Yes, you can upgrade or downgrade your plan at any time through your account settings. Changes will take effect in the next billing cycle.',
    },
    {
      question: 'Is there a discount for annual subscriptions?',
      answer:
        'Yes, we offer a 10% discount for annual subscriptions. This option can be selected during the sign-up process.',
    },
    {
      question: 'What happens if I cancel my subscription?',
      answer:
        'If you cancel your subscription, you will retain access to your current plan until the end of the billing period. No further charges will be made.',
    },
    {
      question: 'Are there any hidden fees?',
      answer:
        'No, there are no hidden fees. The price you see is the price you pay, with no additional charges.',
    },
    {
      question: 'How does the free trial work?',
      answer:
        'Our free trial allows you to explore all features of ${projectName} for 14 days without any commitment. You can choose a plan at the end of the trial.',
    },
    {
      question: 'Is customer support included in all plans?',
      answer:
        'Yes, customer support is included in all plans, but the level of support varies. Premium and Business plans offer priority support.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Flexible Pricing Plans for Every Need`}</title>
        <meta
          name='description'
          content={`Explore our competitive pricing plans designed to suit businesses of all sizes. Choose the perfect plan to enhance your coffee business operations with ${projectName}.`}
        />
      </Head>
      <WebSiteHeader projectName={'test223'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'test223'}
          image={['Pricing plans on a screen']}
          mainText={`Choose Your Perfect ${projectName} Plan`}
          subTitle={`Discover flexible pricing options tailored to meet the needs of your coffee business. Whether you're a startup or an enterprise, ${projectName} has a plan for you.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`View Plans`}
        />

        <PricingSection
          projectName={'test223'}
          withBg={1}
          features={pricing_features}
          description={description}
        />

        <FaqSection
          projectName={'test223'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Pricing FAQs for ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'test223'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
