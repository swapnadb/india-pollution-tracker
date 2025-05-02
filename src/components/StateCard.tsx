
import React from 'react';
import { getAqiColor, getAqiTextColor, getStatusColor, getStatusTextColor, StateDataType } from '@/lib/constants';

interface StateCardProps {
  state: StateDataType;
  onClick: () => void;
}

const StateCard: React.FC<StateCardProps> = ({ state, onClick }) => {
  const aqiColorClass = getAqiColor(state.aqi);
  const aqiTextColorClass = getAqiTextColor(state.aqi);
  const statusColorClass = getStatusColor(state.status);
  const statusTextColorClass = getStatusTextColor(state.status);
  
  return (
    <div 
      onClick={onClick}
      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className={`h-2 w-2 rounded-full ${aqiColorClass} mr-2`}></div>
          <h3 className="font-medium text-gray-800">{state.name}</h3>
        </div>
        <span className={`px-2 py-0.5 text-xs rounded-full ${statusColorClass} ${statusTextColorClass}`}>
          {state.status}
        </span>
      </div>
      <div className="flex items-center">
        <span className="text-xs text-gray-500 mr-1">AQI:</span>
        <span className={`font-bold ${state.aqi > 150 ? 'text-red-600' : state.aqi > 100 ? 'text-orange-500' : state.aqi > 50 ? 'text-yellow-500' : 'text-green-600'}`}>
          {state.aqi}
        </span>
      </div>
    </div>
  );
};

export default StateCard;
