import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define navigation items to avoid repetition
  const navItems = [
    {
      path: "",
      label: "navbar.home",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      iconClass: "ri-home-7-fill",
    },
    {
      path: "about",
      label: "navbar.about",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      iconClass: "ri-user-4-fill",
    },
    {
      path: "experience",
      label: "navbar.experience",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      iconClass: "ri-suitcase-3-fill",
    },
    {
      path: "projects",
      label: "navbar.projects",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      iconClass: "ri-code-s-slash-fill",
    },
    {
      path: "contact",
      label: "navbar.contact",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      iconClass: "ri-message-3-fill",
    },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 py-4 md:py-5 w-full bg-rn-dark bg-opacity-95 border-b border-gray-800 transition-all duration-300 ${scrolled ? "shadow-xl" : ""}`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link
            to=""
            className="text-xl sm:text-2xl font-bold text-white tracking-tighter"
          >
            <span className="text-rn-accent">T</span>A
          </Link>

          <div className="flex items-center">
            <ul className="flex space-x-6 lg:space-x-10 text-sm tracking-wide">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`px-3 py-2 font-sans text-gray-300 hover:text-rn-accent transition-all duration-300 ${location.pathname === "/" + item.path ? "text-rn-accent font-bold border-b-2 border-rn-accent" : ""}`}
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language switcher */}
            <div className="ml-8 lg:ml-12 flex space-x-3">
              <button
                onClick={() => changeLanguage("en")}
                className={`p-1.5 rounded-lg transition-all duration-300 shadow-md ${i18n.language === "en" ? "bg-rn-accent/20 ring-2 ring-rn-accent shadow-lg" : "hover:bg-gray-800 hover:shadow-lg"}`}
                title="English"
              >
                <svg className="w-6 h-4" viewBox="0 0 60 30" fill="none">
                  <defs>
                    <clipPath id="ukClipNav">
                      <rect width="60" height="30" rx="4" fill="white" />
                    </clipPath>
                  </defs>
                  <rect width="60" height="30" rx="4" fill="#012169" />
                  <g clipPath="url(#ukClipNav)">
                    <path
                      d="M0 0l60 30M60 0L0 30"
                      stroke="#fff"
                      strokeWidth="6"
                    />
                    <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
                    <path d="M30 0v30" stroke="#C8102E" strokeWidth="6" />
                    <path d="M0 15h60" stroke="#C8102E" strokeWidth="6" />
                    <path d="M0 0l60 30" stroke="#C8102E" strokeWidth="4" />
                    <path d="M60 0L0 30" stroke="#C8102E" strokeWidth="4" />
                  </g>
                </svg>
              </button>
              <button
                onClick={() => changeLanguage("fr")}
                className={`p-1.5 rounded-lg transition-all duration-300 shadow-md ${i18n.language === "fr" ? "bg-rn-accent/20 ring-2 ring-rn-accent shadow-lg" : "hover:bg-gray-800 hover:shadow-lg"}`}
                title="Français"
              >
                <svg className="w-6 h-4" viewBox="0 0 60 30" fill="none">
                  <defs>
                    <clipPath id="frClipNav">
                      <rect width="60" height="30" rx="4" fill="white" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#frClipNav)">
                    <rect width="20" height="30" fill="#002654" />
                    <rect x="20" width="20" height="30" fill="#FFFFFF" />
                    <rect x="40" width="20" height="30" fill="#ED2939" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 py-4 px-5 flex justify-between items-center bg-rn-dark border-b border-gray-800 z-50">
        <Link to="" className="text-xl font-bold text-white tracking-tighter">
          <span className="text-rn-accent">T</span>A
        </Link>

        {/* Language dropdown */}
        <div className="relative">
          <button
            onClick={toggleLanguageMenu}
            className="flex items-center text-sm font-medium text-gray-200 focus:outline-none p-1 rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Language selection"
          >
            {i18n.language === "en" ? (
              <svg className="w-6 h-4" viewBox="0 0 60 30" fill="none">
                <defs>
                  <clipPath id="ukClipNavMobile">
                    <rect width="60" height="30" rx="3" fill="white" />
                  </clipPath>
                </defs>
                <rect width="60" height="30" rx="3" fill="#012169" />
                <g clipPath="url(#ukClipNavMobile)">
                  <path
                    d="M0 0l60 30M60 0L0 30"
                    stroke="#fff"
                    strokeWidth="6"
                  />
                  <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
                  <path d="M30 0v30" stroke="#C8102E" strokeWidth="6" />
                  <path d="M0 15h60" stroke="#C8102E" strokeWidth="6" />
                  <path d="M0 0l60 30" stroke="#C8102E" strokeWidth="4" />
                  <path d="M60 0L0 30" stroke="#C8102E" strokeWidth="4" />
                </g>
              </svg>
            ) : (
              <svg className="w-6 h-4" viewBox="0 0 60 30" fill="none">
                <defs>
                  <clipPath id="frClipNavMobile">
                    <rect width="60" height="30" rx="3" fill="white" />
                  </clipPath>
                </defs>
                <g clipPath="url(#frClipNavMobile)">
                  <rect width="20" height="30" fill="#002654" />
                  <rect x="20" width="20" height="30" fill="#FFFFFF" />
                  <rect x="40" width="20" height="30" fill="#ED2939" />
                </g>
              </svg>
            )}
            <svg
              className="ml-1 w-4 h-4 text-rn-accent"
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

          {isLanguageMenuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-rn-dark rounded-md shadow-lg border border-gray-700 z-20">
              <button
                onClick={() => changeLanguage("en")}
                className={`flex items-center w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${i18n.language === "en" ? "bg-gray-800 text-rn-accent font-medium" : "text-gray-300 hover:bg-gray-800"}`}
              >
                <svg className="w-5 h-3 mr-2" viewBox="0 0 60 30" fill="none">
                  <defs>
                    <clipPath id="ukClipNavDropdown">
                      <rect width="60" height="30" rx="2" fill="white" />
                    </clipPath>
                  </defs>
                  <rect width="60" height="30" rx="2" fill="#012169" />
                  <g clipPath="url(#ukClipNavDropdown)">
                    <path
                      d="M0 0l60 30M60 0L0 30"
                      stroke="#fff"
                      strokeWidth="6"
                    />
                    <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
                    <path d="M30 0v30" stroke="#C8102E" strokeWidth="6" />
                    <path d="M0 15h60" stroke="#C8102E" strokeWidth="6" />
                    <path d="M0 0l60 30" stroke="#C8102E" strokeWidth="4" />
                    <path d="M60 0L0 30" stroke="#C8102E" strokeWidth="4" />
                  </g>
                </svg>
                English
              </button>
              <button
                onClick={() => changeLanguage("fr")}
                className={`flex items-center w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${i18n.language === "fr" ? "bg-gray-800 text-rn-accent font-medium" : "text-gray-300 hover:bg-gray-800"}`}
              >
                <svg className="w-5 h-3 mr-2" viewBox="0 0 60 30" fill="none">
                  <defs>
                    <clipPath id="frClipNavDropdown">
                      <rect width="60" height="30" rx="2" fill="white" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#frClipNavDropdown)">
                    <rect width="20" height="30" fill="#002654" />
                    <rect x="20" width="20" height="30" fill="#FFFFFF" />
                    <rect x="40" width="20" height="30" fill="#ED2939" />
                  </g>
                </svg>
                Français
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Add padding for fixed header */}
      <div className="md:hidden h-16"></div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-rn-dark border-t border-gray-800 z-10 shadow-lg">
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center text-xs transition-colors duration-300 ${location.pathname === "/" + item.path ? "text-rn-accent font-medium" : "text-gray-400 hover:text-gray-200"}`}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 mb-1 rounded-full transition-all duration-300 ${location.pathname === "/" + item.path ? "bg-rn-accent bg-opacity-20 shadow-glow" : "bg-rn-dark hover:bg-gray-800"}`}
              >
                <i className={`${item.iconClass} text-xl`}></i>
              </div>
              <span className="text-xs font-medium tracking-wide">
                {t(item.label)}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Add padding to bottom of the page content to prevent overlap with bottom navigation */}
      <div className="md:hidden h-16"></div>

      {/* Add padding for desktop fixed navigation */}
      <div className="hidden md:block h-16"></div>
    </>
  );
};

export default Navbar;
