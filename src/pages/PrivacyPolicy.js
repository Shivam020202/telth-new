import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PrivacyPolicyContent from '../components/PrivacyPolicyContent';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;