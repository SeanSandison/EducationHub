import React from 'react';
import './SessionBox.css'

type Session = {
    id: string;
    title: string;
    date: string;
    status: 'active' | 'completed' | 'upcoming';
};

type SessionBoxProps = {
    sessions: Session[];
};

const SessionBox: React.FC<SessionBoxProps> = ({ sessions }) => {
    return (
        <div className="session-box">
            <h2 className="session-title">Your Current Sessions</h2>
            {sessions.length === 0 ? (
                <div className="session-empty">No current sessions.</div>
            ) : (
                <ul className="session-list">
                    {sessions.map(session => (
                        <li key={session.id} className="session-item">
                            <div className="session-item-title">{session.title}</div>
                            <div className="session-item-date">{session.date}</div>
                            <span
                                className={`session-status session-status-${session.status}`}
                            >
                                {session.status}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SessionBox;