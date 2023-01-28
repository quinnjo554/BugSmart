import React from 'react'
import { useState } from 'react'

export const BugTrackerNav =()=> {
  const [collapse,setCollapse] = useState(false);    


  return (
    <div>
        <nav id="horizantal" className='z-10 fixed w-full bg-black px-2 py-8 flex justify-between items-center text-black'>

        </nav>
        <nav id="vertical" className='z-10 fixed h-full w-40 bg-gray-600 px-5 py-2 flex justify-between items-center text-black'>

        </nav>
    </div>
  )
}
export default BugTrackerNav