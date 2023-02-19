import React from 'react'
import { motion } from "framer-motion"
type Props = {}

function Projects({}: Props) {

  const projects = [1,2,3,4,5];

  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration:2 }}
    
    
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl' >
            projects
        </h3>

      
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>


            {/* projects */}
            {/* dummy project */}
            {projects.map((project,i) => (
              <div className='w-screen flex-shrink-0 snap-center flex-cols space-y-5 items-center justify-center p-20 md:p-44 h-screen' >
                <motion.img 
                initial={{
                  y:-300,
                  opacity:0
                }}
                transition={{ duration:4 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                src="pro2.jpg" alt="" />

                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                  <h4 className='underline decoration-[#F7ABBA]/50 text-4xl font-semibold text-center'>TiTle of the project {i+1}</h4>

                  <p className='text-lg text-center md:text-left'>(project summary)Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                  </div>
              </div>
            ))}
            
        </div>
        

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px]'/>

    </motion.div>
  )
}

export default Projects