import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GovernmentSectorContent from '../components/GovernmentSectorContent';

const GovernmentSector = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <GovernmentSectorContent />
      </main>
      <Footer />
    </div>
  );
};

export default GovernmentSector;