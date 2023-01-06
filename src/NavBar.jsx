import React from 'react';
import { navItems } from '.';
import bug from './asset/bug.jpg';
import dropDown from './asset/dropdown.png';
import close from './asset/close.png';
import { useState } from 'react';

 export const NavBar = () => {

    const [isMenuDropped, toggleMenu] = useState(false);

  return (
    <nav className=" z-10 fixed w-full bg-gray-100 px-2 py-5 flex justify-between items-center text-black">
      
            <img className='px-3' src={bug} width={"60px"} height={"20px"} alt="logo"/>
            <h1 className=" font-sans text-lg p-0 cursor-default">Bug Smart</h1>
        <ul className=' h-full w-98 list-none sm:flex hidden ml-16 justify-end items-center flex-1'>
        {navItems.map((nav, index)=>{
                if(index == 2 || index == 3){
                return <li className='text-white cursor-pointer bg-blue-600 hover:bg-blue-900 transition-all ease-in rounded-md px-3 p-2 mr-7' key={nav.id}>
                             <a className='' href={nav.src}>{nav.content}</a>
                       </li>
                }
                return <li className='mr-10' key={nav.id}>{/**check if  */}
                <a className='hover:text-gray-400' href={nav.src}>{nav.content}</a>
            </li>
            })}
        </ul>
       
    <div className='sm:hidden flex flex-1 justify-end items-center'>
    <ul className='h-full w-98 list-none sm:flex ml-16 justify-end items-center flex-1'>
        <img src={isMenuDropped ? close : dropDown} className=" ml-48" width={"30px"} height={"30px"} alt="drop-down-icon"
        onClick={()=>toggleMenu((prev)=>!prev)}/>
        {navItems.map((nav, index)=>{
                
                if(isMenuDropped){
                 return <li id="mobile-li" className='relative right-7 rounded-md bg-blue-600 mt-1 ml-44 self-center' key={nav.id}>
                    <a className='align-middle  ml-6' href={nav.src}>{nav.content}</a>
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
