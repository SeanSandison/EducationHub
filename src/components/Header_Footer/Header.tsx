import React from 'react';
import { Link } from 'react-router-dom';
import "./headerStyle.css";

interface HeaderProps {
  onLoginClick: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, isLoggedIn, onLogout }) => {
  return (
    <header>
      <nav>
        <div id="EHTitle">EducationHub</div>
        <ul>
          {!isLoggedIn ? (
            <li><a onClick={onLoginClick} href="#">Login</a></li>
          ) : (
            <>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/sessions">Sessions</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><a onClick={onLogout} href="#">Logout</a></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
