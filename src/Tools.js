import React from 'react'
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiWindows } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
export const Tools = () => {
  return (
    <div className='flex flex-col'>
         <div className=' mx-[8rem]'><header className=' absolute left-[40rem] justify-center text-white text-[3rem]'>Skill<span className=' text-yellow-500 px-2 text-[3rem] '>Set</span> </header></div> 
        <div className='  w-[80rem]  my-[8rem] mx-[12rem]'>
            {
                data.map((d)=>(
                    <button className='text-[#E2E2B6] h-[7rem] bg-black w-[8rem]  shadow-[#E2E2B6] gap-3 mx-12 my-5 hover:scale-110 shadow-lg   transition-transform duration-200'>{d.icon}</button>

                ))
            }
            

        </div>
        <div className=' mx-[40rem] my-5'><header className='  left-[40rem] justify-center text-yellow-500 text-[3rem]'>Tools<span className=' text-white px-2 text-[3rem] '>Set</span> </header></div>
        <div className='  w-[80rem]  my-[5rem] mx-[15rem]'>
            {
            dat.map((p)=>(
                <button className='text-[#E2E2B6] h-[10rem] bg-black w-[10rem]  shadow-[#8c60ad] gap-3 mx-12 my-5 hover:scale-110 shadow-lg   transition-transform duration-200'>{p.icon}</button>
            ))
        }
        </div>
        

    </div>
  )
}
const data=[
    {
        icon:<FaPython className='text-[#E2E2B6] mx-5 size-[5rem] gap-3'/>
        
    },
    {
        icon:<TbCircleLetterCFilled className='text-[#E2E2B6] mx-5  size-[5rem]'/>
    },
    {
        icon:<FaJava className='text-[#E2E2B6] size-[5rem] mx-5 '/>
    },
    {
        icon:<IoLogoJavascript className='text-[#E2E2B6] size-[5rem] mx-5 ' /> 
    },
    {
        icon:<FaReact className='text-[#E2E2B6] size-[5rem] mx-5 '/>
    },
    {
        icon:<SiExpress className='text-[#E2E2B6] size-[5rem] mx-5 '/>
    },
    {
        icon:<FaNode  className='text-[#E2E2B6] size-[5rem] mx-5 '/>
    },
    {
        icon:<SiMongodb  className='text-[#E2E2B6] size-[5rem] mx-5 '/>
    },
    {
        icon:<SiMysql  className='text-[#E2E2B6] size-[5rem] mx-5 '/>
    },
    {
        icon:<FaAws  className='text-[#E2E2B6] size-[5rem] mx-5 '/>
    },
   
]
const dat=[
    
        {
            icon:<SiVisualstudiocode className='text-[#E2E2B6] mx-7 size-[6rem] gap-3'/>
            
        },
        {
            icon:<SiWindows className='text-[#E2E2B6] mx-7  size-[6rem]'/>
        },
        {
            icon:<FaGithub className='text-[#E2E2B6] size-[6rem] mx-7'/>
        },
        {
            icon:<SiPostman className='text-[#E2E2B6] size-[6rem] mx-7' /> 
        },
    
]
