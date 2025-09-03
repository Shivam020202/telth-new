import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GovernmentSectorContent = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Custom styles to match original
  const customStyles = {
    cardHover: {
      transition: 'all 0.3s ease',
    },
    purpleGradient: {
      background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    },
    smartClinicCard: {
      borderRadius: '12px',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
    },
  };

  return (
    <>
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="py-6 md:py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Content */}
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-violet-900 leading-tight">
                Modernizing Government Healthcare Services
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Governments are the backbone of public healthcare, but challenges like slow processes, limited access, and outdated infrastructure can hinder it. We bring AI-powered, patented solutions to strengthen public healthcare—making every step from primary care to emergency response faster, smarter, and more efficient.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/contact-us"
                  className="px-8 py-3.5 bg-purple-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-xl overflow-hidden border border-gray-300">
                <img 
                  className="w-full h-auto object-cover" 
                  src="assets/misx/telth-govt-banner.png" 
                  alt="Healthcare professional visiting patient at home"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Care Solutions */}
      <section className="py-8 bg-purple-50 border border-purple-100 rounded-2xl px-6 container mx-auto">
        {/* Header */}
        <div className="w-full mb-12">
          <h2 className="text-3xl text-center lg:text-4xl font-bold text-gray-900 leading-tight">
            Comprehensive <span className="text-gray-800">Care Solutions</span>
          </h2>
          <p className="text-lg mt-2 text-center w-full font-regular text-gray-700">
            Comprehensive care solutions tailored to your needs. Choose quality, choose healthcare excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Service Card */}
          <a href="#primary-care" className="service-card group block">
            <div className="relative h-80 bg-gray-200 rounded-2xl overflow-hidden">
              <img src="assets/misx/primary-care.jpg" alt="Primary Care" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-row justify-between items-center">
                <h3 className="text-white font-semibold text-lg">Primary Care</h3>
                <div className="flex justify-end">
                  <div className="service-arrow bg-purple-500 rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="#secondary-tertiary-care" className="service-card group block">
            <div className="relative h-80 bg-gray-200 rounded-2xl overflow-hidden">
              <img src="assets/misx/secondary-care.jpg" alt="Secondary & Tertiary Care" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-row justify-between items-center">
                <h3 className="text-white font-semibold text-lg">Secondary & Tertiary Care</h3>
                <div className="flex justify-end">
                  <div className="service-arrow bg-purple-500 rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="#emergency-care" className="service-card group block">
            <div className="relative h-80 bg-gray-200 rounded-2xl overflow-hidden">
              <img src="assets/misx/emergency.jpg" alt="Emergency Care" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-row justify-between items-center">
                <h3 className="text-white font-semibold text-lg">Emergency Care</h3>
                <div className="flex justify-end">
                  <div className="service-arrow bg-purple-500 rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="#frontline-health-workers" className="service-card group block">
            <div className="relative h-80 bg-gray-200 rounded-2xl overflow-hidden">
              <img src="assets/misx/frontline.jpg" alt="Frontline Workers" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-row justify-between items-center">
                <h3 className="text-white font-semibold text-lg">Frontline Workers</h3>
                <div className="flex justify-end">
                  <div className="service-arrow bg-purple-500 rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="#mobile-clinics" className="service-card group block">
            <div className="relative h-80 bg-gray-200 rounded-2xl overflow-hidden">
              <img src="assets/misx/mobile-clinic.jpg" alt="Mobile Clinics" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-row justify-between items-center">
                <h3 className="text-white font-semibold text-lg">Mobile Clinics</h3>
                <div className="flex justify-end">
                  <div className="service-arrow bg-purple-500 rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Primary Care Section */}
      <div id="primary-care" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Revolutionizing Primary Care
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              AI-powered POCT devices offer real-time diagnostics for 100+ essential parameters in just 3–15 minutes – tailored to primary care needs.
            </p>
          </div>

          {/* Featured Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <a href="/faster-diagnosis" className="group">
              <div className="feature-card h-full bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100" style={customStyles.cardHover}>
                <div className="relative h-64 w-full overflow-hidden">
                  <img 
                    src="assets/solutions/AI-Powered Diagnostic Tools.png" 
                    alt="AI Diagnosis" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                      Faster, smarter diagnosis
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    AI-driven diagnosis cuts down the process, enabling faster results and allowing doctors to make quicker, more informed decisions.
                  </p>
                </div>
              </div>
            </a>

            <a href="/walk-in-kiosks" className="group">
              <div className="feature-card h-full bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100" style={customStyles.cardHover}>
                <div className="relative h-64 w-full overflow-hidden">
                  <img 
                    src="assets/solutions/Walk-in AI kiosks.png" 
                    alt="Walk-in AI kiosks" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                      Walk-in AI kiosks
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Placed at the entrance of PHCs reduce the need for multiple visits – patients can self-test, then see the doctor with results in hand.
                  </p>
                </div>
              </div>
            </a>

            <a href="/abha-integration" className="group">
              <div className="feature-card h-full bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100" style={customStyles.cardHover}>
                <div className="relative h-64 w-full overflow-hidden">
                  <img 
                    src="assets/solutions/ABHA & G Med ID.png" 
                    alt="Integrated with ABHA & G-MED ID" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                      Integrated with ABHA & G-MED ID
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Secure, continuous patient history across care levels.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">No more back-and-forth</h4>
              <p className="text-gray-600 text-sm">Testing happens upfront, streamlining the care journey and reducing crowding.</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI-enabled triage tools</h4>
              <p className="text-gray-600 text-sm">Guide referrals and care pathways based on test results and symptoms.</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Perfect for rural areas</h4>
              <p className="text-gray-600 text-sm">Ideal for rural, remote, or high-load primary care centers where speed and simplicity are critical.</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Empowers ASHA workers</h4>
              <p className="text-gray-600 text-sm">Enables ASHA workers and CM/CCMs to initiate diagnostic and triage steps, improving early intervention rates.</p>
            </div>
          </div>

          {/* Our Impact Section */}
          <section className="pt-12 container mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-purple-600 mr-3"></span>
                  Our Impact
                </h2>
              </div>

              {/* Impact Grid */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="impact-item mb-6">
                  <div className="impact-icon w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Smart Diagnostic Zones</h3>
                  <p className="text-sm text-gray-600">Turn PHC entrances into smart diagnostic zones with walk-in kiosks that test before the doctor consult.</p>
                </div>

                <div className="impact-item mb-6">
                  <div className="impact-icon w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Instant Decision Support</h3>
                  <p className="text-sm text-gray-600">Cut decision delays—AI instantly flags abnormal results and suggests next steps.</p>
                </div>

                <div className="impact-item mb-6">
                  <div className="impact-icon w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Early Detection</h3>
                  <p className="text-sm text-gray-600">Catch conditions before they worsen—comprehensive testing reveals hidden risks.</p>
                </div>

                <div className="impact-item mb-6">
                  <div className="impact-icon w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Queue Optimization</h3>
                  <p className="text-sm text-gray-600">Smart triage reduces waiting times and ensures critical cases get priority.</p>
                </div>

                <div className="impact-item mb-6">
                  <div className="impact-icon w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Continuity of Care</h3>
                  <p className="text-sm text-gray-600">Seamless referral systems connect primary care with specialists when needed.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Secondary & Tertiary Care Section */}
      <div id="secondary-tertiary-care" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Secondary & Tertiary Care
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Secondary and tertiary care centers often face overwhelming patient loads, delayed referrals, and poor coordination between departments. Patients wait too long for specialist appointments, and doctors frequently lack access to complete medical histories during critical moments. Manual workflows missed follow-ups, and inefficient triage slow down diagnosis and treatment—leading to repeat visits, overcrowded hospitals, and compromised outcomes.
            </p>
          </div>

          {/* Featured Solutions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 card-hover">
              <img 
                src="assets/solutions/Root Cloud.png" 
                alt="Fast Diagnostic Devices" 
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Diagnostic Devices</h3>
              <p className="text-gray-600">
                Root Cloud™ - All patient data in one place, updated in real-time, so nothing gets missed.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 card-hover">
              <img 
                src="assets/solutions/HES.png" 
                alt="G-MED ID + ABHA" 
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">G-MED ID + ABHA</h3>
              <p className="text-gray-600">
                HES devices at point of care - Smart devices positioned throughout the hospital for instant vitals and diagnostics.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 card-hover">
              <img 
                src="assets/solutions/AI-powered POCT devices.png" 
                alt="AI-Powered Support" 
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Support</h3>
              <p className="text-gray-600">
                AI-powered decision support - Clinical AI that assists in diagnosis, treatment planning, and risk assessment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 card-hover">
              <img 
                src="assets/solutions/Root Cloud.png" 
                alt="Comprehensive Care Solutions" 
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Care Solutions</h3>
              <p className="text-gray-600">
                Integrated workflows - Streamlined processes that reduce administrative burden and improve patient flow.
              </p>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">Impact Metrics</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">💰</div>
                <h4 className="font-semibold mb-2">OOPE Reduction</h4>
                <p className="text-sm opacity-90">Direct cost savings for patients through reduced repeat visits and faster treatment.</p>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold mb-2">⚡</div>
                <h4 className="font-semibold mb-2">Operational Cost Savings</h4>
                <p className="text-sm opacity-90">Streamlined processes reduce administrative overhead and improve resource utilization.</p>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold mb-2">💳</div>
                <h4 className="font-semibold mb-2">Patient Cost Savings</h4>
                <p className="text-sm opacity-90">Faster diagnosis means lower overall treatment costs and better outcomes.</p>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold mb-2">🏥</div>
                <h4 className="font-semibold mb-2">Faster Diagnosis & Reduced Duration</h4>
                <p className="text-sm opacity-90">Immediate access to comprehensive patient data accelerates clinical decisions.</p>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold mb-2">📊</div>
                <h4 className="font-semibold mb-2">System Efficiency</h4>
                <p className="text-sm opacity-90">Optimized workflows reduce bottlenecks and improve hospital capacity utilization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Clinics Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 container mx-auto rounded-2xl bg-gray-900" id="mobile-clinics">
        <div className="text-center mb-10">
          <h2 className="section-title text-2xl lg:text-3xl font-bold text-white sm:text-5xl">
            Mobile Clinics
          </h2>
          <p className="mt-2 text-md text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mobile clinics bring healthcare to underserved communities, but limited diagnostic capabilities and poor connectivity often restrict their impact. Without real-time access to patient records or specialist consultation, these clinics can only provide basic care, forcing patients to travel to distant facilities for comprehensive diagnosis and treatment.
          </p>
        </div>

        {/* Mobile Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-5xl gap-8 mb-10">
          <div className="mobile-feature-card h-full bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-700">
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src="assets/solutions/Self-Sustaining Portable Clinics for Remote Areas.png" 
                alt="Fully equipped mobile health clinics" 
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Fully equipped mobile health clinics
                </h3>
              </div>
              <p className="text-gray-300">
                Complete diagnostic capabilities on wheels, bringing hospital-level care to remote areas.
              </p>
            </div>
          </div>

          <div className="mobile-feature-card h-full bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-700">
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src="assets/solutions/smart mobile.png" 
                alt="5G-enabled connectivity" 
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  5G-enabled connectivity
                </h3>
              </div>
              <p className="text-gray-300">
                High-speed internet ensures real-time data sync and telemedicine capabilities.
              </p>
            </div>
          </div>

          <div className="mobile-feature-card h-full bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-700">
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src="assets/solutions/AI-Powered Diagnostic Tools.png" 
                alt="Remote consultation access" 
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Remote consultation access
                </h3>
              </div>
              <p className="text-gray-300">
                Direct connection to specialists and healthcare experts for complex cases.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Areas */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Impact Areas</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center p-4 border border-gray-600 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Extended Healthcare Access</h4>
              <p className="text-gray-300 text-sm">Bring comprehensive care to remote and underserved communities.</p>
            </div>

            <div className="text-center p-4 border border-gray-600 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Improved Diagnosis Speed</h4>
              <p className="text-gray-300 text-sm">On-site testing and AI analysis provide immediate results.</p>
            </div>

            <div className="text-center p-4 border border-gray-600 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Connected Care Delivery</h4>
              <p className="text-gray-300 text-sm">Real-time connectivity enables specialist consultation and second opinions.</p>
            </div>

            <div className="text-center p-4 border border-gray-600 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Enhanced Maternal & Child Health</h4>
              <p className="text-gray-300 text-sm">Specialized programs for women and children in rural areas.</p>
            </div>

            <div className="text-center p-4 border border-gray-600 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Efficient Resource Use</h4>
              <p className="text-gray-300 text-sm">Optimized routes and scheduling maximize community impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Care Section */}
      <div id="emergency-care" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Emergency Care
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Emergency departments are overwhelmed with patients who could receive care elsewhere, while critical cases get delayed in triage. Poor connectivity between ambulances and hospitals means EDs can't prepare for incoming patients, and incomplete patient histories slow down life-saving decisions during golden hour situations.
            </p>
          </div>

          {/* Core Solutions */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
              <img 
                src="assets/solutions/smart mobile.png" 
                alt="Always connected, anywhere" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Always connected, anywhere</h3>
              <p className="text-gray-600">
                5G connectivity in ambulances enables real-time patient monitoring and data transmission to receiving hospitals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
              <img 
                src="assets/solutions/P3DSC –.png" 
                alt="P3DSC" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">P3DSC</h3>
              <p className="text-gray-600">
                Pre-hospital Patient Data Sync and Communication - Seamless data flow from field to emergency department.
              </p>
            </div>
          </div>

          {/* Emergency Impact */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">Emergency Impact</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">⚡</div>
                <h4 className="font-semibold mb-2">Faster Diagnosis & Treatment</h4>
                <p className="text-sm opacity-90">Pre-hospital data preparation enables immediate care upon arrival.</p>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold mb-2">📊</div>
                <h4 className="font-semibold mb-2">Real-Time Data Preparation</h4>
                <p className="text-sm opacity-90">Emergency teams receive patient information before ambulance arrival.</p>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold mb-2">🎯</div>
                <h4 className="font-semibold mb-2">Priority-Based Care</h4>
                <p className="text-sm opacity-90">AI-powered triage ensures critical patients receive immediate attention.</p>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold mb-2">⏱️</div>
                <h4 className="font-semibold mb-2">Reduced ER Delays</h4>
                <p className="text-sm opacity-90">Streamlined intake process reduces waiting times for all patients.</p>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold mb-2">💓</div>
                <h4 className="font-semibold mb-2">Higher Survival Rates</h4>
                <p className="text-sm opacity-90">Faster response times and better preparation improve emergency outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frontline Health Workers Section */}
      <div id="frontline-health-workers" className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frontline Health Workers
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              ASHA workers and community health volunteers are the backbone of rural healthcare, but they lack access to diagnostic tools and real-time guidance. Without proper technology support, they can only provide basic health education and referrals, missing opportunities for early detection and preventive care in their communities.
            </p>
          </div>

          {/* Key Capabilities */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <img 
                src="assets/solutions/AI-Powered Diagnostic Tools.png" 
                alt="Remote consultation access" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Remote consultation access</h3>
              <p className="text-gray-600">
                Direct connection to healthcare professionals for guidance and support during community visits.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <img 
                src="assets/solutions/HES.png" 
                alt="Integration of HES devices" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integration of HES devices</h3>
              <p className="text-gray-600">
                Portable diagnostic devices that provide instant health screening results in the field.
              </p>
            </div>
          </div>

          {/* Frontline Impact */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frontline Impact</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Expanded Screening</h4>
                <p className="text-gray-600 text-sm">Enable comprehensive health checks at the community level.</p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Accurate Reporting</h4>
                <p className="text-gray-600 text-sm">Digital tools ensure accurate data collection and reporting.</p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Improved Last-Mile Care</h4>
                <p className="text-gray-600 text-sm">Bring quality healthcare services directly to remote communities.</p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Enhanced Workforce Coverage</h4>
                <p className="text-gray-600 text-sm">Technology multiplies the impact of each health worker.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Health Identity Integration Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Digital Health Identity Integration
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Seamless integration between government and private healthcare systems through unified digital identity management.
            </p>
          </div>

          {/* Three Main Components */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 card-hover">
              <img 
                src="assets/solutions/ABHA ID.png" 
                alt="ABHA ID" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">ABHA ID</h3>
              <p className="text-gray-600">
                Unique digital health identity enabling seamless access to health records across government and private healthcare providers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 card-hover">
              <img 
                src="assets/solutions/G Med ID.png" 
                alt="G Med ID" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">G Med ID</h3>
              <p className="text-gray-600">
                Blockchain-based health platform giving you full control over your health data with secure, consent-based sharing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 card-hover">
              <img 
                src="assets/solutions/ABHA & G Med ID.png" 
                alt="ABHA & G Med ID Integration" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">ABHA & G Med ID Integration</h3>
              <p className="text-gray-600">
                Seamless flow of patient data between systems ensuring up-to-date records and better coordinated care.
              </p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">Key Benefits</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">🆔</div>
                <h4 className="font-semibold mb-2">Unified Health Identity</h4>
                <p className="text-sm opacity-90">Access records across all providers</p>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold mb-2">⚡</div>
                <h4 className="font-semibold mb-2">Instant Data Access</h4>
                <p className="text-sm opacity-90">Providers get information instantly</p>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold mb-2">🔒</div>
                <h4 className="font-semibold mb-2">Secure Data Sharing</h4>
                <p className="text-sm opacity-90">Shared with full patient consent</p>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold mb-2">⛓️</div>
                <h4 className="font-semibold mb-2">Blockchain Security</h4>
                <p className="text-sm opacity-90">Protects data integrity</p>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold mb-2">✨</div>
                <h4 className="font-semibold mb-2">Simplified Care</h4>
                <p className="text-sm opacity-90">Reduces administrative work</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Government Healthcare?
          </h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our comprehensive government healthcare solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:1800-570-0140" 
              className="flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              1800-570-0140
            </a>
            <a 
              href="mailto:contact@telth.care" 
              className="flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              contact@telth.care
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      )}
    </>
  );
};

export default GovernmentSectorContent;