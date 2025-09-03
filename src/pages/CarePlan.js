import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarePlanContent from '../components/CarePlanContent';

const CarePlan = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <CarePlanContent />
      </main>
      <Footer />
    </div>
  );
};

export default CarePlan;