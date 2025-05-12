// components/About/GlobalPresence.tsx
import React from 'react';

const GlobalPresence: React.FC = () => (
  <div className="container mx-auto px-6 mb-16">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Global Presence</h2>
    <div className="bg-gray-50 rounded-lg p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            With headquarters in United Arab Emirates and regional offices across...
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our diverse team of professionals brings together expertise...
          </p>
        </div>
        <div className="h-64 bg-gray-200 rounded-lg"></div> {/* Placeholder for map or image */}
      </div>
    </div>
  </div>
);

export default GlobalPresence;
