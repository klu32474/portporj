import React from 'react'
import proj from './photos/proj1.png'
import { FaGithub } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
export const Projects = () => {
  return (
    <div className='flex flex-rows  w-[100%]'>
           <div className=' mx-[8rem]'><header className=' absolute left-[40rem] justify-center text-white text-[3rem]'>My<span className=' text-yellow-50 px-2 text-[3rem] '>Projects</span> </header></div> 
        <div className='h-[25rem] w-[20rem]  mx-[5rem] my-[10rem] bg-[#021526]  shadow-[#E2E2B6]  hover:scale-110 shadow-lg   transition-transform duration-200 '>

            <img src={proj} className='opacity-70'></img>
            <h1 className='text-white px-[6rem] text-[1.5rem] '>Student Erp</h1>
            <p className='text-white font-sans'>
            The project is a Student ERP system built using MERN stack technologies. It features functionalities such as login, registration, contact us, and various ERP modules.
            </p>
          <span> <button className='text-white border-2  border-white w-[5.5rem] rounded h-[2rem] my-6 mx-[2.5rem]  justify-center'><span><FaGithub className=' mx-3 size-4  animate-pulse' />  <a href="https://bhanuprakash32470.github.io/htmlproject32470/index.html" className=' animate-pulse absolute  -mx-3 -my-5  '>Github</a> </span></button>
            <button className=' text-white border-2 w-[5.5rem] h-[2rem] border-white rounded left-[6rem] '><span><FaPlayCircle className='mx-3 size-4 animate-pulse'/><a href="https://bhanuprakash32470.github.io/htmlproject32470/index.html" className='animate-pulse absolute  -mx-3 -my-5 '>Demo</a> </span> </button>
            </span> 
        </div>
       
        <div className='h-[25rem] w-[20rem]  mx-[5rem] my-[10rem] bg-[#021526]  shadow-[#E2E2B6]  hover:scale-110 shadow-lg   transition-transform duration-200 '>

            <img src={proj} className='opacity-70'></img>
            <h1 className='text-white px-[6rem] text-[1.5rem] '>Student Erp</h1>
            <p className='text-white font-sans'>
            The project is a Student ERP system built using MERN stack technologies.
             It features functionalities such as login, registration, contact us, and various ERP modules.
            </p>
           <span> <button className='text-white border-2  border-white my-6 mx-[3rem] w-[5.5rem] rounded h-[2rem] justify-center'><span><FaGithub className=' mx-3 size-4  animate-pulse' />  <a href="https://bhanuprakash32470.github.io/htmlproject32470/index.html" className=' animate-pulse absolute  -mx-3 -my-5  '>Github</a> </span></button>
            <button className=' text-white border-2 w-[5.5rem] h-[2rem] border-white rounded left-[6rem] '><span><FaPlayCircle className='mx-3 size-4 animate-pulse'/><a href="https://bhanuprakash32470.github.io/javascript/" className='animate-pulse absolute -my-5 -mx-3  '>Demo</a> </span> </button></span>
        </div>

        
        

    </div>
  )
}
