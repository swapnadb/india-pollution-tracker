
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <div className="h-10 w-10 rounded-full bg-teal-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-800">India Pollution Tracker</h1>
              <p className="text-xs text-gray-600">Interactive air quality visualization</p>
            </div>
          </Link>
          
          <nav className="flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-teal-600 font-medium">Dashboard</Link>
            <Link to="/health-advice" className="text-gray-700 hover:text-teal-600 font-medium">Health Advice</Link>
            <Link to="/about" className="text-gray-700 hover:text-teal-600 font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-teal-600 font-medium">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
