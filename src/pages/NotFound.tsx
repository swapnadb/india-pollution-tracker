
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-teal-600 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
