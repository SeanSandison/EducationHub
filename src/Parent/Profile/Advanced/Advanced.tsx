import React from "react";
import "../../../Styles/AdvancedStyle.css";

const Advanced: React.FC = () => {
  return (
    <div className="info-container">
      <h1>Advanced Settings</h1>
      <ul className="advanced-list">
        <li className="advanced-container">
              <h2>Delete Account</h2>
              <button className="delete-button">Delete</button>
        </li>
      </ul>  
    </div>
  );
}
export default Advanced;