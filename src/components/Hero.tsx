import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';

type Props = {}

function Hero() {

  const [text,count] = useTypewriter({
    words:["Hi, The Name's Baknai",
            "Guy-Who-Loves-Coffee",
              "High-On-Caffine"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />
      <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
      src="/pro.jpg" alt="profile" />

      

      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Cool-Dude</h2>
      <h1>
      <span className='text-5xl lg:text-6xl font-semibold px-18'>
        {text}
      </span>
      <Cursor cursorColor="#F7ABBA"/>
      </h1>

      <div className='pt-5'>

      <Link href="#about">
      <button className='heroButton' >About</button>
      </Link>

      <Link href="#experience">
      <button className='heroButton' >Experience</button>
      </Link>

      <Link href="#skills">
      <button className='heroButton' >Skills</button>
      </Link>


      <Link href="#projects">
      <button className='heroButton' >Projects</button>
      </Link>

      </div>
      </div>
    </div>
  )
}

export default Hero