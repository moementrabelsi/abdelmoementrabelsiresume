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
      // Use throttled version of goToNext to prevent performance issues
      const throttledGoToNext = throttle(goToNext, 100);

      intervalRef.current = setInterval(() => {
        throttledGoToNext();
      }, 3000); // Change slide every 3 seconds when hovering (increased for better user experience)
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
      // Lazy load the video when it becomes the current media
      if (!videoRef.current.src) {
        lazyLoadVideo(videoRef.current, currentMedia.src);
      }

      // Play video when hovered
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
          // src is set via lazyLoadVideo in the effect
          className="w-full h-64 object-cover"
          muted
          loop
          playsInline
          preload="metadata" // Only preload metadata for better performance
          poster={project.media.find((m) => m.type === "image")?.src} // Use an image as poster if available
        />
      );
    } else {
      return (
        <img
          src={currentMedia.src}
          alt={`${project.title} - Image ${currentIndex + 1}`}
          className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100 loading-image"
          loading="lazy" // Use native lazy loading
          decoding="async" // Use async decoding for better performance
        />
      );
    }
  };

  return (
    <div
      className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex="0"
    >
      <div className="relative overflow-hidden">
        {/* Media (Image or Video) */}
        {renderMedia()}

        {/* Navigation Dots */}
        {project.media.length > 1 && (
          <div className="absolute bottom-2 sm:bottom-3 left-0 right-0 flex justify-center space-x-1.5 sm:space-x-2">
            {project.media.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Navigation Arrows (visible on hover) */}
        {project.media.length > 1 && (
          <>
            <button
              className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <button
              className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={goToNext}
              aria-label="Next image"
            >
              &#8250;
            </button>
          </>
        )}
      </div>

      <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <div className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-rn-accent bg-opacity-20 text-rn-accent text-xs font-semibold tracking-wide">
            {project.year}
          </div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rn-accent animate-pulse"></div>
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white line-clamp-2">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
          {project.technologies.slice(0, 5).map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Buttons container - pushed to bottom with mt-auto */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mt-auto">
          <a
            href={project.link || "#"}
            target={project.link ? "_blank" : ""}
            rel={project.link ? "noopener noreferrer" : ""}
            className="px-3 sm:px-4 py-2 sm:py-2.5 bg-rn-accent text-black text-xs sm:text-sm font-medium rounded-md hover:bg-rn-accent-dark transition-colors duration-300 flex items-center justify-center whitespace-nowrap"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1 sm:mr-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
          <button
            onClick={() => setShowDetails(true)}
            className="px-3 sm:px-4 py-2 sm:py-2.5 bg-transparent text-white text-xs sm:text-sm font-medium rounded-md border border-gray-600 hover:border-white hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center whitespace-nowrap"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1 sm:mr-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {t("projects.viewDetails")}
          </button>
        </div>
      </div>

      {/* Project Details Popup - Moved outside the card container */}
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

// Use memo to prevent unnecessary re-renders
export default memo(ProjectCard);
