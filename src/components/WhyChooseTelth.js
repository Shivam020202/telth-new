import React from 'react';

const WhyChooseTelth = () => {
  const benefits = [
    {
      number: '01',
      title: 'Comprehensive Care',
      description: 'Our integrated solutions span telemedicine, real-time monitoring, smart diagnostics, and home healthcare, covering every facet of care delivery.',
      color: 'blue',
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Advanced Technology',
      description: 'Leveraging IoMT, AI, blockchain, and digital diagnostics, we provide timely, accurate, and efficient healthcare services.',
      color: 'green',
      icon: (
        <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Patient-Centric Approach',
      description: 'Designed with patients in mind, our services offer unmatched convenience, real-time insights, and a seamless healthcare experience.',
      color: 'purple',
      icon: (
        <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Trusted Partnership',
      description: 'With over a decade of proven excellence, Telth is a reliable partner for healthcare providers and patients alike.',
      color: 'red',
      icon: (
        <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-gray-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light mb-4">Why Choose Telth?</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r from-${benefit.color}-600 to-${benefit.color}-400 transform -skew-y-6 opacity-25 group-hover:-skew-y-3 transition-all duration-300`}></div>
              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`text-${benefit.color}-400 text-5xl font-light`}>{benefit.number}</div>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-medium mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .text-blue-400 { color: #60a5fa; }
        .text-green-400 { color: #4ade80; }
        .text-purple-400 { color: #a78bfa; }
        .text-red-400 { color: #f87171; }
        .from-blue-600 { --tw-gradient-from: #2563eb; }
        .to-blue-400 { --tw-gradient-to: #60a5fa; }
        .from-green-600 { --tw-gradient-from: #16a34a; }
        .to-green-400 { --tw-gradient-to: #4ade80; }
        .from-purple-600 { --tw-gradient-from: #9333ea; }
        .to-purple-400 { --tw-gradient-to: #a78bfa; }
        .from-red-600 { --tw-gradient-from: #dc2626; }
        .to-red-400 { --tw-gradient-to: #f87171; }
      `}</style>
    </section>
  );
};

export default WhyChooseTelth;