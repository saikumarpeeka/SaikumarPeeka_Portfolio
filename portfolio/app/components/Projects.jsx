import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'motion/react'

const Projects = () => {
  const [showAll, setShowAll] = useState(false)

  // Show first 3 if not expanded, else show all
  const visibleProjects = showAll ? workData : workData.slice(0, 3)

  return (
    <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='text-center mb-2 text-lg'>Projects</motion.h4>
      <motion.h2 
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }} className='text-center text-5xl'>My Projects</motion.h2>
      
      <motion.p initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}  className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        Welcome to my project showcase! Here you'll find a selection of my latest work, 
        demonstrating my skills in full-stack development. Each project highlights my 
        ability to create scalable, responsive applications using technologies like 
        React, Node.js, MongoDB and Express with a focus on clean code, secure API 
        integration, and real-time features. Explore these projects to see how I turn 
        ideas into functional, impactful solutions.
      </motion.p>

      {/* Project grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5'>
        {visibleProjects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className='aspect-[3/2] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
                            -translate-x-1/2 py-3 px-5 flex items-center justify-between 
                            duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>

              {/* Just an icon now, no link */}
              <div className='border rounded-full border-black w-9 aspect-square flex 
                              items-center justify-center shadow-[2px_2px_0_#000] 
                              group-hover:bg-lime-300 transition'>
                <Image 
                  src={assets.send_icon} 
                  alt='send icon' 
                  className='w-5 h-5 object-contain' 
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Show More / Show Less button */}
      {workData.length > 3 && (
        <div className='flex justify-center'>
          <button
            onClick={() => setShowAll(!showAll)}
            className='w-max flex items-center justify-center gap-2 text-gray-700 
                       border-[0.5px] border-gray-700 rounded-full py-3 px-10 
                       hover:bg-[#fcf4ff] duration-500'
          >
            {showAll ? 'Show Less' : 'Show More'}
            <Image
              src={assets.right_arrow_bold}
              alt='Right Arrow'
              className={`w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      )}
    </div>
  )
}

export default Projects
