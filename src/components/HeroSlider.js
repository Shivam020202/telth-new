import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';

const HeroSlider = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-slider relative"
      >
        {/* Healthcare Professionals Banner */}
        <SwiperSlide className="banner-slide">
          <div className="absolute inset-0">
            <img 
              src="assets/banners/banner-bg1.jpg" 
              alt="Medical Technology"
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 gradient-overlay"></div>
            <div className="absolute inset-0 noise-bg"></div>
          </div>
          <div className="relative h-full flex items-center py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Content Column */}
                <div className="slide-content">
                  <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-4 md:mb-6">
                    For Healthcare Professionals
                  </div>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                    Your Practice, Your Rules. More Care, More Rewards.
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-purple-200 font-semibold mb-6">
                    Take control of your career with flexible scheduling, smart patient management, and endless earning potential.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 md:px-8 md:py-4 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-600/30">
                      Get Started Now
                    </button>
                    <button className="px-6 py-3 md:px-8 md:py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300 backdrop-blur-lg">
                      Watch Demo
                    </button>
                  </div>
                </div>

                {/* Form Column - Hidden on Mobile */}
                <div className="hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-4">Join Our Network</h3>
                    <p className="text-purple-200 mb-6">Complete this form to learn how you can grow your practice with us.</p>

                    <form className="space-y-4" action="https://app.formester.com/forms/Osx75yCYK/submissions" method="post">
                      <div>
                        <label className="block text-purple-200 text-sm font-medium mb-2" htmlFor="name">Full Name</label>
                        <input 
                          type="text" 
                          id="name"
                          className="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="Dr. John Smith" 
                        />
                      </div>

                      <div>
                        <label className="block text-purple-200 text-sm font-medium mb-2" htmlFor="specialty">Medical Specialty</label>
                        <select 
                          id="specialty"
                          className="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="" className="bg-gray-800">Select specialty</option>
                          <option value="cardiology" className="bg-gray-800">Cardiology</option>
                          <option value="dermatology" className="bg-gray-800">Dermatology</option>
                          <option value="family-medicine" className="bg-gray-800">Family Medicine</option>
                          <option value="pediatrics" className="bg-gray-800">Pediatrics</option>
                          <option value="other" className="bg-gray-800">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-purple-200 text-sm font-medium mb-2" htmlFor="email">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          className="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="doctor@example.com" 
                        />
                      </div>

                      <div>
                        <label className="block text-purple-200 text-sm font-medium mb-2" htmlFor="phone">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone"
                          className="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="(123) 456-7890" 
                        />
                      </div>

                      <div className="flex items-center">
                        <input 
                          id="terms" 
                          type="checkbox"
                          className="h-4 w-4 bg-white/5 border-purple-400/30 rounded focus:ring-purple-500 text-purple-600" 
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-purple-200">
                          I agree to the terms and privacy policy
                        </label>
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-600/30"
                      >
                        Submit Application
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Corporate Banner */}
        <SwiperSlide className="banner-slide">
          <div className="absolute inset-0">
            <img 
              src="assets/banners/banner-bg1.jpg" 
              alt="Healthcare Investment"
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 gradient-overlay"></div>
            <div className="absolute inset-0 noise-bg"></div>
          </div>
          <div className="relative h-full flex items-center py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Content Column */}
                <div className="slide-content">
                  <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-4 md:mb-6">
                    For Corporates
                  </div>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                    A Healthier Workforce. A Stronger Business.
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-purple-200 font-semibold mb-6">
                    Boost productivity and employee satisfaction with exclusive wellness benefits and healthcare solutions tailored for your team.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 md:px-8 md:py-4 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-600/30">
                      Investment Opportunities
                    </button>
                    <button className="px-6 py-3 md:px-8 md:py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300 backdrop-blur-lg">
                      Download Prospectus
                    </button>
                  </div>
                </div>

                {/* Form Column - Hidden on Mobile */}
                <div className="hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-4">Corporate Wellness Inquiry</h3>
                    <p className="text-indigo-200 mb-6">Let us craft a solution for your organization's healthcare needs.</p>

                    <form className="space-y-4" action="https://app.formester.com/forms/Osx75yCYK/submissions" method="post">
                      <div>
                        <label className="block text-indigo-200 text-sm font-medium mb-2" htmlFor="company">Company Name</label>
                        <input 
                          type="text" 
                          id="company"
                          className="w-full bg-white/5 border border-indigo-400/30 rounded-lg px-4 py-3 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="ABC Corporation" 
                        />
                      </div>

                      <div>
                        <label className="block text-indigo-200 text-sm font-medium mb-2" htmlFor="contact-person">Contact Person</label>
                        <input 
                          type="text" 
                          id="contact-person"
                          className="w-full bg-white/5 border border-indigo-400/30 rounded-lg px-4 py-3 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Your Name" 
                        />
                      </div>

                      <div>
                        <label className="block text-indigo-200 text-sm font-medium mb-2" htmlFor="employee-count">Number of Employees</label>
                        <select 
                          id="employee-count"
                          className="w-full bg-white/5 border border-indigo-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="" className="bg-gray-800">Select range</option>
                          <option value="1-50" className="bg-gray-800">1-50</option>
                          <option value="51-200" className="bg-gray-800">51-200</option>
                          <option value="201-500" className="bg-gray-800">201-500</option>
                          <option value="501-1000" className="bg-gray-800">501-1000</option>
                          <option value="1000+" className="bg-gray-800">1000+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-indigo-200 text-sm font-medium mb-2" htmlFor="business-email">Business Email</label>
                        <input 
                          type="email" 
                          id="business-email"
                          className="w-full bg-white/5 border border-indigo-400/30 rounded-lg px-4 py-3 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="you@company.com" 
                        />
                      </div>

                      <div className="flex items-center">
                        <input 
                          id="corporate-terms" 
                          type="checkbox"
                          className="h-4 w-4 bg-white/5 border-indigo-400/30 rounded focus:ring-indigo-500 text-indigo-600" 
                        />
                        <label htmlFor="corporate-terms" className="ml-2 block text-sm text-indigo-200">
                          I agree to the terms and privacy policy
                        </label>
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-600/30"
                      >
                        Get Started
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;