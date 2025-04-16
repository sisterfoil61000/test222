import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../stores/hooks';
import LayoutGuest from '../layouts/Guest';
import WebSiteHeader from '../components/WebPageComponents/Header';
import WebSiteFooter from '../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
  PricingDesigns,
  ContactFormDesigns,
} from '../components/WebPageComponents/designs';

import HeroSection from '../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../components/WebPageComponents/TestimonialsComponent';

import PricingSection from '../components/WebPageComponents/PricingComponent';

import ContactFormSection from '../components/WebPageComponents/ContactFormComponent';

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

  const features_points = [
    {
      name: 'Inventory Management',
      description:
        'Effortlessly track and manage your coffee blends, ensuring you never run out of stock. Keep your inventory organized and up-to-date.',
      icon: 'mdiWarehouse',
    },
    {
      name: 'Customer Insights',
      description:
        'Gain valuable insights into customer preferences and order history. Tailor your offerings to meet their needs and boost satisfaction.',
      icon: 'mdiAccountCircle',
    },
    {
      name: 'Order Processing',
      description:
        'Simplify order management from start to finish. Ensure timely fulfillment and accurate tracking for a seamless customer experience.',
      icon: 'mdiCartOutline',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has transformed our coffee business. The intuitive interface and robust features make managing orders a breeze.',
      company: 'Brewed Bliss Co.',
      user_name: 'Emma Thompson, Operations Manager',
    },
    {
      text: "Thanks to ${projectName}, we've seen a significant increase in customer satisfaction. The insights provided are invaluable.",
      company: 'Caffeine Haven',
      user_name: 'Liam Johnson, Customer Relations',
    },
    {
      text: 'The inventory management feature is a game-changer. We can now keep track of our stock effortlessly and avoid shortages.',
      company: 'Bean \u0026 Brew',
      user_name: 'Sophia Martinez, Inventory Specialist',
    },
    {
      text: "Our team loves using ${projectName}. It's user-friendly and has streamlined our entire order processing system.",
      company: 'Java Junction',
      user_name: 'Noah Williams, Store Manager',
    },
    {
      text: "With ${projectName}, we can focus more on our customers and less on administrative tasks. It's a must-have for any coffee business.",
      company: 'Roast \u0026 Toast',
      user_name: 'Olivia Brown, Barista Lead',
    },
    {
      text: "The customer insights feature has helped us tailor our offerings to meet customer preferences. It's been a fantastic addition to our toolkit.",
      company: 'Espresso Express',
      user_name: 'Ava Davis, Marketing Director',
    },
  ];

  const pricing_features = {
    standard: {
      features: [
        'Basic Inventory Management',
        'Order Tracking',
        'Customer Database',
      ],
      limited_features: ['Limited Customer Insights', 'Basic Reporting'],
    },
    premium: {
      features: [
        'Advanced Inventory Management',
        'Comprehensive Order Processing',
        'Enhanced Customer Database',
      ],
      also_included: [
        'Detailed Customer Insights',
        'Advanced Reporting',
        'Priority Support',
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
      'Perfect for small startups or coffee shops aiming to enhance their operations with advanced features and gain deeper insights into customer behavior.',
    business:
      'Designed for large enterprises or multi-location coffee chains that require comprehensive management tools and personalized support to optimize their business operations.',
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Manage Your Online Coffee Business with Ease`}</title>
        <meta
          name='description'
          content={`Discover the ultimate toolkit for managing your online coffee business. From inventory to customer orders, streamline your operations and boost sales with our comprehensive solution.`}
        />
      </Head>
      <WebSiteHeader projectName={'test223'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'test223'}
          image={['Coffee beans and laptop']}
          mainText={`Elevate Your Coffee Business Today`}
          subTitle={`Discover the ultimate toolkit for managing your online coffee business. Streamline operations, boost sales, and delight customers with ${projectName}.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'test223'}
          image={['Coffee shop management tools']}
          withBg={0}
          features={features_points}
          mainText={`Unlock the Power of ${projectName}`}
          subTitle={`Explore the key features that make ${projectName} the ultimate solution for your coffee business. Streamline operations and enhance customer satisfaction.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'test223'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`What Our Users Say About ${projectName} `}
        />

        <PricingSection
          projectName={'test223'}
          withBg={1}
          features={pricing_features}
          description={description}
        />

        <ContactFormSection
          projectName={'test223'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Contact form with coffee cup']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime for inquiries or support. Our team at ${projectName} is here to assist you promptly.`}
        />
      </main>
      <WebSiteFooter projectName={'test223'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
