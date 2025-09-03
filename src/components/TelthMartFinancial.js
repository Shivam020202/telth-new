import React from 'react';

const TelthMartFinancial = () => {
  const solutions = [
    {
      id: 1,
      title: 'Telth Mart',
      image: 'assets/solutions/ngo/mart.png',
      alt: 'Telth Mart',
      icon: 'fas fa-store',
      subtitle: 'Micro-Commerce Platform',
      description: 'A dedicated micro-commerce platform for Community Care Managers (CCMs) and volunteers to sell health and wellness kits.',
      linkColor: 'blue'
    },
    {
      id: 2,
      title: 'Microfinance & Donation Access',
      image: 'assets/solutions/ngo/microfinance.png',
      alt: 'Microfinance & Donation Access',
      icon: 'fas fa-hand-holding-usd',
      subtitle: 'Integrated Financial Tools',
      description: 'Built-in tools allowing community workers to apply for small loans, receive CSR funds, and manage donor aid efficiently.',
      linkColor: 'green'
    },
    {
      id: 3,
      title: 'Sustainable Self-Employment',
      image: 'assets/solutions/ngo/self-sustain.png',
      alt: 'Sustainable Self-Employment',
      icon: 'fas fa-briefcase',
      subtitle: 'Empowering Livelihoods',
      description: 'Turning community service into sustainable self-employment by providing earning opportunities and financial independence.',
      linkColor: 'cyan'
    }
  ];

  const impacts = [
    {
      title: 'Create Self-Employment Opportunities',
      description: 'Empowering individuals to generate their own income through valuable community services.'
    },
    {
      title: 'Provide Access to Essential Tools and Products',
      description: 'Ensuring community workers have the resources needed for both service delivery and income generation.'
    },
    {
      title: 'Improve Financial Resilience in Low-Income Communities',
      description: 'Building stronger economic foundations for individuals and families in underserved areas.'
    },
    {
      title: 'Enable Direct Donation Management',
      description: 'Facilitating the seamless receipt and management of donor funds by community workers.'
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
    <section id="telth-mart" className="relative py-12 bg-gray-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyMDQsMjIxLDIzNSwwLjMpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Telth Mart & Financial Access</h2>
          <p className="text-lg text-gray-600">
            Economic empowerment is essential for lasting change. Telth Mart and our integrated financial tools
            enable community workers to earn through product sales, access micro-loans, and receive
            donations—turning service into sustainable self-employment.
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
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Section */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-4 pt-8 container mx-auto border border-gray-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Impact</h3>
            <p className="text-gray-600">Fostering financial independence and community well-being</p>
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

export default TelthMartFinancial;