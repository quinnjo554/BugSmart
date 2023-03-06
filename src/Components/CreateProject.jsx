import React from 'react'
import add from '../asset/add.png'

//use UseRef because you dont need to rerender only need value on submit

function CreateProject() {
  return (
    <div className='z-["-1"] fixed top-32 w-fit h-max text-zinc-100 align-center'>
        <div className='relative top-10  flex flex-col h-[50vh] w-screen bg-sky-600 rounded-md shadow-lg shadow-gray-900 text-white'>
            <h1 className=' text-center text-lg'>{"Make a Project!! "}</h1>
            <hr />
            <form action="submit">
                <h1>Enter Name</h1>
                <input className='active:no-underline rounded-md relative flex justify-center' type="text" name="projectName" id="projectName" />
            </form>
            <button className='relative left-[60%] bottom-0 z-10' type="Button"><img src={add} width="50px" height="50px" alt="add" /></button>
      </div>
    </div>
  )
}

export default CreateProject