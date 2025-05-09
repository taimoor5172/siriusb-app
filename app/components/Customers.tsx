

import React from 'react';
import CustomerGrid from './CustomerGrid';

export const Customers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Customers</h1>
          <p className="text-xl text-gray-600">siriusB solutions is the leading mobile technology products company, empowering some of the biggest telecom operators around the world with its innovations</p>
        </div>
        <div className="w-full max-w-3xl mx-auto border-b border-gray-300 mt-8"></div>
        <CustomerGrid />
      </div>
    </div>
  );
}