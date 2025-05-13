import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header_Footer/Header';
import Footer from './components/Header_Footer/Footer';
import SignUp from './components/SignUp_Login/Signup';
import Login from './components/SignUp_Login/Login';
import Dashboard from './components/Dashboard';
import Sessions from './components/Sessions';
import Profile from './components/Profile';


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
     {(!showSignUp && !showLogin) && (
        <Header onLoginClick={openLogin} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      )}

      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/sessions" element={isLoggedIn ? <Sessions /> : <Navigate to="/" />} />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/" />} />
      </Routes>
      {showSignUp && <SignUp onClose={closeOverlay} onLogin={openLogin} />}
      {showLogin && <Login onClose={closeOverlay} onLoginSuccess={handleLoginSuccess} onSignup={openSignUp} />}
      {(!showSignUp && !showLogin) && <Footer />}
    </Router>
  );
}

export default App;
