import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CarePlanContent = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const [activeAccordion, setActiveAccordion] = useState('request-service');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [pricingOptions, setPricingOptions] = useState({
    location: 'metro',
    coverage: 'comprehensive',
    beneficiaries: 'family',
    specialNeeds: 'standard'
  });

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate estimated price
  const calculatePrice = () => {
    let basePrice = 299;
    
    if (pricingOptions.location === 'metro') basePrice = 499;
    if (pricingOptions.coverage === 'comprehensive') basePrice += 400;
    if (pricingOptions.beneficiaries === 'family') basePrice += 300;
    if (pricingOptions.specialNeeds === 'specialized') basePrice += 350;
    
    return basePrice;
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabContent = {
    individual: {
      badge: "Personalized Healthcare",
      description: "Our prepaid healthcare cards help individuals and families manage medical expenses with dedicated funds for healthcare needs, emergency coverage, and preventive care services.",
      features: [
        "Dedicated healthcare funds",
        "Emergency coverage", 
        "Preventive care services"
      ]
    },
    corporate: {
      badge: "Employee Wellness",
      description: "Employers can provide valuable healthcare benefits to their workforce through prepaid solutions that offer tax advantages, easy administration, and comprehensive health services.",
      features: [
        "Tax advantages",
        "Easy administration",
        "Comprehensive health services"
      ]
    },
    hospital: {
      badge: "Healthcare Efficiency",
      description: "Healthcare facilities can implement our payment solutions to streamline billing, reduce administrative costs, and improve patient satisfaction through simplified payment processes.",
      features: [
        "Streamlined billing",
        "Reduced administrative costs",
        "Enhanced patient satisfaction"
      ]
    },
    government: {
      badge: "Public Sector Solutions",
      description: "Public sector organizations can distribute healthcare subsidies efficiently through our prepaid systems, ensuring funds are used exclusively for medical services for beneficiaries.",
      features: [
        "Efficient subsidy distribution",
        "Targeted medical service funding",
        "Transparent fund allocation"
      ]
    }
  };

  const accordionContent = {
    'request-service': {
      title: "Request Service",
      content: [
        "Schedule through app, website, or helpline",
        "Quick and easy booking process",
        "Multiple convenient scheduling options",
        "24/7 availability for service requests"
      ]
    },
    'care-assessment': {
      title: "Care Assessment",
      content: [
        "Professional health evaluation",
        "Comprehensive medical history review",
        "Personalized care planning"
      ]
    },
    'home-visit': {
      title: "Home Visit",
      content: [
        "Qualified healthcare professionals visit your home",
        "Convenient scheduling at your preferred time",
        "Safe and comfortable healthcare delivery"
      ]
    },
    'care-delivery': {
      title: "Care Delivery",
      content: [
        "Professional medical services at home",
        "State-of-the-art medical equipment",
        "Personalized treatment plans"
      ]
    },
    'digital-documentation': {
      title: "Digital Documentation",
      content: [
        "Complete digital health records",
        "Easy access to medical reports",
        "Seamless integration with healthcare providers"
      ]
    }
  };

  return (
    <>
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-white/30 to-purple-100/40"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                🏥 Certified Healthcare Providers
              </div>
              
              {/* Headline */}
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Streamlined Healthcare{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Financing for Everyone
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                Simplify healthcare payments and access with our innovative prepaid solutions designed for individuals, families, businesses, and healthcare providers.
              </p>
              
              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Know more
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
              
              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">Trusted by 5,000+ families</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">4.8/5 from 1,200+ reviews</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="healthcare-cutout w-full h-96 rounded-xl shadow-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Telth Care Plans
              </span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Dedicated Healthcare Funds */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Healthcare Funds</h3>
              <p className="text-gray-600 mb-6">Set aside money specifically for medical expenses</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Customized savings strategy</li>
                <li>• Secure fund allocation</li>
                <li>• Tax-efficient healthcare savings</li>
              </ul>
            </div>

            {/* Simplified Payments */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Simplified Payments</h3>
              <p className="text-gray-600 mb-6">Enjoy cashless transactions at healthcare facilities</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Instant cashless claims</li>
                <li>• Direct billing to insurance</li>
                <li>• Seamless payment processing</li>
              </ul>
            </div>

            {/* Budget Management - Featured */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl shadow-xl text-white lg:col-span-1">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Budget Management</h3>
              <p className="text-blue-100 mb-6">Track and control healthcare spending with comprehensive financial tools</p>
              <ul className="space-y-2 text-sm text-blue-100 mb-6">
                <li>• Detailed expense tracking</li>
                <li>• Predictive spending insights</li>
                <li>• Cost optimization recommendations</li>
                <li>• Financial health monitoring</li>
              </ul>
              <Link
                to="/budget-management"
                className="inline-flex items-center px-4 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Comprehensive Benefits - Large Box */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 lg:col-span-1">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Benefits</h3>
              <p className="text-gray-600 mb-6">Access free health check-ups and exclusive discounts with our comprehensive care plans</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Free annual health screenings</li>
                <li>• Exclusive partner discounts</li>
                <li>• Wellness program access</li>
                <li>• Preventive care benefits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              Our Solutions
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Care Plan
              </span>
              {' '}Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions tailored to diverse organizational needs
            </p>
          </div>

          {/* Tabbed Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { key: 'individual', label: 'Individual & Family' },
              { key: 'corporate', label: 'Corporate' },
              { key: 'hospital', label: 'Hospital & Provider' },
              { key: 'government', label: 'Government & NGO' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 service-tab ${
                  activeTab === tab.key 
                    ? 'active bg-purple-600 text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="service-content active">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                {tabContent[activeTab].badge}
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {tabContent[activeTab].description}
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {tabContent[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Healthcare Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored care plans designed to provide financial security and comprehensive healthcare support
            </p>
          </div>

          {/* Two Main Cards */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Patients Card */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                Patient-First Approach
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Patients</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our patient-focused care plans provide individuals and families with dedicated healthcare funding solutions, offering financial security and peace of mind for medical expenses.
              </p>

              {/* Patient Benefits */}
              <div className="space-y-6 mb-8">
                <h4 className="text-lg font-semibold text-gray-900">Patient Benefits:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900">Budget Control</h5>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900">Family Coverage</h5>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900">Chronic Care Support</h5>
                  </div>
                </div>
                
                {/* Additional Features */}
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Emergency Preparedness</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Wellness Programs</span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-6">
                "Empowering patients with financial security and comprehensive healthcare support."
              </blockquote>

              {/* CTA */}
              <Link
                to="/patient-plans"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More About Patient Plans
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>

            {/* For Hospitals Card */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                Hospital Solutions
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Hospitals</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Healthcare providers can streamline financial operations and enhance patient experiences with our integrated payment solutions and simplified billing processes.
              </p>

              {/* Hospital Benefits */}
              <div className="space-y-6 mb-8">
                <h4 className="text-lg font-semibold text-gray-900">Hospital Benefits:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900">Reduced Administrative Overhead</h5>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900">Improved Cash Flow</h5>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v4a2 2 0 002 2h2a2 2 0 002-2v-4M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1"></path>
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900">Enhanced Patient Experience</h5>
                  </div>
                </div>
                
                {/* Additional Features */}
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Integration Capabilities</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Patient Financial Planning</span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600 mb-6">
                "Transforming hospital financial management with intelligent, patient-centric solutions."
              </blockquote>

              {/* CTA */}
              <Link
                to="/hospital-solutions"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Learn More About Hospital Solutions
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              HOW CARE2HOME WORKS
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Seamless Home Healthcare Process
            </h2>
          </div>

          {/* Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {Object.entries(accordionContent).map(([key, item]) => (
              <div key={key} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === key ? '' : key)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <svg 
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                      activeAccordion === key ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {activeAccordion === key && (
                  <div className="px-8 pb-6">
                    <ul className="space-y-3">
                      {item.content.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Plan Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Care Plan Options
            </h2>
            <p className="text-lg text-gray-600">
              Tailored healthcare solutions for every need
            </p>
          </div>

          {/* Plan Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Basic Care */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Basic Care</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Health check-ups</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Basic diagnostics</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Pharmacy discounts</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mb-6">Best for: Individuals seeking essential coverage</p>
              <Link
                to="/basic-care"
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Family Care - Most Popular */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl shadow-xl text-white relative">
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-6">Family Care</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Multiple family members coverage</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Preventive services</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Comprehensive protection</span>
                </li>
              </ul>
              <p className="text-blue-100 mb-6 text-sm">Best for: Families wanting comprehensive protection</p>
              <Link
                to="/family-care"
                className="w-full inline-flex justify-center items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Chronic Care */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Chronic Care</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Disease management</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Medication support</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Specialist access</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mb-6">Best for: Those managing ongoing health conditions</p>
              <Link
                to="/chronic-care"
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Corporate Care */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Corporate Care</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Employee benefits</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Tax advantages</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Wellness programs</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mb-6">Best for: Businesses supporting workforce health</p>
              <Link
                to="/contact-us"
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Corporate Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              5 SIMPLE STEPS
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Effortless Process,{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Continuous Care
              </span>
            </h2>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                step: 1,
                title: "Choose Your Plan",
                description: "Select the option that best fits your healthcare needs"
              },
              {
                step: 2, 
                title: "Receive Your Prepaid Card",
                description: "Get your Visa-powered healthcare card"
              },
              {
                step: 3,
                title: "Load Funds", 
                description: "Add money to your card through multiple convenient options"
              },
              {
                step: 4,
                title: "Access Healthcare",
                description: "Use your card at partner hospitals, clinics, and pharmacies"
              },
              {
                step: 5,
                title: "Track Expenses",
                description: "Monitor your healthcare spending through our digital platform"
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Plan{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Pricing
              </span>
              {' '}Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Care Plans are designed to be accessible for different budgets and needs, with options starting from just{' '}
              <span className="font-bold text-purple-600">₹299</span> per month.
            </p>
          </div>

          {/* Pricing Factor Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Location",
                description: "Tiered rates for metro cities, tier-2 cities, small towns, and rural areas",
                options: ["Metro Cities: ₹499+", "Rural Areas: ₹299+"]
              },
              {
                title: "Coverage Level", 
                description: "Basic to comprehensive healthcare services",
                options: ["Basic: ₹299+", "Comprehensive: ₹899+"]
              },
              {
                title: "Beneficiaries",
                description: "Individual, couple, or family coverage", 
                options: ["Individual: ₹299+", "Family (4): ₹799+"]
              },
              {
                title: "Special Needs",
                description: "Chronic care management or specialized services",
                options: ["Standard: ₹299+", "Specialized: ₹649+"]
              }
            ].map((factor, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{factor.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{factor.description}</p>
                <div className="space-y-2">
                  {factor.options.map((option, i) => (
                    <div key={i} className="text-sm text-gray-700 font-medium">{option}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Pricing Estimator */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Interactive Pricing Estimator</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Location Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select 
                  value={pricingOptions.location}
                  onChange={(e) => setPricingOptions({...pricingOptions, location: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="metro">Metro Cities</option>
                  <option value="tier2">Tier-2 Cities</option>
                  <option value="small">Small Towns</option>
                  <option value="rural">Rural Areas</option>
                </select>
              </div>

              {/* Coverage Level Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Coverage Level</label>
                <select 
                  value={pricingOptions.coverage}
                  onChange={(e) => setPricingOptions({...pricingOptions, coverage: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="basic">Basic</option>
                  <option value="comprehensive">Comprehensive</option>
                </select>
              </div>

              {/* Beneficiaries Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Beneficiaries</label>
                <select 
                  value={pricingOptions.beneficiaries}
                  onChange={(e) => setPricingOptions({...pricingOptions, beneficiaries: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="individual">Individual</option>
                  <option value="couple">Couple</option>
                  <option value="family">Family (4)</option>
                </select>
              </div>

              {/* Special Needs Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Needs</label>
                <select 
                  value={pricingOptions.specialNeeds}
                  onChange={(e) => setPricingOptions({...pricingOptions, specialNeeds: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="standard">Standard</option>
                  <option value="specialized">Specialized</option>
                </select>
              </div>
            </div>

            {/* Price Display */}
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-4">₹{calculatePrice()}</div>
              <div className="space-y-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Started
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
                <p className="text-sm text-gray-500">No commitment, cancel anytime</p>
                <Link to="/faq" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View our FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started with Your Care Plan?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our comprehensive care plan solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:1800-570-0140" 
              className="flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              1800-570-0140
            </a>
            <a 
              href="mailto:contact@telth.care" 
              className="flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              contact@telth.care
            </a>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      )}
    </>
  );
};

export default CarePlanContent;