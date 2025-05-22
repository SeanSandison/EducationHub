import React from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeBox from './components/WelcomeBox';
import SessionBox from './components/SessionBox';
import RecSessionBox from './components/RecSessionBox';
import '../../Styles/DashboardStyle.css';

// Define the Session type here to use throughout the component
type Session = {
    id: string;
    title: string;
    date: string;
    status: 'active' | 'completed' | 'upcoming';
    tutorId: string;
    tutorName: string;
};

const exampleSessions: Session[] = [
  {
    id: '1',
    title: 'VR Training Module 1',
    date: '2025-05-20',
    status: 'active',
    tutorId: 'tutor1',
    tutorName: 'Sean S'
  },
  {
    id: '2',
    title: 'Team Debrief - Q2 Goals',
    date: '2025-04-15',
    status: 'completed',
    tutorId: 'tutor1',
    tutorName: 'Sean S'
  },
  {
    id: '3',
    title: 'Mindfulness Session',
    date: '2025-06-10',
    status: 'upcoming',
    tutorId: 'tutor2',
    tutorName: 'Alex Johnson'
  },
];

const StuDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleSessionClick = (session: Session) => {
    navigate(`/tutor/${session.tutorId}`, {
      state: { tutorName: session.tutorName }
    });
  };

  return (
    <main>
      <div className='welcome-wrapper'><WelcomeBox/></div>
      <div className='session-row'>
        <div className='recSession-wrapper'>
          <RecSessionBox 
            sessions={exampleSessions} 
            onSessionClick={handleSessionClick}
          />
        </div>
        <div className='session-wrapper'>
          <SessionBox sessions={exampleSessions} />
        </div>
      </div>
    </main>
  );
};

export default StuDashboard;