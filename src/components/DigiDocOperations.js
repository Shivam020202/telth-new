import React from 'react';
import { Link } from 'react-router-dom';

const DigiDocOperations = () => {
  const solutions = [
    {
      id: 1,
      title: 'DigiDoc Dashboard',
      image: 'assets/solutions/corporates/digidoc.jpg',
      alt: 'DigiDoc Dashboard',
      icon: 'fas fa-tachometer-alt',
      subtitle: 'Centralized Program Management',
      description: 'Manage services, beneficiaries, training, medicines, and outcomes from a single, intuitive dashboard.',
      linkColor: 'blue',
      href: '/digidoc.html'
    },
    {
      id: 2,
      title: 'G-MED Integration',
      image: 'assets/solutions/G Med ID.png',
      alt: 'G-MED Integration',
      icon: 'fas fa-notes-medical',
      subtitle: 'Unified Patient and Service Records',
      description: 'Seamlessly integrate and unify patient and service records for a comprehensive overview.',
      linkColor: 'green',
      href: null
    },
    {
      id: 3,
      title: 'Compliance Tools',
      image: 'assets/solutions/smart mobile.png',
      alt: 'Compliance Tools',
      icon: 'fas fa-clipboard-check',
      subtitle: 'Automated Reporting & SDG Alignment',
      description: 'Generate auto-reports linked to Sustainable Development Goal (SDG) metrics, ensuring accuracy and alignment.',
      linkColor: 'cyan',
      href: null
    }
  ];

  const impacts = [
    {
      title: 'Increase Operational Efficiency',
      description: 'Streamline workflows and reduce administrative burden for your NGO teams.'
    },
    {
      title: 'Align All Activities to Measurable Outcomes',
      description: 'Ensure every action contributes to clear, trackable, and impactful results.'
    },
    {
      title: 'Save Time on Manual Reporting and Compliance',
      description: 'Automate tedious tasks, freeing up valuable time for direct community engagement.'
    },
    {
      title: 'Enhanced Data Accuracy and Integrity',
      description: 'Ensure your program data is reliable and consistent for better decision-making.'
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
    <section id="digidoc" className="relative py-12 bg-gray-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyMDQsMjIxLDIzNSwwLjMpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">DigiDoc: NGO Operations Command Center</h2>
          <p className="text-lg text-gray-600">
            Managing programs shouldn't mean managing chaos. Telth's DigiDoc gives NGOs a centralized command
            center to track beneficiaries, services, and outcomes—while ensuring compliance and reporting are
            streamlined, accurate, and SDG-aligned.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution) => {
            const colorClasses = getColorClasses(solution.linkColor);
            const Component = solution.href ? Link : 'div';
            const componentProps = solution.href ? { to: solution.href } : {};
            
            return (
              <Component 
                key={solution.id}
                {...componentProps}
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
                  {solution.href && (
                    <div className={`${colorClasses.text} font-medium inline-flex items-center`}>
                      Learn more 
                      <i className="fas fa-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
                    </div>
                  )}
                </div>
              </Component>
            );
          })}
        </div>

        {/* Impact Section */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-4 pt-8 container mx-auto border border-gray-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Impact</h3>
            <p className="text-gray-600">Transforming NGO operations with efficiency and accountability</p>
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

export default DigiDocOperations;