import React from 'react'
import Hero from './Hero'
import NavBar from '../NavBar'
import HeroInfoCard from './HeroInfoCard'

function LandingPage() {
  return (
    <div>
       <NavBar/>
        <Hero/> 
        <HeroInfoCard/>
       
    </div>
  )
}

export default LandingPage