import React from 'react';
import Navbar from '../components/Navbar';
import AboutUsHero from '../components/AboutUsHero';
import AboutUsContent from '../components/AboutUsContent';
import WhyChooseTelth from '../components/WhyChooseTelth';
import CoreValues from '../components/CoreValues';
import GlobalNetworkExcellence from '../components/GlobalNetworkExcellence';
import BoardOfDirectors from '../components/BoardOfDirectors';
import JoinUsCTA from '../components/JoinUsCTA';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <AboutUsHero />
      <AboutUsContent />
      <WhyChooseTelth />
      <CoreValues />
      <GlobalNetworkExcellence />
      <div className="max-w-[1500px] mx-auto px-6">
        <BoardOfDirectors />
        <JoinUsCTA />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;