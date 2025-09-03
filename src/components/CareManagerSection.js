import React from 'react';

const CareManagerSection = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-white">
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section with Overlapping Elements */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-purple-900/5 rounded-3xl backdrop-blur-sm"></div>
            <div className="relative grid md:grid-cols-2 gap-8 items-center p-6 md:p-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-purple-50 text-purple-800 text-sm font-semibold px-4 py-1 rounded-full">
                    Care Manager
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Empower Your Healthcare Career
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  Transform your healthcare practice with Telth's Care Manager (CM) and Collaborative Care Manager (CCM) models. 
                  Build your network, earn more, and work flexibly as an independent healthcare professional.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-purple-100">
                    <div className="text-2xl font-bold text-purple-600">1 hr</div>
                    <div className="text-sm text-gray-600">Consultation</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-purple-100">
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-purple-100">
                    <div className="text-2xl font-bold text-purple-600">100%</div>
                    <div className="text-sm text-gray-600">Flexibility</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl opacity-10 blur-2xl"></div>
                <div className="relative bg-white max-h-96 rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src="assets/ai-smart-clinic.png" 
                    alt="Healthcare Professional Network"
                    className="w-full h-auto object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid with Hover Effects */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* One-Hour Consultation Cycle */}
            <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100 hover:border-purple-300 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 group-hover:bg-purple-200 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                One-Hour Consultation Cycle
              </h3>
              <p className="text-gray-600 mt-2">
                Complete patient consultations, prescriptions, and follow-ups efficiently within just one hour, 
                maximizing your productivity and patient care.
              </p>
            </div>

            {/* Network Building */}
            <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100 hover:border-purple-300 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 group-hover:bg-purple-200 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                Build Your Network
              </h3>
              <p className="text-gray-600 mt-2">
                Seamlessly connect with doctors, pharmacies, and hospitals. Create a robust professional network 
                for effortless referrals and collaborative care.
              </p>
            </div>

            {/* Solopreneur Opportunities */}
            <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100 hover:border-purple-300 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 group-hover:bg-purple-200 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                Earn as a Solopreneur
              </h3>
              <p className="text-gray-600 mt-2">
                Manage patient care while generating multiple revenue streams. Leverage our platform to build a 
                thriving independent healthcare practice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareManagerSection;