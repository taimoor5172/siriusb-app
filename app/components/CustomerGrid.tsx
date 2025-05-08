import React from 'react';
import Image from 'next/image';

import { customers } from '../constants/customers';

// Define the component with return type
const CustomerGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-8">
      {customers.map((customer) => (
        <div
          key={customer.id}
          className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <Image
            src={customer.src}
            alt={customer.alt}
            width={80}
            height={70}
            className="h-12 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default CustomerGrid;