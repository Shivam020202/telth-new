import React from 'react';
import Navbar from '../components/Navbar';
import ContactUsHero from '../components/ContactUsHero';
import ContactUsContent from '../components/ContactUsContent';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <Navbar />
      <div className="h-20"></div>
      <ContactUsHero />
      <ContactUsContent />
      <Footer />
    </div>
  );
};

export default ContactUs;