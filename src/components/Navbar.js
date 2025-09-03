import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ region }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentRegion =
    region ||
    (location.pathname.startsWith("/uk")
      ? "UK"
      : location.pathname.startsWith("/in")
      ? "IN"
      : "GLOBAL");

  const closeMenu = () => setIsMenuOpen(false);

  /* ---------- MENU DATA ---------- */
  const basePrefix =
    currentRegion === "UK" ? "/uk" : currentRegion === "IN" ? "/in" : "";

  const sections = [
    {
      title: "Solutions",
      rows: [
        { label: "Home", path: basePrefix || "/" },
        { label: "About Us", path: `${basePrefix}/about-us` },
        { label: "Contact Us", path: `${basePrefix}/contact-us` },
        { label: "Care Plan", path: `${basePrefix}/care-plan` },
      ],
    },
    {
      title: "Technologies & Services",
      rows: [
        { label: "Technologies", path: "#" },
        { label: "Products", path: "#" },
        { label: "Network & Partnerships", path: "#" },
        { label: "Care Managers", path: "#" },
      ],
    },
    ...(currentRegion === "IN"
      ? [
          {
            title: "India Solutions",
            rows: [
              { label: "Care2Home", path: "/in/care2home" },
              { label: "Government Sector", path: "/in/government-sector" },
              { label: "NGOs", path: "/in/ngos" },
              { label: "For Corporates", path: "#" },
            ],
          },
        ]
      : []),
    {
      title: "Community & Support",
      rows: [
        { label: "Blog", path: `${basePrefix}/blog` },
        { label: "Miscellaneous", path: "#" },
      ],
    },
  ];

  const gradient = "from-violet-800 via-indigo-800 to-violet-800";

  /* ---------- RENDER ---------- */
  return (
    <>
      {/* ----- Navbar Strip ----- */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 w-full backdrop-blur-md bg-white/80 shadow-sm"
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <div className={`h-0.5 bg-gradient-to-r ${gradient}`} />
        <div className="container mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to={
              currentRegion === "UK"
                ? "/uk"
                : currentRegion === "IN"
                ? "/in"
                : "/"
            }
            className="flex items-center space-x-2"
          >
            <img src="/assets/telth.png" alt="telth" className="w-7 h-7" />
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              {currentRegion === "UK"
                ? "Telth UK"
                : currentRegion === "IN"
                ? "Telth India"
                : "Telth.care"}
            </span>
          </Link>

          {/* Desktop trigger */}
          <div
            className="hidden md:flex relative"
            onMouseEnter={() => setIsMenuOpen(true)}
          >
            <button
              type="button"
              className="flex items-center space-x-1 px-4 py-2 rounded-lg text-violet-700 hover:bg-violet-100 transition-colors"
            >
              <span>Menu</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Mega-menu panel */}
            {isMenuOpen && (
              <div
                className={`fixed left-0 right-0 top-full 
                            bg-white backdrop-blur-3xl rounded-b-2xl shadow-xl
                            border-t border-violet-100 px-6 py-8
                            bg-[url('/assets/menu-bg-image.png')] bg-[length:280px] bg-no-repeat bg-right-bottom `}
              >
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
                  {sections.map((section) => (
                    <div key={section.title}>
                      <h3 className="font-bold text-violet-900 mb-3">
                        {section.title}
                      </h3>
                      <ul className="space-y-1">
                        {section.rows.map((row) => (
                          <li key={row.label}>
                            <Link
                              to={row.path}
                              onClick={closeMenu}
                              className="block text-sm text-gray-700 hover:text-violet-600 transition-colors"
                            >
                              {row.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Region switcher */}
                <div className="max-w-7xl mx-auto flex justify-end items-center space-x-2 text-xs mt-6">
                  <span className="text-gray-500 hidden sm:inline">
                    Region:
                  </span>
                  {currentRegion !== "UK" && (
                    <Link
                      to="/uk"
                      onClick={closeMenu}
                      className="bg-violet-100 text-violet-700 px-2 py-1 rounded hover:bg-violet-200"
                    >
                      UK
                    </Link>
                  )}
                  {currentRegion !== "IN" && (
                    <Link
                      to="/in"
                      onClick={closeMenu}
                      className="bg-violet-100 text-violet-700 px-2 py-1 rounded hover:bg-violet-200"
                    >
                      IN
                    </Link>
                  )}
                  <Link
                    to="/"
                    onClick={closeMenu}
                    className="bg-violet-100 text-violet-700 px-2 py-1 rounded hover:bg-violet-200"
                  >
                    Global
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((o) => !o)}
              className="p-2 rounded-lg text-violet-700 hover:bg-violet-100 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Mobile slide-down */}
            {isMenuOpen && (
              <div
                className={`fixed left-0 right-0 top-full mt-1 bg-white/90 backdrop-blur-xl rounded-b-2xl shadow-xl
                            border-t border-violet-100 px-4 py-6 space-y-6`}
              >
                {sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-bold text-violet-900 mb-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-1">
                      {section.rows.map((row) => (
                        <li key={row.label}>
                          <Link
                            to={row.path}
                            onClick={closeMenu}
                            className="block text-sm text-gray-700 hover:text-violet-600"
                          >
                            {row.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Region switcher */}
                <div className="flex justify-end space-x-2 text-xs">
                  {currentRegion !== "UK" && (
                    <Link
                      to="/uk"
                      onClick={closeMenu}
                      className="bg-violet-100 text-violet-700 px-2 py-1 rounded"
                    >
                      UK
                    </Link>
                  )}
                  {currentRegion !== "IN" && (
                    <Link
                      to="/in"
                      onClick={closeMenu}
                      className="bg-violet-100 text-violet-700 px-2 py-1 rounded"
                    >
                      IN
                    </Link>
                  )}
                  <Link
                    to="/"
                    onClick={closeMenu}
                    className="bg-violet-100 text-violet-700 px-2 py-1 rounded"
                  >
                    Global
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Spacer to offset fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
