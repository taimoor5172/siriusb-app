import React from 'react';
import { SectionHeadingProps } from '../interfaces/section-heading';

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, description }) => {
    return (
      <>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-xl text-center text-gray-800 max-w-4xl mx-auto mb-8">
          {description}
        </p>
      </>
    );
  };
  
