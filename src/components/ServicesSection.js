import React from 'react';

const ServicesSection = () => {
  return (
    <section className="py-20 overflow-hidden max-w-7xl mx-auto">
      {/* Header */}
      <div className="container mx-auto px-4 mb-16">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 transform -skew-y-6"></div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Empowering Health and Wellness for All
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              Explore how Telth's comprehensive services cater to different stakeholders in the healthcare
              ecosystem, including care seekers, care providers, and government agencies.
            </p>
          </div>
        </div>
      </div>

      {/* Services Cards */}
      <div className="space-y-16 mt-20">
        {/* Care Seekers - Left Aligned */}
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl overflow-hidden shadow-xl">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-2/5 p-8 lg:p-12">
                  <div className="h-14 w-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">For Care & Wellness Seekers</h3>
                  <p className="text-lg text-purple-700 font-semibold mb-4">Personalized Healthcare, Directly to You</p>
                  <p className="text-gray-600 mb-8">
                    At Telth, we provide customized care plans and advanced health monitoring to ensure
                    that every individual receives the care they need, when they need it.
                  </p>
                </div>
                <div className="lg:w-3/5 p-8 lg:p-12 bg-white">
                  <div className="space-y-6">
                    <div className="flex items-center p-4 rounded-xl bg-purple-50">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Personal Physicians</h4>
                        <p className="text-gray-600">Access to dedicated healthcare professionals without additional costs</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 rounded-xl bg-purple-50">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Continuous Care with Health Card</h4>
                        <p className="text-gray-600">Manage your healthcare expenses while building wealth</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 rounded-xl bg-purple-50">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Smart Health Monitoring</h4>
                        <p className="text-gray-600">Real-time health tracking with AI-powered insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Care Providers - Right Aligned */}
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl overflow-hidden shadow-xl">
              <div className="flex flex-col lg:flex-row-reverse items-center">
                <div className="lg:w-2/5 p-8 lg:p-12">
                  <div className="h-14 w-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">For Healthcare Providers</h3>
                  <p className="text-lg text-indigo-700 font-semibold mb-4">Advanced Tools for Better Care</p>
                  <p className="text-gray-600 mb-8">
                    Empower your practice with cutting-edge technology, streamlined workflows, and comprehensive
                    patient management tools designed to enhance care quality.
                  </p>
                </div>
                <div className="lg:w-3/5 p-8 lg:p-12 bg-white">
                  <div className="space-y-6">
                    <div className="flex items-center p-4 rounded-xl bg-indigo-50">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Smart Analytics</h4>
                        <p className="text-gray-600">Real-time insights and predictive analytics for better patient outcomes</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 rounded-xl bg-indigo-50">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Network Expansion</h4>
                        <p className="text-gray-600">Connect with a wider network of healthcare professionals and patients</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 rounded-xl bg-indigo-50">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Increased Revenue</h4>
                        <p className="text-gray-600">Flexible earning opportunities as an independent healthcare entrepreneur</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Government Agencies - Left Aligned */}
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl overflow-hidden shadow-xl">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-2/5 p-8 lg:p-12">
                  <div className="h-14 w-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M9 21h6M9 7h6" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">For Government Agencies</h3>
                  <p className="text-lg text-green-700 font-semibold mb-4">Public Health Infrastructure</p>
                  <p className="text-gray-600 mb-8">
                    Support public health initiatives with scalable solutions that improve healthcare accessibility
                    and efficiency across communities.
                  </p>
                </div>
                <div className="lg:w-3/5 p-8 lg:p-12 bg-white">
                  <div className="space-y-6">
                    <div className="flex items-center p-4 rounded-xl bg-green-50">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Population Health Analytics</h4>
                        <p className="text-gray-600">Comprehensive data insights for informed public health decisions</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 rounded-xl bg-green-50">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Rural Healthcare Access</h4>
                        <p className="text-gray-600">Mobile clinics and telemedicine solutions for underserved areas</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 rounded-xl bg-green-50">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Regulatory Compliance</h4>
                        <p className="text-gray-600">Built-in compliance with healthcare regulations and standards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;