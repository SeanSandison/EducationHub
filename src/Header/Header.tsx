import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/HeaderStyle.css';

interface HeaderProps {
  onLoginClick: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
  loginType?: 'student' | 'parent' | 'provider' | 'admin';
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, isLoggedIn, onLogout, loginType }) => {
  return (
    <header className={`header ${loginType ? `header-${loginType}` : ''}`}>
      <nav>
        <div id="EHTitle">EducationHub</div>
        <ul>
          {!isLoggedIn ? (
            <li><a onClick={onLoginClick} href="#">Login</a></li>
          ) : loginType === 'student' ? (
            <>
              <li><Link to="/student-dashboard">Dashboard</Link></li>
              <li><Link to="/student-sessions">Sessions</Link></li>
              <li><Link to="/student-message">Message</Link></li>
              <li><Link to="/student-profile">Profile</Link></li>
              <li><a onClick={onLogout} href="#">Logout</a></li>
            </>
          ) : loginType === 'provider' ? (
            <>
              <li><Link to="/provider-dashboard">Dashboard</Link></li>
              <li><Link to="/provider-sessions">Sessions</Link></li>
              <li><Link to="/provider-analytics">Analytics</Link></li>
              <li><Link to="/provider-students">Students</Link></li>
              <li><Link to="/provider-message">Message</Link></li>
              <li><Link to="/provider-profile">Profile</Link></li>
              <li><a onClick={onLogout} href="#">Logout</a></li>
            </>
          ) : loginType === 'parent' ? (
            <>
              <li><Link to="/parent-dashboard">Dashboard</Link></li>
              <li><Link to="/parent-sessions">Sessions</Link></li>
              <li><Link to="/parent-family">Family</Link></li>
              <li><Link to="/parent-message">Message</Link></li>
              <li><Link to="/parent-profile">Profile</Link></li>
              <li><a onClick={onLogout} href="#">Logout</a></li>
            </>
          ) : loginType === 'admin' ? (
            <>
              <li><Link to="/admin-dashboard">Dashboard</Link></li>
              <li><Link to="/admin-users">Users</Link></li>
              <li><Link to="/admin-settings">Settings</Link></li>
              <li><a onClick={onLogout} href="#">Logout</a></li>
            </>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
