import React from 'react'
import { useState } from 'react'
import {navItemsLoggedIn} from '..'
import dropDown from '/Users/quinn/Code Proj/Web/BugTrackerWebsite/bugsmart/src/asset/dropdown.png';
import close from '../asset/close.png';
import bug from '../asset/bug.jpg';
import SignOut from './SignOut';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from '../NavBar';
export const BugTrackerNav =()=> {
  const [collapse,setCollapse] = useState(false); 
  const { user, isAuthenticated, isLoading } = useAuth0();

  
  if(isLoading){
    return (
      <div>...Loading</div>
    )
  }
  if(isAuthenticated){ //and have a project
   //make the button disaper after they submit a project 
    
  return (
    <div>
        <nav id="horizantal" className=' z-1 fixed w-full bg-white px-2 py-9 rounded-md flex justify-between items-center shadow-md shadow-black text-black'> 
           <ul id='items' className='fixed right-10 flex flex-row'>
             <li className='text-black text-lg fixed left-24 top-5'>Welcome Back {user.name}</li>
              <li><SignOut></SignOut></li>
           </ul>    
        </nav>
        <nav id="vertical"  className={`fixed h-full ${collapse ? "collapsed" : "expanded"} bg-white border-white justify-between items-center fixed z-10 text-black collapseImg`}>
          <img id='logo' src={bug} alt="logo" width="60px" height="20px" />
          <img src={collapse ? close : dropDown} onClick={()=>setCollapse((prev)=>!prev)} className=" inline-block z-40 w-8 h-8 fixed top-5 left-1"></img>
            <ul id='vertItems' className='fixed top-24 left-2'>
             
              {navItemsLoggedIn.map((nav,index)=>{
                if(collapse){
                  if(index == 6){
                    return(
                      <li className=" text-zinc-200 flex rounded-md  bg-sky-700 self-center mt-3 p-1 w-36" key={nav.id}><img className='z-1  w-6 rounded-full h-6 mr-2' src={user.picture}></img>{nav.content}</li>
                    )
                  }
                  return(
                  <li className=" text-zinc-200 flex rounded-md  bg-sky-700 self-center mt-3 p-1 w-36" key={nav.id}><img src={nav.img}></img>{nav.content}</li>
                  )
              } 
              })}
              </ul>
        </nav>
    </div>
  )
}
}
export default BugTrackerNav