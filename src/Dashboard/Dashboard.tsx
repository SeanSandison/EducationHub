import React from 'react';
import WelcomeBox from './components/WelcomeBox';
import SessionBox from './components/SessionBox';
import RecSessionBox from './components/RecSessionBox';

const Dashboard: React.FC = () => {
  return (
    <main>
      <div className='welcome-wrapper'><WelcomeBox/></div>
      <div className='session-row'>
        <div className='recSession-wrapper'><RecSessionBox sessions={[]} /></div>
        <div className='session-wrapper'><SessionBox sessions={[]} /></div>
      </div>
    </main>
  );
};

export default Dashboard;
