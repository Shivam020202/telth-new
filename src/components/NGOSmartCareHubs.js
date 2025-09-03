import React from 'react';

const NGOSmartCareHubs = () => {
  const solutions = [
    {
      id: 1,
      title: 'Co-branded Modular Hubs',
      image: 'assets/smart-care-hub.jpg',
      alt: 'Modular Hubs',
      icon: 'fas fa-hand-holding-medical',
      subtitle: 'Integrated Community Support',
      description: 'Deliver comprehensive care, training, and micro-enterprise support all within one flexible setup.',
      linkColor: 'blue'
    },
    {
      id: 2,
      title: 'Mobile Med Units',
      image: 'assets/solutions/Telth Hubs.png',
      alt: 'Mobile Med Units',
      icon: 'fas fa-truck-medical',
      subtitle: 'Doorstep Diagnostics & Care',
      description: 'Field-ready mobile clinics designed to bring essential healthcare services directly to remote and underserved areas.',
      linkColor: 'green'
    },
    {
      id: 3,
      title: 'Rapid Deployment & Integrated Tools',
      image: 'assets/misx/mobile-clinic.jpg',
      alt: 'Rapid Deployment',
      icon: 'fas fa-fast-forward',
      subtitle: 'Quick Setup, Comprehensive Services',
      description: 'Suitable for urban slums, rural villages, and conflict-affected regions, with integrated diagnostics, insurance, Telth Mart, and more.',
      linkColor: 'cyan',
      hasLearnMore: true
    }
  ];

  const impacts = [
    {
      title: 'Provide 360-Degree Community Services in One Hub',
      description: 'Offer a complete suite of healthcare, training, and livelihood support from a single point of access.'
    },
    {
      title: 'Improve Access to Care, Income, and Information',
      description: 'Bridge critical gaps by bringing essential services and opportunities closer to communities.'
    },
    {
      title: 'Scale Fast with Minimum Setup Time',
      description: 'Enable quick deployment of vital services where and when they are needed most, without extensive delays.'
    },
    {
      title: 'Adaptable to Diverse Environments',
      description: 'Our modular design ensures effective operation in various challenging settings.'
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
    <section id="ngo-smart-care" className="relative py-12 bg-gray-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyMDQsMjIxLDIzNSwwLjMpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">NGO Smart Care Hubs</h2>
          <p className="text-lg text-gray-600">
            One hub. Many solutions. Telth's Smart Care Hubs bring together healthcare, training, and livelihood
            tools in a modular, co-branded setup—designed for rapid deployment in underserved and high-need
            communities.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution) => {
            const colorClasses = getColorClasses(solution.linkColor);
            return (
              <div 
                key={solution.id}
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
                  {solution.hasLearnMore && (
                    <div className={`${colorClasses.text} font-medium inline-flex items-center`}>
                      Learn more 
                      <i className="fas fa-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Section */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-4 pt-8 container mx-auto border border-gray-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Impact</h3>
            <p className="text-gray-600">Delivering holistic solutions to underserved communities</p>
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

export default NGOSmartCareHubs;