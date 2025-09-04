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

// Multiple geolocation API providers for fallback
const GEOLOCATION_APIS = [
  {
    name: "ipapi",
    url: "https://ipapi.co/json/",
    getCountryCode: (data) => data.country_code,
  },
  {
    name: "ipgeolocation",
    url: `https://api.ipgeolocation.io/ipgeo?apiKey=${
      process.env.REACT_APP_IPGEO_API_KEY || "YOUR_API_KEY_HERE"
    }`,
    getCountryCode: (data) => data.country_code2,
  },
  {
    name: "geolocation-db",
    url: "https://geolocation-db.com/json/",
    getCountryCode: (data) => data.country_code,
  },
  {
    name: "cloudflare",
    url: "https://cloudflare.com/cdn-cgi/trace",
    getCountryCode: (data) => {
      // Parse the plain text response from Cloudflare
      const lines = data.split("\n");
      const locLine = lines.find((line) => line.startsWith("loc="));
      return locLine ? locLine.split("=")[1] : null;
    },
    isPlainText: true,
  },
];

// Custom hook to detect user's country code via IP with multiple fallbacks
const useUserLocation = () => {
  const [location, setLocation] = useState({
    countryCode: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // Check localStorage for cached location (with expiry)
    const cachedLocation = localStorage.getItem("userLocation");
    const cacheExpiry = localStorage.getItem("locationCacheExpiry");

    if (cachedLocation && cacheExpiry) {
      const expiryTime = parseInt(cacheExpiry, 10);
      if (Date.now() < expiryTime) {
        console.log("Using cached location:", cachedLocation);
        setLocation({
          countryCode: cachedLocation,
          loading: false,
          error: null,
        });
        return;
      } else {
        // Clear expired cache
        localStorage.removeItem("userLocation");
        localStorage.removeItem("locationCacheExpiry");
      }
    }

    const fetchLocationWithFallback = async () => {
      // Try each API in sequence until one works
      for (const api of GEOLOCATION_APIS) {
        try {
          console.log(`Attempting geolocation with ${api.name}...`);

          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

          const response = await fetch(api.url, {
            signal: controller.signal,
            headers: {
              Accept: api.isPlainText ? "text/plain" : "application/json",
            },
          });

          clearTimeout(timeoutId);

          if (!response.ok) {
            throw new Error(`${api.name} returned ${response.status}`);
          }

          let data;
          if (api.isPlainText) {
            const text = await response.text();
            data = text;
          } else {
            data = await response.json();
          }

          const countryCode = api.getCountryCode(data);

          if (!countryCode) {
            throw new Error(`No country code in ${api.name} response`);
          }

          console.log(
            `Successfully detected country: ${countryCode} using ${api.name}`
          );

          // Map country codes to our supported regions
          let mappedCountry;
          if (countryCode === "GB" || countryCode === "UK") {
            mappedCountry = "UK";
          } else if (countryCode === "IN") {
            mappedCountry = "IN";
          } else {
            mappedCountry = "GLOBAL";
          }

          // Cache the result for 1 hour
          localStorage.setItem("userLocation", mappedCountry);
          localStorage.setItem(
            "locationCacheExpiry",
            String(Date.now() + 3600000)
          );

          setLocation({
            countryCode: mappedCountry,
            loading: false,
            error: null,
          });
          return;
        } catch (error) {
          console.error(`Failed to fetch from ${api.name}:`, error.message);
          continue; // Try next API
        }
      }

      // All APIs failed
      console.error("All geolocation APIs failed, defaulting to GLOBAL");
      setLocation({
        countryCode: "GLOBAL",
        loading: false,
        error: "Failed to detect location",
      });
    };

    // Also check if we have a URL parameter override (useful for testing)
    const urlParams = new URLSearchParams(window.location.search);
    const forceCountry = urlParams.get("country");

    if (
      forceCountry &&
      ["UK", "IN", "GLOBAL"].includes(forceCountry.toUpperCase())
    ) {
      console.log("Using forced country from URL:", forceCountry);
      setLocation({
        countryCode: forceCountry.toUpperCase(),
        loading: false,
        error: null,
      });
      return;
    }

    fetchLocationWithFallback();
  }, []);

  return location;
};

// Top-level redirection logic
const AppRedirector = () => {
  const { countryCode, loading, error } = useUserLocation();
  const navigate = useNavigate();
  const location = useLocation();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    // Only redirect from root path and if we haven't already redirected
    if (!loading && !hasRedirected && location.pathname === "/") {
      if (countryCode === "UK") {
        console.log("Redirecting to UK version");
        navigate("/uk", { replace: true });
        setHasRedirected(true);
      } else if (countryCode === "IN") {
        console.log("Redirecting to India version");
        navigate("/in", { replace: true });
        setHasRedirected(true);
      } else {
        console.log("Staying on global version");
        // For GLOBAL, we don't need to redirect, just mark as redirected
        setHasRedirected(true);
      }
    }
  }, [countryCode, loading, navigate, location.pathname, hasRedirected]);

  // Show loading state
  if (loading && location.pathname === "/") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Detecting your location...</p>
          <p className="mt-2 text-sm text-gray-400">
            This may take a moment...
          </p>
        </div>
      </div>
    );
  }

  // Show error state with manual selection
  if (error && location.pathname === "/") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Select Your Region
          </h2>
          <p className="text-gray-600 mb-6">
            We couldn't automatically detect your location. Please select your
            region:
          </p>
          <div className="space-y-3">
            <button
              onClick={() => navigate("/uk")}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              United Kingdom
            </button>
            <button
              onClick={() => navigate("/in")}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              India
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Global / Other Regions
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

// Main App component with error boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Routing error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600">
              Please refresh the page or select your region manually.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <AppRedirector />
      <Routes>
        <Route path="/*" element={<GlobalRoutes />} />
        <Route path="/uk/*" element={<UKRoutes />} />
        <Route path="/in/*" element={<INRoutes />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
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
