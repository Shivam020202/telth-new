import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#F4F4F8] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-indigo-50/50 to-violet-50/50"></div>
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-violet-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 translate-y-1/2 bg-indigo-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Quick Actions Bar */}
      <div className="relative border-b border-black/5">
        <div className="container mx-auto px-6">
          <div className="py-6 flex flex-wrap justify-between items-center gap-6">
            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-8">
              <a
                href="tel:+18005700140"
                className="flex items-center gap-3 text-black/70 hover:text-black transition-colors group"
              >
                <span className="p-2 rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium">1800-570-0140</span>
              </a>
              <a
                href="mailto:contact@telth.care"
                className="flex items-center gap-3 text-black/70 hover:text-black transition-colors group"
              >
                <span className="p-2 rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium">contact@telth.care</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <Link
                to="/about-us"
                className="px-6 py-2.5 text-sm font-medium bg-white hover:bg-purple-700 hover:text-white rounded-lg transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                className="px-6 py-2.5 text-sm duration-300 font-medium bg-gradient-to-r from-indigo-300 to-violet-300 hover:from-indigo-400 hover:to-violet-400 text-black rounded-lg transition-all shadow-lg shadow-purple-900/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center">
                <img
                  src="assets/telth.png"
                  alt="telth"
                  className="w-8 h-8 mr-2"
                />
                <span className="text-3xl font-bold bg-gradient-to-t from-purple-800 to-indigo-800 bg-clip-text text-transparent">
                  Telth.care
                </span>
              </div>
            </Link>
            <p className="text-black/60 text-base leading-relaxed mb-8 max-w-md">
              Pioneering the future of healthcare through innovative technology
              solutions, bringing exceptional care directly to your doorstep.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/telthcare"
                className="group p-2 rounded-lg bg-black/5 hover:bg-black/10 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-black/60 group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/telthcare"
                className="group p-2 rounded-lg bg-black/5 hover:bg-black/10 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-black/60 group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/telthcare"
                className="group p-2 rounded-lg bg-black/5 hover:bg-black/10 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-black/60 group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-black font-semibold mb-6">Solutions</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/corporates"
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    Corporates
                  </a>
                </li>
                <li>
                  <Link
                    to="/government-sector"
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    Government
                  </Link>
                </li>
                <li>
                  <a
                    href="/clinics-hospitals"
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    Clinics/Hospitals
                  </a>
                </li>
                <li>
                  <a
                    href="/patients"
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    Patients
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-black font-semibold mb-6">Products</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/smart-care-bundle"
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    Smart Care Bundle
                  </a>
                </li>
                <li>
                  <a
                    href="/diagnostic-devices"
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    Diagnostic Devices
                  </a>
                </li>
                <li>
                  <a
                    href="/smart-wearables"
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    Smart Wearables
                  </a>
                </li>
                <li>
                  <a
                    href="/mobile-clinic"
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    Mobile Clinic
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-black font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/care-provider"
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    Care Provider
                  </a>
                </li>
                <li>
                  <a
                    href="/training"
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    Training
                  </a>
                </li>
                <li>
                  <a
                    href="/franchise"
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    Franchise
                  </a>
                </li>
                <li>
                  <a
                    href="/partnership"
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    Partnership
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-black font-semibold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    href="/terms-conditions"
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/cancellation-and-refund-policy"
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    Cancellation & Refund
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-black/60 text-sm">
            © 2025 Telth.care. All rights reserved.
          </p>
          {/* <p className="text-black/60 text-sm">
            Made with ❤️ 
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
