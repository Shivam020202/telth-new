import React, { useState } from 'react';

const TurnkeySolutions = () => {
  const [activeCategory, setActiveCategory] = useState('smart-clinics');

  const categories = {
    'smart-clinics': {
      title: 'Modular Clinics & Kiosks',
      image: 'assets/smart-clinic.jpg',
      description: 'Expand hospital reach with our innovative, modular clinic solutions. Strategically placed in public spaces, these smart clinics and kiosks bring high-quality healthcare closer to communities.',
      features: [
        {
          title: 'Flexible Deployment',
          description: 'Easily deployable in malls, airports, community centers, and other high-traffic areas.'
        },
        {
          title: 'Comprehensive Services',
          description: 'Full range of diagnostic and consultation services in a compact format.'
        },
        {
          title: 'Remote Monitoring',
          description: 'Real-time connectivity with main hospital systems for seamless care coordination.'
        }
      ]
    },
    'ai-hubs': {
      title: 'AI-Powered Smart Hubs',
      image: 'assets/ai-smart-clinic.png',
      description: 'Revolutionary healthcare hubs powered by artificial intelligence, providing automated diagnostics and intelligent patient triage for enhanced healthcare delivery.',
      features: [
        {
          title: 'AI Diagnostics',
          description: 'Advanced AI algorithms for accurate and rapid diagnostic assessments.'
        },
        {
          title: 'Smart Triage',
          description: 'Intelligent patient prioritization based on severity and medical history.'
        },
        {
          title: 'Predictive Analytics',
          description: 'Early warning systems for potential health issues and complications.'
        }
      ]
    },
    'medical-devices': {
      title: 'Advanced Medical Devices',
      image: 'assets/powered-hospitals.jpg',
      description: 'State-of-the-art medical equipment and IoT devices that integrate seamlessly with your existing infrastructure to provide enhanced diagnostic capabilities.',
      features: [
        {
          title: 'IoT Integration',
          description: 'Connected devices that provide real-time data and monitoring capabilities.'
        },
        {
          title: 'Advanced Diagnostics',
          description: 'Cutting-edge equipment for accurate and comprehensive health assessments.'
        },
        {
          title: 'Seamless Connectivity',
          description: 'Easy integration with existing hospital management systems.'
        }
      ]
    },
    'data-integration': {
      title: 'Seamless Data Integration',
      image: 'assets/smart-care-hub.jpg',
      description: 'Comprehensive data management solutions that unify patient records, streamline workflows, and ensure secure, compliant healthcare data handling.',
      features: [
        {
          title: 'Unified Records',
          description: 'Single source of truth for all patient data across multiple touchpoints.'
        },
        {
          title: 'Secure Cloud Storage',
          description: 'HIPAA-compliant cloud infrastructure for safe and reliable data storage.'
        },
        {
          title: 'Real-time Analytics',
          description: 'Live dashboards and reporting for informed decision-making.'
        }
      ]
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Turnkey Solutions for Healthcare Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Upgrading hospitals with smart, scalable technology. Our turnkey healthcare solutions help both new
            and existing medical facilities integrate cutting-edge technology for improved efficiency and patient
            outcomes.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center px-6 py-3 rounded-full text-gray-600 hover:scale-105 transition-all duration-300 shadow-md ${
                activeCategory === key 
                  ? 'bg-purple-600 text-white transform scale-105' 
                  : 'bg-white hover:bg-purple-50'
              }`}
            >
              <svg className="w-8 h-8 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {key === 'smart-clinics' && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M9 21h6" />
                )}
                {key === 'ai-hubs' && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                )}
                {key === 'medical-devices' && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                )}
                {key === 'data-integration' && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                )}
              </svg>
              <span className="font-medium">
                {key === 'smart-clinics' && 'Smart Clinics & Kiosks'}
                {key === 'ai-hubs' && 'AI-Powered Smart Hubs'}
                {key === 'medical-devices' && 'Advanced Medical Devices'}
                {key === 'data-integration' && 'Seamless Data Integration'}
              </span>
            </button>
          ))}
        </div>

        {/* Content Display Area */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
              <div className="h-64 lg:h-full relative overflow-hidden">
                <img 
                  src={categories[activeCategory].image} 
                  alt={categories[activeCategory].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent"></div>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="mb-8">
                <svg className="w-12 h-12 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {activeCategory === 'smart-clinics' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M9 21h6" />
                  )}
                  {activeCategory === 'ai-hubs' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                  )}
                  {activeCategory === 'medical-devices' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  )}
                  {activeCategory === 'data-integration' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  )}
                </svg>
                <h3 className="text-3xl font-bold text-gray-900">{categories[activeCategory].title}</h3>
                <p className="mt-4 text-gray-600">{categories[activeCategory].description}</p>
              </div>
              <div className="space-y-6">
                {categories[activeCategory].features.map((feature, index) => (
                  <div key={index} className="flex items-start p-4 bg-purple-50 rounded-xl">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-medium">{index + 1}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurnkeySolutions;