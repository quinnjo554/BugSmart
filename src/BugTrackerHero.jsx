import { get } from '.';
import React from 'react'
import { useEffect } from 'react'
import Card from './Components/Card';
import bug from './asset/bug.jpg';
import { ReactPropTypes } from 'react';

export const BugTrackerHero = ()=> {
useEffect(()=>{
      get();
},[]);
//from get data if users proj is empty then render a welcome message with a cool 3d render

  return (
    <div>
      <h1 className=' text-gray-700 fixed top-20 left-14'>Welcome Username</h1>
    <div className='z-["-1"] fixed left-14 top-32 w-fit h-max text-zinc-100 align-center'>
      <Card name="Bugs" count={5} img={bug}></Card>
      <Card name="Milestones" count={5} img={bug}></Card>
      <Card name="Overdue" count={0} img={bug}></Card>
      <Card name="DueSoon" count={5} img={bug}></Card>
    </div>
  </div>
  )
}
export default BugTrackerHero