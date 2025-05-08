import React from 'react';
import './loginStyle.css';

interface LoginProps {
  onClose: () => void;
  onSignup: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose, onSignup }) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Login submitted');
    // handle actual login logic here
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <span className="close-btn" onClick={onClose}>&times;</span>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>
      </form>
      <a onClick={onSignup}>No Account? Sign Up Here</a>
    </div>
  );
};

export default Login;
