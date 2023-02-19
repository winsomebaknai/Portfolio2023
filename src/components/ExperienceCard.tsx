import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function ExperienceCard({}: Props) {
  return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img 

               initial={{
                y:-100,
                opacity:0,
               }}
               transition={{
                duration:2,
               }}
               whileInView={{
                opacity:1,
                y:0,
               }}
               viewport={{ once:true, }}

            className='w-32 h-50 rounded-full xl:w-[200px] xl:h-[300px] object-cover object-center'
            src='/cit.png'
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light '> Central institute of technology </h4>
                <p text-bold text-2xl mt-1> Student </p>

                {/* technology */}
                <div className='flex space-x-2 my-2'>
                    <img className="h-10 w-10 rounded-full"  src="" alt="datastructure" />


                    <img className="h-10 w-10 rounded-full"  src="" alt="OOP" />

                    <img className="h-10 w-10 rounded-full"  src="" alt="Java" />
                    
                </div>



                <p className='uppercase py-5 text-gray-300'>started work-... end-...</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li></li>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                </ul>
            </div>
        </article>
  )
}

export default ExperienceCard