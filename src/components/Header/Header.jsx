import React from 'react';
import { ThemeButton } from './ThemeButton/ThemeButton';

import './Header.css';

export const Header = ({toggleTheme, theme}) => {
  return (
    <header className={theme}>
      <h1>Where in the world?</h1>
      < ThemeButton toggleTheme={toggleTheme} theme={theme} />
    </header>
  )
}
