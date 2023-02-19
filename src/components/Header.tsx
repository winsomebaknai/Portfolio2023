import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';
type Props = {}

function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center '>
        <motion.div 
        initial={{
            x: -500,
            opacity: -0,
            scale: 0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale: 1,
        }}
        transition={{
            duration:2,
        }}
        
        className='flex flex-row items-center'>
        <SocialIcon url="https://instagram.com/winsome_baknai_basumatary?igshid=ZDdkNTZiNTM=" 
        fgColor='gray'
        bgColor='transparent'
        />

        <SocialIcon url="https://unsplash.com/@winsome_baknai" 
        fgColor='gray'
        bgColor='transparent'
        />


        <SocialIcon url="https://twitter.com/winsome_baknai?t=r5TGlzmcb4-3bIoakhRIYg&s=08" 
        fgColor='gray'
        bgColor='transparent'
        />

        
        <Link href="#contact">
        <SocialIcon 
             className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />
        </Link>

        </motion.div>
    </header>
  )
}

export default Header