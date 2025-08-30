import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ed24d5fa-033f-45de-85d2-87d995c40425");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div 
      id='contact' 
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/header-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] bg-white'
    >
      {/* Section Titles */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='text-center mb-2 text-lg'
      >
        Connect With Me
      </motion.h4>

      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='text-center text-5xl'
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12'
      >
        I'm always excited to connect with fellow developers, potential collaborators, 
        or anyone interested in my work. Whether you have a question, a project idea, 
        or just want to say hello, feel free to reach out. Let's create something amazing together!
      </motion.p>

      {/* Contact Form */}
      <motion.form 
        onSubmit={onSubmit} 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 70 }}
        viewport={{ once: true }}
        className='max-w-2xl mx-auto'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
          <motion.input 
            type="text" 
            placeholder='Enter Your Name' 
            required 
            name='name'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
          />
          <motion.input 
            type="email" 
            placeholder='Enter Your Mail' 
            required 
            name='email'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
          />
        </div>

        <motion.textarea 
          rows='6' 
          placeholder='Enter Your Message' 
          required
          name='message'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'
        ></motion.textarea>

        <motion.button 
          type='submit'
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className='px-8 py-3 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'
        >
          Submit <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.button>
        <p className='mt-4 text-center'>{result}</p>
      </motion.form>
    </div>
  )
}

export default Contact

