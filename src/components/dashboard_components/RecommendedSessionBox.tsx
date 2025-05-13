import React from 'react';
import './RecommendedSessionBox.css';

type Session = {
    id: string;
    title: string;
    date: string;
    status: 'active' | 'completed' | 'upcoming';
};

type RecommendedSessionBoxProps = {
    sessions: Session[];
};

const RecommendedSessionBox: React.FC<RecommendedSessionBoxProps> = ({ sessions }) => {
    return (
        <div className="recommended-session-box">
            <h2 className="recommended-session-title">Recommended Sessions</h2>
            {sessions.length === 0 ? (
                <div className="recommended-session-empty">No recommended sessions.</div>
            ) : (
                <ul className="recommended-session-list">
                    {sessions.map(session => (
                        <li key={session.id} className="recommended-session-item">
                            <div className="recommended-session-item-title">{session.title}</div>
                            <div className="recommended-session-item-date">{session.date}</div>
                            <span
                                className={`recommended-session-status recommended-session-status-${session.status}`}
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

export default RecommendedSessionBox;