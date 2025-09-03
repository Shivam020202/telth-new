import React from 'react';
import { Link } from 'react-router-dom';

const NGOsHero = () => {
  return (
    <section className="py-6 md:py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-violet-900 leading-tight">
              Empowering NGOs with Scalable Healthcare Solutions
            </h1>

            <p className="text-lg text-gray-600 max-w-XL">
              Telth supports NGOs with a unified platform to tackle healthcare access and livelihood
              development at scale. Deliver quality healthcare through smart kiosks, Health Examination Systems (HES), and mobile
              medical units—designed for last-mile reach and community-first care.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/contact-us"
                className="px-8 py-3.5 bg-purple-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                Enhance Your Impact
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden border border-gray-300">
              <img 
                className="w-full h-auto object-cover" 
                src="assets/solutions/ngo/ngo-banner.png"
                alt="Community healthcare workers using Telth solutions"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NGOsHero;