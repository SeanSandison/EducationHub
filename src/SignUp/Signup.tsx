import React from 'react';
import './SignUpStyle.css'

interface SignUpProps {
    onClose: () => void;
    onLogin: () => void;
}

const SignUp: React.FC<SignUpProps> = ({onClose, onLogin}) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="signup-box">
      <h2>Sign Up</h2>
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="passwordRepeat">Repeat Password</label>
        <input type="password" id="passwordRepeat" name="passwordRepeat" required />

        <fieldset id="actType">
          <legend id="actTypeTitle">Account Type</legend>
          <label>
            <input type="radio" name="accountType" value="Student" required /> Student
          </label>
          <label>
            <input type="radio" name="accountType" value="Parent" /> Parent
          </label>
          <label>
            <input type="radio" name="accountType" value="Tutor" /> Tutor
          </label>
        </fieldset>

        <button type="submit">Create Account</button>
      </form>
      <a onClick={onLogin} className='login'>Already Have An Account? Login Here</a>
    </div>
  );
};

export default SignUp;
