import React from 'react';
import { SectionHeading }from './SectionHeading';
import { Products } from './Products';
import { CTASection } from './CTASection';

export const ServicesSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
        title="Services"
        description="siriusBpk is the leading mobile technology products company, empowering some of the biggest telecom operators around the world with its innovations"
      />
      <Products />
      <CTASection />
    </div>
  );
};
