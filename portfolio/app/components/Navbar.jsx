import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Audio playback failed:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`fixed w-full z-50 transition-all ${isScroll ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className='flex items-center justify-between px-[12%] py-4'>
        <Image src={assets.logo} alt='logo' className='w-32' />
        
        <ul className='hidden md:flex items-center gap-8 text-gray-700'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='flex items-center gap-6'>
          <button 
            onClick={togglePlayPause}
            className='text-gray-700 hover:text-black'
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <audio ref={audioRef} src="/cielo.mp3" loop />
          
          <Image 
            src={assets.menu} 
            alt='menu' 
            className='w-6 md:hidden cursor-pointer' 
            onClick={openMenu} 
          />
        </div>
      </div>

      {/* Side menu for mobile */}
      <div 
        ref={sideMenuRef}
        className='fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform translate-x-[16rem] transition-transform duration-300 md:hidden'
      >
        <Image 
          src={assets.close} 
          alt='close' 
          className='w-6 m-4 cursor-pointer' 
          onClick={closeMenu} 
        />
        <ul className='flex flex-col items-start gap-6 p-6 text-gray-700'>
          <li onClick={closeMenu}><a href='#home'>Home</a></li>
          <li onClick={closeMenu}><a href='#about'>About</a></li>
          <li onClick={closeMenu}><a href='#projects'>Projects</a></li>
          <li onClick={closeMenu}><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
