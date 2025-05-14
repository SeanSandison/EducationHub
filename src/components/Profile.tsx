import React, { useState } from 'react';
import ProfileHeader from './profile_components/ProfileHeader';
import Info from './profile_components/Info';
import UpdateInfo from './profile_components/UpdateInfo';
import Payment from './profile_components/Payment';
import Advanced from './profile_components/Advanced';
import './Profile.css';

const Profile: React.FC = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [showUpdateInfo, setShowUpdateInfo] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Handlers to show only one section at a time
  const handleInfoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowInfo(true);
    setShowUpdateInfo(false);
    setShowPayment(false);
    setShowAdvanced(false);
  };

  const handleUpdateInfoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowInfo(false);
    setShowUpdateInfo(true);
    setShowPayment(false);
    setShowAdvanced(false);
  };

  const handlePaymentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowInfo(false);
    setShowUpdateInfo(false);
    setShowPayment(true);
    setShowAdvanced(false);
  };

  const handleAdvancedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowInfo(false);
    setShowUpdateInfo(false);
    setShowPayment(false);
    setShowAdvanced(true);
  };

  return (
    <main>
      <div className='profile-header'>
        <ProfileHeader
          onInfoClick={handleInfoClick}
          onUpdateInfoClick={handleUpdateInfoClick}
          onPaymentClick={handlePaymentClick}
          onAdvancedClick={handleAdvancedClick}
        />
      </div>
      <div className='profile-wrapper'>
        {showInfo && (
          <div className='profile-info'>
            <Info />
          </div>
        )}
        {showUpdateInfo && (
          <div className='profile-update'>
            <UpdateInfo />
          </div>
        )}
        {showPayment && (
          <div className='profile-payment'>
            <Payment />
          </div>
        )}
        {showAdvanced && (
          <div className='profile-advanced'>
            <Advanced />
          </div>
        )}
      </div>
    </main>
  );
};

export default Profile;
