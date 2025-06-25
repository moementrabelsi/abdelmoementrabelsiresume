import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-rn-dark text-white">
      {/* Experience Header */}
      <section className="py-20 max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-tight">{t('experience.pageTitle')}</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-16">
          {t('experience.pageDescription')}
        </p>
      </section>

      {/* Timeline Section with Proper Structure */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Modern timeline with proper positioning */}
          <div className="relative grid grid-cols-1 md:grid-cols-[40px_1fr] gap-6">
            {/* Timeline line - contained in its own column */}
            <div className="hidden md:block relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rn-accent via-gray-700 to-gray-900"></div>
            </div>
            
            {/* Experience entries column */}
            <div className="space-y-20">
              {/* Get experiences from translation data */}
              {(() => {
                const experienceData = t('experience.experienceData', { returnObjects: true });
                const experienceEntries = Object.entries(experienceData);
                
                return experienceEntries.map(([key, experience], index) => (
                  <div className="relative" key={key}>
                    {/* Timeline marker - positioned relative to the line */}
                    <div className="hidden md:flex absolute -left-[56px] top-0 h-8 w-8 rounded-full bg-rn-accent items-center justify-center z-10">
                      <div className="h-3 w-3 rounded-full bg-black"></div>
                    </div>
                    
                    {/* Experience content */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      {/* Date and location section */}
                      <div className="md:col-span-1">
                        <div className="px-4 py-2 rounded-full bg-rn-accent bg-opacity-10 inline-block text-rn-accent font-medium tracking-wider text-sm mb-3">{experience.period}</div>
                        <div className="text-sm text-gray-400 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {experience.location}
                        </div>
                      </div>
                      
                      {/* Experience details */}
                      <div className="md:col-span-3 bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800">
                        <div className="flex flex-wrap items-center justify-between mb-4">
                          <h2 className="text-2xl font-bold text-white">{experience.role}</h2>
                          <span className="px-3 py-1 rounded-full bg-green-500 bg-opacity-20 text-green-400 text-xs font-semibold">{experience.status}</span>
                        </div>
                        <h3 className="text-xl mb-6 text-rn-accent">{experience.company}</h3>
                        <ul className="space-y-4">
                          {experience.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <span className="mr-2 text-gray-400">-</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8 flex flex-wrap gap-3">
                          {experience.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700 hover:border-rn-accent transition-colors">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ));
              })()}
            
              

              
              {/* Call to Action */}
              <div className="mt-24 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
                <h2 className="text-3xl font-bold mb-6 text-white">{t('experience.cta.title')}</h2>
                <p className="text-lg text-gray-300 mb-8">{t('experience.cta.description')}</p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#/projects" 
                    className="inline-block px-8 py-4 bg-rn-accent text-white text-sm uppercase tracking-widest font-medium rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      {t('experience.cta.viewProjects')}
                    </div>
                  </a>
                  <a 
                    href="#/contact" 
                    className="inline-block px-8 py-4 bg-transparent text-white text-sm uppercase tracking-widest font-medium rounded-md border border-gray-500 hover:border-white hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {t('experience.cta.contactMe')}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
