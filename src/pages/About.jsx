import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FlipCard from "../components/FlipCard";
import CertificatePopup from "../components/CertificatePopup";
import "../assets/styles/flipcard.css";

// Import certificate images
import NodeCertificate from "../assets/NodeCertificate.jpg";
// Import tech stack logos
import jsLogo from "../assets/logos/javascript.svg";
import typescriptLogo from "../assets/logos/typescript.svg";
import phpLogo from "../assets/logos/php.svg";
import dartLogo from "../assets/logos/dart.svg";
import reactLogo from "../assets/logos/react.svg";
import angularLogo from "../assets/logos/angular.svg";
import flutterLogo from "../assets/logos/flutter.svg";
import dockerLogo from "../assets/logos/docker.svg";
import jenkinsLogo from "../assets/logos/jenkins.svg";
import nodejsLogo from "../assets/logos/nodejs.svg";
import springLogo from "../assets/logos/spring.svg";
import mysqlLogo from "../assets/logos/mysql.svg";
import mongodbLogo from "../assets/logos/mongodb.svg";
import microservicesLogo from "../assets/logos/microservices.svg";
import restApiLogo from "../assets/logos/rest-api.svg";
import cicdLogo from "../assets/logos/cicd.svg";
import vueLogo from "../assets/logos/vue.js.svg";
import javaLogo from "../assets/logos/Javaa.svg";

const About = () => {
  const { t } = useTranslation();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [certificateTitle, setCertificateTitle] = useState("");

  // Certificate data
  const certificates = [
    {
      id: 1,
      year: "2022",
      title: t("about.certificateTitle"),
      description: t("about.certificateDescription"),
      image: NodeCertificate,
    },
  ];

  const closeCertificate = () => {
    setSelectedCertificate(null);
    setCertificateTitle("");
  };

  return (
    <div
      className="w-full"
      style={{ position: "relative", overflowY: "visible" }}
    >
      {/* About Header Section */}
      <section className="py-20 max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-tight">
          {t("about.title")}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-16">
          {t("about.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Professional Info */}
          <div className="bg-rn-gray-darker p-8 rounded-xl shadow-xl border border-gray-800 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-rn-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {t("about.professionalTitle")}
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              {t("about.experience")}
            </p>
            <div className="p-4 rounded-lg bg-rn-dark/40 border border-gray-800 hover:border-gray-700 transition-colors">
              <h3 className="text-lg font-semibold mb-2">
                {t("about.skillsOverview")}
              </h3>
              <p className="text-gray-400">{t("about.skillsOverviewDesc")}</p>
            </div>
          </div>

          {/* Education & Languages */}
          <div className="bg-rn-gray-darker p-8 rounded-xl shadow-xl border border-gray-800 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-rn-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              {t("about.educationTitle")}
            </h2>
            <div className="mb-6 p-4 rounded-lg bg-rn-dark/40 border border-gray-800 hover:border-gray-700 transition-colors">
              <h3 className="text-lg font-semibold">{t("about.degree1")}</h3>
              <p className="text-gray-400 mt-1">{t("about.school1")}</p>
            </div>

            <h2 className="text-2xl font-bold mb-6 mt-8 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-rn-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              {t("about.languagesTitle")}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-rn-dark/40 border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-semibold text-rn-accent">
                  {t("about.arabic")}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {t("about.native")}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-rn-dark/40 border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-semibold text-rn-accent">
                  {t("about.english")}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {t("about.advanced")}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-rn-dark/40 border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-semibold text-rn-accent">
                  {t("about.french")}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {t("about.advanced")}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-rn-dark/40 border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-semibold text-rn-accent">
                  {t("about.german")}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {t("about.elementary")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-16 bg-gradient-to-b from-rn-gray to-rn-dark">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-tight">
            {t("about.softSkills")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-rn-gray-darker p-6 rounded-xl shadow-xl border border-gray-800 transform hover:scale-105 transition-all duration-300">
              <div className="bg-rn-accent/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t("about.problemSolving")}
              </h3>
              <p className="text-gray-300">{t("about.problemSolvingDesc")}</p>
            </div>

            <div className="bg-rn-gray-darker p-6 rounded-xl shadow-xl border border-gray-800 transform hover:scale-105 transition-all duration-300">
              <div className="bg-rn-accent/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t("about.teamwork")}
              </h3>
              <p className="text-gray-300">{t("about.teamworkDesc")}</p>
            </div>

            <div className="bg-rn-gray-darker p-6 rounded-xl shadow-xl border border-gray-800 transform hover:scale-105 transition-all duration-300">
              <div className="bg-rn-accent/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t("about.communication")}
              </h3>
              <p className="text-gray-300">{t("about.communicationDesc")}</p>
            </div>

            <div className="bg-rn-gray-darker p-6 rounded-xl shadow-xl border border-gray-800 transform hover:scale-105 transition-all duration-300">
              <div className="bg-rn-accent/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t("about.adaptability")}
              </h3>
              <p className="text-gray-300">{t("about.adaptabilityDesc")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-br from-rn-gray via-rn-dark to-black">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 uppercase tracking-tight">
            {t("about.techStackTitle")}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-16">
            {t("about.techStackDesc")}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Languages */}
            <div className="bg-rn-gray-darker p-8 rounded-xl shadow-xl border border-gray-800 transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-rn-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                {t("about.langSectionTitle")}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <FlipCard
                  logo={jsLogo}
                  name="JavaScript"
                  description="Modern JS with ES6+ features"
                  experience="4+ years"
                />
                <FlipCard
                  logo={javaLogo}
                  name="Java"
                  description="Java development with Spring Boot"
                  experience="2+ years"
                />
                <FlipCard
                  logo={typescriptLogo}
                  name="TypeScript"
                  description="Type-safe JavaScript development"
                  experience="3+ years"
                />
                <FlipCard
                  logo={phpLogo}
                  name="PHP"
                  description="Backend web development"
                  experience="3+ years"
                />
                <FlipCard
                  logo={dartLogo}
                  name="Dart"
                  description="For Flutter mobile apps"
                  experience="2+ years"
                />
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-rn-gray-darker p-8 rounded-xl shadow-xl border border-gray-800 transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-rn-accent"
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
                {t("about.frontendTitle")}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <FlipCard
                  logo={reactLogo}
                  name="React.js"
                  description="Component-based UI development"
                  experience="4+ years"
                />
                <FlipCard
                  logo={vueLogo}
                  name="Vue.js"
                  description="Component-based UI development"
                  experience="4+ years"
                />
                <FlipCard
                  logo={angularLogo}
                  name="Angular"
                  description="Enterprise-grade web apps"
                  experience="3+ years"
                />
                <FlipCard
                  logo={flutterLogo}
                  name="Flutter"
                  description="Cross-platform mobile development"
                  experience="2+ years"
                />
              </div>
            </div>

            {/* Backend & Databases */}
            <div className="bg-rn-gray-darker p-8 rounded-xl shadow-xl border border-gray-800 transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-rn-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
                {t("about.backendTitle")} & {t("about.databasesTitle")}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <FlipCard
                  logo={nodejsLogo}
                  name="Node.js"
                  description="JavaScript runtime for backends"
                  experience="4+ years"
                />
                <FlipCard
                  logo={springLogo}
                  name="Spring Boot"
                  description="Java-based backend framework"
                  experience="3+ years"
                />
                <FlipCard
                  logo={mysqlLogo}
                  name="MySQL"
                  description="Relational database management"
                  experience="4+ years"
                />
                <FlipCard
                  logo={mongodbLogo}
                  name="MongoDB"
                  description="NoSQL document database"
                  experience="3+ years"
                />
              </div>
            </div>

            {/* DevOps & Architecture */}
            <div className="bg-rn-gray-darker p-8 rounded-xl shadow-xl border border-gray-800 transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-rn-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                {t("about.devopsTitle")} & {t("about.architecturesTitle")}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <FlipCard
                  logo={dockerLogo}
                  name="Docker"
                  description="Containerization for apps"
                  experience="3+ years"
                />
                <FlipCard
                  logo={jenkinsLogo}
                  name="Jenkins"
                  description="Automation server for CI/CD"
                  experience="2+ years"
                />
                <FlipCard
                  logo={cicdLogo}
                  name="CI/CD"
                  description="Continuous integration/delivery"
                  experience="3+ years"
                />
                <FlipCard
                  logo={microservicesLogo}
                  name="Microservices"
                  description="Distributed system architecture"
                  experience="3+ years"
                />
                <FlipCard
                  logo={restApiLogo}
                  name="REST APIs"
                  description="RESTful web service design"
                  experience="4+ years"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 uppercase tracking-tight">
            {t("about.certificationsTitle")}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-16">
            {t("about.certificationsDesc")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="bg-rn-gray-darker p-8 rounded-xl shadow-xl border border-gray-800 transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-rn-accent/20 w-fit px-4 py-1 rounded-full text-rn-accent font-medium mb-4">
                  {cert.year}
                </div>
                <h3 className="text-xl font-bold mb-4">{cert.title}</h3>
                <p className="text-gray-300 mb-6">{cert.description}</p>
                <button
                  onClick={() => {
                    setSelectedCertificate(cert.image);
                    setCertificateTitle(cert.title);
                  }}
                  className="group inline-flex items-center space-x-2 px-6 py-3 bg-rn-dark hover:bg-rn-accent text-white text-sm uppercase tracking-widest font-medium transition-colors rounded-md shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>{t("about.viewCertificate")}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-rn-gray via-rn-dark to-black">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-rn-accent opacity-10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-rn-accent opacity-10 rounded-full filter blur-3xl"></div>

          <div className="bg-black/30 p-10 backdrop-blur-sm rounded-xl border border-gray-800 shadow-2xl max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-3 text-rn-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              {t("about.letsConnect")}
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-12 text-gray-300 leading-relaxed">
              {t("about.letsConnectDesc")}
            </p>
            <a
              href="/abdelmoementrabelsiresume/#/contact"
              className="group inline-flex items-center space-x-2 px-8 py-4 border-2 border-rn-accent text-rn-accent text-sm uppercase tracking-widest font-medium hover:bg-rn-accent hover:text-white transition-all duration-300 rounded-md shadow-lg hover:shadow-rn-accent/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{t("about.contactMeButton")}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-rn-gray">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 uppercase tracking-tight">
            {t("about.philosophyTitle")}
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            "{t("about.philosophyText")}"
          </p>
        </div>
      </section>
      {/* Personal Interests */}
      <section className="py-10 sm:py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 uppercase tracking-tight">
            {t("about.interestsTitle")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            <div className="bg-rn-gray p-4 sm:p-5 rounded-lg space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold">
                {t("about.gaming")}
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                {t("about.gamingDesc")}
              </p>
            </div>

            <div className="bg-rn-gray p-4 sm:p-5 rounded-lg space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold">
                {t("about.camping")}
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                {t("about.campingDesc")}
              </p>
            </div>

            <div className="bg-rn-gray p-4 sm:p-5 rounded-lg space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold">
                {t("about.sport")}
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                {t("about.sportDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Popup */}
      <CertificatePopup
        isOpen={!!selectedCertificate}
        onClose={closeCertificate}
        image={selectedCertificate}
        alt={t("about.certificateAlt")}
        title={certificateTitle}
      />
    </div>
  );
};

export default About;
