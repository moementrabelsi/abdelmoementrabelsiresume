import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const GitHubActivity = ({ username = 'moementrabelsi', limit = 10 }) => {
  const { t } = useTranslation();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        setLoading(true);
        
        // GitHub API endpoint for user events
        const response = await fetch(`https://api.github.com/users/${username}/events?per_page=${limit}`);
        
        if (!response.ok) {
          throw new Error(`GitHub API responded with status: ${response.status}`);
        }
        
        const data = await response.json();
        setActivities(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub activity:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGitHubActivity();
  }, [username, limit]);

  // Format the date to a more readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get an appropriate icon for the event type
  const getEventIcon = (type) => {
    switch (type) {
      case 'PushEvent':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>;
      case 'PullRequestEvent':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>;
      case 'CreateEvent':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>;
      case 'DeleteEvent':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>;
      case 'IssuesEvent':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>;
      case 'IssueCommentEvent':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>;
      case 'WatchEvent':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>;
      default:
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>;
    }
  };

  // Get a description for the event
  const getEventDescription = (event) => {
    const repo = event.repo.name.split('/')[1];
    
    switch (event.type) {
      case 'PushEvent':
        const commitCount = event.payload.commits ? event.payload.commits.length : 0;
        return `Pushed ${commitCount} commit${commitCount === 1 ? '' : 's'} to ${repo}`;
      case 'PullRequestEvent':
        return `${event.payload.action} pull request in ${repo}`;
      case 'CreateEvent':
        return `Created ${event.payload.ref_type} ${event.payload.ref ? event.payload.ref : ''} in ${repo}`;
      case 'DeleteEvent':
        return `Deleted ${event.payload.ref_type} ${event.payload.ref} in ${repo}`;
      case 'IssuesEvent':
        return `${event.payload.action} issue in ${repo}`;
      case 'IssueCommentEvent':
        return `Commented on issue in ${repo}`;
      case 'WatchEvent':
        return `Starred ${repo}`;
      default:
        return `Activity in ${repo}`;
    }
  };

  return (
    <div className="bg-rn-gray rounded-lg p-6">
      <h3 className="text-2xl font-bold mb-6">{t('projects.githubActivity')}</h3>
      
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
      
      {!loading && !error && activities.length === 0 && (
        <p className="text-gray-400 py-4">{t('projects.noActivity')}</p>
      )}
      
      {!loading && !error && activities.length > 0 && (
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li key={activity.id} className="border-b border-gray-700 pb-4 last:border-0">
              <div className="flex items-start">
                <div className="text-rn-accent mr-3 mt-1">
                  {getEventIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <p className="text-white">
                    {getEventDescription(activity)}
                  </p>
                  <a 
                    href={`https://github.com/${activity.repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-rn-accent transition-colors"
                  >
                    {activity.repo.name}
                  </a>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDate(activity.created_at)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      
      <div className="mt-6 text-center">
        <a 
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-rn-dark text-white hover:bg-rn-accent transition-colors rounded-md text-sm"
        >
          {t('projects.viewMoreOnGitHub')}
        </a>
      </div>
    </div>
  );
};

export default GitHubActivity;
