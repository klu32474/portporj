import React from 'react'
import prof from "./photos/prof.jpeg"
import { FaGithub } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa6";
import bhanu from "./photos/bhanu.jpg"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Aboutme = () => {
  return (
    <div id="aboutme" className='flex flex-cols w-[100%] text-white h-[700px]'>
        <div className='w-[30%] h-[400px] border-5 border-white'>
            <img src={bhanu} className='rounded-[50%] absolute  top-[42em] left-[5rem] size-[400px]'></img>
        </div>
        <div className='w-[70%] h-[400px] my-[9rem] mx-[12rem] '>
            <h1 className="text-[3rem]  text-[#FEF3E2] px-[12rem]">More <span className=" text-[3rem] ">About Me</span></h1>
            <p className='text-white px-[12rem]'>
               <span>
I’m currently pursuing a BTech degree and have a strong passion for both sports and technology. Alongside my studies, I’m deeply interested in developing web applications, where I enjoy the challenge of creating innovative and user-friendly digital solutions.</span>  </p>
              
             
           

        </div>
        <div className=' absolute -bottom-[40rem]  mx-[40%]'>
            <header className='text-white text-[2rem]'>Contact Me Through</header>
            <h1 className='mx-[5rem] gap-3'>24/7 <span className='text-[#B9B4C7]'>Available</span></h1>
           
            <div className='flex flex-cols  -mx-[1rem]  gap-5 py-7 size-[20rem]'> {
                icons.map((d)=>( 
                    <div className='text-[#36a3e7] h-[4rem] w-[5rem] rounded-[50%]'> { d.icon}</div>
                ))
                }
            
            </div>
        </div>
    </div>
  )
}
const icons=[
    {
        icon:<FaGithub className='h-[2rem] w-[3rem]' />,
    },
    {
        icon:<MdOutlineAttachEmail className='h-[2rem] w-[3rem]' />,
    },
    {
        icon:<GrLinkedin className='h-[2rem] w-[3rem]'  />,
    },
    {
        icon:<FaInstagram className='h-[2rem] w-[3rem]' />,
    },
]
