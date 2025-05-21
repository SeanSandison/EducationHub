import React from 'react';
import '../../../Styles/SessionBoxStyle.css'

type Session = {
    id: string;
    title: string;
    date: string;
    status: 'active' | 'completed' | 'upcoming';
};

type SessionBoxProps = {
    sessions: Session[];
    onSessionClick?: (session: Session) => void;
};

const SessionBox: React.FC<SessionBoxProps> = ({ sessions, onSessionClick }) => {
    return (
        <div className="session-box">
            <h2 className="session-title">Your Current Sessions</h2>
            {sessions.length === 0 ? (
                <div className="session-empty">No current sessions.</div>
            ) : (
                <ul className="session-list">
                    {sessions.map(session => (
                        <li
                            key={session.id}
                            className="session-item clickable-session-item"
                            onClick={() => onSessionClick && onSessionClick(session)}
                            tabIndex={0}
                            role="button"
                        >
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