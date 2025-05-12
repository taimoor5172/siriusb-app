// components/About/Hero.tsx
import React from 'react';

const Hero: React.FC = () => (
  <section className="relative py-20 md:py-32 bg-green-900 overflow-hidden" style={{ minHeight: '500px' }}>
    <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://www.blackngreen.com/img/building-bg-new.svg')" }}></div>
    <div className="absolute top-0 left-0 right-0 z-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
        <path fill="#ffffff" fillOpacity="1" d="M0,96L80,106.7C160,117,320,139,480,138.7C640,139,800,117,960,112C1120,107,1280,117,1360,122.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold pt-8 mb-6">
          <span className="text-white">Sirius</span>
          <span className="text-green-400">B</span>
          <span className="text-white">Solutions</span>
        </h1>
        <p className="text-white text-lg mb-8 leading-relaxed">
          Our mission is to empower telecom operators with innovative solutions that drive positive change...
        </p>
        <a href="#learn-more" className="inline-block bg-white text-green-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
          View More
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
