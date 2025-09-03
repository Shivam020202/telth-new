import React from 'react';

const SmartCareLocations = () => {
  const locations = [
    {
      name: 'Delhi',
      image: 'assets/delhi.jpg',
      alt: 'Delhi',
      isActive: true
    },
    {
      name: 'Jaipur',
      subtitle: '(Coming soon)',
      image: 'assets/jaipur.jpeg',
      alt: 'Jaipur',
      isActive: false
    },
    {
      name: 'Gurgaon',
      image: 'assets/gurgaon.png',
      alt: 'Gurgaon',
      isActive: true
    },
    {
      name: 'Bangalore',
      image: 'assets/bangalore.jpeg',
      alt: 'Bangalore',
      isActive: true
    },
    {
      name: 'Mumbai',
      image: 'assets/mumbai.jpeg',
      alt: 'Mumbai',
      isActive: true
    },
    {
      name: 'Ahmedabad',
      image: 'assets/ahemdabad.jpeg',
      alt: 'Ahmedabad',
      isActive: true
    }
  ];

  return (
    <div className="container max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Smart Care Locations</h1>
          <p className="text-gray-600 text-lg">
            We believe in putting you, the patient, at the center of everything we do. Our experienced team
            of healthcare professionals is committed to providing compassionate and comprehensive care tailored
            to your individual needs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* City Cards */}
            {locations.map((location, index) => (
              <div 
                key={index}
                className="relative bg-white rounded-lg shadow-md h-40 cursor-pointer overflow-hidden group"
              >
                <div className="absolute inset-x-0 top-0 p-4 z-10">
                  <div className={`text-center ${
                    location.isActive 
                      ? 'text-gray-900 font-semibold' 
                      : 'text-gray-500'
                  }`}>
                    {location.name}
                    {location.subtitle && (
                      <div className="text-xs">{location.subtitle}</div>
                    )}
                  </div>
                </div>
                <img 
                  src={location.image} 
                  alt={location.alt}
                  className="absolute inset-0 w-full h-full object-cover transform translate-y-12 group-hover:translate-y-2 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Single Image */}
        <div className="w-full h-full">
          <img 
            src="assets/smart-clinic.jpg" 
            alt="Healthcare Professional"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SmartCareLocations;