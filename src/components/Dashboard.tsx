import React from 'react';
import './Dashboard.css';
import WelcomeBox from './dashboard_components/WelcomeBox';
import SessionBox from './dashboard_components/SessionBox';
import RecommendedSessionBox from './dashboard_components/RecommendedSessionBox';

const Dashboard: React.FC = () => {
  return (
    <main>
      <div className='welcome-wrapper'><WelcomeBox/></div>
      <div className='session-row'>
        <div className='recSession-wrapper'><RecommendedSessionBox sessions={[]} /></div>
        <div className='session-wrapper'><SessionBox sessions={[]} /></div>
      </div>
    </main>
  );
};

export default Dashboard;
