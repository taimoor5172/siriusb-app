import React from 'react';
import Header from '../../components/Header';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Innovating for a better tomorrow</p>
        </div>
        <div className="prose prose-lg mx-auto">
          <p>
            siriusBpk is a leading technology company dedicated to transforming industries through innovative solutions.
            Our commitment to excellence and customer satisfaction drives everything we do.
          </p>
        </div>
      </div>
    </div>
  );
} 