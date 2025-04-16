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
  FeaturesDesigns,
  GalleryPortfolioDesigns,
  PricingDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import GalleryPortfolioSection from '../../components/WebPageComponents/GalleryPortfolioComponent';

import { getMultiplePexelsImages } from '../../helpers/pexels';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

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
      name: 'Premium Quality Beans',
      description:
        'Our coffee beans are sourced from the finest regions, ensuring a rich and flavorful experience in every cup. Quality you can taste.',
      icon: 'mdiCoffee',
    },
    {
      name: 'Diverse Blend Selection',
      description:
        "Choose from a wide range of blends, from bold espressos to smooth single-origin brews. There's a perfect match for every coffee lover.",
      icon: 'mdiBlend',
    },
    {
      name: 'Sustainable Sourcing',
      description:
        "We prioritize sustainability by partnering with ethical farms. Enjoy your coffee knowing it's produced with care for the environment.",
      icon: 'mdiLeaf',
    },
  ];

  const [images, setImages] = useState([]);
  const pexelsQueriesWebSite = [
    'Freshly roasted coffee beans',
    'Espresso shot being poured',
    'Barista crafting latte art',
    'Assorted coffee brewing tools',
    'Coffee cups on wooden table',
    'Organic coffee farm landscape',
  ];
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await getMultiplePexelsImages(pexelsQueriesWebSite);
        const formattedImages = images.map((image) => ({
          src: image.src || undefined,
          photographer: image.photographer || undefined,
          photographer_url: image.photographer_url || undefined,
        }));
        setImages(formattedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const pricing_features = {
    standard: {
      features: [
        'Basic Coffee Selection',
        'Standard Brewing Guides',
        'Access to Community Forum',
      ],
      limited_features: ['Limited Customer Support', 'Basic Analytics'],
    },
    premium: {
      features: [
        'Expanded Coffee Selection',
        'Advanced Brewing Techniques',
        'Priority Community Access',
      ],
      also_included: [
        'Enhanced Customer Support',
        'Detailed Analytics',
        'Monthly Coffee Tasting Events',
      ],
    },
    business: {
      features: [
        'Complete Coffee Collection',
        'Custom Brewing Solutions',
        'Dedicated Account Manager',
        'Comprehensive Analytics',
        'Exclusive Industry Insights',
      ],
    },
  };

  const description = {
    standard:
      'Ideal for individual coffee enthusiasts looking to explore a variety of blends and improve their brewing skills.',
    premium:
      'Perfect for small coffee shops or startups seeking to expand their offerings and enhance customer engagement.',
    business:
      'Designed for large enterprises or coffee chains requiring comprehensive solutions and personalized support to optimize their operations.',
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Explore Our Coffee Blends and Products`}</title>
        <meta
          name='description'
          content={`Browse our diverse range of coffee blends and products. From single-origin to espresso mixes, find the perfect cup to satisfy your coffee cravings.`}
        />
      </Head>
      <WebSiteHeader projectName={'test223'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'test223'}
          image={['Assorted coffee beans and cups']}
          mainText={`Discover Our Exquisite Coffee Collection`}
          subTitle={`Explore a world of flavors with our diverse range of coffee blends. From rich espressos to smooth single-origin brews, ${projectName} offers the perfect cup for every palate.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Shop Now`}
        />

        <FeaturesSection
          projectName={'test223'}
          image={['Coffee brewing equipment']}
          withBg={0}
          features={features_points}
          mainText={`Unleash the Potential of ${projectName}`}
          subTitle={`Discover the unique features that make our coffee products stand out. Experience quality, variety, and convenience with ${projectName}.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <GalleryPortfolioSection
          projectName={'test223'}
          images={images}
          mainText={`Explore Our Coffee Creations`}
          design={GalleryPortfolioDesigns.OVERLAPPING_CENTRAL_IMAGE || ''}
        />

        <PricingSection
          projectName={'test223'}
          withBg={0}
          features={pricing_features}
          description={description}
        />
      </main>
      <WebSiteFooter projectName={'test223'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
