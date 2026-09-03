import React, { useEffect, useState } from 'react';
import { Code, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const DSA = () => {
  const { leetcode } = portfolioData.socialLinks;
  
  // Set default verified stats (152 Solved, 74 Easy, 70 Medium, 8 Hard) as fallback state
  const [stats, setStats] = useState({
    solvedProblem: 152,
    easySolved: 74,
    mediumSolved: 70,
    hardSolved: 8
  });
  const [isSyncing, setIsSyncing] = useState(true);

  useEffect(() => {
    // Fetch live statistics in the background using the Vercel LeetCode proxy
    fetch('https://leetcode-api-pied.vercel.app/user/Vizz76')
      .then((res) => {
        if (!res.ok) throw new Error('API server response failed');
        return res.json();
      })
      .then((data) => {
        const ac = data?.submitStats?.acSubmissionNum;
        if (ac && Array.isArray(ac)) {
          const allCount = ac.find(item => item.difficulty === 'All')?.count;
          const easyCount = ac.find(item => item.difficulty === 'Easy')?.count;
          const mediumCount = ac.find(item => item.difficulty === 'Medium')?.count;
          const hardCount = ac.find(item => item.difficulty === 'Hard')?.count;
          
          setStats({
            solvedProblem: allCount !== undefined ? allCount : stats.solvedProblem,
            easySolved: easyCount !== undefined ? easyCount : stats.easySolved,
            mediumSolved: mediumCount !== undefined ? mediumCount : stats.mediumSolved,
            hardSolved: hardCount !== undefined ? hardCount : stats.hardSolved
          });
        }
        setIsSyncing(false);
      })
      .catch((err) => {
        console.warn('Syncing live stats failed, preserving fallback stats:', err);
        setIsSyncing(false);
      });
  }, []);

  return (
    <section id="dsa">
      <div className="section-title-container">
        <span className="section-subtitle">DATA STRUCTURES & ALGORITHMS</span>
        <h2>PROBLEM SOLVING</h2>
      </div>

      <div className="dsa-container">
        {/* Customized Problem Solving Statement */}
        <div className="dsa-statement-box">
          <div className="dsa-statement-icon">
            <Sparkles size={18} />
          </div>
          <p className="dsa-statement-text">
            I regularly practice data structures and algorithms to strengthen my problem-solving skills and write efficient, scalable solutions.
          </p>
        </div>

        {/* Live LeetCode Stats Card */}
        {leetcode && (
          <div className="dsa-leetcode-box">
            <div className="dsa-leetcode-header">
              <div className="dsa-leetcode-title-wrapper">
                <Code size={20} className="dsa-leetcode-icon" />
                <span className="dsa-leetcode-title">LEETCODE LIVE STATUS</span>
              </div>
              <div className="dsa-leetcode-live-badge">
                <span className="live-indicator"></span>
                {isSyncing ? 'SYNCING' : 'LIVE'}
              </div>
            </div>

            <div className="dsa-leetcode-stats-display">
              <div className="leetcode-stat-circle-group">
                <div className="leetcode-main-solved-value">
                  {stats.solvedProblem}
                </div>
                <div className="leetcode-main-solved-label">SOLVED</div>
              </div>

              <div className="leetcode-detailed-progress">
                <div className="leetcode-progress-bar-item">
                  <div className="leetcode-progress-label-row">
                    <span className="difficulty-name easy-color">EASY</span>
                    <span className="difficulty-count">{stats.easySolved}</span>
                  </div>
                  <div className="leetcode-track">
                    <div 
                      className="leetcode-bar easy-bar" 
                      style={{ width: `${Math.min(100, (stats.easySolved / 250) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="leetcode-progress-bar-item">
                  <div className="leetcode-progress-label-row">
                    <span className="difficulty-name medium-color">MEDIUM</span>
                    <span className="difficulty-count">{stats.mediumSolved}</span>
                  </div>
                  <div className="leetcode-track">
                    <div 
                      className="leetcode-bar medium-bar" 
                      style={{ width: `${Math.min(100, (stats.mediumSolved / 200) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="leetcode-progress-bar-item">
                  <div className="leetcode-progress-label-row">
                    <span className="difficulty-name hard-color">HARD</span>
                    <span className="difficulty-count">{stats.hardSolved}</span>
                  </div>
                  <div className="leetcode-track">
                    <div 
                      className="leetcode-bar hard-bar" 
                      style={{ width: `${Math.min(100, (stats.hardSolved / 50) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dsa-leetcode-action-row" style={{ marginTop: '1.5rem' }}>
              <a
                href={leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                title="Go to LeetCode profile"
                style={{ width: '100%' }}
              >
                LeetCode Profile
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DSA;
