import React from 'react';

const HealthWealthCard = () => {
  return (
    <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      <section className="relative py-20">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <div className="relative z-10">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-4 py-1 bg-violet-800/50 backdrop-blur-sm rounded-full">
                  <span className="flex h-2 w-2 rounded-full bg-violet-400 animate-pulse"></span>
                  <span className="inline-block text-sm font-medium text-violet-200">
                    Innovative Wellness Solution
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent">
                    Health & Wealth Card
                  </span>
                </h1>
                <p className="text-xl text-violet-100">
                  Wellness & Financial Security in One Card
                </p>
                <p className="text-violet-200 text-lg">
                  Combining healthcare benefits with financial savings to offer a unique wellness solution
                  for individuals and corporate partners.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative group">
              <div className="relative p-1">
                <img 
                  src="assets/credit-card-payment.png" 
                  alt="Health & Wealth Card"
                  className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-500/10 to-pink-500/10 group-hover:from-violet-500/20 group-hover:to-pink-500/20 transition-all duration-300"></div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Healthcare Benefits */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Healthcare Benefits</h3>
              <p className="text-violet-200 text-sm">
                Comprehensive health coverage with access to top medical facilities and services.
              </p>
            </div>

            {/* Financial Security */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Financial Security</h3>
              <p className="text-violet-200 text-sm">
                Build wealth while maintaining health with integrated savings and investment options.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-violet-200 text-sm">
                Round-the-clock customer service and health support whenever you need it.
              </p>
            </div>

            {/* Easy Access */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Easy Access</h3>
              <p className="text-violet-200 text-sm">
                Simple card-based access to all benefits with seamless digital integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes animate-pulse-custom {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default HealthWealthCard;