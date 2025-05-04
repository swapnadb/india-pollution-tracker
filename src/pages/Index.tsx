
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
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ArrowDownAZ, ArrowUpAZ, ListFilter, ArrowUp, ArrowDown } from 'lucide-react';
import { Input } from '@/components/ui/input';

type SortOption = 'a-z' | 'z-a' | 'high-low' | 'low-high' | 'popular';

const Index: React.FC = () => {
  const [selectedState, setSelectedState] = useState<StateDataType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('a-z');

  // Filter states based on search query
  const filteredStates = stateData.filter(state => 
    state.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort states based on selected sort option
  const sortedStates = [...filteredStates].sort((a, b) => {
    switch (sortBy) {
      case 'a-z':
        return a.name.localeCompare(b.name);
      case 'z-a':
        return b.name.localeCompare(a.name);
      case 'high-low':
        return b.aqi - a.aqi;
      case 'low-high':
        return a.aqi - b.aqi;
      case 'popular':
        // Sort by population (assuming higher population means more popular)
        // For this example, I'll use a random popularity metric based on aqi + name length
        return (b.aqi + b.name.length) - (a.aqi + a.name.length);
      default:
        return 0;
    }
  });

  const getSortIcon = () => {
    switch (sortBy) {
      case 'a-z': return <ArrowDownAZ className="h-4 w-4" />;
      case 'z-a': return <ArrowUpAZ className="h-4 w-4" />;
      case 'high-low': return <ArrowDown className="h-4 w-4" />;
      case 'low-high': return <ArrowUp className="h-4 w-4" />;
      case 'popular': return <ListFilter className="h-4 w-4" />;
      default: return <ListFilter className="h-4 w-4" />;
    }
  };

  const getSortLabel = () => {
    switch (sortBy) {
      case 'a-z': return 'A-Z';
      case 'z-a': return 'Z-A';
      case 'high-low': return 'High-Low AQI';
      case 'low-high': return 'Low-High AQI';
      case 'popular': return 'Popular';
      default: return 'Sort';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Interactive India Pollution Map</h2>
          <p className="text-gray-600">Click on any state to select it, or hover to see air quality data</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search states..."
              className="w-full px-4 py-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  {getSortIcon()}
                  <span className="hidden sm:inline">{getSortLabel()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => setSortBy('a-z')}>
                  <ArrowDownAZ className="mr-2 h-4 w-4" />
                  <span>A-Z</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('z-a')}>
                  <ArrowUpAZ className="mr-2 h-4 w-4" />
                  <span>Z-A</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('high-low')}>
                  <ArrowDown className="mr-2 h-4 w-4" />
                  <span>High-Low AQI</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('low-high')}>
                  <ArrowUp className="mr-2 h-4 w-4" />
                  <span>Low-High AQI</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('popular')}>
                  <ListFilter className="mr-2 h-4 w-4" />
                  <span>Popular</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {sortedStates.map(state => (
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
