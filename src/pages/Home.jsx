import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import profilePhoto from "../assets/279787631_1225434571324131_2014762143615193992_n.jpg";
import styles from "../assets/styles/ProfileImage.module.css";

const Home = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  // For typing effect
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const textToType = t("hero.subtitle");

  useEffect(() => {
    if (currentIndex < textToType.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + textToType[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, textToType]);

  // For fade-in effect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-rn-dark to-rn-gray text-white overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-x-hidden">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="px-4 py-16 text-center">
            <div
              className="transition-all duration-1000 transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                <span className="block">Trabelsi</span>
                <span className="block text-rn-accent">Abdelmoemen</span>
              </h1>

              <div className="h-12 mb-6">
                <p className="text-lg sm:text-xl text-gray-300 typewriter">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>

              <div className="flex justify-center space-x-4 mb-8">
                <a
                  href="https://www.linkedin.com/in/abdelmoementrabelsi-developpeur-web/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rn-accent transform hover:scale-110 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/moementrabelsi"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rn-accent transform hover:scale-110 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~019132d3f12f0e7de4?mp_source=share"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rn-accent transform hover:scale-110 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                  </svg>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                <Link
                  to="/about"
                  className="px-4 py-2 bg-rn-accent text-white font-medium rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg text-center text-sm"
                >
                  {t("navbar.about")}
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 border border-rn-accent text-rn-accent font-medium rounded-full hover:bg-rn-accent hover:text-white transform hover:scale-105 transition-all duration-300 text-center text-sm"
                >
                  {t("navbar.contact")}
                </Link>
              </div>

              {/* Profile Image for Mobile */}
              <div className="flex justify-center mt-8">
                <div className="relative">
                  {/* Background decoration */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-rn-accent/20 via-transparent to-rn-accent/20 rounded-2xl blur-lg"></div>

                  {/* Main image container */}
                  <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-xl overflow-hidden shadow-2xl border-2 border-rn-accent/30 transform hover:scale-105 transition-all duration-300">
                    <img
                      src={profilePhoto}
                      alt={t("home.profileAlt")}
                      className="object-cover object-center w-full h-full"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                    {/* Bottom info bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-rn-accent/90 to-rn-accent/70 p-3">
                      <p className="text-white text-sm font-medium text-center">
                        Software Architect
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-rn-accent rounded-tl-lg"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-rn-accent rounded-tr-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-rn-accent rounded-bl-lg"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-rn-accent rounded-br-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative min-h-screen overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-rn-dark via-rn-dark to-black opacity-95"></div>

          {/* Smooth transition layer */}
          <div className="absolute inset-0 z-5">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-rn-dark/40 to-transparent opacity-70"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-row items-center">
            {/* Gradient divider between content and image */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-32 z-5 pointer-events-none">
              <div className="h-full w-full bg-gradient-to-r from-rn-dark/50 to-transparent blur-lg"></div>
            </div>

            {/* Left Content */}
            <div
              className="w-1/2 px-16 lg:px-24 py-12 transition-all duration-1000 transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div className="max-w-lg">
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  <span className="block">Trabelsi</span>
                  <span className="block text-rn-accent">Abdelmoemen</span>
                </h1>

                <div className="h-12 mb-6">
                  <p className="text-xl lg:text-2xl text-gray-300 typewriter">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>

                <div className="flex space-x-5 mb-8">
                  <a
                    href="https://www.linkedin.com/in/abdelmoementrabelsi-developpeur-web/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rn-accent transform hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/moementrabelsi"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rn-accent transform hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.upwork.com/freelancers/~019132d3f12f0e7de4?mp_source=share"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rn-accent transform hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                    </svg>
                  </a>
                </div>

                <div className="flex space-x-4">
                  <Link
                    to="/about"
                    className="px-8 py-3 bg-rn-accent text-white font-medium rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    {t("navbar.about")}
                  </Link>
                  <Link
                    to="/contact"
                    className="px-8 py-3 border border-rn-accent text-rn-accent font-medium rounded-full hover:bg-rn-accent hover:text-white transform hover:scale-105 transition-all duration-300"
                  >
                    {t("navbar.contact")}
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image (desktop only) */}
            <div className="w-1/2 h-full flex items-center justify-center relative">
              <div className="relative h-full w-full overflow-hidden bg-rn-dark">
                {/* Left-side gradient for smoother transition to content */}
                <div className="absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-rn-dark to-transparent z-10"></div>
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20 z-10"></div>
                {/* Profile Image with hover effect but no border */}
                <img
                  src={profilePhoto}
                  alt={t("home.profileAlt")}
                  className="object-cover object-center h-full w-full mix-blend-normal transform hover:scale-105 transition-all duration-1000"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute bottom-10 right-10 z-20 text-right">
                <div className="animate-float">
                  <div className="text-sm uppercase tracking-widest text-rn-accent mb-2 opacity-75">
                    {t("home.fullstackDeveloper")}
                  </div>
                  <div className="h-1 w-20 bg-rn-accent ml-auto mb-3"></div>
                  <h2 className="text-2xl lg:text-3xl font-light text-white">
                    {t("home.experience")}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="md:flex md:items-start md:justify-between mb-16">
            <div className="mb-10 md:mb-0 md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
                <span className="inline-block border-b-4 border-rn-accent pb-2">
                  {t("about.title")}
                </span>
              </h2>
            </div>
            <div className="md:w-2/3">
              <div className="text-sm text-gray-400 mb-4">
                {t("home.personal")}
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {t("home.aboutText")}
              </p>
              <Link
                to="/about"
                className="text-rn-accent hover:text-white inline-flex items-center transition-colors duration-300"
              >
                <span className="mr-2">{t("home.readMore")}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-rn-gray to-rn-dark">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight">
              {t("home.services")}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t("home.servicesIntro")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-rn-dark p-6 rounded-lg shadow-lg transform hover:translate-y-[-10px] transition-all duration-300 border border-gray-800 hover:border-rn-accent">
              <div className="w-12 h-12 rounded-lg bg-rn-accent bg-opacity-20 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-rn-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t("home.webDev")}</h3>
              <p className="text-gray-400 text-sm">{t("home.webDevDesc")}</p>
            </div>

            <div className="bg-rn-dark p-6 rounded-lg shadow-lg transform hover:translate-y-[-10px] transition-all duration-300 border border-gray-800 hover:border-rn-accent">
              <div className="w-12 h-12 rounded-lg bg-rn-accent bg-opacity-20 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-rn-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t("home.seo")}</h3>
              <p className="text-gray-400 text-sm">{t("home.seoDesc")}</p>
            </div>

            <div className="bg-rn-dark p-6 rounded-lg shadow-lg transform hover:translate-y-[-10px] transition-all duration-300 border border-gray-800 hover:border-rn-accent">
              <div className="w-12 h-12 rounded-lg bg-rn-accent bg-opacity-20 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-rn-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t("home.microservices")}
              </h3>
              <p className="text-gray-400 text-sm">
                {t("home.microservicesDesc")}
              </p>
            </div>

            <div className="bg-rn-dark p-6 rounded-lg shadow-lg transform hover:translate-y-[-10px] transition-all duration-300 border border-gray-800 hover:border-rn-accent">
              <div className="w-12 h-12 rounded-lg bg-rn-accent bg-opacity-20 flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-rn-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {/* AI Brain/Neural Network Icon */}
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <circle cx="8" cy="8" r="1.5" fill="currentColor" />
                  <circle cx="16" cy="8" r="1.5" fill="currentColor" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="8" cy="16" r="1.5" fill="currentColor" />
                  <circle cx="16" cy="16" r="1.5" fill="currentColor" />
                  <path
                    d="M8 8l4 4m0-4l-4 4m4-4l4 4m-4 4l-4 4m4 0l4-4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 6v2m0 4v2m0 4v2M6 12h2m4 0h2m4 0h2"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t("home.security")}
              </h3>
              <p className="text-gray-400 text-sm">{t("home.securityDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="bg-gradient-to-r from-rn-dark to-rn-gray p-8 sm:p-12 md:p-16 rounded-2xl shadow-xl border border-gray-800 relative overflow-hidden">
            {/* Responsive decorative circles - hidden on mobile, smaller on tablet */}
            <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-rn-accent rounded-full opacity-10 transform translate-x-1/4 sm:translate-x-1/3 md:translate-x-1/2 -translate-y-1/4 sm:-translate-y-1/3 md:-translate-y-1/2"></div>
            <div className="hidden sm:block absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-rn-accent rounded-full opacity-10 transform -translate-x-1/4 sm:-translate-x-1/3 md:-translate-x-1/3 translate-y-1/4 sm:translate-y-1/3 md:translate-y-1/3"></div>

            <div className="relative z-10">
              <div className="md:flex md:items-center md:justify-between">
                <div className="mb-8 md:mb-0 md:pr-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {t("home.ctaTitle")}
                  </h2>
                  <p className="text-gray-300 md:text-lg">
                    {t("home.ctaText")}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-4 bg-rn-accent text-white font-medium rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    {t("navbar.contact")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
