import React, { useState } from 'react';
import './App.css';

const Login = ({ signupData }) => {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loginErrors, setLoginErrors] = useState({});

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const user = signupData.find(
      (user) => user.email === loginForm.email && user.password === loginForm.password
    );
    if (user) {
      alert('Login successful!');
    } else {
      setLoginErrors({ form: 'Invalid email or password' });
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleLoginChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleLoginChange}
          />
        </div>
        <button type="submit">Login</button>
        {loginErrors.form && <span className="error-message">{loginErrors.form}</span>}
      </form>
    </div>
  );
};

export default Login;
