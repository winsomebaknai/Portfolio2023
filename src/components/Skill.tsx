import React from 'react'
import { motion } from "framer-motion"


type Props = {}

function Skill() {
  return (


    
    <motion.div 
    initial={{ opacity:0 }}
    transition={{ duration:4 }}
    whileInView={{ opacity:1 }}
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3  className='absoulte top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            skills
        </h3>

       <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over for current profeciency</h3> 



        {/* Python */}
        <div className='grid grid-cols-2 gap-3'>
            <div className='group relative flex cursor-pointer'>
                <motion.img 
                    initial={{
                        opacity:0,
                    }}
                    transition={{ duration:2 }}
                    whileInView={{ opacity:1}}

                src='py.png' alt='python_logo'
                
                className='rounded-full border border-red-500 object-cover h-24 w-28 xl:w-32 xl:h-32 md:h-28 md:w-28 filter group-hover:grayscale transition duration-300 ease-in-out'/>

                <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-28 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0'>
                <div className='flex item-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>100%</p>
                </div>
                </div>
            </div>
        </div>

    </motion.div>
  )
}

export default Skill