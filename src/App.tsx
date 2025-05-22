import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SignUp from './SignUp/Signup';
import Login from './Login/Login';
import StuTutorBookInfo from './Student/TutorBookInfo/TutorBookInfo';
import StuBookSession from './Student/BookSession/BookSession';
import StuDashboard from './Student/Dashboard/StuDashboard';
import StuSessions from './Student/Sessions/Sessions';
import StuProfile from './Student/Profile/Profile';
import StuMessage from './Student/Message/Message';
import ParDashboard from './Parent/Dashboard/ParDashboard';
import ParTutorBookInfo from './Parent/TutorBookInfo/TutorBookInfo';
import ParBookSession from './Parent/BookSession/BookSession';
import ParFamily from './Parent/Family/Family';
import ParSessions from './Parent/Sessions/Sessions';
import ParProfile from './Parent/Profile/Profile';
import ParMessage from './Parent/Message/Message';
import ProDashboard from './Provider/Dashboard/ProDashboard';
import ProStudents from './Provider/Students/ProStudents';
import ProSessions from './Provider/Sessions/ProSessions';
import ProAnalytics from './Provider/Analytics/ProAnalytics';
import ProProfile from './Provider/Profile/ProProfile';
import ProMessage from './Provider/Message/ProMessage';
import './AppStyle.css';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginType, setLoginType] = useState<'student' | 'parent' | 'provider' | 'admin' | undefined>(undefined);

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

  const handleLoginSuccess = (loginType: 'student' | 'parent' | 'provider' | 'admin') => {
    setIsLoggedIn(true);
    setLoginType(loginType);
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
              <Route path="/student-book-session" element={isLoggedIn ? <StuBookSession /> : <Navigate to="/" />} />
              <Route path="/student-tutor-book-info/:tutorId" element={isLoggedIn ? <StuTutorBookInfo /> : <Navigate to="/" />} />
              <Route path="/student-sessions" element={isLoggedIn ? <StuSessions /> : <Navigate to="/" />} />
              <Route path="/student-message" element={isLoggedIn ? <StuMessage /> : <Navigate to="/" />} />
              <Route path="/student-profile" element={isLoggedIn ? <StuProfile /> : <Navigate to="/" />} />
              <Route path="/parent-dashboard" element={isLoggedIn ? <ParDashboard /> : <Navigate to="/" />} />
              <Route path="/parent-tutor-book-info/:tutorId" element={isLoggedIn ? <ParTutorBookInfo /> : <Navigate to="/" />} />
              <Route path="/parent-book-session" element={isLoggedIn ? <ParBookSession /> : <Navigate to="/" />} />
              <Route path="/parent-family" element={isLoggedIn ? <ParFamily /> : <Navigate to="/" />} />
              <Route path="/parent-sessions" element={isLoggedIn ? <ParSessions /> : <Navigate to="/" />} />
              <Route path="/parent-message" element={isLoggedIn ? <ParMessage /> : <Navigate to="/" />} />
              <Route path="/parent-profile" element={isLoggedIn ? <ParProfile /> : <Navigate to="/" />} />
              <Route path="/provider-dashboard" element={isLoggedIn ? <ProDashboard /> : <Navigate to="/" />} />
              <Route path="/provider-sessions" element={isLoggedIn ? <ProSessions /> : <Navigate to="/" />} />
              <Route path="/provider-analytics" element={isLoggedIn ? <ProAnalytics /> : <Navigate to="/" />} />
              <Route path="/provider-students" element={isLoggedIn ? <ProStudents /> : <Navigate to="/" />} />
              <Route path="/provider-message" element={isLoggedIn ? <ProMessage /> : <Navigate to="/" />} />
              <Route path="/provider-profile" element={isLoggedIn ? <ProProfile /> : <Navigate to="/" />} />
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
