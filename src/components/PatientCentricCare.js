import React from 'react';

const PatientCentricCare = () => {
  const careServices = [
    {
      title: 'One-Hour Consultation Cycle',
      description: 'Experience healthcare efficiency like never before. From doctor visits to prescription fulfillment, our streamlined process ensures you receive comprehensive medical care within just one hour.',
      image: 'https://images.unsplash.com/photo-1579154204449-47c454770447?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Telehealth Convenience',
      description: 'Access top-tier medical professionals instantly, without the hassle of long wait times. Our telehealth platform connects you with qualified doctors at the click of a button, bringing expert healthcare directly to your device.',
      image: 'https://images.unsplash.com/photo-1535903640092-9d0f270e02bf?q=80&w=2906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Home Care Services',
      description: 'We bring medical support directly to your doorstep. Our comprehensive home care services ensure you receive professional medical attention in the comfort and safety of your own home.',
      image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Smart Health Monitoring',
      description: 'Leverage cutting-edge AI-driven insights for comprehensive health tracking. Our advanced monitoring system provides real-time analysis, predictive health assessments, and personalized wellness recommendations.',
      image: 'https://images.unsplash.com/photo-1666887360974-5cab0bd3ef52?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Data-Powered Personalization',
      description: 'Our AI generates tailored health recommendations based on your unique medical profile. Experience truly personalized healthcare that adapts to your specific needs, history, and wellness goals.',
      image: 'https://images.unsplash.com/photo-1705264895993-c544cf74a0c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Patient-Friendly Experience',
      description: 'We\'ve simplified healthcare navigation with clear, straightforward service descriptions. Our intuitive platform ensures effortless use, making complex medical services accessible to everyone.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <section className="min-h-screen max-w-7xl py-20 mx-auto px-6">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Patient-Centric Care</h2>
        <p className="text-gray-600 text-lg max-w-3xl">
          Seamless, Data-Driven Healthcare Solutions. We prioritize convenience, accessibility, and high-quality
          care through our AI-powered platform, ensuring fast, personalized, and efficient healthcare services.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative">
        <div className="slider-container flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-12">
          {careServices.map((service, index) => (
            <div key={index} className="min-w-[450px] md:min-w-[800px] rounded-3xl overflow-hidden shadow-lg snap-start">
              <div className="relative h-[350px] md:h-[500px]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-200 text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {careServices.map((_, index) => (
            <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .slider-container {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .slider-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default PatientCentricCare;