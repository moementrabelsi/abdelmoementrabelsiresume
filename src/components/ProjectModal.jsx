import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.media.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.media.length - 1 : prev - 1
    );
  };

  const renderCurrentMedia = () => {
    const currentMedia = project.media[currentImageIndex];

    if (currentMedia.type === "video") {
      return (
        <video
          src={currentMedia.src}
          className="max-w-full max-h-full object-contain rounded-lg"
          controls
          muted
          loop
          playsInline
        />
      );
    } else {
      return (
        <img
          src={currentMedia.src}
          alt={`${project.title} - Image ${currentImageIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
        />
      );
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-80"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-7xl h-[90vh] bg-rn-dark rounded-2xl overflow-hidden flex flex-col lg:flex-row z-10 modal-content shadow-2xl border border-gray-800">
        {/* Left Side - Media Section */}
        <div className="relative flex-shrink-0 h-1/3 lg:h-full lg:w-1/2 bg-rn-gray flex items-center justify-center">
          {/* Close Button - Mobile Only */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 lg:hidden flex items-center justify-center bg-rn-dark bg-opacity-80 hover:bg-rn-accent text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-glow"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="w-full h-full flex items-center justify-center p-6">
            {renderCurrentMedia()}
          </div>

          {/* Media Navigation */}
          {project.media.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-rn-dark bg-opacity-80 hover:bg-rn-accent text-white rounded-full transition-all duration-300 z-10 shadow-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-rn-dark bg-opacity-80 hover:bg-rn-accent text-white rounded-full transition-all duration-300 z-10 shadow-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Indicators */}
          {project.media.length > 1 && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.media.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-rn-accent shadow-glow"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Side - Content Section */}
        <div className="flex-1 overflow-y-auto bg-rn-dark modal-scrollable">
          <div className="p-6 lg:p-8">
            {/* Header with Close Button */}
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight flex-1 lg:mr-4">
                {project.title}
              </h2>
              {/* Close Button - Desktop Only */}
              <button
                onClick={onClose}
                className="hidden lg:flex flex-shrink-0 w-10 h-10 items-center justify-center bg-rn-gray hover:bg-rn-accent text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-glow"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Project Details */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                {project.year && (
                  <div className="inline-block px-4 py-2 rounded-full bg-rn-accent bg-opacity-20 text-rn-accent text-sm font-medium tracking-wide">
                    {project.year}
                  </div>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-rn-accent hover:bg-rn-accent/90 text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-glow transform hover:scale-105"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    {t("projects.viewProject")}
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className="w-1 h-6 bg-rn-accent rounded-full mr-4"></div>
                Description
              </h3>
              <div className="bg-rn-gray rounded-lg p-6 border border-gray-700">
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                {project.detailedDescription && (
                  <p className="text-gray-300 leading-relaxed mt-4">
                    {project.detailedDescription}
                  </p>
                )}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className="w-1 h-6 bg-rn-accent rounded-full mr-4"></div>
                {t("projects.technologiesUsed")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-rn-gray text-gray-200 text-sm rounded-lg border border-gray-700 hover:border-rn-accent transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            {project.features && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <div className="w-1 h-6 bg-rn-accent rounded-full mr-4"></div>
                  Key Features
                </h3>
                <div className="bg-rn-gray rounded-lg p-6 border border-gray-700">
                  {Array.isArray(project.features) ? (
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-300"
                        >
                          <div className="w-2 h-2 bg-rn-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300 leading-relaxed">
                      {project.features}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <div className="w-1 h-6 bg-rn-accent rounded-full mr-4"></div>
                  Challenges
                </h3>
                <div className="bg-rn-gray rounded-lg p-6 border border-gray-700">
                  {Array.isArray(project.challenges) ? (
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-300"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300 leading-relaxed">
                      {project.challenges}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
