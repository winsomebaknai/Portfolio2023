import React from 'react'
import { PhoneIcon,MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs ={
    name: string;
    email: string;
    subject: string;
    message: string;
};


type Props = {};

function ContactMe() {

    const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> =(formData) => {
        window.location.href = `mailto:baknaibasumatary@gmail.com?subject=${formData.subject}&body= Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };


  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact-Me
        </h3>

        <div className='flex flex-cols space-y-10'>
          <div className='space-y-5'>
            <div className='flex item-center space-x-5 justify-center'>
                <PhoneIcon className='text-red-500 h-7 w-7 animate-pulse cursor-pointer'/>
                <p  className='text-2xl cursor-pointer'>+91 7086**7275</p>
            </div>

            <div className='flex item-center space-x-5 justify-center'>
                <MapPinIcon className='text-red-500 h-7 w-7 animate-pulse cursor-pointer'/>
                <p   className='text-2xl cursor-pointer'> 783370, Laugh Tale Island, Grand line.</p>
            </div>


            <div className='flex item-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-red-500 h-7 w-7 animate-pulse cursor-pointer'/>
                <p   className='text-2xl cursor-pointer'> u19cse1-1-cit.ac.in </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col space-y-2 w-fit mx-auto">
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className="contactInput"  type="text" />
                    <input  {...register('email')} placeholder='Email' className="contactInput"  type="email" />
                </div>

                <input  {...register('subject')} placeholder='subject' className="contactInput" type="text" />

                    <textarea   {...register('message')} placeholder="Message" className="contactInput" />

                    <button type="submit" className='bg-red-500 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>        
          </div>
        </div>
        
    </div>
  )
}

export default ContactMe