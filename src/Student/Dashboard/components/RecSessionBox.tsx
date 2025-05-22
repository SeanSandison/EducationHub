import React from 'react';
import '../../../Styles/RecSessionBoxStyle.css';

// Update the Session type to match your data structure
type Session = {
    id: string;
    title: string;
    date: string;
    status: 'active' | 'completed' | 'upcoming';
    tutorId: string;
    tutorName: string;
};

type RecommendedSessionBoxProps = {
    sessions: Session[];
    onSessionClick: (session: Session) => void;
};

const RecommendedSessionBox: React.FC<RecommendedSessionBoxProps> = ({ 
    sessions, 
    onSessionClick 
}) => {
    return (
        <div className="recommended-session-box">
            <h2 className="recommended-session-title">Recommended Sessions</h2>
            {sessions.length === 0 ? (
                <div className="recommended-session-empty">No recommended sessions.</div>
            ) : (
                <ul className="recommended-session-list">
                    {sessions.map(session => (
                        <li
                            key={session.id}
                            className="recommended-session-item clickable-session-item"
                            onClick={() => onSessionClick(session)}
                            tabIndex={0}
                            role="button"
                        >
                            <div className="recommended-session-item-title">{session.title}</div>
                            <div className="recommended-session-item-date">{session.date}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RecommendedSessionBox;