
import React from 'react';
import { healthImpacts } from '@/lib/constants';

const HealthImpacts: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Health Impacts</h3>
      <ul className="list-disc pl-5 space-y-2">
        {healthImpacts.map((impact, index) => (
          <li key={index} className="text-sm text-gray-700">{impact}</li>
        ))}
      </ul>
    </div>
  );
};

export default HealthImpacts;
