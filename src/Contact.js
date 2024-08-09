import React from 'react'
import { useState } from 'react'
import telephone from './photos/telephone.jpg'
import { ToastContainer,toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css'
   export const Contact = () => {
           const [formData, setFormData] = useState({
            email: '',
               message: ''
          });
          // Notification
          const handleChange= (event) => {
          const { name, value } = event.target;
           setFormData({ ...formData, [name]: value });
          };
          
        
    const sendEmail = (e) => {
        e.preventDefault();
   if(formData.email.length===0){
         return toast.warning(`Please enter your email`)
            }
            if(formData.message.length===0){
              return toast.warning(`Please enter message`)
        }
        console.log(formData.email);
            formData.from_name = formData.email;
         //write details
            emailjs.send(
              'template_e6fcwmr', //template
              'service_sunsf4m', //service
              formData,
           'shwp xqtc dguv lvuc' //passcode
            ).then((result) => {
              if(formData.email.length>9 && formData.message.length>1 && result.text==="OK"){
             toast.success("Email sent successfully");
                 setFormData({
                  email: '',
                  message: ''
                        });
               }else{
             toast.error("Failed to send email");
               }
            }, (error) => {
             toast.error("Failed to send email");
           });
          };


    
        

  return (
    <div className='flex flex-row h-[30rem] w-[100%]'>
        <h1 className='text-white absolute  text-[2.5rem] left-[40rem] font-serif '>Contact <span className='text-[#E2E2B6]'> Me</span></h1>
        <div className='w-[50%] my-[10rem]  h-[50rem]'>
            <img src={telephone} className='w-[25rem] h-[20rem] -my-[2rem] mx-16'></img>
            </div>
        <div className='my-[10rem] mx-[10rem]'>
            <form onSubmit={sendEmail}>
            <div >
                <input type="email" name="email" className='rounded w-[20rem]' onChange={handleChange} placeholder='enter your email'></input>
            </div>
            <div className='my-[3rem]' >
                <input type="text" name="description" id="myInput" className=' h-[9rem]  rounded w-[20rem] focus'  onChange={handleChange} ></input>
                <label class=" absolute -mx-[20rem]  text-gray-400"> Placeholder text</label>
                

            </div>
            <button className="border-2 bg-[#E2E2B6] border-white text-[#021526] rounded font-semibold" >Send message</button>

            </form>
        </div>

    </div>
  )
}

