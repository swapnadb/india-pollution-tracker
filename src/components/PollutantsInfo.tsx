
import React from 'react';
import { pollutantInfo } from '@/lib/constants';

const PollutantsInfo: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">About the Parameters</h3>
      <div className="space-y-3">
        {pollutantInfo.map((pollutant) => (
          <div key={pollutant.name} className="pb-2">
            <p className="text-sm font-medium">{pollutant.name}</p>
            <p className="text-xs text-gray-600">{pollutant.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PollutantsInfo;
