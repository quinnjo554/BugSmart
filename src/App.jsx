import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import BugTrackerHero from './BugTrackerHero';
import { BugTrackerNav } from './BugTrackerNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import MainPage from './MainPage';

export const App = () => {
  return (
    <div className='mainContainer'>
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
        </Route>
        <Route path="/MainPage" element={<MainPage />}>
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
