import React, { useState } from 'react';
import './App.css';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const Signup = ({ signupData, setSignupData }) => {
  const [signupForm, setSignupForm] = useState({ email: '', password: '' });
  const [signupErrors, setSignupErrors] = useState({});

  const handleSignupBlur = (e) => {
    const { name, value } = e.target;
    let errors = { ...signupErrors };

    if (name === 'email') {
      errors.email = !emailRegex.test(value) ? 'Invalid email address' : '';
    } else if (name === 'password') {
      errors.password = !passwordRegex.test(value)
        ? 'Password must be at least 8 characters long and contain at least one letter and one number'
        : '';
    }

    setSignupErrors(errors);
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({ ...signupForm, [name]: value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!signupErrors.email && !signupErrors.password) {
      setSignupData([...signupData, signupForm]);
      setSignupForm({ email: '', password: '' });
      alert('Signup successful!');
    } else {
      alert('Please fix the errors before submitting');
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignupSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={signupForm.email}
            onChange={handleSignupChange}
            onBlur={handleSignupBlur}
            className={signupErrors.email ? 'error' : ''}
          />
          {signupErrors.email && <span className="error-message">{signupErrors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={signupForm.password}
            onChange={handleSignupChange}
            onBlur={handleSignupBlur}
            className={signupErrors.password ? 'error' : ''}
          />
          {signupErrors.password && <span className="error-message">{signupErrors.password}</span>}
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
