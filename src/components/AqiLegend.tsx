
import React from 'react';
import { aqiLegend } from '@/lib/constants';

const AqiLegend: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
      <h3 className="text-lg font-semibold mb-4">Air Quality Index Legend</h3>
      <div className="space-y-4">
        {aqiLegend.map((level) => (
          <div key={level.range} className="flex items-start gap-3">
            <div 
              className="flex-shrink-0 w-6 h-6 rounded-full mt-0.5" 
              style={{ backgroundColor: level.color }}
            ></div>
            <div className="flex-grow">
              <p className="text-sm font-medium">
                {level.range}: {level.label}
              </p>
              <p className="text-xs text-gray-600 mt-0.5">{level.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AqiLegend;
