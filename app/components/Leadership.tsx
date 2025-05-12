// components/About/Leadership.tsx
import React from 'react';

const team = [
  { name: "Ammar", title: "Chief Executive Officer", desc: "With over 20 years in telecom..." },
  { name: "Faisal", title: "Chief Technology Officer", desc: "Faisal drives our technology roadmap..." },
  { name: "Fahad Ahmed", title: "Project Manager", desc: "Fahad ensures seamless delivery..." }
];

const Leadership: React.FC = () => (
  <div className="container mx-auto px-6 mb-16">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {team.map((member, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-64 bg-gray-200"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
            <p className="text-green-600 mb-3">{member.title}</p>
            <p className="text-gray-700 text-sm">{member.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Leadership;
