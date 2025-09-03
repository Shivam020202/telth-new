import React from 'react';

const GlobalNetworkExcellence = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row mb-10">
          {/* Left Column - Partners Title */}
          <div className="w-1/2">
            <div className="sticky top-28">
              <span className="text-sm uppercase tracking-widest text-blue-600 mb-4 block">Strategic Alliances</span>
              <h2 className="text-4xl font-light text-gray-900 leading-tight mb-6">Global Network of Excellence</h2>
              <div className="h-px w-20 bg-gradient-to-r from-blue-600 to-purple-600 mt-6"></div>
              <p className="text-gray-600 mt-8 text-lg leading-relaxed">
                Telth's groundbreaking work is powered by elite collaborations across governments, industry
                leaders, and academic pioneers worldwide.
              </p>
            </div>
          </div>
          <div className="relative w-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100">
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20">
            </div>
            <div className="relative z-10 p-10">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                    </path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-gray-900">Government Collaborations</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Strategic partnerships with national governments in Ghana, Senegal, Nigeria, and Indian
                states including Himachal Pradesh, Uttarakhand, and Tamil Nadu enable our solutions to
                address diverse healthcare challenges at scale.
              </p>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center h-16">
                  <span className="font-medium text-gray-800">Ghana Health</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center h-16">
                  <span className="font-medium text-gray-800">Senegal MoH</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center h-16">
                  <span className="font-medium text-gray-800">Nigeria NHS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full flex flex-row gap-6">
          {/* Industry Card */}
          <div className="relative w-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100">
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20">
            </div>
            <div className="relative z-10 p-10">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                    </path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-gray-900">Industry Leaders</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our alliances with global corporations including the Alfardan Group (MENA) and LabAid
                (Bangladesh) integrate cutting-edge technology and expand our market reach with
                enterprise-grade solutions.
              </p>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center h-16">
                  <span className="font-medium text-gray-800">Alfardan</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center h-16">
                  <span className="font-medium text-gray-800">LabAid</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center h-16">
                  <span className="font-medium text-gray-800">MedTech</span>
                </div>
              </div>
            </div>
          </div>

          {/* Academia Card */}
          <div className="relative w-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100">
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20">
            </div>
            <div className="relative z-10 p-10">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                    </path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-gray-900">Academic Pioneers</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Collaborations with Johns Hopkins, Harvard, CUCOM, and Periyar University (under DST SATHI)
                ensure our solutions are powered by cutting-edge research and validated innovation.
              </p>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center h-16">
                  <span className="font-medium text-gray-800">Harvard Med</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center h-16">
                  <span className="font-medium text-gray-800">Johns Hopkins</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center h-16">
                  <span className="font-medium text-gray-800">Periyar Uni</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetworkExcellence;