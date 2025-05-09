// app/page.tsx
"use client";

import Header from './components/Header';
import Carousel from './components/Carousel';
import { ServicesSection } from './components/ServiceSection';
import { Customers } from './components/Customers';
export default function Home() {
  const carouselImages: string[] = [
    'https://www.blackngreen.com/img/carousel_1.png',
    'https://www.blackngreen.com/img/EVA_carousel_web.png', 
    'https://www.blackngreen.com/img/eva_ai_automation.jpg',
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="w-full">
        <Carousel images={carouselImages} autoPlayInterval={5000} />
      </section>
      <ServicesSection />
      <Customers/>
    </div>
  );
}
