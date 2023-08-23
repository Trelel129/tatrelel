import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import AboutSection from '@/pages/landing/AboutSection';
import BenefitSection from '@/pages/landing/BenefitSection';
import FeatureSection from '@/pages/landing/FeatureSection';
import HomeSection from '@/pages/landing/HomeSection';
import SloganSection from '@/pages/landing/SloganSection';

export default function IndexPage() {
  return (
    <Layout>
      <Seo />
      <main>
        <HomeSection />
        <AboutSection />
        <FeatureSection />
        <BenefitSection />
        <SloganSection />
      </main>
    </Layout>
  );
}
