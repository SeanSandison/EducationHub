import React from "react";
import "../../../Styles/UpdateInfoStyle.css"

const UpdateInfo: React.FC = () => {
  return (
    <div className="info-container">
      <h1>Update Info</h1>
      <ul className="update-list">
        <li className="update-container">
              <h2>Username</h2>
              <button className="update-button">Update</button>
        </li>
        <li className="update-container">
              <h2>Name</h2>
              <button className="update-button">Update</button>
        </li>
        <li className="update-container">
              <h2>Email</h2>
              <button className="update-button">Update</button>
        </li>
        <li className="update-container">
              <h2>Phone</h2>
              <button className="update-button">Update</button>
        </li>
      </ul>
    </div>
  );
}
export default UpdateInfo;