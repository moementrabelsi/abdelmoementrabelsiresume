import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  // Define navigation items to avoid repetition
  const navItems = [
    { path: '/', label: 'navbar.home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { path: '/about', label: 'navbar.about', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { path: '/experience', label: 'navbar.experience', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { path: '/projects', label: 'navbar.projects', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { path: '/contact', label: 'navbar.contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block py-4 sm:py-5 md:py-6 w-full bg-white border-b border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-black tracking-tighter">AT</Link>
          
          <div className="flex items-center">
            <ul className="flex space-x-6 lg:space-x-10 text-xs sm:text-sm uppercase tracking-widest font-medium">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`text-black hover:text-gray-500 transition-colors ${location.pathname === item.path ? 'font-bold' : ''}`}
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Language switcher */}
            <div className="ml-6 lg:ml-10 flex space-x-4">
              <button 
                onClick={() => changeLanguage('en')} 
                className={`text-xs uppercase tracking-widest font-medium ${i18n.language === 'en' ? 'text-black' : 'text-gray-400'}`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('fr')} 
                className={`text-xs uppercase tracking-widest font-medium ${i18n.language === 'fr' ? 'text-black' : 'text-gray-400'}`}
              >
                FR
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Header */}
      <header className="md:hidden py-4 px-4 flex justify-between items-center bg-white border-b border-gray-100">
        <Link to="/" className="text-xl font-bold text-black tracking-tighter">AT</Link>
        
        {/* Language dropdown */}
        <div className="relative">
          <button 
            onClick={toggleLanguageMenu}
            className="flex items-center text-sm font-medium text-black focus:outline-none"
          >
            {i18n.language.toUpperCase()}
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isLanguageMenuOpen && (
            <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg z-20">
              <button
                onClick={() => changeLanguage('en')}
                className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'en' ? 'bg-gray-100 font-medium' : ''}`}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage('fr')}
                className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'fr' ? 'bg-gray-100 font-medium' : ''}`}
              >
                Français
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-10">
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex flex-col items-center justify-center text-xs ${location.pathname === item.path ? 'text-black font-medium' : 'text-gray-500'}`}
            >
              <svg 
                className="w-5 h-5 mb-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
              </svg>
              <span>{t(item.label)}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Add padding to bottom of the page content to prevent overlap with bottom navigation */}
      <div className="md:hidden h-16"></div>
    </>
  );
};

export default Navbar;
