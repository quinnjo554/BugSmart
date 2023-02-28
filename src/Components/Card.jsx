import React from 'react'
import { ReactPropTypes } from 'react'
function Card({name, count, img}) {
  return (
    <div id='container' className='w-max inline-block h-max'>
        <div id='card' className=' flex relative w-48 h-max sm:w-full'>
            <div id='content' className=' flex ml-10 mb-2 mr-4 bg-sky-600 rounded-md h-16 w-96'>
                <img className='invisible w-11 h-11 ml-0 sm:ml-3 sm:visible  flex justify-start self-center relative' src={img} alt={name}/>
                <p className='w-11 h-11 flex justify-center self-center ml-0 sm:ml-28'> {name + ": " + count}</p>
            </div>
        </div>
    </div>



  )
}




export default Card