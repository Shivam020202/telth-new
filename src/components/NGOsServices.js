import React from 'react';

const NGOsServices = () => {
  const services = [
    {
      id: 'smart-health',
      title: 'Smart Health Access & Community Care',
      image: 'assets/misx/primary-care.jpg',
      alt: 'Smart Health Access & Community Care'
    },
    {
      id: 'skill-training',
      title: 'Skill Training & Livelihood Generation',
      image: 'assets/misx/secondary-care.jpg',
      alt: 'Skill Training & Livelihood Generation'
    },
    {
      id: 'volunteer-tools',
      title: 'Volunteer & Benefactor Tools',
      image: 'assets/solutions/ngo/volunteer.png',
      alt: 'Volunteer & Benefactor Tools'
    },
    {
      id: 'telth-mart',
      title: 'Telth Mart & Financial Access',
      image: 'assets/solutions/ngo/financial-access.png',
      alt: 'Telth Mart & Financial Access'
    },
    {
      id: 'digidoc',
      title: 'DigiDoc: NGO Operations Command Center',
      image: 'assets/solutions/corporates/digidoc.jpg',
      alt: 'DigiDoc: NGO Operations Command Center'
    }
  ];

  const additionalServices = [
    {
      id: 'smart-care',
      title: 'NGO Smart Care Hubs',
      image: 'assets/smart-clinic.jpg',
      alt: 'NGO Smart Care Hubs'
    },
    {
      id: 'global-volunteer',
      title: 'Global Volunteer & Benefactor Platform',
      image: 'assets/solutions/ngo/benefactor.png',
      alt: 'Global Volunteer & Benefactor Platform'
    }
  ];

  const ServiceCard = ({ service, href }) => (
    <a href={href} className="service-card group block">
      <div className="relative h-80 bg-gray-200 rounded-2xl overflow-hidden">
        <img 
          src={service.image} 
          alt={service.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-6 left-6 right-6 flex flex-row justify-between items-center">
          <h3 className="text-white font-semibold text-lg">{service.title}</h3>
          <div className="flex justify-end">
            <div className="service-arrow bg-purple-500 rounded-full p-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <section className="py-8 bg-purple-50 border border-purple-100 rounded-2xl px-6 container mx-auto">
      {/* Header */}
      <div className="w-full mb-12">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-3xl text-center lg:text-4xl font-bold text-gray-900 leading-tight">
            Comprehensive
            <span className="text-gray-800"> Care Solutions</span>
          </h2>
          <p className="text-lg mt-2 text-center w-full font-regular text-gray-700">
            Comprehensive care solutions tailored to your needs. Choose quality, choose healthcare excellence.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((service) => (
          <ServiceCard 
            key={service.id}
            service={service}
            href={`#${service.id}`}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-6 gap-6">
        {additionalServices.map((service) => (
          <ServiceCard 
            key={service.id}
            service={service}
            href={`#${service.id}`}
          />
        ))}
      </div>

      <style jsx>{`
        .service-card {
          transition: all 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-4px);
        }
        .service-arrow {
          transition: all 0.3s ease;
        }
        .service-card:hover .service-arrow {
          transform: rotate(45deg);
        }
      `}</style>
    </section>
  );
};

export default NGOsServices;