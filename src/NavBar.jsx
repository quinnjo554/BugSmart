import React from 'react';
import { navItems } from '.';
import bug from './asset/bug.jpg';
import dropDown from './asset/dropdown.png';
import close from './asset/close.png';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import SignIn from './Components/SignIn';

 export const NavBar = () => {
    const {loginWithRedirect, logout, user, isLoading}=useAuth0();
    const [isMenuDropped, toggleMenu] = useState(false);

  return (
    <nav className=" z-10 fixed w-full bg-gray-100 rounded-lg px-2 py-5 flex justify-between items-center shadow-xl shadow-black text-black">
      
            <img className='px-3' src={bug} width={"60px"} height={"20px"} alt="logo"/>
            <h1 className=" font-sans text-lg p-0 cursor-default">Bug Smart</h1>
        <ul className=' h-full w-98 list-none sm:flex hidden ml-16 justify-end items-center flex-1'>
        {navItems.map((nav, index)=>{
                if(index == 2){
                return <li className='text-white cursor-pointer bg-blue-600 hover:bg-blue-900 transition-all ease-in rounded-md px-3 p-2 mr-7' key={nav.id}>
                             <SignIn></SignIn>
                       </li>
                }
                return (
                  <li className='mr-10 ' key={nav.id}>{/**check if  */}
                    <a className='border-b-0 hover:border-b-4 rounded-sm pb-[1.75rem] transition-all ease-in border-zinc-600 hover:text-gray-400' href={nav.src}>{nav.content}</a>
                  </li>
                );
            })}
        </ul>
       
    <div className='sm:hidden flex flex-1 justify-end items-center'>
    <ul className='h-full w-98 list-none sm:flex ml-16 justify-end items-center flex-1'>
        <img src={isMenuDropped ? close : dropDown} className=" ml-48" width={"30px"} height={"30px"} alt="drop-down-icon"
        onClick={()=>toggleMenu((prev)=>!prev)}/>
        {navItems.map((nav, index)=>{
                if(isMenuDropped){
                 return <li id="mobile-li" className='relative right-7 rounded-md text-white bg-blue-600 mt-1 ml-44 self-center' key={nav.id}>
                    <a className='align-middle  ml-7' href={nav.src}>{nav.content}</a>
                </li>
                }
                return
        })}

        </ul>
    </div>

    </nav>
  )
}
export default NavBar;
