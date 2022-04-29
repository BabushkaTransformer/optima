import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../hooks/useDarkMode.js';
import './style.css';

export const HomePage = () => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  return (
    <div>
      <Link to='/posts'>asdf</Link>
      <Link to='/lang'>lang</Link>
      <div className={isDarkMode ? 'dark' : 'light'}>asdf</div>
      <p>Current theme: {isDarkMode ? 'dark' : 'light'}</p>
      <button onClick={toggle}>Toggle</button>
      <button onClick={enable}>Enable</button>
      <button onClick={disable}>Disable</button>
    </div>
  );
};
