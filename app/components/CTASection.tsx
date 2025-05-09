import React from 'react';
import Link from 'next/link';

export const CTASection: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white rounded-lg p-8 mt-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
      <p className="text-lg mb-6">Experience the power of our innovative solutions</p>
      <Link 
        href="/pages/demo" 
        className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
      >
        Request a Demo
      </Link>
    </div>
  );
};
