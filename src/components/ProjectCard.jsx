import React, { useState, useRef, useEffect, memo } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import ProjectModal from "./ProjectModal";
import { throttle, lazyLoadVideo } from "../utils/lazyLoading";

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const intervalRef = useRef(null);
  const videoRef = useRef(null);

  // Handle slider navigation
  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? project.media.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === project.media.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Handle hover state and automatic sliding with throttled updates
  useEffect(() => {
    if (isHovering && project.media.length > 1) {
      const throttledGoToNext = throttle(goToNext, 100);
      intervalRef.current = setInterval(() => {
        throttledGoToNext();
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isHovering, currentIndex, project.media.length]);

  // Handle manual navigation with arrow keys
  const handleKeyDown = (e) => {
    if (isHovering) {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    }
  };

  // Add key event listener
  useEffect(() => {
    if (isHovering) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isHovering, handleKeyDown]);

  // Start video autoplay when it's the current media and project is being hovered
  useEffect(() => {
    const currentMedia = project.media[currentIndex];
    if (videoRef.current && currentMedia.type === "video") {
      if (!videoRef.current.src) {
        lazyLoadVideo(videoRef.current, currentMedia.src);
      }

      if (isHovering) {
        videoRef.current.play().catch((error) => {
          console.log("Video autoplay failed:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [currentIndex, isHovering, project.media]);

  // Render the current media (image or video) with lazy loading
  const renderMedia = () => {
    const currentMedia = project.media[currentIndex];

    if (currentMedia.type === "video") {
      return (
        <video
          ref={videoRef}
          className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110"
          muted
          loop
          playsInline
          preload="metadata"
          poster={project.media.find((m) => m.type === "image")?.src}
        />
      );
    } else {
      return (
        <div className="relative overflow-hidden">
          <img
            src={currentMedia.src}
            alt={`${project.title} - Image ${currentIndex + 1}`}
            className={`w-full h-72 object-cover transition-all duration-700 group-hover:scale-110 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-rn-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div
      className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-rn-accent/20 transform hover:-translate-y-2 transition-all duration-500 flex flex-col h-full border border-gray-700/50 hover:border-rn-accent/50"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex="0"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rn-accent/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Media Container */}
      <div className="relative overflow-hidden">
        {renderMedia()}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Year Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-sm text-rn-accent text-xs font-bold tracking-wider border border-rn-accent/30">
            {project.year}
          </div>
        </div>

        {/* Status Indicator */}
        <div className="absolute top-4 right-4 z-10">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></div>
        </div>

        {/* Navigation Dots */}
        {project.media.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
            {project.media.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-rn-accent shadow-lg shadow-rn-accent/50 scale-125"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Navigation Arrows */}
        {project.media.length > 1 && (
          <>
            <button
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-rn-accent hover:text-black z-10"
              onClick={goToPrevious}
              aria-label="Previous image"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-rn-accent hover:text-black z-10"
              onClick={goToNext}
              aria-label="Next image"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-white line-clamp-2 group-hover:text-rn-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-800/80 text-gray-300 border border-gray-600/50 hover:border-rn-accent/50 hover:text-rn-accent transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-lg bg-rn-accent/20 text-rn-accent border border-rn-accent/30">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
          <a
            href={project.link || "#"}
            target={project.link ? "_blank" : ""}
            rel={project.link ? "noopener noreferrer" : ""}
            className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-rn-accent text-black text-xs sm:text-sm font-semibold rounded-lg hover:bg-rn-accent/90 transition-all duration-300 flex items-center justify-center group/btn whitespace-nowrap"
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover/btn:translate-x-0.5 transition-transform duration-300"
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
            <span className="truncate">{t("projects.viewProject")}</span>
          </a>

          <button
            onClick={() => setShowDetails(true)}
            className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 sm:py-2.5 bg-transparent text-gray-300 text-xs sm:text-sm font-semibold rounded-lg border border-gray-600 hover:border-rn-accent hover:text-rn-accent hover:bg-rn-accent/5 transition-all duration-300 flex items-center justify-center group/btn whitespace-nowrap"
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover/btn:rotate-12 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="truncate">{t("projects.viewDetails")}</span>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br from-rn-accent/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-1 -left-1 w-16 h-16 bg-gradient-to-tr from-blue-500/20 to-rn-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Project Details Modal */}
      {createPortal(
        <ProjectModal
          isOpen={showDetails}
          onClose={() => setShowDetails(false)}
          project={project}
        />,
        document.body
      )}
    </div>
  );
};

export default memo(ProjectCard);
