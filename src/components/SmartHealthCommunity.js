import React from 'react';
import { Link } from 'react-router-dom';

const SmartHealthCommunity = () => {
  const solutions = [
    {
      id: 1,
      title: 'Smart Health Examination Systems (HES)',
      image: 'assets/solutions/HES.png',
      alt: 'Health Examination Kiosk',
      icon: 'fas fa-clinic-medical',
      subtitle: 'Portable Diagnostics',
      description: 'Real-time vitals, screenings, and triage—ideal for outreach and field clinics.',
      linkColor: 'blue',
      href: '/diagnostic-devices.html'
    },
    {
      id: 2,
      title: 'Freelance Care Workers',
      image: 'assets/Care manager.png',
      alt: 'Freelance Care Workers',
      icon: 'fas fa-user-md',
      subtitle: 'Trained Professionals',
      description: 'A flexible pool of trained health workers to support last-mile delivery.',
      linkColor: 'green',
      href: '/care-provider.html'
    },
    {
      id: 3,
      title: 'Health Experience Stations (HES)',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      alt: 'Health Experience Stations',
      icon: 'fas fa-hospital',
      subtitle: 'Modular Care Hubs',
      description: 'Quick-to-deploy care hubs designed for remote and underserved areas.',
      linkColor: 'cyan',
      href: '/diagnostic-devices.html'
    }
  ];

  const impacts = [
    {
      title: 'Primary Care Delivery',
      description: 'Deliver primary and preventive care at the grassroots level with our portable solutions.'
    },
    {
      title: 'Remote Diagnostics',
      description: 'Reach remote communities with reliable diagnostics and screening tools.'
    },
    {
      title: 'Comprehensive Programs',
      description: 'Support chronic care, maternal health, and vaccination drives effectively.'
    },
    {
      title: 'Scalable Solutions',
      description: 'Modular systems that grow with your community\'s needs.'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
      green: { bg: 'bg-green-50', text: 'text-green-600' },
      cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="smart-health" className="relative py-12 bg-gray-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyMDQsMjIxLDIzNSwwLjMpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Smart Health Access & Community Care</h2>
          <p className="text-lg text-gray-600">
            Telth helps NGOs take healthcare to the last mile with smart kiosks, mobile clinics, and on-ground
            care teams. Our tools make it easy for your teams to deliver quick, quality care right where it's needed most.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution) => {
            const colorClasses = getColorClasses(solution.linkColor);
            return (
              <Link 
                key={solution.id}
                to={solution.href}
                className="group h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={solution.image}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    alt={solution.alt}
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-4">
                    <h3 className="text-lg font-semibold">{solution.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className={`${colorClasses.bg} ${colorClasses.text} p-2 rounded-lg mr-4`}>
                      <i className={`${solution.icon} text-xl`}></i>
                    </div>
                    <h4 className="font-medium text-gray-800">{solution.subtitle}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <div className={`${colorClasses.text} font-medium inline-flex items-center`}>
                    Learn more 
                    <i className="fas fa-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Impact Section */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-4 pt-8 container mx-auto border border-gray-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Impact</h3>
            <p className="text-gray-600">Transforming healthcare delivery in underserved communities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {impacts.map((impact, index) => (
              <div key={index} className="flex p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="text-purple-500 mr-4">
                  <i className="fas fa-check-circle text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">{impact.title}</h4>
                  <p className="text-gray-600">{impact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartHealthCommunity;