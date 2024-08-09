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
        <div className='w-[70%] h-[400px] my-[8rem] mx-[30rem] '>
            <h1 className="text-[3rem]  text-[#FEF3E2] px-[16rem]">More <span className=" text-[3rem] ">About Me</span></h1>
            <p className='text-white px-[16rem]'>
               <span>vgfgvgvvghgcvgycghgyvgnjc sv vhvhfdvbhdbvhfbvbhxfdvfhbvbhbhSJVBSHJBHSJVBHSBVHSVSDV</span>  </p>
               <p className='text-white px-[16rem]'> <span>vgfgvgvvghgcvgycghgyvgjbjcnbsnvbbdnvdhjv hjdv hd vhdvhfdbvhdh</span></p>
               <p className='text-white px-[16rem]'> <span>vgfgvgvvghgcvgycghgyvg</span></p>
               <p className='text-white px-[16rem]'> <span>vgfgvgvvghgcvgycghgyvg</span></p>
               <p className='text-white px-[16rem]'> <span>vgfgvgvvghgcvgycghgyvg</span></p>

             
           

        </div>
        <div className=' absolute -bottom-[40rem]  mx-[40%]'>
            <header className='text-white text-[2rem]'>Contact Me Through</header>
            <h1 className='mx-[5rem] gap-3'>24/7 <span className='text-[#E2E2B6]'>Available</span></h1>
           
            <div className='flex flex-cols  -mx-[1rem]  gap-5 py-7 size-[20rem]'> {
                icons.map((d)=>( 
                    <div className='text-[#E2E2B6] h-[4rem] w-[5rem] rounded-[50%]'> { d.icon}</div>
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
