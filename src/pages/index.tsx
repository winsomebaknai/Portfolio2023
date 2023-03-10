import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skill from '@/components/Skill'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-500'>
      <Head>
        <title>my_portfolio 2023</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/one.png" />
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      

      <section id="about" className='snap-center'>
          <About />
      </section>
  
      <section id='experience' className='snap-center'> 
        <Experience />
      </section>


      <section id="skills" className='snap-center'>
        <Skill />
      </section>

      
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

     
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

     </div>
    </>
  )
}
