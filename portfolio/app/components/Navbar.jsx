import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sideMenuRef = useRef();
  const audioRef = useRef(null);

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const CloseMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  // Toggle play/pause
  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio ref={audioRef} src="/cielo.mp3" loop />

      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? 'bg-white/50 backdrop-blur-lg shadow-sm' : ''
        }`}
      >
        <a href="#top">
          <Image src={assets.logo} alt="" className="w-32 cursor-pointer mr-14" />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? '' : 'bg-white/50 shadow-sm'
          }`}
        >
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Play / Pause Button */}
          <button
            onClick={togglePlayPause}
            className="flex items-center justify-center w-10 h-10 rounded-full transition"
          >
            <Image 
              src={isPlaying ? assets.pause : assets.play} 
              alt="play-pause" 
              className="w-6"
            />
          </button>

          {/* Contact button only on lg+ */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>

          {/* Mobile menu button */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Side menu for mobile */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={CloseMenu}>
            <Image src={assets.close_black} alt="" className="w-5 cursor-pointer" />
          </div>
          <li><a onClick={CloseMenu} href="#top">Home</a></li>
          <li><a onClick={CloseMenu} href="#about">About Me</a></li>
          <li><a onClick={CloseMenu} href="#experience">Experience</a></li>
          <li><a onClick={CloseMenu} href="#projects">Projects</a></li>
          <li><a onClick={CloseMenu} href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
