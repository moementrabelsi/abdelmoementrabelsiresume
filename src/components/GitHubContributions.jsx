import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const GitHubContributions = ({ username = 'moementrabelsi' }) => {
  const { t } = useTranslation();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);
        
        // Fetch user data to get contribution stats
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
          throw new Error(`GitHub API responded with status: ${response.status}`);
        }
        
        const userData = await response.json();
        setStats(userData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [username]);

  // Get months array for contribution graph display
  const getMonths = () => {
    const months = [];
    const currentDate = new Date();
    for (let i = 0; i < 12; i++) {
      const date = new Date(currentDate);
      date.setMonth(currentDate.getMonth() - i);
      months.unshift(date.toLocaleString('default', { month: 'short' }));
    }
    return months;
  };

  return (
    <div className="bg-rn-gray rounded-lg p-6 h-full">
      <h3 className="text-2xl font-bold mb-6">{t('projects.githubContributions')}</h3>
      
      {loading && (
        <div className="text-center py-6">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-rn-accent mx-auto"></div>
          <p className="mt-3">{t('projects.loading')}</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-900 bg-opacity-30 text-red-200 p-4 rounded-lg">
          <p>{t('projects.errorFetching')}: {error}</p>
          <p className="mt-2 text-sm">
            {t('projects.rateLimitInfo')}
          </p>
        </div>
      )}
      
      {!loading && !error && (
        <div className="flex flex-col space-y-6">
          {/* GitHub User Stats */}
          {stats && (
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <img 
                src={stats.avatar_url} 
                alt={`${username}'s avatar`} 
                className="w-24 h-24 rounded-full border-2 border-rn-accent"
              />
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold">{stats.name || username}</h4>
                <p className="text-gray-400">{stats.bio}</p>
                <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="text-center">
                    <span className="block text-xl font-bold">{stats.public_repos}</span>
                    <span className="text-sm text-gray-400">{t('projects.repositories')}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xl font-bold">{stats.followers}</span>
                    <span className="text-sm text-gray-400">{t('projects.followers')}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xl font-bold">{stats.following}</span>
                    <span className="text-sm text-gray-400">{t('projects.following')}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* GitHub Contribution Calendar */}
          <div className="mt-6 bg-rn-darker rounded-lg p-4 overflow-hidden">
            <h4 className="text-lg font-medium mb-4">{t('projects.contributionGraph')}</h4>
            <div className="github-contribution-calendar">
              {/* GitHub contribution calendar iframe (responsive) */}
              <div className="relative pb-[40%] h-0 overflow-hidden rounded-md bg-rn-darker">
                <iframe 
                  src={`https://ghchart.rshah.org/${username}`} 
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    background: 'transparent',
                    filter: 'invert(1) hue-rotate(180deg)'
                  }}
                  title={`${username}'s GitHub Contribution Chart`}
                  frameBorder="0"
                />
              </div>
              
              {/* Months display */}
              <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
                {getMonths().map((month, index) => (
                  <span key={index}>{month}</span>
                ))}
              </div>
              
              {/* Contribution legend */}
              <div className="flex items-center justify-end space-x-2 mt-3">
                <span className="text-xs text-gray-400">{t('projects.less')}</span>
                <div className="w-3 h-3 rounded-sm bg-gray-800"></div>
                <div className="w-3 h-3 rounded-sm bg-rn-accent opacity-30"></div>
                <div className="w-3 h-3 rounded-sm bg-rn-accent opacity-50"></div>
                <div className="w-3 h-3 rounded-sm bg-rn-accent opacity-70"></div>
                <div className="w-3 h-3 rounded-sm bg-rn-accent"></div>
                <span className="text-xs text-gray-400">{t('projects.more')}</span>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="mt-6 text-center">
            <a 
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-rn-dark text-white hover:bg-rn-accent transition-colors rounded-md text-sm"
            >
              {t('projects.viewProfileOnGitHub')}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubContributions;
