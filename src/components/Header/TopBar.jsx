// TopBar.jsx
// Displays a top bar with the project title and a link to the GitHub repository.
// Used globally on all pages (above the main header).

import React from 'react';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbar-content">
                {/* Project title (left) */}
                <span className="topbar-title">DailyBuzz</span>
                {/* GitHub repo link (right) */}
                <a
                    href="https://github.com/ayush-sleeping/DailyBuzz/"
                    className="topbar-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on GitHub"
                >
                    {/* GitHub icon */}
                    <svg className="github-icon" height="22" width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2Z" fill="currentColor" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default TopBar;
