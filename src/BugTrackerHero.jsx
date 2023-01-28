import { get } from '.';
import React from 'react'
import { useEffect } from 'react'



export const BugTrackerHero = ()=> {
useEffect(()=>{
     get();
},[]);


  return (
    <div className='w-full text-zinc-600'>BugTrackerHero</div>
  )
}
export default BugTrackerHero