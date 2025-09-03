import React from 'react';

const AboutUsHero = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="relative max-h-[75vh] w-full overflow-hidden">
        {/* Mobile Background (loads only on mobile) */}
        <div className="absolute inset-0 w-full h-full md:hidden">
          <img 
            src="assets/banners/about-us.png" 
            alt="Mobile background" 
            className="w-full h-full object-cover"
            loading="lazy" 
            decoding="async"
          />
        </div>

        {/* Desktop Background (loads only on desktop) */}
        <div className="absolute inset-0 w-full h-full hidden md:block">
          <img 
            src="assets/banners/about-us.png" 
            alt="Desktop background" 
            className="w-full h-full object-cover"
            loading="lazy" 
            decoding="async"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 h-[75vh] flex flex-col justify-center items-start">
          {/* Text Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-indigo-800 mb-6 animate-fade-in">
              Welcome to Telth – The Future of Healthcare
            </h1>
            <p className="text-lg md:text-xl text-indigo-700 mb-8 leading-relaxed">
              Unlock new possibilities with cutting-edge healthcare solutions that empower providers and patients
              alike. Join a global movement redefining the future of healthcare.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#" 
                className="group relative inline-block px-8 py-2 bg-violet-600 text-white font-semibold rounded-lg 
                          overflow-hidden transition-all duration-300 transform hover:scale-105
                          hover:shadow-[0_8px_25px_rgba(139,92,246,0.5)] focus:outline-none"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 
                               transform scale-x-0 transition-transform duration-300 origin-left
                               group-hover:scale-x-100">
                </div>
              </a>
              <a 
                href="#" 
                className="group relative inline-block px-8 py-2 bg-transparent text-indigo-600 font-semibold 
                          rounded-lg border-2 border-indigo-600 overflow-hidden transition-all duration-300
                          hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transform hover:scale-105
                          focus:outline-none"
              >
                <span className="relative z-10 group-hover:text-violet-900">Learn More</span>
                <div className="absolute inset-0 bg-white transform translate-y-full 
                               transition-transform duration-300 group-hover:translate-y-0">
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Motto Section - Subtle top banner */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto py-3 px-4">
          <p className="text-center text-sm font-light tracking-wider">
            "Transforming Healthcare Today for a Healthier Tomorrow"
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUsHero;