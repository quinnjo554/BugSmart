import { get } from '.';
import React from 'react'
import { useEffect } from 'react'
import Card from './Components/Card';
import bug from './asset/bug.jpg';

export const BugTrackerHero = ()=> {
useEffect(()=>{
     get();
},[]);


  return (
    <div className='z-["-1"] fixed left-14 top-32 w-fit h-max text-zinc-100 align-center'>
      <Card name="Bugs" count={5} img={bug}></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  )
}
export default BugTrackerHero