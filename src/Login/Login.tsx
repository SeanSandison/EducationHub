import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginStyle.css'

interface LoginProps {
  onClose: () => void;
  onSignup: () => void;
  onLoginSuccess: (type: 'student' | 'parent' | 'tutor' | 'admin') => void;
}

const Login: React.FC<LoginProps> = ({ onClose, onSignup, onLoginSuccess }) => {
  const navigate = useNavigate();

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');

    if (username === 'admin' && password === 'password') {
      onLoginSuccess('admin');
      onClose();
      navigate('/student-dashboard');
    } else if (username === "student" && password === "1") {
      onLoginSuccess('student');
      onClose();
      navigate('/student-dashboard');
    } else if (username === "parent" && password === "2") {
      onLoginSuccess('parent');
      onClose();
      navigate('/parent-dashboard');
    } else if (username === "tutor" && password === "3") {
      onLoginSuccess('tutor');
      onClose();
      navigate('/tutor-dashboard');
    } else {
      alert('Invalid credentials');
    }
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
