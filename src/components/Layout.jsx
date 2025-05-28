import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import profilePhoto from '../assets/279787631_1225434571324131_2014762143615193992_n.jpg';

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const mainContentRef = useRef(null);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  
  // Effect to scroll to top when route changes
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
      window.scrollTo(0, 0);
    }
    // Close language menu when route changes
    setIsLanguageMenuOpen(false);
  }, [location.pathname]);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'text-rn-accent' : 'text-white hover:text-rn-accent';
  };

  // Define navigation items to avoid repetition
  const navItems = [
    { path: '/', label: 'HOME', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
    { path: '/about', label: 'ABOUT', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
    { path: '/experience', label: 'EXPERIENCE', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
    { path: '/projects', label: 'PROJECTS', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /> },
    { path: '/contact', label: 'CONTACT', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> }
  ];

  return (
    <div className="flex h-screen bg-rn-dark">
      {/* Desktop Sidebar - hidden on mobile */}
      <div className="hidden md:flex w-24 bg-rn-darker flex-col fixed h-screen z-10">
        {/* Logo */}
        <div className="p-4 flex justify-center">
          <Link to="" className="block">
            <img 
              src={profilePhoto} 
              alt="Abdelmoemen Trabelsi" 
              className="w-12 h-12 rounded-full object-cover border-2 border-rn-accent"
            />
          </Link>
        </div>
        
        {/* Vertical Navigation */}
        <div className="flex flex-col items-center justify-center flex-1 space-y-8">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={`${isActive(item.path)} transition-colors duration-200`}>
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {item.icon}
                </svg>
                <span className="text-xs mt-1">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Language Switcher */}
        <div className="pb-6 flex flex-col items-center space-y-4">
          <button 
            onClick={() => changeLanguage('en')} 
            className={`text-xs font-medium ${i18n.language === 'en' ? 'text-rn-accent' : 'text-white hover:text-rn-accent'} transition-colors duration-200`}
          >
            EN
          </button>
          <button 
            onClick={() => changeLanguage('fr')} 
            className={`text-xs font-medium ${i18n.language === 'fr' ? 'text-rn-accent' : 'text-white hover:text-rn-accent'} transition-colors duration-200`}
          >
            FR
          </button>
        </div>
      </div>
      
      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-rn-darker text-white z-10 px-4 py-3 flex justify-between items-center">
        <Link to="" className="block">
          <img 
            src={profilePhoto} 
            alt="Abdelmoemen Trabelsi" 
            className="w-10 h-10 rounded-full object-cover border-2 border-rn-accent"
          />
        </Link>
        
        {/* Language dropdown */}
        <div className="relative">
          <button 
            onClick={toggleLanguageMenu}
            className="flex items-center text-sm font-medium text-white focus:outline-none"
          >
            {i18n.language.toUpperCase()}
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isLanguageMenuOpen && (
            <div className="absolute right-0 mt-2 w-24 bg-rn-dark rounded-md shadow-lg z-20 border border-gray-700">
              <button
                onClick={() => changeLanguage('en')}
                className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'en' ? 'text-rn-accent' : 'text-white'}`}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage('fr')}
                className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'fr' ? 'text-rn-accent' : 'text-white'}`}
              >
                Français
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div 
        ref={mainContentRef} 
        className="w-full bg-rn-dark text-white md:ml-24 pt-16 md:pt-0 pb-16 md:pb-0 overflow-y-auto"
        style={{ height: '100vh' }}
      >
        {children}
      </div>
      
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-rn-darker border-t border-gray-800 z-10">
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex flex-col items-center justify-center text-xs ${location.pathname === item.path ? 'text-rn-accent' : 'text-white'}`}
            >
              <svg 
                className="w-5 h-5 mb-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {item.icon}
              </svg>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
