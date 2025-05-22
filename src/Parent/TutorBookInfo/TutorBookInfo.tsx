import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import '../../Styles/TutorBookInfoStyle.css';

const Tutor: React.FC = () => {
  const navigate = useNavigate();
  const { tutorId } = useParams();
  const location = useLocation();
  const tutorName = location.state?.tutorName || 'Tutor';

  const handleContinue = () => {
    navigate('/student-book-session', {
      state: { tutorId, tutorName }
    });
  };

  return (
    <div className="tutor-container wide-box">
      <h1>Session Tutor Info</h1>
      
      <div className="tutor-info">
        <div className="tutor-header">
          <div className="avatar-circle">
            <span className="avatar-initial">
              {tutorName.charAt(0)}
            </span>
          </div>
          <div className="tutor-name">{tutorName}</div>
        </div>
        
        <div className="tutor-title">Tutor Info</div>
        
        <div className="tutor-details-box">
          <div className="placeholder-text">
            Tutor ID: {tutorId}
          </div>
        </div>
      </div>

      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default Tutor;