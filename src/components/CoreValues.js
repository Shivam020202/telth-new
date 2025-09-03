import React from 'react';

const CoreValues = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We relentlessly integrate emerging technologies to keep healthcare practices ahead of the curve.',
      color: 'blue',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Accessibility',
      description: 'We believe high-quality healthcare should be available and affordable for everyone, irrespective of location.',
      color: 'green',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Compassion',
      description: 'Our solutions are designed to enhance the human experience in healthcare, ensuring every patient feels valued and cared for.',
      color: 'red',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Collaboration',
      description: 'We foster partnerships with healthcare providers, technology companies, and communities to create a unified approach to healthcare.',
      color: 'purple',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Sustainability',
      description: 'We develop environmentally conscious solutions that benefit both people and the planet for future generations.',
      color: 'teal',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from our technology to our customer service.',
      color: 'indigo',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-600',
        gradient: 'from-blue-50 to-white',
        border: 'border-blue-100 hover:border-blue-300',
        decorBg: 'bg-blue-600',
      },
      green: {
        bg: 'bg-green-600',
        gradient: 'from-green-50 to-white',
        border: 'border-green-100 hover:border-green-300',
        decorBg: 'bg-green-600',
      },
      red: {
        bg: 'bg-red-600',
        gradient: 'from-red-50 to-white',
        border: 'border-red-100 hover:border-red-300',
        decorBg: 'bg-red-600',
      },
      purple: {
        bg: 'bg-purple-600',
        gradient: 'from-purple-50 to-white',
        border: 'border-purple-100 hover:border-purple-300',
        decorBg: 'bg-purple-600',
      },
      teal: {
        bg: 'bg-teal-600',
        gradient: 'from-teal-50 to-white',
        border: 'border-teal-100 hover:border-teal-300',
        decorBg: 'bg-teal-600',
      },
      indigo: {
        bg: 'bg-indigo-600',
        gradient: 'from-indigo-50 to-white',
        border: 'border-indigo-100 hover:border-indigo-300',
        decorBg: 'bg-indigo-600',
      }
    };
    return colors[color];
  };

  return (
    <section className="w-full bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Core Values</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const colorClasses = getColorClasses(value.color);
            return (
              <div key={index} className="group">
                <div className={`relative overflow-hidden h-full bg-gradient-to-br ${colorClasses.gradient} p-8 rounded-3xl border ${colorClasses.border} transition-all duration-500 hover:shadow-xl`}>
                  <div className={`absolute -top-6 -left-6 w-24 h-24 ${colorClasses.decorBg} rounded-2xl opacity-10 group-hover:opacity-20 transition-all duration-500`}></div>
                  <div className={`absolute -bottom-6 -right-6 w-24 h-24 ${colorClasses.decorBg} rounded-full opacity-5 group-hover:opacity-15 transition-all duration-500`}></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500`}>
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;