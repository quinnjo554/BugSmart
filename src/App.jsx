import React from 'react';
import NavBar from './NavBar';
import Hero from './LandingComponents/Hero';
import BugTrackerHero from './Components/BugTrackerHero';
import { BugTrackerNav } from './Components/BugTrackerNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingComponents/LandingPage';
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
