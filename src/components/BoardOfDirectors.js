import React from 'react';

const BoardOfDirectors = () => {
  const directors = [
    {
      name: 'Dr. Ramanathan Raju',
      title: 'President and Chief Mentor, Network Operations',
      description: 'A highly esteemed healthcare administrator and technology adviser, Dr. Raju serves as the Chairman of the Board at RIMS Lab – HC. Recognized as one of the "100 Most-Influential People in Healthcare" in the USA.',
      achievement: 'Top 25 Minority Executives in Healthcare',
      color: 'blue',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      name: 'Dr. Alex Ephrem',
      title: 'President and Chief Mentor, International Digital Health Park',
      description: 'An accomplished academic administrator with global experience spanning the United States and the Caribbean. Founding member of Telth\'s Medical Education and Research division.',
      achievement: 'International Healthcare Expert',
      color: 'green',
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      name: 'Dr. Saravanan Babu',
      title: 'Mentor – Strategies, Employee Training, Investments and Operations',
      description: 'A visionary healthcare futurist with experience at organizations like the World Bank, United Nations, IMF, and IFC. Passionate about reforming the healthcare and wellness industry.',
      achievement: 'Global Healthcare Strategist',
      color: 'yellow',
      icon: (
        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      name: 'Vinay Preet Singh',
      title: 'Director & Founding Member, President – India Operations',
      description: 'With extensive experience advising Fortune 500 companies and a strong commitment to public service, leads market expansion in India. Strategic acumen in policy making and public affairs.',
      achievement: 'Market Expansion Leader',
      color: 'red',
      icon: (
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'Dr. Raja K.',
      title: 'Chief Technology Officer & Healthcare Futurist',
      description: 'A serial entrepreneur and pioneering healthcare innovator, driving the development of precise data-driven digital care protocols (P3DC and P3DSC). Inventor of Telth and the Telth HES Box.',
      achievement: 'Pioneer in Healthcare Technology',
      color: 'purple',
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      name: 'Angel Sharan',
      title: 'Chief Research Officer & Network Business Strategist',
      description: 'Healthcare Futurist and Young Scientist Award winner. Patent architect behind the Telth Network, leading research on Root Cloud and Telth Wireless Body Area Network (TWBAN).',
      achievement: 'Research Pioneer',
      color: 'indigo',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Dr. Pooja Subbarao',
      title: 'ACTO (P3DSC) and Junior Trustee',
      description: 'An enterprising healthcare professional and educator with experience from Harvard Medical School and Massachusetts General Hospital. Crucial role in quality assurance and research.',
      achievement: 'Quality Assurance Leader',
      color: 'pink',
      icon: (
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { gradient: 'from-blue-600 to-blue-400', bg: 'bg-blue-100', text: 'text-blue-600' },
      green: { gradient: 'from-green-600 to-green-400', bg: 'bg-green-100', text: 'text-green-600' },
      yellow: { gradient: 'from-yellow-600 to-yellow-400', bg: 'bg-yellow-100', text: 'text-yellow-600' },
      red: { gradient: 'from-red-600 to-red-400', bg: 'bg-red-100', text: 'text-red-600' },
      purple: { gradient: 'from-purple-600 to-purple-400', bg: 'bg-purple-100', text: 'text-purple-600' },
      indigo: { gradient: 'from-indigo-600 to-indigo-400', bg: 'bg-indigo-100', text: 'text-indigo-600' },
      pink: { gradient: 'from-pink-600 to-pink-400', bg: 'bg-pink-100', text: 'text-pink-600' }
    };
    return colors[color];
  };

  return (
    <section className="w-full py-24">
      <div className="max-w-[1500px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-light text-gray-900 mb-6">Board of Directors & Executives</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our leadership is the cornerstone of Telth's success, driving innovation and ensuring excellence in
            healthcare delivery.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-8"></div>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director, index) => {
            const colorClasses = getColorClasses(director.color);
            return (
              <div key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <div className={`h-3 bg-gradient-to-r ${colorClasses.gradient}`}></div>
                  <div className="p-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{director.name}</h3>
                        <p className={`${colorClasses.text} font-medium mt-1`}>{director.title}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-full ${colorClasses.bg} flex items-center justify-center`}>
                        {director.icon}
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {director.description}
                    </p>
                    <div className="mt-6 flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      {director.achievement}
                    </div>
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

export default BoardOfDirectors;