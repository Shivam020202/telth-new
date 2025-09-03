import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import CareManagerSection from '../components/CareManagerSection';
import MedicalEquipmentSection from '../components/MedicalEquipmentSection';
import HealthWealthCard from '../components/HealthWealthCard';
import ServicesSection from '../components/ServicesSection';
import SmartCareLocations from '../components/SmartCareLocations';
import TurnkeySolutions from '../components/TurnkeySolutions';
import PatientCentricCare from '../components/PatientCentricCare';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F2ECFE]">
      <Navbar />
      <HeroSlider />
      <CareManagerSection />
      <MedicalEquipmentSection />
      <HealthWealthCard />
      <ServicesSection />
      <SmartCareLocations />
      <TurnkeySolutions />
      <PatientCentricCare />
      <Footer />
    </div>
  );
};

export default Home;