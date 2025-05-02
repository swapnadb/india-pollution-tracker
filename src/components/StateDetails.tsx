
import React from 'react';
import { StateDataType, getStatusColor, getStatusTextColor } from '@/lib/constants';

interface StateDetailsProps {
  state: StateDataType | null;
}

const StateDetails: React.FC<StateDetailsProps> = ({ state }) => {
  if (!state) {
    return (
      <div className="p-6 flex items-center justify-center h-full">
        <p className="text-gray-500">Select a state to view details</p>
      </div>
    );
  }
  
  const statusColorClass = getStatusColor(state.status);
  const statusTextColorClass = getStatusTextColor(state.status);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl font-bold">{state.name}</h2>
        <span className={`px-3 py-1 rounded-full text-sm ${statusColorClass} ${statusTextColorClass}`}>
          {state.status}
        </span>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Air Quality Index (AQI)</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className={`${getStatusColor(state.status)} h-2.5 rounded-full`} 
            style={{ width: `${Math.min(100, (state.aqi / 300) * 100)}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-sm text-gray-600">0</span>
          <span className="text-lg font-bold">{state.aqi}</span>
          <span className="text-sm text-gray-600">300+</span>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Pollutant Levels</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">PM2.5</span>
            <div className="flex-1 mx-4">
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-blue-500 h-1.5 rounded-full" 
                  style={{ width: `${Math.min(100, (state.pollutants.pm25 / 150) * 100)}%` }}
                ></div>
              </div>
            </div>
            <span className="text-sm font-semibold">{state.pollutants.pm25} μg/m³</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">PM10</span>
            <div className="flex-1 mx-4">
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-blue-500 h-1.5 rounded-full" 
                  style={{ width: `${Math.min(100, (state.pollutants.pm10 / 200) * 100)}%` }}
                ></div>
              </div>
            </div>
            <span className="text-sm font-semibold">{state.pollutants.pm10} μg/m³</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">SO₂</span>
            <div className="flex-1 mx-4">
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-blue-500 h-1.5 rounded-full" 
                  style={{ width: `${Math.min(100, (state.pollutants.so2 / 50) * 100)}%` }}
                ></div>
              </div>
            </div>
            <span className="text-sm font-semibold">{state.pollutants.so2} μg/m³</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">NO₂</span>
            <div className="flex-1 mx-4">
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-blue-500 h-1.5 rounded-full" 
                  style={{ width: `${Math.min(100, (state.pollutants.no2 / 100) * 100)}%` }}
                ></div>
              </div>
            </div>
            <span className="text-sm font-semibold">{state.pollutants.no2} μg/m³</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">O₃</span>
            <div className="flex-1 mx-4">
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-blue-500 h-1.5 rounded-full" 
                  style={{ width: `${Math.min(100, (state.pollutants.o3 / 120) * 100)}%` }}
                ></div>
              </div>
            </div>
            <span className="text-sm font-semibold">{state.pollutants.o3} μg/m³</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">CO</span>
            <div className="flex-1 mx-4">
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-blue-500 h-1.5 rounded-full" 
                  style={{ width: `${Math.min(100, (state.pollutants.co / 4) * 100)}%` }}
                ></div>
              </div>
            </div>
            <span className="text-sm font-semibold">{state.pollutants.co} mg/m³</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <h3 className="text-lg font-semibold mb-2">Understanding Air Quality</h3>
        <p className="text-sm text-gray-600">
          Air quality varies across India due to differences in industrial activity, population density, vehicle emissions, and geographical factors.
        </p>
        
        {state.aqi > 150 && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-800">
              <strong>Health Warning:</strong> Current air quality in {state.name} may cause health effects. Consider limiting outdoor activities, using N95 masks, and using air purifiers indoors.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StateDetails;
