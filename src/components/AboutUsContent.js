import React from 'react';

const AboutUsContent = () => {
  return (
    <>
      {/* About Section with Tech Background */}
      <section className="relative overflow-hidden w-full py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Tech background grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}>
          </div>
        </div>

        {/* Abstract tech shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
          <svg viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg">
            <path fill="#2563eb" d="M160,0 L200,0 L200,600 L0,600 L160,0 Z"></path>
          </svg>
        </div>
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/5 backdrop-blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-indigo-500/5 backdrop-blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Main content */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left column - Image and title */}
            <div className="w-full lg:w-2/5">
              <div className="relative">
                {/* Decorative tech elements */}
                <div className="absolute -left-6 -top-6 w-24 h-24 border-l-2 border-t-2 border-blue-400"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 border-r-2 border-b-2 border-blue-400"></div>

                {/* Image container with reflection effect */}
                <div className="relative bg-gradient-to-tr from-blue-900 to-slate-800 p-6 rounded-xl shadow-2xl mb-12">
                  <img 
                    src="assets/banners/about-section.png" 
                    alt="Digital Healthcare"
                    className="w-full h-auto rounded-lg object-cover shadow-lg" 
                  />

                  {/* Tech overlay indicators */}
                  <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-blue-400"></div>
                  <div className="absolute top-3 right-9 w-3 h-3 rounded-full bg-indigo-400"></div>
                  <div className="absolute top-3 right-15 w-3 h-3 rounded-full bg-sky-400"></div>

                  {/* Tech data visualization line */}
                  <div className="absolute bottom-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                </div>

                {/* Title with futuristic elements */}
                <div className="relative z-10 pl-6 border-l-2 border-blue-500">
                  <span className="text-sm text-blue-400 uppercase tracking-wider font-medium">Since 2012</span>
                  <h2 className="text-4xl font-light text-white mt-2 tracking-tight">About Telth</h2>
                  <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                </div>
              </div>
            </div>

            {/* Right column - Content */}
            <div className="w-full lg:w-3/5">
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-xl relative">
                {/* Tech connector line */}
                <div className="absolute -left-8 top-1/2 w-8 h-px bg-blue-400"></div>

                <p className="text-blue-50 leading-relaxed text-lg">
                  At Telth, we are revolutionizing healthcare delivery by harnessing cutting-edge digital
                  technologies to provide personalized, accessible, and innovative care. Since our inception in 2012, Telth
                  has become a trusted partner in transforming healthcare—combining state-of-the-art Internet of
                  Medical Things (IoMT), AI-driven diagnostics powered by our proprietary P3DSC protocol,
                  blockchain-secured data management, and advanced digital solutions to create a seamless, end-to-end care
                  ecosystem.
                </p>

                {/* Futuristic separator */}
                <div className="my-6 w-full flex items-center">
                  <div className="h-px flex-grow bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                  <div className="mx-4 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="h-px flex-grow bg-gradient-to-r from-blue-400 via-transparent to-transparent"></div>
                </div>

                <p className="text-blue-50 leading-relaxed text-lg">
                  Our comprehensive services range from telemedicine and smart diagnostics to point-of-care
                  testing and home healthcare, empowering patients to take charge of their well-being while equipping
                  providers with the tools for real-time, precision care.
                </p>

                {/* Tech feature indicators */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                      <div className="w-5 h-5 rounded-full bg-blue-400"></div>
                    </div>
                    <span className="text-xs text-blue-200 font-medium tracking-wider text-center">IoMT TECHNOLOGY</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mb-2">
                      <div className="w-5 h-5 rounded-full bg-indigo-400"></div>
                    </div>
                    <span className="text-xs text-blue-200 font-medium tracking-wider text-center">AI DIAGNOSTICS</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center mb-2">
                      <div className="w-5 h-5 rounded-full bg-sky-400"></div>
                    </div>
                    <span className="text-xs text-blue-200 font-medium tracking-wider text-center">BLOCKCHAIN SECURED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decorative line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-16"></div>
        </div>
      </section>

      {/* Mission, Vision and Values Section */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Grid Layout for Mission and Vision with glass morphism effect */}
        <div className="flex flex-col md:flex-row w-full gap-1 md:gap-6 mb-16">
          {/* Mission Section */}
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-purple-900 p-0.5">
            <div className="relative bg-gray-900 rounded-2xl p-12 h-full backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.1)_0,_transparent_70%)]"></div>
              <span className="text-xs uppercase tracking-widest text-purple-400 mb-4 block">Our Mission</span>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
                To empower businesses through innovative technology solutions while maintaining the highest
                standards of excellence and integrity.
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We strive to create lasting value for our clients, employees, and communities through
                sustainable practices and forward-thinking approaches.
              </p>
              {/* Techy decorative element */}
              <div className="absolute top-6 right-6 w-16 h-16">
                <div className="absolute inset-0 border-2 border-purple-400 opacity-20 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 border-2 border-purple-400 opacity-30 rounded-full animate-pulse delay-75"></div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 p-0.5 mt-6 md:mt-0">
            <div className="relative bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-12 h-full backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(167,139,250,0.15)_0,_transparent_70%)]"></div>
              <span className="text-xs uppercase tracking-widest text-purple-200 mb-4 block">Our Vision</span>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
                To be the global leader in transformative digital solutions, recognized for our commitment to
                excellence.
              </h2>
              <p className="text-purple-100 leading-relaxed">
                We envision a future where technology enhances human potential and creates positive impact
                across societies.
              </p>
              {/* Techy decorative element */}
              <div className="absolute bottom-6 left-6 w-16 h-16">
                <div className="absolute inset-0 border-2 border-white opacity-20 rotate-45"></div>
                <div className="absolute inset-4 border-2 border-white opacity-30 rotate-45"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Strip with futuristic cards */}
        <div className="relative">
          {/* Background glow effect */}
          <div className="absolute rounded-2xl -z-10"></div>

          <div className="bg-gray-900 backdrop-blur-md rounded-2xl p-8 border border-gray-800/50">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Our Core Values</span>
              <h2 className="text-2xl md:text-3xl font-light text-white">What Drives Us Forward</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Innovation */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Continuously pushing boundaries to deliver cutting-edge solutions that transform industries.
                </p>
              </div>

              {/* Excellence */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Maintaining the highest standards in everything we do, from code quality to customer service.
                </p>
              </div>

              {/* Integrity */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Integrity</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Operating with transparency, honesty, and ethical practices in all our business relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;