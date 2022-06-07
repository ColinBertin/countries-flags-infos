import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Countries } from './components/Countries/Countries';
import { Country } from './components/Country/Country';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

export const App = () => {
  const [ theme, setTheme ] = useState('light');

  const toggleTheme = () => {
    setTheme((state) => state === 'light' ? 'dark' : 'light' );
    console.log(theme)
  }

  return (
    <div className={`App ${theme}`} data-testid="app">
      < Header toggleTheme={toggleTheme} theme={theme} />
      <div className="body">
        < Router >
            < Routes >
              < Route path="/" element={< Countries theme={theme} />} />
              < Route path="/countries/:country" element={< Country theme={theme} />} />
            </Routes>
        </Router>
      </div>
    </div>
  );
}
