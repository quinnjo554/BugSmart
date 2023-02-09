import React from 'react'
import hero from '../asset/hero.jpg'
import { TypeAnimation } from 'react-type-animation'; // Use type animation for bugs

export const Hero = () => {
  return (
    <div id='hero' className='w-full font-sans'>
        <div className="flex w-max pt-96">
        <div id='mainContent' className='invisible text-lg text-white md:visible lg:visible justify-center pl-32 align-middle w-[800px]'>

            {/**have card do a fade in animation onload*/}
            <h1 className='pb-6 font-sans text-5xl'><TypeAnimation sequence={['Bug Smart', 2000, 'The best way to debug your project',]} wrapper="div" cursor={false}repeat={0} /></h1>
            <p className='text-xl pb-9'>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Enim velit doloremque alias architecto nemo labore 
            praesentium dolorem dicta reprehenderit?</p>
             <a><button className='githubB shadow-black shadow-lg bg-blue-600 p-3 rounded-md hover:shadow-transparent hover:bg-blue-900 transition-all ease-in'>sign up for free</button></a>
          </div>
        </div>


        <div className='sm:hidden w-32 mt-[-18rem]' id='mobile-hero'>
          <div className=' bg-contain object-contain w-10'>
          <div className="w-max pl-24">
          <div className=' justify-center align-middle w-64'>
            {/**have card do a fade in animation onload*/}
            <h1 className='pb-5 text-2xl font-sans text-white'>The best way to debug in your project</h1>
            <p className=' pb-5 text-lg'>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Enim velit doloremque alias architecto nemo labore 
            praesentium dolorem dicta reprehenderit?</p>
            <a><button className=' shadow-black shadow-lg bg-blue-600 p-3 rounded-md hover:shadow-transparent'>view on github</button></a>
          </div>
        </div>
          </div>
        </div>
    </div>


  )
}
export default Hero;