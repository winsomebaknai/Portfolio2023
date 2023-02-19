import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function About() {
  return (
   <motion.div 
    initial={{ opacity:0 }}
    transition={{ duration:4 }}
    whileInView={{ opacity:1 }}
   
   className='h-screen flex flex-col text-center md:text-left  md:flex-row mx-w-7xl px-10 justify-evenly mx-auto items-center'>

        <h3 className='absoulte top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>



       <motion.img 
        initial={{
            x: -200,
            opacity: 0,
        }}      
        transition={{
            duration:2,
        }}
        whileInView={{
            x: 0,
            opacity:1,
        }} 
        viewport={{
            once:true,
        }}
       src='/pro2.jpg'
       className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]' 
       />

    <div className='space-y-10 px-0 md:px-10'>
    <h4 className='text-4xl font-semibold'>
       A Little About Me.
    </h4>
       <p className='text-base'>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       </p>
     </div>
      
    
   </motion.div>
  )
}

export default About