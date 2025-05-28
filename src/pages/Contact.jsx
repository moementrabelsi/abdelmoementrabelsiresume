import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  
  // No need for manual initialization - we'll provide the public key in the send method
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ status: null, message: '' });
  
  // Create a ref for the form
  const form = useRef();
  
  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
    
    // Clear any previous submit result when user starts typing again
    if (submitResult.status) {
      setSubmitResult({ status: null, message: '' });
    }
  };
  
  // Check if we're in development mode
  const isDev = () => {
    return window.location.hostname === 'localhost' || 
           window.location.hostname === '127.0.0.1';
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitResult({ 
        status: 'error', 
        message: t('contact.formMessages.validation') 
      });
      return;
    }
    
    // Set submitting state to show loading indicator
    setIsSubmitting(true);
    setSubmitResult({ status: null, message: '' });
    
    // PRODUCTION MODE - Use EmailJS
    try {
      // Using your EmailJS service and template IDs
      const serviceId = 'service_idydi9x';
      const templateId = 'template_bc92uhm';
      
      // Prepare template parameters - exactly matching your EmailJS template
      const templateParams = {
        from_name: formData.name,
        email: formData.email,       // Matching your template parameter
        title: formData.subject || 'Contact from Portfolio Website', // Using 'title' instead of 'subject'
        message: formData.message,
        to_name: 'Moemen',
        to_email: 'fakhfakh.ahmeed@gmail.com'
      };
      
      console.log('Sending email with params:', templateParams);
      
      // The public key should be included in the send method
      const publicKey = 'Q_3c6fFIsyyQ7LGXh';
      
      // Send email using EmailJS with public key included
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          return response;
        }, function(error) {
          console.error('EmailJS FAILED...', error);
          throw error;
        });
      
      // Success
      setSubmitResult({ 
        status: 'success', 
        message: t('contact.formMessages.success') 
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      // Network or other error
      console.error('Error sending message:', error);
      let errorMessage = t('contact.formMessages.networkError');
      
      // If there's a specific EmailJS error, display it
      if (error && error.text) {
        errorMessage = `${errorMessage} (${error.text})`;
      }
      
      setSubmitResult({ 
        status: 'error', 
        message: errorMessage 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-rn-dark text-white">
      {/* Contact Header */}
      <section className="py-20 max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-tight">contact me</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-16">
          Interested in working together? Feel free to get in touch using the contact form below or through any of my social media channels.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-rn-gray">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
              <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
                {/* Form submission status message */}
                {submitResult.status && (
                  <div className={`p-4 rounded ${submitResult.status === 'success' ? 'bg-green-800 text-green-100' : 'bg-red-800 text-red-100'}`}>
                    {submitResult.message}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 bg-rn-light-gray text-white focus:outline-none focus:border-rn-accent" 
                    placeholder={t('contact.formPlaceholders.name')}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">{t('contact.formLabels.email')} <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 bg-rn-light-gray text-white focus:outline-none focus:border-rn-accent" 
                    placeholder={t('contact.formPlaceholders.email')}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">{t('contact.formLabels.subject')}</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 bg-rn-light-gray text-white focus:outline-none focus:border-rn-accent" 
                    placeholder={t('contact.formPlaceholders.subject')}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">{t('contact.formLabels.message')} <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message" 
                    rows="6" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 bg-rn-light-gray text-white focus:outline-none focus:border-rn-accent" 
                    placeholder={t('contact.formPlaceholders.message')}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`px-8 py-3 bg-rn-accent text-white text-sm uppercase tracking-widest font-medium hover:bg-rn-dark hover:border hover:border-rn-accent transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block animate-pulse mr-2">⟳</span>
                      {t('contact.formButtons.sending')}
                    </>
                  ) : t('contact.formButtons.send')}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8">{t('contact.pageTitle')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t('contact.contactInfo.emailLabel')}</h3>
                  <a href="mailto:abdelmoementrabelsi@gmail.com" className="text-gray-300 border-b border-gray-600 hover:text-rn-accent hover:border-rn-accent transition-colors">
                    abdelmoementrabelsi@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t('contact.contactInfo.phoneLabel')}</h3>
                  <a href="tel:+21655238213" className="text-gray-300 border-b border-gray-600 hover:text-rn-accent hover:border-rn-accent transition-colors">
                    +216 55 238 213
                  </a>
                </div>
                <div className="mt-8">
                  <a 
                    href="/abdelmoementrabelsiresume/assets/Resume-Trabelsi-Abdelmoemen.pdf" 
                    download="Resume-Trabelsi-Abdelmoemen.pdf"
                    className="inline-block px-6 py-3 bg-rn-accent text-white text-sm uppercase tracking-widest font-medium hover:bg-rn-dark hover:border hover:border-rn-accent transition-colors rounded-sm"
                  >
                    {t('contact.contactInfo.downloadCV')}
                  </a>
                </div>
                {/* <div>
                  <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/abdelmoementrabelsi-developpeur-web/" target="_blank" rel="noopener noreferrer" className="text-gray-300 border-b border-gray-600 hover:text-rn-accent hover:border-rn-accent transition-colors">
                  LinkedIn
                  </a>
                </div> */}
                
                <div className="pt-8 mt-8 border-t border-gray-700">
                  <h3 className="text-lg font-semibold mb-4">{t('contact.contactInfo.connectLabel')}</h3>
                  <div className="flex space-x-6">
                    <a href="https://github.com/moementrabelsi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rn-accent transition-colors">
                      <span className="sr-only">{t('contact.contactInfo.githubLabel')}</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com/in/abdelmoementrabelsi-developpeur-web/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rn-accent transition-colors">
                      <span className="sr-only">{t('contact.contactInfo.linkedinLabel')}</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
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
      <section className="py-20 bg-rn-gray">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">availability</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 text-gray-300">
            I'm currently available for freelance work and open to discussing new opportunities.
          </p>
          <a 
            href="mailto:abdelmoementrabelsi@gmail.com" 
            className="inline-block px-8 py-3 border border-rn-accent text-rn-accent text-sm uppercase tracking-widest font-medium hover:bg-rn-accent hover:text-white transition-colors"
          >
            Hire Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
