import React from 'react'
import BugTrackerHero from './Components/BugTrackerHero'
import BugTrackerNav from './Components/BugTrackerNav'


export default function MainPage() {
  return (
    <div id='bugHero'>
        <BugTrackerNav/>
        <BugTrackerHero/>
    </div>
  )
}
