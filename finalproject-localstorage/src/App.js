import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
    const savedTheme = sessionStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    sessionStorage.setItem('theme', newTheme);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div className={theme}>
      <div className="main">
        <div className="container">
          <img src='https://q-xx.bstatic.com/xdata/images/hotel/840x460/50549263.jpg?k=eb2368aacd668381fa84ac7dcb505d31769c097e0fbef7c08921bb807de1f45a&o=' alt='Prama Sanur Beach Bali Hotel' />
          <h1>
            {language === 'en' ? 'Prama Sanur Beach Bali Hotel' : language === 'hi' ? 'प्रमा सनूर बीच बाली होटल' : 'பிரமா சனூர் பீச் பாலி ஹோட்டல்'}
          </h1>
          <button onClick={toggleTheme}>
            {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
          </button>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('hi')}>Hindi</button>
          <button onClick={() => changeLanguage('ta')}>Tamil</button>
        </div>
      </div>
    </div>
  );
};

export default App;
