import React, { useState, useEffect } from 'react';

const Care2HomeContent = () => {
  const [activeTab, setActiveTab] = useState('diagnostics');
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const services = {
    diagnostics: {
      id: 'diagnostics',
      icon: '🩺',
      title: 'Home Diagnostic Visits',
      badge: 'Home Visits',
      description: 'Our healthcare professionals bring portable diagnostic tools directly to your home, providing clinical-grade testing in the comfort of your familiar environment.',
      features: [
        'Blood tests at your convenience',
        'Portable EKG/ultrasound equipment',
        'Vital signs monitoring'
      ],
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    chronic: {
      id: 'chronic',
      icon: '💓',
      title: 'Chronic Care Management',
      badge: 'Ongoing Support',
      description: 'Ongoing support for managing long-term conditions like diabetes, hypertension, and heart disease with regular monitoring and adjustments to your care plan.',
      features: [
        'Personalized treatment plans',
        'Medication reconciliation',
        'Nutritional counseling'
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    recovery: {
      id: 'recovery',
      icon: '🏥',
      title: 'Post-Hospitalization Recovery',
      badge: 'Seamless Transition',
      description: 'Smooth transition from hospital to home with continued medical supervision, ensuring your recovery proceeds safely in your own comfortable environment.',
      features: [
        'Surgical aftercare monitoring',
        'Physical therapy sessions',
        'Pain management support'
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    elderly: {
      id: 'elderly',
      icon: '♿',
      title: 'Elderly Care Services',
      badge: 'Compassionate Care',
      description: 'Specialized attention for seniors, including comprehensive health monitoring, medication management, and companionship services tailored to aging-related needs.',
      features: [
        'Fall prevention assessments',
        'Memory care support',
        'Companionship services'
      ],
      image: 'https://images.unsplash.com/photo-1577513556794-9db77d5e5fd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  };

  const accordionItems = [
    {
      id: 1,
      title: 'Request Service',
      content: [
        'Schedule through app, website, or helpline',
        'Quick and easy booking process',
        'Multiple convenient scheduling options',
        '24/7 availability for service requests'
      ]
    },
    {
      id: 2,
      title: 'Care Assessment',
      content: [
        'Brief consultation to understand needs',
        'Personalized care plan development',
        'Comprehensive health background review',
        'Expert recommendation for optimal care'
      ]
    },
    {
      id: 3,
      title: 'Home Visit',
      content: [
        'Care professional arrives at scheduled time',
        'Punctual and reliable service',
        'Professionally trained healthcare providers',
        'Respectful and compassionate approach'
      ]
    },
    {
      id: 4,
      title: 'Care Delivery',
      content: [
        'Receive personalized healthcare services at home',
        'Tailored medical attention',
        'Comprehensive health monitoring',
        'Comfortable and familiar environment'
      ]
    },
    {
      id: 5,
      title: 'Digital Documentation',
      content: [
        'Access visit details through secure platform',
        'Comprehensive digital health records',
        'Secure and private documentation',
        'Easy tracking of healthcare journey'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
          <div className="container mx-auto px-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Solutions */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Solutions</h3>
                <ul className="space-y-2">
                  <li><a href="/corporates" className="hover:text-purple-300 transition-colors">Corporates</a></li>
                  <li><a href="/government" className="hover:text-purple-300 transition-colors">Government</a></li>
                  <li><a href="/care-provider" className="hover:text-purple-300 transition-colors">Care Providers</a></li>
                  <li><a href="/clinics-hospitals" className="hover:text-purple-300 transition-colors">Clinics/Hospitals</a></li>
                  <li><a href="/ngos" className="hover:text-purple-300 transition-colors">NGOs</a></li>
                  <li><a href="/patients" className="hover:text-purple-300 transition-colors">Patients</a></li>
                  <li><a href="/insurance" className="hover:text-purple-300 transition-colors">Insurance Providers</a></li>
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Technologies</h3>
                <ul className="space-y-2">
                  <li><a href="/p3dsc" className="hover:text-purple-300 transition-colors">Care Providers (P3DSC)</a></li>
                  <li><a href="/digidoc" className="hover:text-purple-300 transition-colors">Digidoc</a></li>
                  <li><a href="/root-cloud" className="hover:text-purple-300 transition-colors">Root Cloud</a></li>
                </ul>
              </div>

              {/* Products & Services */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Products & Services</h3>
                <ul className="space-y-2">
                  <li><a href="/turnkey-solutions" className="hover:text-purple-300 transition-colors">Turnkey Solutions</a></li>
                  <li><a href="/ai-smart-clinic" className="hover:text-purple-300 transition-colors">AI Smart Clinics</a></li>
                  <li><a href="/advanced-diagnostics" className="hover:text-purple-300 transition-colors">Advanced Diagnostics</a></li>
                </ul>
              </div>

              {/* Community */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Community & Support</h3>
                <ul className="space-y-2">
                  <li><span className="text-gray-400">Blogs (Coming Soon)</span></li>
                  <li><a href="/training" className="hover:text-purple-300 transition-colors">Training and R&D</a></li>
                  <li><a href="/contact" className="hover:text-purple-300 transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-purple-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img src="assets/telth.png" alt="telth" className="w-8 h-8 mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Telth.care
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="/about-us" className="text-gray-700 hover:text-purple-600 transition-colors">About Us</a>
              <a href="/care-provider" className="text-gray-700 hover:text-purple-600 transition-colors">Care Providers</a>
              <a href="/contact-us" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors"
            >
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-50 to-violet-100">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-violet-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] translate-x-1/2 translate-y-1/2 bg-indigo-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-purple-200">
              <span className="text-sm font-medium text-purple-800">🏥 Certified Healthcare Providers</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Healthcare Delivered to Your{' '}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Doorstep
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Experience professional medical care in the comfort of your home with our certified healthcare providers, 
              advanced diagnostic equipment, and personalized treatment plans.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30">
                Request Home Care Service
              </button>
              <button className="px-8 py-4 bg-white border-2 border-purple-200 text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-colors">
                Learn About Our Services
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/thumb/women/${i}.jpg`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Trusted by 5,000+ families</p>
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-1">4.8/5 from 1,200+ reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Healthcare professional visiting patient at home"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="font-semibold text-gray-900">24/7 Availability</p>
                  <p className="text-sm text-gray-600">Emergency care available anytime, day or night</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-purple-600">Care2Home</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Professional Care */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Care at Home</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Licensed medical professionals</li>
                <li>• Hospital-grade equipment</li>
                <li>• Continuity of care with regular visits</li>
              </ul>
            </div>

            {/* Personalized Attention */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Attention</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Customized care plans</li>
                <li>• Dedicated care team</li>
                <li>• Adaptable to changing needs</li>
              </ul>
            </div>

            {/* Reduced Hospital Visits - Featured */}
            <div className="bg-blue-600 text-white rounded-xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8h1m-1-4h1m4 4h1m-1-4h1"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Reduced Hospital Visits</h3>
              <ul className="text-white/90 space-y-2 text-sm mb-4">
                <li>• Post-surgical recovery at home</li>
                <li>• Chronic disease management</li>
                <li>• Preventive care services</li>
                <li>• Medication management</li>
              </ul>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                Learn How It Works
              </button>
            </div>

            {/* Family Peace of Mind - Large Card */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-x-8 translate-y-8"></div>
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Family Peace of Mind</h3>
              <ul className="text-white/90 space-y-2 text-sm">
                <li>• Regular care updates for family members</li>
                <li>• 24/7 access to care team</li>
                <li>• Family education and training</li>
                <li>• Emergency response planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Services</span>
            </h2>
          </div>

          {/* Service Navigation */}
          <div className="flex justify-center mb-16">
            <div className="bg-white rounded-xl p-2 shadow-lg">
              <div className="flex flex-wrap gap-2">
                {Object.values(services).map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                      activeTab === service.id
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span>{service.icon}</span>
                    <span className="font-medium">{service.title.split(' ')[0]} {service.title.split(' ')[1]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Service Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Service Details */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                {services[activeTab].badge}
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900">
                {services[activeTab].title}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {services[activeTab].description}
              </p>
              
              <div className="space-y-3">
                {services[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-purple-500/25">
                Book This Service
              </button>
            </div>

            {/* Service Image */}
            <div className="relative">
              <img
                src={services[activeTab].image}
                alt={services[activeTab].title}
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How Care2Home Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              HOW CARE2HOME WORKS
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Seamless Home Healthcare Process
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <div key={item.id} className="bg-gray-50 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <svg
                      className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                        openAccordion === item.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  
                  {openAccordion === item.id && (
                    <div className="px-6 pb-6">
                      <div className="ml-14 space-y-2">
                        {item.content.map((text, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-600">
                            <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                            <span>{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Process Visualization */}
            <div className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8">
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                    </svg>
                  </div>
                  <p className="text-gray-500">Process visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Home Care Plans
            </h2>
            <p className="text-xl text-gray-600">Tailored healthcare solutions for every need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Home Visit</h3>
                <ul className="text-gray-600 space-y-2 text-sm mb-4">
                  <li>• Vital checks</li>
                  <li>• General assessment</li>
                  <li>• Basic diagnostics</li>
                </ul>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Best for:</span> Routine monitoring, simple health checks
                </p>
              </div>
              <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Choose Basic
              </button>
            </div>

            {/* Comprehensive Plan - Most Popular */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-200 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Comprehensive Care</h3>
                <ul className="text-gray-600 space-y-2 text-sm mb-4">
                  <li>• Full health assessment</li>
                  <li>• Multiple diagnostic tests</li>
                  <li>• Care plan development</li>
                </ul>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Best for:</span> Detailed health evaluation, chronic condition monitoring
                </p>
              </div>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Choose Comprehensive
              </button>
            </div>

            {/* Specialized Plan */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Specialized Care</h3>
                <ul className="text-gray-600 space-y-2 text-sm mb-4">
                  <li>• Focused assessment</li>
                  <li>• Specialized diagnostic tools</li>
                  <li>• Expert consultation</li>
                </ul>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Best for:</span> Managing specific conditions, post-surgery care
                </p>
              </div>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Choose Specialized
              </button>
            </div>

            {/* Family Plan */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Family Care Package</h3>
                <ul className="text-gray-600 space-y-2 text-sm mb-4">
                  <li>• Multiple family assessments</li>
                  <li>• Household health planning</li>
                  <li>• Preventive screenings</li>
                </ul>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Best for:</span> Families wanting comprehensive health oversight
                </p>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Choose Family
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Home Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Technology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our Care2Home professionals come equipped with Telth's advanced portable diagnostic devices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Portable ECG Monitors', desc: 'Clinical-grade heart monitoring in your living room' },
              { title: 'Compact Ultrasound Devices', desc: 'High-resolution imaging without facility visits' },
              { title: 'Mobile Lab Testing', desc: 'Quick results for blood work and other tests' },
              { title: 'Wearable Monitors', desc: 'Continuous health tracking between visits' },
              { title: 'Telehealth Integration', desc: 'Connect with specialists during your home visit' }
            ].map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                <p className="text-gray-300">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        {/* Spotlight Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Free <span className="text-yellow-400">Benefits</span>
          </h2>
          <p className="text-xl text-gray-200 mb-16">With Every Care Plan</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {[
              { title: 'Two Master Health Check-ups Per Year', desc: 'Comprehensive annual assessments' },
              { title: 'Health Data Sharing', desc: 'Secure sharing of health data with family in emergencies' },
              { title: 'Pharmacy Discounts', desc: '25% off on medications with home delivery' },
              { title: 'Teleconsultations', desc: 'Virtual follow-ups with healthcare providers' },
              { title: 'Hospital Assistance', desc: 'Support for arranging hospital care when needed' }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-400 text-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-300 text-lg">All benefits included at no extra cost with any Care2Home plan</p>
        </div>
      </section>

      {/* Care2Home for Different Needs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Care2Home for Different Needs
              </h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Personalized healthcare solutions tailored to your unique life circumstances
              </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Elderly Parents',
                  desc: 'Ensure your aging parents receive regular medical attention with minimal disruption to their daily routine and independence.'
                },
                {
                  title: 'Busy Professionals',
                  desc: 'Manage your health without taking time off work for clinic visits. Convenient care that fits your schedule.'
                },
                {
                  title: 'Chronic Condition Management',
                  desc: 'Consistent monitoring and adjustments to care plans for diabetes, hypertension, and other ongoing health conditions.'
                },
                {
                  title: 'Post-Surgery Recovery',
                  desc: 'Heal comfortably at home with professional monitoring and support during your recovery period.'
                }
              ].map((need, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-3">{need.title}</h3>
                  <p className="text-purple-100 text-sm">{need.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Care2HomeContent;