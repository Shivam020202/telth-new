import React, { useState, useEffect } from 'react';

const PrivacyPolicyContent = () => {
  const [openSections, setOpenSections] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const privacySections = [
    {
      id: 'information-collect',
      title: '2. INFORMATION WE COLLECT',
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
          <p className="text-gray-700 mb-2">We collect information that identifies you, including:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Name, date of birth, gender, and age</li>
            <li>Contact information (address, email, mobile number)</li>
            <li>Aadhaar number (with your consent, where legally permitted)</li>
            <li>PAN card details (for prepaid card KYC purposes)</li>
            <li>Insurance information (policy numbers, provider details)</li>
            <li>Payment information (UPI ID, credit/debit card details)</li>
            <li>Emergency contact information</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2 Health Information</h3>
          <p className="text-gray-700 mb-2">We collect comprehensive health data including:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Medical history and conditions</li>
            <li>All diagnostic test results and health markers</li>
            <li>Treatment records and outcomes</li>
            <li>Medication and prescription information</li>
            <li>AYUSH treatment history (if applicable)</li>
            <li>All health parameters required for comprehensive care</li>
            <li>Immunization records as per Indian health guidelines</li>
            <li>Any health data necessary for optimal care delivery</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.3 Device and Usage Data</h3>
          <p className="text-gray-700 mb-2">We automatically collect:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Device information (type, model, operating system)</li>
            <li>IP address and approximate location</li>
            <li>Browser type and settings</li>
            <li>Usage patterns and preferences</li>
            <li>Interaction with our platforms</li>
            <li>All device-generated health data</li>
          </ul>
        </>
      )
    },
    {
      id: 'app-permissions',
      title: '3. MOBILE APPLICATION PERMISSIONS',
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Camera Access</h3>
          <p className="text-gray-700 mb-2">Our mobile application requests camera access for the following purposes:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Video Consultations: Camera access is used exclusively for real-time video calls between users and healthcare providers during telemedicine consultations</li>
            <li>Document Scanning: Camera may be used to scan medical documents, prescriptions, or health records for digital storage and processing</li>
            <li>Health Monitoring: Camera access may be required for certain health monitoring features when using compatible medical devices</li>
          </ul>
          <p className="text-gray-700 mb-2 font-medium">Important Notes:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Camera access is only activated with your explicit permission</li>
            <li>No video content is recorded, stored, or shared by the app during consultations</li>
            <li>Camera access is limited to the duration of active use and consultation sessions</li>
            <li>All video data is transmitted securely through encrypted channels</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Microphone Access</h3>
          <p className="text-gray-700 mb-2">Our app uses microphone access for:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Audio Communication: Real-time audio during video consultations with healthcare providers</li>
            <li>Voice Commands: Optional voice-activated features for hands-free navigation (if enabled)</li>
            <li>Audio Consultations: Voice-only telemedicine consultations when video is not required</li>
          </ul>
          <p className="text-gray-700 mb-2 font-medium">Important Notes:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Microphone access is only triggered during active consultations or when voice features are specifically activated</li>
            <li>No audio is recorded, stored, or shared by the app or company</li>
            <li>All audio data is transmitted securely and not retained after consultation ends</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3 Location Access</h3>
          <p className="text-gray-700 mb-2">We may request location access for:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Emergency Services: To provide your location to emergency responders when using emergency features</li>
            <li>Nearby Healthcare Facilities: To locate nearest Telth Smart Care Hubs, hospitals, or pharmacies</li>
            <li>Delivery Services: For medicine delivery and home healthcare services</li>
            <li>Compliance: To ensure services comply with state-specific healthcare regulations</li>
          </ul>
          <p className="text-gray-700 mb-2 font-medium">Location Data Handling:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Location data is only collected with your explicit consent</li>
            <li>Location information is not stored permanently and is used only for the specific requested service</li>
            <li>You can disable location access at any time through device settings</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.4 Storage Access</h3>
          <p className="text-gray-700 mb-2">Our app requests storage access to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Medical Records: Store and access your health documents, test results, and medical history</li>
            <li>Prescription Images: Save photos of prescriptions for pharmacy processing</li>
            <li>Health Data Backup: Securely backup your health information for continuity of care</li>
            <li>Offline Access: Enable access to critical health information when internet connectivity is limited</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.5 Notification Access</h3>
          <p className="text-gray-700 mb-2">We request notification permissions to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Appointment Reminders: Send reminders for scheduled consultations and health check-ups</li>
            <li>Medication Alerts: Notify you about medication schedules and prescription refills</li>
            <li>Health Monitoring: Alert you about critical health parameters or test results</li>
            <li>Emergency Notifications: Send urgent health alerts and emergency communications</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.6 Third-Party SDK Usage</h3>
          <p className="text-gray-700 mb-2">Our mobile application uses the following third-party services:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Agora SDK: For video and audio communication during telemedicine consultations</li>
            <li>Payment Gateways: For secure processing of payments and insurance claims</li>
            <li>Analytics Services: To improve app performance and user experience (with anonymized data)</li>
          </ul>
          <p className="text-gray-700 mb-2 font-medium">Third-Party Data Handling:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>All third-party services are vetted for compliance with Indian data protection laws</li>
            <li>Media data transmitted through Agora SDK is encrypted and not stored by third parties</li>
            <li>Payment data is processed through PCI-DSS compliant Indian payment gateways</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.7 Permission Management and User Control</h3>
          <p className="text-gray-700 mb-2">You maintain full control over app permissions:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Granular Control: You can grant or deny individual permissions based on your preferences</li>
            <li>Revocation: All permissions can be revoked at any time through your device settings</li>
            <li>Functionality Impact: We will clearly explain how denying certain permissions may affect app functionality</li>
            <li>Re-request: We may request permissions again only when necessary for specific features you choose to use</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.8 Biometric Data Protection</h3>
          <p className="text-gray-700 mb-2">If our app uses biometric features (fingerprint, face recognition) for authentication:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Biometric data is processed locally on your device and never transmitted to our servers</li>
            <li>We do not collect, store, or analyze biometric data for any other purposes</li>
            <li>Biometric authentication is optional and alternative login methods are always available</li>
          </ul>
        </>
      )
    },
    {
      id: 'legal-basis',
      title: '4. LEGAL BASIS FOR PROCESSING',
      content: (
        <>
          <p className="text-gray-700 mb-2">We process your personal data in compliance with:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Digital Personal Data Protection Act, 2023 (DPDPA)</li>
            <li>Information Technology Act, 2000</li>
            <li>Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002</li>
            <li>Drugs and Cosmetics Act, 1940 (for e-pharmacy services)</li>
            <li>Clinical Establishments Act, 2010</li>
            <li>Other applicable Indian laws and regulations</li>
          </ul>
        </>
      )
    },
    {
      id: 'how-we-use',
      title: '5. HOW WE USE YOUR INFORMATION',
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Healthcare Services</h3>
          <p className="text-gray-700 mb-2">We use your information to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Provide personalized healthcare services</li>
            <li>Create and manage care plans</li>
            <li>Facilitate telemedicine consultations as per Indian telemedicine guidelines</li>
            <li>Process diagnostic tests in NABL-accredited facilities</li>
            <li>Monitor health conditions</li>
            <li>Provide emergency medical assistance</li>
            <li>Coordinate care with registered medical practitioners</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 P3DSC Algorithm</h3>
          <p className="text-gray-700 mb-2">Your data powers our predictive healthcare system to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Generate health insights based on Indian population health patterns</li>
            <li>Optimize treatment protocols</li>
            <li>Identify health risks specific to Indian demographics</li>
            <li>Personalize care recommendations</li>
            <li>Support evidence-based clinical decisions</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Regulatory Compliance</h3>
          <p className="text-gray-700 mb-2">We use your data to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Comply with mandatory reporting requirements</li>
            <li>Maintain medical records as per Indian regulations</li>
            <li>Report notifiable diseases to health authorities</li>
            <li>Process insurance claims with Indian insurance providers</li>
            <li>Meet tax compliance requirements</li>
          </ul>
        </>
      )
    },
    {
      id: 'data-sharing',
      title: '6. DATA SHARING AND DISCLOSURE',
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Healthcare Providers</h3>
          <p className="text-gray-700 mb-2">We share information with:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Medical practitioners registered with Indian medical councils</li>
            <li>Hospitals and clinics registered under Clinical Establishments Act</li>
            <li>NABL-accredited diagnostic laboratories</li>
            <li>Licensed pharmacies for prescription processing</li>
            <li>AYUSH practitioners (when applicable)</li>
            <li>Care practitioners trained and licensed by Telth and its partners</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Government and Regulatory Bodies</h3>
          <p className="text-gray-700 mb-2">We may share data with:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Ministry of Health and Family Welfare</li>
            <li>National Health Authority</li>
            <li>State health departments</li>
            <li>Insurance Regulatory and Development Authority of India (IRDAI)</li>
            <li>Law enforcement agencies (with valid legal requests)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Third-Party Service Providers</h3>
          <p className="text-gray-700 mb-2">We work with:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Indian payment gateways and banks</li>
            <li>Cloud service providers compliant with Indian data localization requirements</li>
            <li>IT service providers based in India</li>
            <li>Medical device manufacturers approved by CDSCO</li>
            <li>Insurance companies licensed by IRDAI</li>
          </ul>
        </>
      )
    },
    {
      id: 'data-security',
      title: '7. DATA SECURITY AND STORAGE',
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Data Localization</h3>
          <p className="text-gray-700 mb-2">In compliance with Indian law:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>All personal data is stored within Indian territory</li>
            <li>Health records are maintained on servers located in India</li>
            <li>We use Indian cloud service providers where possible</li>
            <li>Cross-border transfers are minimized and conducted per legal requirements</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Security Measures</h3>
          <p className="text-gray-700 mb-2">We implement:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Encryption standards approved by Indian authorities</li>
            <li>Multi-factor authentication</li>
            <li>Regular security audits by CERT-IN empaneled auditors</li>
            <li>Compliance with RBI guidelines for payment data</li>
            <li>Physical security at all Indian facilities</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">7.3 G-Med ID Security</h3>
          <p className="text-gray-700 mb-2">Your unique healthcare identifier is:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Linked with consent to government health IDs (where applicable)</li>
            <li>Protected using India-specific authentication methods</li>
            <li>Integrated with ABDM (Ayushman Bharat Digital Mission) where required</li>
          </ul>
        </>
      )
    },
    {
      id: 'your-rights',
      title: '8. YOUR RIGHTS UNDER INDIAN LAW',
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 Rights under DPDPA</h3>
          <p className="text-gray-700 mb-2">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Erase personal data (subject to legal requirements)</li>
            <li>Withdraw consent</li>
            <li>Grievance redressal</li>
            <li>Nominate a digital data nominee</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 Health Data Rights</h3>
          <p className="text-gray-700 mb-2">You can:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Access your electronic health records</li>
            <li>Request physical copies of medical records</li>
            <li>Port data to other healthcare providers</li>
            <li>Opt-out of data sharing (except mandatory reporting)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">8.3 Mobile App Permission Rights</h3>
          <p className="text-gray-700 mb-2">You can:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Review and modify all app permissions at any time</li>
            <li>Revoke specific permissions without affecting other app functionality</li>
            <li>Request information about how permissions are used</li>
            <li>Disable automatic permission requests</li>
          </ul>
        </>
      )
    },
    {
      id: 'consent-management',
      title: '9. CONSENT MANAGEMENT',
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 Types of Consent</h3>
          <p className="text-gray-700 mb-2">We obtain:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Explicit consent for sensitive personal data</li>
            <li>Informed consent for medical procedures</li>
            <li>Separate consent for Aadhaar authentication</li>
            <li>Opt-in consent for marketing communications</li>
            <li>Parental consent for minors (below 18 years)</li>
            <li>Granular consent for each mobile app permission</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 Withdrawal of Consent</h3>
          <p className="text-gray-700 mb-2">You can withdraw consent through:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Our mobile app or web platform</li>
            <li>Written request to our Data Protection Officer</li>
            <li>Customer support channels</li>
            <li>Device settings for app permissions</li>
          </ul>
        </>
      )
    },
    {
      id: 'retention-deletion',
      title: '10. RETENTION AND DELETION',
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">10.1 Retention Periods</h3>
          <p className="text-gray-700 mb-2">We retain data as per:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Indian Medical Council regulations (minimum 3 years)</li>
            <li>Insurance claim requirements</li>
            <li>Legal proceedings requirements</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">10.2 Data Deletion</h3>
          <p className="text-gray-700 mb-2">Upon request, we will:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Delete data not required by law</li>
            <li>Anonymize health records where permitted</li>
            <li>Remove marketing preferences immediately</li>
          </ul>
        </>
      )
    },
    {
      id: 'grievance-redressal',
      title: '11. GRIEVANCE REDRESSAL',
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">11.1 Grievance Officer</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="font-semibold text-gray-800">Name: Ayanika Dutta</p>
            <p className="text-gray-700">Email: ayanikadutta@mytelth.com</p>
            <p className="text-gray-700">Address: Vardhaman Trade Centre, Nehru Place, New Delhi-110019</p>
            <p className="text-gray-700">Response Time: Within 48 hours</p>
          </div>
        </>
      )
    },
    {
      id: 'childrens-privacy',
      title: '12. CHILDREN\'S PRIVACY',
      content: (
        <>
          <p className="text-gray-700 mb-4">For users below 18 years:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Parental/guardian consent is mandatory</li>
            <li>Limited data collection</li>
            <li>Enhanced security measures</li>
            <li>Compliance with child protection laws</li>
          </ul>
        </>
      )
    },
    {
      id: 'cookies-tracking',
      title: '13. COOKIES AND TRACKING',
      content: (
        <>
          <p className="text-gray-700 mb-4">We use cookies in compliance with Indian laws:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Essential cookies for functionality</li>
            <li>Analytics cookies (with consent)</li>
            <li>No third-party tracking without consent</li>
            <li>Cookie consent banner as per requirements</li>
          </ul>
        </>
      )
    },
    {
      id: 'policy-updates',
      title: '14. UPDATES TO THIS POLICY',
      content: (
        <>
          <p className="text-gray-700 mb-2">We will notify you of material changes through:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Email notifications</li>
            <li>SMS alerts</li>
            <li>In-app notifications</li>
            <li>Website announcements</li>
          </ul>
        </>
      )
    },
    {
      id: 'language',
      title: '15. LANGUAGE',
      content: (
        <>
          <p className="text-gray-700 mb-2">This Privacy Policy is available in:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>English</li>
            <li>Regional languages upon request</li>
          </ul>
          <p className="text-gray-700">In case of discrepancy, the English version prevails.</p>
        </>
      )
    },
    {
      id: 'contact-information',
      title: '16. CONTACT INFORMATION',
      content: (
        <>
          <p className="text-gray-700 mb-4">For privacy-related queries:</p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-800 mb-2">Telth Healthcare Private Limited</p>
              <p className="text-gray-700">G2, Tidel Park Neo, Karuppur, Salem 636011</p>
              <p className="text-gray-700">Email: info@telth.org</p>
              <p className="text-gray-700">Phone: +91 79048 77505</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-800 mb-2">Corporate Office</p>
              <p className="text-gray-700">3rd Floor, Vardhaman Trade Centre</p>
              <p className="text-gray-700">Nehru Place, New Delhi-110019</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-800 mb-2">Customer Support</p>
              <p className="text-gray-700">Email: support@telth.org</p>
              <p className="text-gray-700">Toll-Free: 1800 570 0140</p>
            </div>
          </div>
        </>
      )
    }
  ];

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle section
  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Expand all sections
  const expandAll = () => {
    const allOpen = {};
    privacySections.forEach(section => {
      allOpen[section.id] = true;
    });
    setOpenSections(allOpen);
  };

  // Collapse all sections
  const collapseAll = () => {
    setOpenSections({});
  };

  // Search functionality
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      collapseAll();
      return;
    }

    const searchLower = searchTerm.toLowerCase();
    const matchingSections = {};
    
    privacySections.forEach(section => {
      const sectionText = (section.title + ' ' + section.content.props.children.toString()).toLowerCase();
      if (sectionText.includes(searchLower)) {
        matchingSections[section.id] = true;
      }
    });

    setOpenSections(matchingSections);
  };

  // Handle search on Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="min-h-screen">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-purple-700 text-white py-12 px-4 md:px-8 shadow-lg">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">TELTH HEALTHCARE PRIVACY POLICY</h1>
            <h2 className="text-xl md:text-2xl mb-6">(INDIA)</h2>
            <p className="text-sm md:text-base opacity-90">Last Updated: April 22, 2025</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="flex items-center bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <input 
                type="text" 
                placeholder="Search privacy policy..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full py-3 px-4 outline-none text-gray-700 placeholder-gray-400"
              />
              <button 
                onClick={handleSearch}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 flex items-center justify-center transition duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>

            {/* Expand/Collapse All Controls */}
            <div className="flex justify-end mt-3 space-x-3">
              <button 
                onClick={expandAll}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium px-3 py-1 bg-blue-50 rounded-lg"
              >
                Expand All
              </button>
              <button 
                onClick={collapseAll}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium px-3 py-1 bg-blue-50 rounded-lg"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. INTRODUCTION</h2>
            <p className="text-gray-700 mb-4">
              Telth Healthcare Private Limited having its registered office at G2, Tidel Park Neo, Karuppur,
              Salem 63601, Tamil Nadu and corporate office at Vardhaman Trade Centre, Nehru Place, New
              Delhi ("Telth," "we," "us," or "our") is committed to protecting your privacy in accordance with
              Indian laws and regulations. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.1 Scope of This Policy</h3>
            <p className="text-gray-700 mb-2">This Privacy Policy applies to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>All Telth digital platforms operating in India</li>
              <li>Telth mobile applications available in India</li>
              <li>Telth medical devices and Health Examination Systems</li>
              <li>Telth Smart Care Hubs and clinics in India</li>
              <li>Telth care plans and subscription services</li>
              <li>E-Pharmacy and telemedicine services</li>
              <li>All services provided through Telth ecosystem in India</li>
            </ul>
          </div>

          {/* Collapsible Sections */}
          <div className="space-y-6">
            {privacySections.map((section) => (
              <div key={section.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div 
                  className="flex justify-between items-center p-6 bg-white cursor-pointer hover:bg-gray-50 transition duration-150"
                  onClick={() => toggleSection(section.id)}
                >
                  <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                  <svg 
                    className={`w-6 h-6 text-blue-500 transform transition-transform duration-200 ${
                      openSections[section.id] ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                {openSections[section.id] && (
                  <div className="px-6 pb-6">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-gray-600 text-sm mb-4">
              By using Telth services, you acknowledge that you have read and understood this Privacy Policy.
            </p>
            <p className="text-gray-600 text-sm">
              © 2025 Telth Healthcare Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      )}
    </>
  );
};

export default PrivacyPolicyContent;