import React from "react";
import '../../Styles/ProfileHeaderStyle.css'

interface ProfileHeaderProps {
    onInfoClick: (e: React.MouseEvent) => void;
    onUpdateInfoClick: (e: React.MouseEvent) => void;
    onPaymentClick: (e: React.MouseEvent) => void;
    onAdvancedClick: (e: React.MouseEvent) => void;
    onFamilyClick: (e: React.MouseEvent) => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({onInfoClick,onUpdateInfoClick,onPaymentClick,onAdvancedClick,onFamilyClick}) => {
  return (
    <div>
      <ul>
        <li>
          <a href="/profile" onClick={onInfoClick}>Profile</a>
        </li>
        <li>
          <a href="/profile/update" onClick={onUpdateInfoClick}>Update Info</a>
        </li>

        <li>
          <a href="/profile/payment" onClick={onPaymentClick}>Payment</a>
        </li>
        <li>
          <a href="/profile/family" onClick={onFamilyClick}>Family</a>
        </li>
        <li>
          <a href="/profile/advanced" onClick={onAdvancedClick}>Advanced Settings</a>
        </li>
      </ul>
    </div>
  );
}
export default ProfileHeader;