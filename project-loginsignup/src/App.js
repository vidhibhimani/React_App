import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import './App.css';

const App = () => {
  const [signupData, setSignupData] = useState([]);

  return (
    <div className="App">
      <nav>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/signup" element={<Signup signupData={signupData} setSignupData={setSignupData} />} />
        <Route path="/login" element={<Login signupData={signupData} />} />
      </Routes>
    </div>
  );
};

export default App;
