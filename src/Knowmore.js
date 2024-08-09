import React from 'react'
import pic from './photos/int.jpg'
import { ImPointRight } from "react-icons/im";
export const Knowmore = () => {
  return (
    <div className='flex flex-rows '>
<div className=''>
    <h1 className='text-white mx-[15rem] text-[2.5rem] font-serif '>Know More <span className='text-[#E2E2B6]'>About Me</span></h1>
   <div className='mx-[10rem] w-[40%]'>
   <p className='text-white text-[1.7rem]'>
        wjfhujfbjefbwfbiwwbfbjjf
        hjbvjsvsedvsv hsdvgeshfcvsedh
        vnjeshvbevhuevhszvhuvhfesehvbdvm
        nmc sv v svn s nv s v sdn v v vv
        jebchsvvesdvhhedvssbv
        vsdmkvbsd nv nsv nnv
        <div className=''>
        <h1><ImPointRight className='text-[#E2E2B6] my-[2rem]'/><span className=' absolute mx-9 -my-[4.3rem]'>playing games</span></h1>
        <h1><ImPointRight className='text-[#E2E2B6] my-[2rem]'/><span className=' absolute mx-9 -my-[4.1rem]'>videogames</span></h1>
       <h1><ImPointRight className='text-[#E2E2B6] my-[2rem]'/> <span className=' absolute mx-9 -my-[4rem]'> lisitening to musicc</span></h1>
        </div>
        
        
    </p>
   </div>
    

</div>
<div className='w-[60%] h-[20rem]'>
    <img src={pic} className='h-[25rem] w-[70rem] my-[5rem] -mx-[12rem]'></img>

</div>

    </div>
  )
}
