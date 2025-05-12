// components/About/Values.tsx
import React from 'react';

const values = [
  {
    title: "Innovation",
    description: "We consistently push boundaries to create solutions..."
  },
  {
    title: "Integrity",
    description: "We operate with transparency and honesty..."
  },
  {
    title: "Impact",
    description: "We measure our success by the positive difference..."
  }
];

const Values: React.FC = () => (
  <div className="container mx-auto px-6 mb-16">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {values.map((val, idx) => (
        <div key={idx} className="p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-green-800 mb-3">{val.title}</h3>
          <p className="text-gray-700">{val.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Values;
