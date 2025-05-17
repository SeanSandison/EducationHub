import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SignUp from './SignUp/Signup';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Sessions from './Sessions/Sessions';
import Profile from './Profile/Profile';
import Message from './Message/Message';
import './AppStyle.css';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openSignUp = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const openLogin = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const closeOverlay = () => {
    setShowSignUp(false);
    setShowLogin(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    closeOverlay();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app-wrapper">
        <div className={`content-container ${showLogin || showSignUp ? 'blurred' : ''}`}>
          <Header onLoginClick={openLogin} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<div>Home Page</div>} />
              <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
              <Route path="/sessions" element={isLoggedIn ? <Sessions /> : <Navigate to="/" />} />
              <Route path="/message" element={isLoggedIn ? <Message /> : <Navigate to="/" />} />
              <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>

        {/* Modal */}
        {showSignUp && (
          <div className="overlay">
            <SignUp onClose={closeOverlay} onLogin={openLogin} />
          </div>
        )}
        {showLogin && (
          <div className="overlay">
            <Login onClose={closeOverlay} onLoginSuccess={handleLoginSuccess} onSignup={openSignUp} />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
