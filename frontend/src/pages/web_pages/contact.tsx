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
  ContactFormDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'test222';

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
      question: 'What features does ${projectName} offer?',
      answer:
        '${projectName} provides a comprehensive toolkit for managing your coffee business, including inventory management, order processing, customer insights, and payment handling.',
    },
    {
      question: 'How can I get started with ${projectName}?',
      answer:
        'To get started, simply sign up on our website and choose a plan that suits your needs. Our intuitive interface will guide you through the setup process.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, we offer a 14-day free trial for new users to explore all the features of ${projectName} without any commitment.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer:
        'Absolutely! You can upgrade or downgrade your plan at any time through your account settings. Our support team is also available to assist you.',
    },
    {
      question: 'How does ${projectName} ensure data security?',
      answer:
        'We prioritize your data security by using advanced encryption methods and regular security audits to protect your information.',
    },
    {
      question: 'What kind of support does ${projectName} offer?',
      answer:
        'We offer 24/7 customer support via email and live chat. Our team is dedicated to helping you with any questions or issues you may encounter.',
    },
    {
      question: 'Can I customize the features of ${projectName}?',
      answer:
        'Yes, ${projectName} is designed to be flexible. You can customize various features to suit your business needs and preferences.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Get in Touch with Us`}</title>
        <meta
          name='description'
          content={`Reach out to us for any inquiries, support, or feedback. Our team is here to assist you with all your coffee business needs.`}
        />
      </Head>
      <WebSiteHeader projectName={'test222'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'test222'}
          image={['Customer service representative smiling']}
          mainText={`Connect with ${projectName} Today`}
          subTitle={`We're here to help with any questions or support you need. Reach out to ${projectName} and let us assist you in your coffee journey.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Contact Us`}
        />

        <FaqSection
          projectName={'test222'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions about ${projectName} `}
        />

        <ContactFormSection
          projectName={'test222'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Email icon with coffee cup']}
          mainText={`Reach Out to ${projectName} `}
          subTitle={`We're available 24/7 to assist you. Send us a message and our team will respond promptly to address your needs.`}
        />
      </main>
      <WebSiteFooter projectName={'test222'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
