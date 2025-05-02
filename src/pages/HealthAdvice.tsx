
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HealthAdvice: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Health Advice</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tips for Staying Safe from Air Pollution</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-teal-700">Daily Protection Measures</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Check daily air quality forecasts in your area</li>
                <li className="text-gray-700">Avoid outdoor activities during high pollution periods</li>
                <li className="text-gray-700">Keep windows and doors closed when AQI levels are unhealthy</li>
                <li className="text-gray-700">Use air purifiers with HEPA filters in your home</li>
                <li className="text-gray-700">Stay hydrated to help your body remove toxins</li>
                <li className="text-gray-700">Incorporate foods rich in antioxidants into your diet</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3 text-teal-700">Outdoor Protection</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Wear N95/N99 masks when outdoors during poor air quality days</li>
                <li className="text-gray-700">Limit outdoor exercise to early morning hours when pollution levels are typically lower</li>
                <li className="text-gray-700">Avoid high-traffic areas and industrial zones when possible</li>
                <li className="text-gray-700">Consider using public transportation or carpooling to reduce emissions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3 text-teal-700">Indoor Air Quality Management</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Use air purifiers with HEPA filters</li>
                <li className="text-gray-700">Maintain indoor plants that help filter air (e.g., Peace Lily, Snake Plant)</li>
                <li className="text-gray-700">Regularly clean air conditioning filters</li>
                <li className="text-gray-700">Avoid burning candles, incense, or smoking indoors</li>
                <li className="text-gray-700">Use vacuum cleaners with HEPA filters</li>
                <li className="text-gray-700">Keep humidity levels between 30-50% to prevent mold growth</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Health Issues Caused by Pollution</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-red-700">Respiratory Problems</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Asthma exacerbation and attacks</li>
                <li className="text-gray-700">Chronic Obstructive Pulmonary Disease (COPD)</li>
                <li className="text-gray-700">Increased susceptibility to respiratory infections</li>
                <li className="text-gray-700">Decreased lung function</li>
                <li className="text-gray-700">Shortness of breath and coughing</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3 text-red-700">Cardiovascular Issues</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Increased risk of heart attacks</li>
                <li className="text-gray-700">Stroke</li>
                <li className="text-gray-700">Irregular heartbeat</li>
                <li className="text-gray-700">High blood pressure</li>
                <li className="text-gray-700">Worsening of existing heart conditions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3 text-red-700">Neurological Effects</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Headaches and migraines</li>
                <li className="text-gray-700">Dizziness</li>
                <li className="text-gray-700">Cognitive impairment</li>
                <li className="text-gray-700">Increased risk of neurodegenerative diseases</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3 text-red-700">Other Health Effects</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Eye irritation and conjunctivitis</li>
                <li className="text-gray-700">Skin problems including rashes and aging</li>
                <li className="text-gray-700">Weakened immune system</li>
                <li className="text-gray-700">Increased risk of certain cancers</li>
                <li className="text-gray-700">Adverse pregnancy outcomes</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Vulnerable Populations</h2>
          <p className="text-gray-700 mb-4">
            Some groups are particularly susceptible to the effects of air pollution and should take extra precautions:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
              <h3 className="text-lg font-medium mb-2 text-orange-800">Children</h3>
              <p className="text-sm text-gray-700">
                Children's lungs are still developing, and they breathe more air per pound of body weight than adults.
                They also often spend more time outdoors and are more active.
              </p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
              <h3 className="text-lg font-medium mb-2 text-orange-800">Elderly</h3>
              <p className="text-sm text-gray-700">
                Older adults may have undiagnosed heart or lung conditions that make them more susceptible to air pollution effects.
              </p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
              <h3 className="text-lg font-medium mb-2 text-orange-800">People with Pre-existing Conditions</h3>
              <p className="text-sm text-gray-700">
                Those with asthma, COPD, heart disease, or diabetes face greater risks from air pollution exposure.
              </p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
              <h3 className="text-lg font-medium mb-2 text-orange-800">Pregnant Women</h3>
              <p className="text-sm text-gray-700">
                Air pollution may affect fetal development and lead to adverse pregnancy outcomes such as preterm birth or low birth weight.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HealthAdvice;
