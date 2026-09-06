import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const DSA = () => {
  const { leetcode } = portfolioData.socialLinks;
  
  const [stats, setStats] = useState({
    solvedProblem: 152,
    easySolved: 74,
    mediumSolved: 70,
    hardSolved: 8
  });
  const [isSyncing, setIsSyncing] = useState(true);

  useEffect(() => {
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
      <motion.div 
        className="section-title-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-subtitle">DATA STRUCTURES & ALGORITHMS</span>
        <h2>PROBLEM SOLVING</h2>
      </motion.div>

      <div className="dsa-container">
        {/* Customized Problem Solving Statement */}
        <motion.div 
          className="dsa-statement-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="dsa-statement-icon">
            <Sparkles size={18} />
          </div>
          <p className="dsa-statement-text">
            I regularly practice data structures and algorithms to strengthen my problem-solving skills and write efficient, scalable solutions.
          </p>
        </motion.div>

        {/* Live LeetCode Stats Card */}
        {leetcode && (
          <motion.div 
            className="dsa-leetcode-box"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
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
                <motion.div 
                  className="leetcode-main-solved-value"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {stats.solvedProblem}
                </motion.div>
                <div className="leetcode-main-solved-label">SOLVED</div>
              </div>

              <div className="leetcode-detailed-progress">
                <div className="leetcode-progress-bar-item">
                  <div className="leetcode-progress-label-row">
                    <span className="difficulty-name easy-color">EASY</span>
                    <span className="difficulty-count">{stats.easySolved}</span>
                  </div>
                  <div className="leetcode-track">
                    <motion.div 
                      className="leetcode-bar easy-bar" 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(100, (stats.easySolved / 250) * 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    />
                  </div>
                </div>

                <div className="leetcode-progress-bar-item">
                  <div className="leetcode-progress-label-row">
                    <span className="difficulty-name medium-color">MEDIUM</span>
                    <span className="difficulty-count">{stats.mediumSolved}</span>
                  </div>
                  <div className="leetcode-track">
                    <motion.div 
                      className="leetcode-bar medium-bar" 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(100, (stats.mediumSolved / 200) * 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    />
                  </div>
                </div>

                <div className="leetcode-progress-bar-item">
                  <div className="leetcode-progress-label-row">
                    <span className="difficulty-name hard-color">HARD</span>
                    <span className="difficulty-count">{stats.hardSolved}</span>
                  </div>
                  <div className="leetcode-track">
                    <motion.div 
                      className="leetcode-bar hard-bar" 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(100, (stats.hardSolved / 50) * 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="dsa-leetcode-action-row" style={{ marginTop: '1.5rem' }}>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                title="Go to LeetCode profile"
                style={{ width: '100%' }}
              >
                LeetCode Profile
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default DSA;
