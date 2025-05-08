import React from "react";
import "./headerStyle.css";

interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({onLoginClick}) => {
  return (
    <header>
      <nav>
        <a id="EHTitle" href="index.html">EducationHub</a>
        <ul>
          <li><a onClick={onLoginClick}>Login/Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
