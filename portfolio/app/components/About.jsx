import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      
      {/* Section Titles */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='text-center mb-2 text-lg'
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='text-center text-5xl'
      >
        About Me
      </motion.h2>

      {/* Main Content */}
      <div className='flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-20'>

        {/* Left Side - Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 70 }}
          viewport={{ once: true }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
          <Image 
            src={assets.user_image} 
            alt='user' 
            className='w-full rounded-3xl'
          />
        </motion.div>

        {/* Right Side - Text + Lists */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 70 }}
          viewport={{ once: true }}
          className='flex-1'
        >
          {/* About Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }} 
            className='mb-10 max-w-2xl text-center lg:text-left'
          >
            I’m a curious and results-driven developer specializing in React, Node.js, 
            MongoDB, and Express. With experience in real-time apps, secure APIs, and 
            cloud integration, I enjoy solving complex problems, learning new technologies 
            quickly, and delivering scalable, responsive solutions that make a real impact.
          </motion.p>

          {/* Info Cards */}
          <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                           hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 
                           hover:shadow-[4px_4px_0_#000]'
              >
                <Image src={icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                <p className='text-gray-600 text-sm'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='my-6 text-gray-700'
          >
            Tools I Use
          </motion.h4>

          <ul className='flex flex-wrap items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <motion.li 
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square 
                           border border-gray-400 rounded-lg cursor-pointer 
                           hover:-translate-y-1 duration-500'
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default About


