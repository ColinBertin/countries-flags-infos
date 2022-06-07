import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeButton.css';

export const ThemeButton = ({theme, toggleTheme}) => {
  return (
    <button onClick={toggleTheme} className={`themeButton ${theme}`}>
      {theme === 'light' ? <FiSun /> : <FiMoon />}
      {theme === 'light' ? 'Light mode' : 'Dark mode'}
    </button>
  )
}
