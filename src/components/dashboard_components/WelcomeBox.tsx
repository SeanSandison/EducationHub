import React from 'react';
import './welcomebox.css';

const WelcomeBox: React.FC = () => {
  return (
    <div className="welcome-box">
      <h2 className="welcome-title">Welcome to your Dashboard</h2>
      <p className="welcome-message">This is your central hub for learning, tracking progress, and more.</p>
    </div>
  );
};

export default WelcomeBox;
