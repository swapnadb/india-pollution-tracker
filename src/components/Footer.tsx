
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <p className="text-sm text-gray-600">
              India Pollution Tracker provides real-time air quality data across Indian states and territories.
              Our mission is to raise awareness about pollution levels and promote healthier environments.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="text-sm space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-teal-600">Air Quality Index</Link></li>
              <li><Link to="/health-advice" className="text-gray-600 hover:text-teal-600">Health Effects</Link></li>
              <li><Link to="/health-advice" className="text-gray-600 hover:text-teal-600">Prevention Measures</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-sm text-gray-600 mb-2">Email: kamsaliswapna9@gmail.com</p>
            <p className="text-sm text-gray-600 mb-2">Phone: +91 8431723067</p>
            <div className="flex space-x-4 mt-3">
              <a href="https://github.com/swapnaxdata" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/swapnaxdata" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://medium.com/@kamsaliswapna9" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} India Pollution Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
