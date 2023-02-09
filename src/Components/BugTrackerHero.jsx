import { get } from '..';
import { postUser } from '..';
import React from 'react'
import { useEffect } from 'react'
import Card from './Card';
import bug from '/Users/quinn/Code Proj/Web/BugTrackerWebsite/bugsmart/src/asset/bug.jpg';
import { ReactPropTypes } from 'react';
import Profile from './Profile';
import Widget from './BugWidget';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
export const BugTrackerHero = ()=> {
const {user,isAuthenticated} = useAuth0();
const [isUserPosted, setIsPosted] = useState(false);

useEffect(()=>{
     // get();
},[]);

 const currUser ={};
//from get data if users proj is empty then render a welcome message with a cool 3d render


const handleSubmit=()=>{
  if(isAuthenticated && !isUserPosted){
   //doesn't work: will work for proj and milestones
      postUser(user.name,user.name);
      setIsPosted(true);
  }
}

  return (


    <div>
      <form className=' w-24 h-11 fixed left-80 top-96'>
           <input type="submit" onSubmit={handleSubmit} value="Submit" />
      </form>
    <div className='z-["-1"] fixed left-14 top-32 w-fit h-max text-zinc-100 align-center'>
      <Card name="Bugs" count={5} img={bug}></Card>
      <Card name="Milestones" count={5} img={bug}></Card>
      <Card name="Overdue" count={0} img={bug}></Card>
      <Card name="DueSoon" count={5} img={bug}></Card>
      <Widget></Widget>
      <button className='fixed left-56' type="Button" onClick={handleSubmit}>Post</button>
    </div>
  </div>
  )
}

export default BugTrackerHero