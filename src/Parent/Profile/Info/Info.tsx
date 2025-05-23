import React from "react";
import '../../../Styles/InfoStyle.css';

const Info: React.FC = () => {
  return (
    <div className="info-container">
      <h1>Profile Information</h1>
      <div className="pic-username">
        <div className="pic">
          Picture
        </div>
        <div className="username">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value="JohnDoe" readOnly />
        </div>
      </div>
      <div className="info-item">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value="johndoe@example.com" readOnly />
      </div>
      <div className="info-item">
        <label htmlFor="phone">Phone:</label>
        <input type="phone" id="phone" value="123-456-7890" readOnly />
      </div>
    </div>
  );
}
export default Info;