import React from 'react';
import WelcomeBox from './components/WelcomeBox';
import SessionBox from './components/SessionBox';
import RecSessionBox from './components/RecSessionBox';
import './DashboardStyle.css';

const exampleSessions: {
    id: string;
    title: string;
    date: string;
    status: "active" | "completed" | "upcoming";
}[] = [
    {
        id: '1',
        title: 'VR Training Module 1',
        date: '2025-05-20',
        status: 'active',
    },
    {
        id: '2',
        title: 'Team Debrief - Q2 Goals',
        date: '2025-04-15',
        status: 'completed',
    },
    {
        id: '3',
        title: 'Mindfulness Session',
        date: '2025-06-10',
        status: 'upcoming',
    },
];

const Dashboard: React.FC = () => {
  return (
    <main>
      <div className='welcome-wrapper'><WelcomeBox/></div>
      <div className='session-row'>
        <div className='recSession-wrapper'><RecSessionBox sessions={exampleSessions} /></div>
        <div className='session-wrapper'><SessionBox sessions={exampleSessions} /></div>
      </div>
    </main>
  );
};

export default Dashboard;
