
import React, { useState } from 'react';
import { stateData } from '@/lib/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StateCard from '@/components/StateCard';
import StateDetails from '@/components/StateDetails';
import AqiLegend from '@/components/AqiLegend';
import PollutantsInfo from '@/components/PollutantsInfo';
import HealthImpacts from '@/components/HealthImpacts';
import type { StateDataType } from '@/lib/constants';

const Index: React.FC = () => {
  const [selectedState, setSelectedState] = useState<StateDataType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStates = stateData.filter(state => 
    state.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Interactive India Pollution Map</h2>
          <p className="text-gray-600">Click on any state to select it, or hover to see air quality data</p>
        </div>
        
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search states..."
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredStates.map(state => (
                <StateCard
                  key={state.name}
                  state={state}
                  onClick={() => setSelectedState(state)}
                />
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/3 mt-6 md:mt-0">
            <StateDetails state={selectedState} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="h-full">
            <AqiLegend />
          </div>
          <div className="h-full">
            <PollutantsInfo />
          </div>
          <div className="h-full">
            <HealthImpacts />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
          <h3 className="text-lg font-semibold mb-2">About the Tracker</h3>
          <p className="text-sm text-gray-600">
            India Pollution Tracker provides real-time air quality data across Indian states and territories. 
            Our mission is to raise awareness about pollution levels and promote healthier environments. 
            The data is updated regularly to ensure accuracy and relevance.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
