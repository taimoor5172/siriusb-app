// pages/about-us.tsx
import GlobalPresence from '@/app/components/GlobalPresence';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Leadership from '@/app/components/Leadership';
import Mission from '@/app/components/Mission';
import Story from '@/app/components/Story';
import Values from '@/app/components/Values';
import type { NextPage } from 'next';
import Head from 'next/head';


const AboutUsPage: NextPage = () => (
  <>
    <Head>
      <title>About Us | siriusBpk</title>
    </Head>
    <div className="min-h-screen font-sans">
      <Header />
      <Hero />        
      <Mission />
      <Story />
      <Values />
      <Leadership />
      <GlobalPresence />
    </div>
  </>
);

export default AboutUsPage;