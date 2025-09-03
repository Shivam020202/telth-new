import React from 'react';

const JoinUsCTA = () => {
  return (
    <div className="mt-24 bg-gray-900 rounded-3xl overflow-hidden">
      <div className="relative px-8 py-16 md:p-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-light text-white mb-6">Join Us in Shaping the Future of Healthcare</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Step into a new era where technology meets compassion. Whether you're a patient seeking
            convenient, data-driven care or a healthcare provider looking to leverage the latest in
            diagnostic and treatment tools, Telth is here to support you every step of the way.
          </p>
          <a href="#"
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
            Join Our Journey
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinUsCTA;