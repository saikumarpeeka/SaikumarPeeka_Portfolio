import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Header = () => {
  const [downloadStatus, setDownloadStatus] = useState("");

  const handleDownload = async (e) => {
    e.preventDefault(); // prevent default <a> behavior
    setDownloadStatus("Downloading...");

    try {
      const response = await fetch("/SaikumarPeeka_Resume.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "SaikumarPeeka_Resume.pdf";
      link.click();

      window.URL.revokeObjectURL(url);
      setDownloadStatus("Downloaded");
      setTimeout(() => setDownloadStatus(""), 2000); 
    } catch (error) {
      setDownloadStatus("Download failed");
      setTimeout(() => setDownloadStatus(""), 2000);
    }
  };

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.0, type: 'spring', stiffness: 100 }}>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
      </motion.div>

      <motion.h3 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }} 
        className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
        Hi! I'm Saikumar Peeka 
        <Image src={assets.hand_icon} alt='' className='w-6'/>
      </motion.h3>

      <motion.h1 
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }} 
        className='text-3xl sm:text-6xl lg:text-[66px]'>
        Software Developer
      </motion.h1>

      <motion.p  
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }} 
        className='max-w-2xl mx-auto'>
        Skilled in React, Node.js, MongoDB, Express, Python, and C++. Experienced in building scalable, responsive applications with secure APIs, real-time features, and clean code.
      </motion.p>

      <div className='flex flex-row flex-nowrap items-center gap-3 mt-4'>
        <motion.a 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact" 
          className='px-6 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 whitespace-nowrap'>
          Contact Me 
          <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.a>

        <motion.a 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/SaikumarPeeka_Resume.pdf" 
          onClick={handleDownload}
          className='px-6 py-3 border rounded-full border-gray-500 flex items-center gap-2 whitespace-nowrap cursor-pointer'>
          My Resume 
          <Image src={assets.download_icon} alt='' className='w-4'/>
        </motion.a>
      </div>

      {downloadStatus && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className='fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-full shadow-lg'>
          {downloadStatus}
        </motion.div>
      )}
    </div>
  )
}

export default Header
