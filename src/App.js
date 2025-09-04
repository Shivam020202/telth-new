import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

// Import your actual page components
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NGOs from "./pages/NGOs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GovernmentSector from "./pages/GovernmentSector";
import CarePlan from "./pages/CarePlan";
import Care2Home from "./pages/Care2Home";
import Blog from "./pages/Blog";
import BlogArticle from "./components/BlogArticle";

// Custom hook to detect user's country code via IP
const useUserLocation = () => {
  const [location, setLocation] = useState({
    countryCode: null,
    loading: true,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      // For local development, default to IN
      if (
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
      ) {
        setLocation({ countryCode: "IN", loading: false });
        return;
      }

      try {
        // Use a more reliable API
        const response = await fetch(
          "https://api.ipgeolocation.io/ipgeo?apiKey=demo"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch location");
        }
        const data = await response.json();
        const detectedCountry = data.country_code2;

        if (detectedCountry === "GB") {
          setLocation({ countryCode: "UK", loading: false });
        } else if (detectedCountry === "IN") {
          setLocation({ countryCode: "IN", loading: false });
        } else {
          setLocation({ countryCode: "GLOBAL", loading: false });
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        setLocation({ countryCode: "GLOBAL", loading: false });
      }
    };
    fetchLocation();
  }, []);

  return location;
};

// Top-level redirection logic
const AppRedirector = () => {
  const { countryCode, loading } = useUserLocation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && location.pathname === "/") {
      if (countryCode === "UK") {
        navigate("/uk", { replace: true });
      } else if (countryCode === "IN") {
        navigate("/in", { replace: true });
      }
    }
  }, [countryCode, loading, navigate, location.pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Detecting your location...</p>
        </div>
      </div>
    );
  }
  return null;
};

// Main App component
const App = () => (
  <BrowserRouter>
    <AppRedirector />
    <Routes>
      <Route path="/*" element={<GlobalRoutes />} />
      <Route path="/uk/*" element={<UKRoutes />} />
      <Route path="/in/*" element={<INRoutes />} />
    </Routes>
  </BrowserRouter>
);

const GlobalRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:category/:slug" element={<BlogArticle />} />
    <Route path="/care-plan" element={<CarePlan />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route
      path="*"
      element={<h1 className="text-center p-8">404 – Global region</h1>}
    />
  </Routes>
);

const UKRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:category/:slug" element={<BlogArticle />} />
    <Route path="/care-plan" element={<CarePlan />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route
      path="*"
      element={<h1 className="text-center p-8">404 – UK region</h1>}
    />
  </Routes>
);

const INRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:category/:slug" element={<BlogArticle />} />
    <Route path="/care-plan" element={<CarePlan />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/care2home" element={<Care2Home />} />
    <Route path="/government-sector" element={<GovernmentSector />} />
    <Route path="/ngos" element={<NGOs />} />
    <Route
      path="*"
      element={<h1 className="text-center p-8">404 – India region</h1>}
    />
  </Routes>
);

export default App;
