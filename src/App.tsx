import './App.css';
import { useState } from 'react';
import Header from './components/Header_Footer/Header';
import Footer from './components/Header_Footer/Footer';
import SignUp from './components/SignUp_Login/Signup';
import Login from './components/SignUp_Login/Login';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

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

  return (
    <>
      <div className={showSignUp || showLogin ? 'blurred-content' : ''}>
        <Header onLoginClick={openLogin} />
        <main>
          <h2>Welcome to the app!</h2>
          <p>Here is some content that will be blurred when the modal is open.</p>
        </main>
        <Footer />
      </div>

      {(showSignUp || showLogin) && (
        <div className="overlay">
          {showSignUp && <SignUp onClose={closeOverlay} onLogin={openLogin} />}
          {showLogin && <Login onClose={closeOverlay} onSignup={openSignUp} />}
        </div>
      )}
    </>
  );
}

export default App;
