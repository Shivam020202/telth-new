import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NGOsHero from '../components/NGOsHero';
import NGOsServices from '../components/NGOsServices';
import SmartHealthCommunity from '../components/SmartHealthCommunity';
import VolunteerTools from '../components/VolunteerTools';
import TelthMartFinancial from '../components/TelthMartFinancial';
import DigiDocOperations from '../components/DigiDocOperations';
import NGOSmartCareHubs from '../components/NGOSmartCareHubs';
import GlobalVolunteerPlatform from '../components/GlobalVolunteerPlatform';

const NGOs = () => {
  const sdgCards = [
    {
      id: 'sdg3',
      number: '3',
      title: 'Good Health & Well-Being',
      description: 'Last-mile care, diagnostics, and chronic disease management',
      color: 'green'
    },
    {
      id: 'sdg8',
      number: '8',
      title: 'Decent Work & Economic Growth',
      description: 'Job creation via CM/CCM models and local enterprises',
      color: 'yellow'
    },
    {
      id: 'sdg9',
      number: '9',
      title: 'Industry, Innovation & Infrastructure',
      description: 'Modular care and commerce platforms',
      color: 'orange'
    },
    {
      id: 'sdg11',
      number: '11',
      title: 'Sustainable Cities & Communities',
      description: 'Urban and rural community development solutions',
      color: 'blue'
    },
    {
      id: 'sdg17',
      number: '17',
      title: 'Partnerships for the Goals',
      description: 'NGO-corporate-government collaboration frameworks',
      color: 'purple'
    }
  ];

  const getSDGColorClasses = (color) => {
    const colors = {
      green: {
        bg: 'from-green-50 to-white',
        button: 'from-green-500 to-green-600',
        line: 'bg-green-500'
      },
      yellow: {
        bg: 'from-yellow-50 to-white',
        button: 'from-yellow-500 to-yellow-600',
        line: 'bg-yellow-500'
      },
      orange: {
        bg: 'from-orange-50 to-white',
        button: 'from-orange-500 to-orange-600',
        line: 'bg-orange-500'
      },
      blue: {
        bg: 'from-blue-50 to-white',
        button: 'from-blue-500 to-blue-600',
        line: 'bg-blue-500'
      },
      purple: {
        bg: 'from-purple-50 to-white',
        button: 'from-purple-500 to-purple-600',
        line: 'bg-purple-500'
      }
    };
    return colors[color] || colors.green;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <NGOsHero />
        
        {/* Services Overview */}
        <NGOsServices />
        
        {/* Smart Health Community Care */}
        <SmartHealthCommunity />
        
        {/* Volunteer & Benefactor Tools */}
        <VolunteerTools />
        
        {/* Telth Mart & Financial Access */}
        <TelthMartFinancial />
        
        {/* DigiDoc Operations Command Center */}
        <DigiDocOperations />
        
        {/* NGO Smart Care Hubs */}
        <NGOSmartCareHubs />
        
        {/* Global Volunteer & Benefactor Platform */}
        <GlobalVolunteerPlatform />
        
        {/* SDG Alignment Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-200 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Section header */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="inline-block px-5 py-2 bg-gradient-to-r from-purple-100 to-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4 shadow-xs">
                Sustainable Development Alignment
              </span>
              <h2 className="text-4xl font-bold text-purple-900 mb-4 bg-clip-text">
                Driving Real Impact with the SDGs
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Telth's solutions align directly with key Sustainable Development Goals, helping NGOs serve better,
                grow faster, and create deeper impact from health to livelihoods.
              </p>
            </div>

            {/* SDG Cards */}
            <div className="grid md:grid-cols-5 gap-8 mb-20">
              {sdgCards.map((sdg) => {
                const colorClasses = getSDGColorClasses(sdg.color);
                return (
                  <div key={sdg.id} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bg} rounded-2xl shadow-md transform group-hover:-translate-y-2 transition-transform duration-300`}></div>
                    <div className="relative h-full p-6">
                      <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${colorClasses.button} flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-bold text-xl">SDG {sdg.number}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{sdg.title}</h3>
                      <p className="text-gray-600 text-center text-sm leading-relaxed">
                        {sdg.description}
                      </p>
                      <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className={`w-8 h-1 ${colorClasses.line} rounded-full`}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact-us"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Partner with Telth Today
                </a>
                <a 
                  href="/blog"
                  className="px-8 py-4 border-2 border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 font-semibold rounded-lg transition-colors duration-300"
                >
                  Learn More About Our Impact
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NGOs;