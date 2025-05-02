
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="rounded-full bg-gray-200 w-48 h-48 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-2xl font-semibold mb-4">Kamsali Swapna</h2>
              <p className="text-gray-600 mb-6">
                Hello! I'm a student passionate about environmental data visualization and public health awareness.
                This India Air Pollution Tracker is my college project aimed at providing accessible information about 
                air quality across India.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">+91 8431723067</span>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:kamsaliswapna@gmail.com" className="text-teal-600 hover:underline">kamsaliswapna@gmail.com</a>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <a href="https://github.com/swapnaxdata" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">github.com/swapnaxdata</a>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="https://linkedin.com/in/swapnaxdata" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">linkedin.com/in/swapnaxdata</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              The India Air Insight Tracker is a college project designed to visualize and track air quality across different states and territories in India. 
              With increasing concerns about pollution levels and their impact on public health, this tool aims to provide easy access to information about 
              air quality in various regions.
            </p>
            
            <p>
              The tracker displays real-time Air Quality Index (AQI) values for all Indian states and Union Territories, 
              color-coded according to severity levels. Users can select any state to view detailed information about specific pollutants 
              and their concentrations.
            </p>
            
            <p>
              This project is built using React.js with Tailwind CSS for styling, creating a responsive and interactive user experience 
              across desktop and mobile devices.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Data Sources</h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              The air quality data presented in this tracker is sourced from publicly available environmental monitoring stations across India.
              The data includes measurements for key pollutants such as PM2.5, PM10, SO₂, NO₂, O₃, and CO.
            </p>
            
            <p>
              Regular updates ensure that the information remains current and relevant for users' decision-making.
              The Air Quality Index (AQI) calculation follows the standards set by the Central Pollution Control Board (CPCB) of India.
            </p>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                <strong>Disclaimer:</strong> This project is created for educational purposes as part of a college assignment.
                While efforts have been made to ensure data accuracy, this should not be used as the sole source for health-related decisions.
                Please refer to official government sources for the most accurate and up-to-date information.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
