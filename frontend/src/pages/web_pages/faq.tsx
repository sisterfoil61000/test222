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
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

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

  const faqs = [
    {
      question: 'What is the main purpose of ${projectName}?',
      answer:
        '${projectName} is designed to streamline the management of your coffee business, offering tools for inventory, orders, customer insights, and more.',
    },
    {
      question: 'How do I sign up for ${projectName}?',
      answer:
        'You can sign up by visiting our website and selecting the plan that best suits your needs. Follow the prompts to create your account.',
    },
    {
      question: 'Are there any setup fees?',
      answer:
        'No, there are no setup fees. You only pay for the subscription plan you choose, with no hidden costs.',
    },
    {
      question: 'Can I integrate ${projectName} with other tools?',
      answer:
        'Yes, ${projectName} supports integration with various third-party tools to enhance your business operations. Check our integrations page for more details.',
    },
    {
      question: 'What support options are available?',
      answer:
        'We offer 24/7 support via email and live chat. Our team is ready to assist you with any questions or issues you may have.',
    },
    {
      question: 'Is my data secure with ${projectName}?',
      answer:
        'Absolutely. We use advanced encryption and security protocols to ensure your data is safe and protected at all times.',
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer:
        'Yes, you can cancel your subscription at any time through your account settings. Your access will continue until the end of the billing cycle.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about our coffee business application. Learn more about features, pricing, and how to get started.`}
        />
      </Head>
      <WebSiteHeader projectName={'test223'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'test223'}
          image={['Question mark with coffee cup']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. From features to pricing, we've got you covered.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Learn More`}
        />

        <FaqSection
          projectName={'test223'}
          design={FaqDesigns.TWO_COLUMN || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'test223'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
