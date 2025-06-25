import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t, i18n } = useTranslation();

  // No need for manual initialization - we'll provide the public key in the send method

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({
    status: null,
    message: "",
  });

  // Create refs
  const form = useRef();
  const textareaRef = useRef(null);

  // Auto-resize textarea to prevent scrollbars
  useEffect(() => {
    const adjustTextareaHeight = () => {
      if (textareaRef.current) {
        // Reset height to auto so we can get the correct scrollHeight
        textareaRef.current.style.height = "auto";
        // Set the height to match the content
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    // Call once on mount
    adjustTextareaHeight();

    // Listen for window resize events
    window.addEventListener("resize", adjustTextareaHeight);

    return () => {
      window.removeEventListener("resize", adjustTextareaHeight);
    };
  }, [formData.message]); // Re-run when message content changes

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    // Clear any previous submit result when user starts typing again
    if (submitResult.status) {
      setSubmitResult({ status: null, message: "" });
    }
  };

  // Check if we're in development mode
  const isDev = () => {
    return (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitResult({
        status: "error",
        message: t("contact.formMessages.validation"),
      });
      return;
    }

    // Set submitting state to show loading indicator
    setIsSubmitting(true);
    setSubmitResult({ status: null, message: "" });

    // PRODUCTION MODE - Use EmailJS
    try {
      // Using your EmailJS service and template IDs
      const serviceId = "service_idydi9x";
      const templateId = "template_bc92uhm";

      // Prepare template parameters - exactly matching your EmailJS template
      const templateParams = {
        from_name: formData.name,
        email: formData.email, // Matching your template parameter
        title: formData.subject || "Contact from Portfolio Website", // Using 'title' instead of 'subject'
        message: formData.message,
        to_name: "Moemen",
        to_email: "fakhfakh.ahmeed@gmail.com",
      };

      console.log("Sending email with params:", templateParams);

      // The public key should be included in the send method
      const publicKey = "Q_3c6fFIsyyQ7LGXh";

      // Send email using EmailJS with public key included
      const response = await emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            return response;
          },
          function (error) {
            console.error("EmailJS FAILED...", error);
            throw error;
          }
        );

      // Success
      setSubmitResult({
        status: "success",
        message: t("contact.formMessages.success"),
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      // Network or other error
      console.error("Error sending message:", error);
      let errorMessage = t("contact.formMessages.networkError");

      // If there's a specific EmailJS error, display it
      if (error && error.text) {
        errorMessage = `${errorMessage} (${error.text})`;
      }

      setSubmitResult({
        status: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="w-full"
      style={{ position: "relative", overflowY: "visible" }}
    >
      {/* Contact Header */}
      <section className="py-20 max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-tight">
          {t("contact.headerTitle")}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-16">
          {t("contact.headerDescription")}
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-rn-gray to-rn-dark">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-rn-gray-darker p-8 rounded-xl shadow-xl border border-gray-800">
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
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                {t("contact.formSectionTitle")}
              </h2>
              <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
                {/* Form submission status message */}
                {submitResult.status && (
                  <div
                    className={`p-4 rounded-lg flex items-center ${submitResult.status === "success" ? "bg-green-800/30 text-green-100 border border-green-600" : "bg-red-800/30 text-red-100 border border-red-600"}`}
                  >
                    <span className="mr-2">
                      {submitResult.status === "success" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </span>
                    {submitResult.message}
                  </div>
                )}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-rn-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    {t("contact.formLabels.name")}{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-700 bg-rn-light-gray text-white focus:outline-none focus:border-rn-accent focus:ring-1 focus:ring-rn-accent transition-colors"
                    placeholder={t("contact.formPlaceholders.name")}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-rn-accent"
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
                    {t("contact.formLabels.email")}{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-700 bg-rn-light-gray text-white focus:outline-none focus:border-rn-accent focus:ring-1 focus:ring-rn-accent transition-colors"
                    placeholder={t("contact.formPlaceholders.email")}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-rn-accent"
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
                    {t("contact.formLabels.subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-700 bg-rn-light-gray text-white focus:outline-none focus:border-rn-accent focus:ring-1 focus:ring-rn-accent transition-colors"
                    placeholder={t("contact.formPlaceholders.subject")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-rn-accent"
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
                    {t("contact.formLabels.message")}{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    ref={textareaRef}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-700 bg-rn-light-gray text-white focus:outline-none focus:border-rn-accent focus:ring-1 focus:ring-rn-accent transition-colors"
                    placeholder={t("contact.formPlaceholders.message")}
                    required
                    style={{ resize: "none", overflow: "hidden" }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group px-8 py-3 bg-rn-accent text-white text-sm uppercase tracking-widest font-medium hover:bg-transparent hover:border hover:border-rn-accent transition-all rounded-md shadow-lg flex items-center justify-center space-x-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="animate-spin h-5 w-5 mr-2"
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
                      <span>{t("contact.formButtons.sending")}</span>
                    </>
                  ) : (
                    <>
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
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                      <span>{t("contact.formButtons.send")}</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-rn-gray-darker p-8 rounded-xl shadow-xl border border-gray-800">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t("contact.pageTitle")}
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-rn-dark/40 border border-gray-800 hover:border-gray-700 transition-colors">
                  <div className="bg-rn-accent/20 p-2 rounded-full">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-1">
                      {t("contact.contactInfo.emailLabel")}
                    </h3>
                    <a
                      href="mailto:abdelmoementrabelsi@gmail.com"
                      className="text-gray-300 hover:text-rn-accent transition-colors text-sm sm:text-base break-all"
                    >
                      abdelmoementrabelsi@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-rn-dark/40 border border-gray-800 hover:border-gray-700 transition-colors">
                  <div className="bg-rn-accent/20 p-2 rounded-full">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {t("contact.contactInfo.phoneLabel")}
                    </h3>
                    <a
                      href="tel:+21655238213"
                      className="text-gray-300 hover:text-rn-accent transition-colors"
                    >
                      +216 55 238 213
                    </a>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <a
                    href={
                      i18n.language === "fr"
                        ? "/abdelmoementrabelsiresume/assets/Abdelmoemen-trabelsi-cv-alternance.pdf"
                        : "/abdelmoementrabelsiresume/assets/Resume-Trabelsi-Abdelmoemen.pdf"
                    }
                    download={
                      i18n.language === "fr"
                        ? "Abdelmoemen-trabelsi-cv-alternance.pdf"
                        : "Resume-Trabelsi-Abdelmoemen.pdf"
                    }
                    className="group flex items-center space-x-2 px-6 py-3 bg-rn-accent text-white text-sm uppercase tracking-widest font-medium hover:bg-transparent hover:text-rn-accent hover:border hover:border-rn-accent transition-all rounded-md shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>{t("contact.contactInfo.downloadCV")}</span>
                  </a>
                </div>
                {/* <div>
                  <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/abdelmoementrabelsi-developpeur-web/" target="_blank" rel="noopener noreferrer" className="text-gray-300 border-b border-gray-600 hover:text-rn-accent hover:border-rn-accent transition-colors">
                  LinkedIn
                  </a>
                </div> */}

                <div className="pt-8 mt-8 border-t border-gray-700">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-rn-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    {t("contact.contactInfo.connectLabel")}
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/moementrabelsi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all hover:scale-110 hover:shadow-lg flex items-center justify-center group"
                    >
                      <span className="sr-only">
                        {t("contact.contactInfo.githubLabel")}
                      </span>
                      <svg
                        className="h-6 w-6 text-white group-hover:text-rn-accent transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/abdelmoementrabelsi-developpeur-web/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all hover:scale-110 hover:shadow-lg flex items-center justify-center group"
                    >
                      <span className="sr-only">
                        {t("contact.contactInfo.linkedinLabel")}
                      </span>
                      <svg
                        className="h-6 w-6 text-white group-hover:text-rn-accent transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {t("contact.availabilityTitle")}
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-12 text-gray-300 leading-relaxed">
              {t("contact.availabilityDescription")}
            </p>
            <a
              href="mailto:abdelmoementrabelsi@gmail.com"
              className="group inline-flex items-center space-x-2 px-4 sm:px-8 py-4 border-2 border-rn-accent text-rn-accent text-xs sm:text-sm uppercase tracking-widest font-medium hover:bg-rn-accent hover:text-white transition-all duration-300 rounded-md shadow-lg hover:shadow-rn-accent/30"
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{t("contact.hireMeButton")}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
