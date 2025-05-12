// components/About/Mission.tsx
import React from 'react';
import Image from 'next/image';

const Mission: React.FC = () => (
  <section id="learn-more" className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At siriusBSolutions, our mission goes beyond providing technology solutions...
          </p>
          <p className="text-gray-700 leading-relaxed">
            We believe that by empowering telecom operators...
          </p>
        </div>
        <div className="flex justify-center">
          <Image 
            src="https://www.blackngreen.com/img/about-mision.svg" 
            alt="Mission" 
            width={500}
            height={300}
            className="max-w-full h-auto" 
          />
        </div>
      </div>
    </div>
  </section>
);

export default Mission;
