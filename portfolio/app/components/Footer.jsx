import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6'/>
                saikumarr.peeka@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Saikumar Peeka. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://www.github.com/saikumarpeeka"><Image src={assets.github1} alt=''className='w-8 sm:w-10'/></a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/saikumarpeeka"><Image src={assets.linkedin} alt=''className='w-8 sm:w-10'/></a></li>
                <li><a target='_blank' href="https://www.instagram.com/saikumar.peeka"><Image src={assets.instagram} alt=''className='w-8 sm:w-10'/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer