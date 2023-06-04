'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';
import { BsFillSunFill } from 'react-icons/bs';
import { BsMoonStarsFill } from 'react-icons/bs';

function Navigation() {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
      </>
    )
  }

  return (
    <nav className="">
      <div class="flex flex-col font-aileronRegular overflow-hidden text-themeGray bg-themeNavy fixed w-[100%] z-50 md:justify-between md:h-screen md:w-16 dark:bg-themeGray dark:text-themeNavy">
        <div className="flex items-center justify-start border-themeGray border-b-2 md:flex-col md:justify-between md:border-none dark:border-themeNavy">
          <div className="flex items-center justify-center border-themeGray border-r-2 md:border-r-0 md:border-b-2 dark:border-themeNavy">
            <a class="flex items-center justify-center p-3 md:p-6" href="#intro">
              gb
            </a>
          </div>
          <a class="flex items-center justify-center px-3 md:px-0 md:py-6 hover:text-themeOrange md:[writing-mode:vertical-lr] md:-rotate-180" href="#about">
            ABOUT
          </a>

          <a class="flex items-center justify-center px-3 md:px-0 md:py-6 hover:text-themeOrange md:[writing-mode:vertical-lr] md:-rotate-180" href="#work">
            WORK
          </a>

          <a class="flex items-center justify-center px-3 md:px-0 md:py-6 hover:text-themeOrange md:[writing-mode:vertical-lr] md:-rotate-180" href="#contact">
            CONTACT
          </a>
        </div>
          
        <div className="flex items-center justify-end border-themeGray md:justify-center md:border-l-0 md:border-t-2 md:flex-col dark:border-themeNavy">
          <a class="flex items-center justify-center p-4 md:p-6 hover:text-themeOrange" href="https://github.com/gdbecker" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a class="flex items-center justify-center p-4 md:p-6 hover:text-themeOrange" href="https://www.frontendmentor.io/profile/gdbecker" target="_blank" rel="noopener noreferrer">
            <SiFrontendmentor />
          </a>
          <a class="flex items-center justify-center p-4 md:p-6 hover:text-themeOrange" href="https://www.linkedin.com/in/garrett-becker-923b4a106/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a class="flex items-center justify-center p-4 md:p-6 hover:text-themeOrange" href="mailto: garrettdbecker@gmail.com">
            <FaEnvelope />
          </a>
          <button class="flex items-center justify-center p-4 md:p-6 border-l-2 hover:text-themeOrange border-themeGray md:border-l-0 md:border-t-2 dark:border-themeNavy" onClick={()=> setTheme( theme === "dark" ? "light" : "dark")}>
            { theme == "dark" ? 
              (<BsFillSunFill /> ) : 
              (<BsMoonStarsFill />) 
            }
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;