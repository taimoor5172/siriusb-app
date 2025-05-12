// components/About/Story.tsx
import React from 'react';

const Story: React.FC = () => (
  <div className="container mx-auto px-6 mb-16">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Founded in 2010, siriusBpk started with a vision to transform how telecom companies engage...
        </p>
        <p className="text-gray-700 leading-relaxed">
          Today, we are recognized as pioneers in telecom innovation...
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-green-800 mb-4">Key Milestones</h3>
        <ul className="space-y-3 text-gray-700">
          {[
            "2010: Founded with a focus on mobile services",
            "2015: Expanded to 50+ countries across Asia and Africa",
            "2018: Launched our AI-powered customer experience platform",
            "2022: Reached 100+ country presence globally",
            "2025: Serving 45% of the world's top telecom operators"
          ].map((milestone, index) => (
            <li key={index} className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-green-500 mt-1 mr-2"></div>
              <p>{milestone}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Story;
