import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SignUp from './SignUp/Signup';
import Login from './Login/Login';
import StuDashboard from './Student/Dashboard/StuDashboard';
import StuSessions from './Student/Sessions/Sessions';
import StuProfile from './Student/Profile/Profile';
import StuMessage from './Student/Message/Message';
import ParDashboard from './Parent/Dashboard/ParDashboard';
import ParSessions from './Parent/Sessions/Sessions';
import ParProfile from './Parent/Profile/Profile';
import ParMessage from './Parent/Message/Message';
import './AppStyle.css';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginType, setLoginType] = useState<'student' | 'parent' | 'tutor' | 'admin' | undefined>(undefined);

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

  const handleLoginSuccess = (type: 'student' | 'parent' | 'tutor' | 'admin') => {
    setIsLoggedIn(true);
    setLoginType(type);
    closeOverlay();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginType(undefined);
  };

  return (
    <Router>
      <div className={`app-wrapper ${loginType ? 'app-wrapper-' +loginType : ''}`}>
        <div className={`content-container ${showLogin || showSignUp ? 'blurred' : ''}`}>
          <Header
            onLoginClick={openLogin}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
            loginType={loginType}
          />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<div>Home Page</div>} />
              <Route path="/student-dashboard" element={isLoggedIn ? <StuDashboard /> : <Navigate to="/" />} />
              <Route path="/student-sessions" element={isLoggedIn ? <StuSessions /> : <Navigate to="/" />} />
              <Route path="/student-message" element={isLoggedIn ? <StuMessage /> : <Navigate to="/" />} />
              <Route path="/student-profile" element={isLoggedIn ? <StuProfile /> : <Navigate to="/" />} />
              <Route path="/parent-dashboard" element={isLoggedIn ? <ParDashboard /> : <Navigate to="/" />} />
              <Route path="/parent-sessions" element={isLoggedIn ? <ParSessions /> : <Navigate to="/" />} />
              <Route path="/parent-message" element={isLoggedIn ? <ParMessage /> : <Navigate to="/" />} />
              <Route path="/parent-profile" element={isLoggedIn ? <ParProfile /> : <Navigate to="/" />} />
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
