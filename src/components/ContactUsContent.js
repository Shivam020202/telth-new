import React, { useState } from 'react';

const ContactUsContent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    consultationType: '',
    preferredLocation: '',
    healthConcerns: '',
    preferredTime: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const offices = [
    {
      name: 'India Headquarters',
      type: 'Primary',
      address: {
        company: 'Tidal Neo',
        street: 'Karupur, Salem 630631',
        city: 'Tamil Nadu, India'
      },
      phone: '+91 95145 55210',
      timezone: 'GMT +5:30 (IST)',
      color: 'purple',
      gradient: 'from-purple-600 to-indigo-600'
    },
    {
      name: 'USA Office',
      type: 'Regional',
      address: {
        company: 'Telth Healthcare Inc.',
        street: '909 Rose Ave Suite 500',
        city: 'Rockville MD 20852'
      },
      phone: '+1 (301) 500 4607',
      timezone: 'GMT -5:00 (EST)',
      color: 'indigo',
      gradient: 'from-indigo-600 to-blue-600'
    },
    {
      name: 'UK Office',
      type: 'Regional',
      address: {
        company: 'Telth UK Ltd.',
        street: '71-75 Shelton Street',
        city: 'London WC2H 9JQ'
      },
      phone: '+44 20 3239 9430',
      timezone: 'GMT +0:00 (UTC)',
      color: 'blue',
      gradient: 'from-blue-600 to-cyan-600'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: { icon: 'text-purple-600', bg: 'bg-purple-100', badge: 'bg-purple-100 text-purple-700' },
      indigo: { icon: 'text-indigo-600', bg: 'bg-white', badge: 'bg-blue-100 text-blue-700' },
      blue: { icon: 'text-blue-600', bg: 'bg-white', badge: 'bg-cyan-100 text-cyan-700' }
    };
    return colors[color];
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Office Locations Grid */}
      <div className="mb-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Healthcare Network</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access quality healthcare services at our strategically located facilities worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {offices.map((office, index) => {
            const colorClasses = getColorClasses(office.color);
            return (
              <div key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-purple-100">
                <div className={`bg-gradient-to-r ${office.gradient} p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${colorClasses.bg} rounded-xl flex items-center justify-center`}>
                        <svg className={`w-6 h-6 ${colorClasses.icon}`} fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white ml-3">{office.name}</h3>
                    </div>
                    <span className={`px-3 py-1 ${colorClasses.badge} rounded-full text-sm font-semibold`}>
                      {office.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className={`w-5 h-5 ${colorClasses.icon} mt-0.5 mr-3`} fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <div>
                        <p className="text-gray-800 font-medium">{office.address.company}</p>
                        <p className="text-gray-600">{office.address.street}</p>
                        <p className="text-gray-600">{office.address.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg className={`w-5 h-5 ${colorClasses.icon} mr-3`} fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${office.phone}`}
                        className={`${colorClasses.icon} hover:opacity-80 font-semibold`}>
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg className={`w-5 h-5 ${colorClasses.icon} mr-3`} fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">{office.timezone}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
        {/* General Inquiries */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-purple-100">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 ml-4">General Inquiries</h3>
          </div>
          <p className="text-gray-600 mb-4">Questions about our healthcare services and solutions</p>
          <a href="mailto:info@telth.care"
            className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@telth.care
          </a>
        </div>

        {/* Business Development */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-indigo-100">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 ml-4">Business Development</h3>
          </div>
          <p className="text-gray-600 mb-4">Solutions partnerships & technology integration</p>
          <a href="mailto:contact@telth.care"
            className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            contact@telth.care
          </a>
        </div>

        {/* Service Hours */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 border border-blue-100 md:col-span-2 xl:col-span-1">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 ml-4">Service Hours</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Business Operations:</span>
              <span className="text-blue-600 font-semibold">9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Technical Support:</span>
              <span className="text-emerald-600 font-semibold">24/7 Available</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Platform Status:</span>
              <span className="text-green-600 font-semibold">Always Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Healthcare Consultation Form & Map */}
      <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Healthcare Consultation Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Healthcare Consultation Request</h2>
            <p className="text-gray-600">Get personalized healthcare guidance from our expert medical team</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  First Name *
                </label>
                <input 
                  type="text" 
                  name="firstName" 
                  id="firstName" 
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                  placeholder="Enter your first name" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Last Name *
                </label>
                <input 
                  type="text" 
                  name="lastName" 
                  id="lastName" 
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                  placeholder="Enter your last name" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Address *
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                  placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Phone Number *
                </label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                  placeholder="+1 (555) 123-4567" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Age
                </label>
                <input 
                  type="number" 
                  name="age" 
                  id="age" 
                  min="1" 
                  max="120"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                  placeholder="25" />
              </div>
              <div>
                <label htmlFor="consultationType" className="block text-sm font-semibold text-gray-700 mb-2">
                  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Query Type *
                </label>
                <select 
                  name="consultationType" 
                  id="consultationType" 
                  required
                  value={formData.consultationType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200">
                  <option value="">Select Query type</option>
                  <option value="general">Health and Wealth Card</option>
                  <option value="specialist">Services</option>
                  <option value="followup">Care2home</option>
                  <option value="emergency">Care Managers</option>
                  <option value="telemedicine">Devices Support</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="preferredLocation" className="block text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Preferred Location *
              </label>
              <select 
                name="preferredLocation" 
                id="preferredLocation" 
                required
                value={formData.preferredLocation}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200">
                <option value="">Choose your preferred location</option>
                <option value="india">India - Salem, Tamil Nadu</option>
                <option value="usa">USA - Rockville, Maryland</option>
                <option value="uk">UK - London</option>
                <option value="telemedicine">Telemedicine (Remote)</option>
              </select>
            </div>

            <div>
              <label htmlFor="healthConcerns" className="block text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Health Concerns & Symptoms *
              </label>
              <textarea 
                name="healthConcerns" 
                id="healthConcerns" 
                rows="4" 
                required
                value={formData.healthConcerns}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                placeholder="Please describe your health concerns, symptoms, or reason for consultation..."></textarea>
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Preferred Appointment Time
              </label>
              <input 
                type="datetime-local" 
                name="preferredTime" 
                id="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200" />
            </div>

            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="consent" 
                name="consent" 
                required
                checked={formData.consent}
                onChange={handleChange}
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
              <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
                I consent to Telth Healthcare collecting and processing my health information for
                consultation purposes *
              </label>
            </div>

            <button type="submit"
              className="w-full flex items-center justify-center py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <svg className="w-5 h-5 mr-2 transform rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Request Healthcare Consultation
            </button>
          </form>
        </div>

        {/* Interactive Map Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100">
          <div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600">
            <h3 className="text-xl font-bold text-white flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Our Healthcare Locations
            </h3>
            <p className="text-purple-100 mt-2">Find us across the globe for your healthcare needs</p>
          </div>
          <div className="h-96 lg:h-full min-h-[500px]">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.6922466016787!2d78.0883784696079!3d11.710767799281292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babfb01899ce44b%3A0x99a8551237c24be4!2sTIDEL%20NEO%20-Salem!5e0!3m2!1sen!2sin!4v1748096316223!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" 
              className="w-full h-full"
              title="Telth Healthcare Locations">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsContent;