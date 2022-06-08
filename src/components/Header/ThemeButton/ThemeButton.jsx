import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeButton.css';

export const ThemeButton = ({theme, toggleTheme}) => {
  return (
    <button onClick={toggleTheme} className={`themeButton ${theme}`}>
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  )
}
