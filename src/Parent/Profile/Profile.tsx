import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import Info from './Info/Info';
import UpdateInfo from './Update/UpdateInfo';
import Payment from './Payment/Payment';
import Advanced from './Advanced/Advanced';
import Family from './Family/Family';
import '../../Styles/ProfileStyle.css';

const Profile: React.FC = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [showUpdateInfo, setShowUpdateInfo] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showFamily, setShowFamily] = useState(false);

  // Handlers to show only one section at a time
  const handleInfoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowInfo(true);
    setShowUpdateInfo(false);
    setShowPayment(false);
    setShowAdvanced(false);
    setShowFamily(false);
  };

  const handleUpdateInfoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowInfo(false);
    setShowUpdateInfo(true);
    setShowPayment(false);
    setShowAdvanced(false);
    setShowFamily(false);
  };

  const handlePaymentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowInfo(false);
    setShowUpdateInfo(false);
    setShowPayment(true);
    setShowAdvanced(false);
    setShowFamily(false);
  };

  const handleAdvancedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowInfo(false);
    setShowUpdateInfo(false);
    setShowPayment(false);
    setShowAdvanced(true);
    setShowFamily(false);
  };

  const handleFamilyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowInfo(false);
    setShowUpdateInfo(false);
    setShowPayment(false);
    setShowAdvanced(false);
    setShowFamily(true);
  };

  return (
    <main>
      <div className='profile-header'>
        <ProfileHeader
          onInfoClick={handleInfoClick}
          onUpdateInfoClick={handleUpdateInfoClick}
          onPaymentClick={handlePaymentClick}
          onAdvancedClick={handleAdvancedClick}
          onFamilyClick={handleFamilyClick}
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
        {showFamily && (
          <div className='profile-family'>
            <Family />
          </div>
        )}
      </div>
    </main>
  );
};

export default Profile;
