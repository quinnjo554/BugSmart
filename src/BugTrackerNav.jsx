import React from 'react'
import { useState } from 'react'
import {navItemsLoggedIn} from '.'
import dropDown from './asset/dropdown.png';
import close from './asset/close.png';
import bug from './asset/bug.jpg';

export const BugTrackerNav =()=> {
  const [collapse,setCollapse] = useState(false);    
  return (
    <div>
        <nav id="horizantal" className=' z-1 fixed w-full bg-black px-2 py-8 flex justify-between items-center text-black'>
        
           <ul id='items' className='fixed left-36 flex flex-row'>
              {navItemsLoggedIn.map((nav,index)=>{
                return(
                  <li className="text-white mx-10 text-sm p-0 m" key={nav.id}>{nav.content}</li>
                )
              })} 
           </ul>
            
        </nav>
        <nav id="vertical"  className={`fixed h-full ${collapse ? "collapsed" : "expanded"} bg-white border-r-4 border-black  px-5 py-2 justify-between items-center fixed z-10 text-black collapseImg`}>
          <img id='logo' src={bug} alt="logo" width="60px" height="20px" />
          <img src={collapse ? close : dropDown} onClick={()=>setCollapse((prev)=>!prev)} className=" inline-block z-40 w-8 h-8 fixed top-5 left-1"></img>
            <ul id='vertItems' className='fixed top-24 left-2'>
              {navItemsLoggedIn.map((nav,index)=>{
                if(collapse){
                return(
                  <li className=" text-zinc-200 flex rounded-md  bg-sky-700 self-center mt-3 p-1 w-36" key={nav.id}><img src={nav.img}></img>{nav.content}</li>
                )}
               
              })}
              </ul>
        </nav>
    </div>
  )
}
export default BugTrackerNav