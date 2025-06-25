import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const GitHubContributions = ({ username = "moementrabelsi" }) => {
  const { t } = useTranslation();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);

        // Fetch user data to get contribution stats
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
          throw new Error(
            `GitHub API responded with status: ${response.status}`
          );
        }

        const userData = await response.json();
        setStats(userData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching GitHub stats:", err);
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
      months.unshift(date.toLocaleString("default", { month: "short" }));
    }
    return months;
  };

  return (
    <div className="bg-rn-gray rounded-lg p-4 sm:p-6 w-full">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
        {t("projects.githubContributions")}
      </h3>

      {loading && (
        <div className="text-center py-6 sm:py-8">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-t-2 border-b-2 border-rn-accent mx-auto"></div>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base">
            {t("projects.loading")}
          </p>
        </div>
      )}

      {error && (
        <div className="bg-red-900 bg-opacity-30 text-red-200 p-4 sm:p-6 rounded-lg">
          <p className="text-sm sm:text-base">
            {t("projects.errorFetching")}: {error}
          </p>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm">
            {t("projects.rateLimitInfo")}
          </p>
        </div>
      )}

      {!loading && !error && (
        <div className="space-y-6 sm:space-y-8">
          {/* GitHub User Stats */}
          {stats && (
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <img
                src={stats.avatar_url}
                alt={t("projects.avatarAlt", { username: username })}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-rn-accent flex-shrink-0"
              />
              <div className="text-center sm:text-left flex-1">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold">
                  {stats.name || username}
                </h4>
                <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-md">
                  {stats.bio}
                </p>
                <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
                  <div className="text-center">
                    <span className="block text-xl sm:text-2xl font-bold text-rn-accent">
                      {stats.public_repos}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400">
                      {t("projects.repositories")}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xl sm:text-2xl font-bold text-rn-accent">
                      {stats.followers}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400">
                      {t("projects.followers")}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xl sm:text-2xl font-bold text-rn-accent">
                      {stats.following}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400">
                      {t("projects.following")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* GitHub Contribution Calendar */}
          <div className="bg-rn-dark rounded-xl p-6 sm:p-8 border border-gray-800">
            <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-6 sm:mb-8 text-center">
              {t("projects.contributionGraph")}
            </h4>

            {/* Centered contribution graph container */}
            <div className="flex flex-col items-center w-full">
              {/* Graph wrapper with better centering */}
              <div className="w-full max-w-4xl">
                <div className="overflow-x-auto flex justify-center">
                  <div className="min-w-[320px] sm:min-w-[480px] md:min-w-[640px] lg:min-w-[800px] xl:min-w-[900px]">
                    {/* Contribution Graph with improved background */}
                    <div className="bg-rn-gray-darker rounded-lg p-4 border border-rn-accent border-opacity-20">
                      <iframe
                        src={`https://ghchart.rshah.org/${username}`}
                        className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 mx-auto block"
                        style={{
                          border: "none",
                          background: "transparent",
                          filter:
                            "invert(1) hue-rotate(180deg) brightness(0.9) contrast(0.85)",
                          borderRadius: "6px",
                        }}
                        scrolling="no"
                        title={`${username}'s GitHub Contribution Chart`}
                        frameBorder="0"
                      />
                    </div>

                    {/* Months display - centered and responsive */}
                    <div className="flex justify-between text-xs text-gray-500 mt-3 px-4">
                      {getMonths().map((month, index) => (
                        <span key={index} className="text-center flex-1">
                          {month}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contribution legend - centered */}
              <div className="flex items-center justify-center space-x-3 mt-6 flex-wrap">
                <span className="text-xs text-gray-400">
                  {t("projects.less")}
                </span>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-sm bg-gray-800 border border-gray-600"></div>
                  <div className="w-3 h-3 rounded-sm bg-rn-accent opacity-30 border border-gray-600"></div>
                  <div className="w-3 h-3 rounded-sm bg-rn-accent opacity-50 border border-gray-600"></div>
                  <div className="w-3 h-3 rounded-sm bg-rn-accent opacity-70 border border-gray-600"></div>
                  <div className="w-3 h-3 rounded-sm bg-rn-accent border border-gray-600"></div>
                </div>
                <span className="text-xs text-gray-400">
                  {t("projects.more")}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubContributions;
