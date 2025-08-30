import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"   // <-- add motion

const experiences = [
  {
    role: "MERN Stack Virtual Internship",
    company: "Suven Consultants and Technology Pvt Ltd",
    date: "Dec 2024 – Feb 2025",
    icon: assets.suven,
    certificate: "Suven.pdf",
    description: [
      "Built full-stack apps including a dating app, photo-sharing platform, and chat app.",
      "Worked on authentication, API development, UI design, and deployment.",
      "Practiced component-based design, state management, and routing in React.",
      "Collaborated using GitHub, followed agile sprints, and enhanced debugging skills."
    ]
  },
  {
    role: "Community Corporate Duo Virtual Internship",
    company: "Younity.in",
    date: "May 2022 – Jul 2022",
    icon: assets.younity,
    certificate: "Younity.pdf",
    description: [
      "Engaged in social media campaigns and corporate outreach.",
      "Assisted in event planning and promotion for brand visibility.",
      "Improved communication skills via industry networking."
    ]
  }
]

const Experience = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 300);
  };

  return (
    <div id='experience' className='w-full px-[12%] py-10 scroll-mt-20'>

      {/* Section Titles */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='text-center mb-2 text-lg text-gray-500'
      >
        Experience
      </motion.h4>

      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='text-center text-5xl font-bold'
      >
        My Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12'
      >
        Here is a summary of my professional journey, highlighting key roles and accomplishments that showcase my skills and growth in the tech industry.
      </motion.p>

      {/* Experience Cards */}
      <div className='flex flex-col gap-10 mt-16'>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2, type: 'spring', stiffness: 70 }}
            viewport={{ once: true }}
            className='border border-gray-300 rounded-xl p-8 
                       hover:bg-[#fcf4ff] hover:-translate-y-1 
                       duration-500 hover:shadow-[4px_4px_0_#000]'
          >
            {/* Header: Role + Company */}
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3'>
              <div className='flex items-center gap-4'>
                {exp.icon && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='flex-shrink-0 flex items-center justify-center w-14 sm:w-16 aspect-square border border-gray-400 rounded-lg'
                  >
                    <Image 
                      src={exp.icon} 
                      alt={exp.company} 
                      className='w-7 sm:w-9 object-contain'
                    />
                  </motion.div>
                )}
                <div className='min-w-0'>
                  <h3 className='text-2xl font-semibold text-gray-800'>{exp.role}</h3>
                  <h4 className='text-gray-700 font-medium'>{exp.company}</h4>
                </div>
              </div>
              <span className='text-gray-500 text-sm mt-3 sm:mt-0'>{exp.date}</span>
            </div>

            {/* Description List */}
            <motion.ul 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 0.6, delay: 0.3 }} 
              viewport={{ once: true }}
              className='list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed mb-4'
            >
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </motion.ul>

            {/* Download Button */}
            {exp.certificate && (
              <motion.a 
                href={exp.certificate} 
                download 
                onClick={() => handleClick(index)}
                whileTap={{ scale: 0.9 }}
                className={`group inline-flex items-center gap-2 px-6 py-2 border border-gray-500 rounded-full text-sm font-medium transition-all duration-300
                  ${clickedIndex === index 
                    ? 'bg-black text-white opacity-0' 
                    : 'hover:bg-black hover:text-white'}`}
              >
                Download Certificate
                <Image 
                  src={assets.download_icon} 
                  alt='' 
                  className={`w-4 transition duration-300 ${clickedIndex === index ? 'invert' : 'group-hover:invert'}`} 
                />
              </motion.a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience
