import React from 'react';
import '../../../Styles/RecSessionBoxStyle.css';

type Session = {
    id: string;
    title: string;
    date: string;
    status: 'active' | 'completed' | 'upcoming';
    tutorId: string;
    tutorName: string;
};

type RecSessionBoxProps = {
  sessions: Session[];
  onSessionClick?: (session: Session) => void;
};

const RecSessionBox: React.FC<RecSessionBoxProps> = ({ sessions, onSessionClick }) => (
  <div className="recommended-session-box">
    <h2 className="recommended-session-title">Recommended Sessions</h2>
    <ul className="recommended-session-list">
      {sessions.map(session => (
        <li
          key={session.id}
          className="recommended-session-item clickable-session-item"
          onClick={() => onSessionClick && onSessionClick(session)}
          tabIndex={0}
          role="button"
        >
          <div className="recommended-session-item-title">{session.title}</div>
          <div className="recommended-session-item-date">{session.date}</div>
          <span className={`recommended-session-status recommended-session-status-${session.status}`}>
            {session.status}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default RecSessionBox;