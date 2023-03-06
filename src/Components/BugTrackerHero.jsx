
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
import { getUserByEmail } from '..';
import { getProjByUserId } from '..';
import CreateProject from './CreateProject';

export const BugTrackerHero = ()=> {
//some can def be just refs instead
const {user,isAuthenticated} = useAuth0();
const [isUserPosted, setIsPosted] = useState(false);
const [isNewUser, setisNewUser] = useState(false);
const [currentProj, setCurrentProj] = useState();
//For the projectTable userId is always the person who is currently signed in


//from get data if users proj is empty then render a welcome message with a cool 3d render


const handlePostUser=()=>{
  if(isAuthenticated && !isUserPosted){
   //doesn't work: will work for proj and milestones
      postUser(user.name,user.name);
      setIsPosted(true);
  }
}

 async function handleLoadingProj(id){
  const projects = await getProjByUserId(id);
      if (projects && projects.length > 0) {
        setCurrentProj(projects[0].name);
      }
      else{
        setisNewUser(true)
      }
}

 async function handleGetProj(){
  if(isAuthenticated){
    const data = await getUserByEmail(user.email.toString());
    if(data){
      const userid =data.id;
      await handleLoadingProj(userid);
      setLoading(false);
    }
  }
}
useEffect(()=>{
   handlePostUser();
},[]);

useEffect(()=>{
  handleGetProj();
},[isAuthenticated]);

//this may be wrong idk
if(isNewUser){
  return <CreateProject/>
}

  return (
    <div>
     <h1 className='fixed left-0 top-[5rem] rounded-md shadow-md shadow-black w-screen h-16 grid justify-center content-center bg-sky-600'>{currentProj}</h1>
    <div className='z-["-1"] fixed left-14 top-40 w-fit h-max text-zinc-100 align-center'>
      <Card name="Bugs" count={5} img={bug}></Card>
      <Card name="Milestones" count={5} img={bug}></Card>
      <Card name="Overdue" count={0} img={bug}></Card>
      <Card name="DueSoon" count={5} img={bug}></Card>
      <Widget></Widget>
    </div>
    
  </div>
  )
}

export default BugTrackerHero