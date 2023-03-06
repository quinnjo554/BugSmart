import React from 'react'
import add from '../asset/add.png'
//get bugs
//put data in a object then map them to a li

function Widget(props) {
  //bug widget just show list of bugs and a status bar of how many are complete
  
  //get method for project table and convert to an object and place in the table
  //after you set up getBugs the li style is in index.css
  //map ul insted of li
  return (
    <div>
      <div className='relative top-10 left-10 flex flex-col h-max w-[700px] bg-sky-600 rounded-md shadow-lg shadow-gray-900 text-white'>
       <h1 className=' text-center text-lg'>{"Bugs "}</h1>
       <hr />
        <ul id='bugs' className='flex relative mt-5 ml-3 mb-10'>
          <li>nameofbug</li>
          <li>assignedTo</li>
          <li>importance</li>
          <li>status</li>
        </ul>
        <button className='relative left-[96%] bottom-0 h-min w-max' type="Button"><img src={add} width="22px" height="25px" alt="add" /></button>
      </div>
    </div>
  )
}

export default Widget