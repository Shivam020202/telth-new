import React, { useState } from 'react';

const MedicalEquipmentSection = () => {
  const [activeTab, setActiveTab] = useState('diagnostic');

  const tabData = {
    diagnostic: {
      title: 'Our Devices',
      devices: [
        {
          image: 'assets/products/code-scanner.png',
          title: 'Code Scanner',
          alt: 'Code Scanner'
        },
        {
          image: 'assets/products/bio-chemical-analyser.png',
          title: 'Bio-Chemical Analyser',
          alt: 'Bio-Chemical Analyser'
        },
        {
          image: 'assets/products/ir-thermometr.png',
          title: 'IR Thermometer',
          alt: 'IR Thermometer'
        }
      ]
    },
    monitoring: {
      title: 'Our Tech',
      devices: [
        {
          image: 'assets/products/hes.png',
          title: 'HES',
          alt: 'HES'
        },
        {
          image: 'assets/products/dry-lab.png',
          title: 'Dry Lab',
          alt: 'Dry Lab'
        },
        {
          image: 'assets/products/urine-analyser.png',
          title: 'Urine Analyser',
          alt: 'Urine Analyser'
        }
      ]
    },
    surgical: {
      title: 'Ecosystem Gadgets',
      devices: [
        {
          image: 'assets/products/smart-watch.png',
          title: 'Smart Watch',
          alt: 'Smart Watch'
        },
        {
          image: 'assets/products/cgm.png',
          title: 'CGM',
          alt: 'CGM'
        },
        {
          image: 'assets/products/pulse-meter.png',
          title: 'Pulse Meter',
          alt: 'Pulse Meter'
        }
      ]
    }
  };

  return (
    <section className="px-4 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-16 relative">
          {/* Header Section */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Advanced Medical Equipment
            </h2>
            <p className="text-lg text-gray-600">
              Discover how Telth's cutting-edge devices, innovative tech solutions, and integrated ecosystem
              gadgets are transforming healthcare delivery by solving critical health challenges with
              precision and efficiency.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-8 mb-12">
            {Object.keys(tabData).map((tabKey) => (
              <button 
                key={tabKey}
                className={`tab-button group relative px-6 py-2 ${activeTab === tabKey ? 'active' : ''}`}
                onClick={() => setActiveTab(tabKey)}
              >
                <span className="text-gray-900 font-medium">{tabData[tabKey].title}</span>
                <div className={`tab-underline absolute bottom-0 left-0 h-0.5 bg-purple-600 transition-all duration-300 ${
                  activeTab === tabKey ? 'w-full' : 'w-0'
                }`}></div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content w-fit">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tabData[activeTab].devices.map((device, index) => (
                <div key={index} className="device-card max-w-[200px] h-fit rounded-xl shadow-lg bg-white group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <img 
                    src={device.image} 
                    alt={device.alt}
                    className="w-full h-fit object-cover rounded-t-xl"
                  />
                  <div className="device-overlay absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex items-end p-4">
                    <h3 className="text-white font-semibold text-md">{device.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .device-card {
          position: relative;
          overflow: hidden;
        }
        .device-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: flex-end;
          padding: 1rem;
          background: linear-gradient(to top, rgba(88, 28, 135, 0.8), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .device-card:hover .device-overlay {
          opacity: 1;
        }
        .tab-underline {
          height: 2px;
          background: linear-gradient(to right, #9333ea, #7c3aed);
          border-radius: 1px;
        }
      `}</style>
    </section>
  );
};

export default MedicalEquipmentSection;