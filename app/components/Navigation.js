'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
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
    <div className="">
      <div class="flex h-16 items-center justify-between font-aileronRegular overflow-hidden text-themeGray bg-themeNavy fixed w-[100%] z-50 md:h-full md:flex-col md:w-16 dark:bg-themeGray dark:text-themeNavy">
        <div className="flex items-center justify-between border-r-2 md:border-r-0 border-themeGray md:border-b-2 dark:border-themeNavy">
          <a class="flex items-center justify-center w-12 h-12 md:h-20 " href="#intro">
            gb
          </a>
        </div>
        <a class="flex items-center justify-center w-12 h-14 md:h-20 hover:text-themeOrange md:-rotate-90" href="#about">
          ABOUT
        </a>

        <a class="flex items-center justify-center w-12 h-14 md:h-20 hover:text-themeOrange md:-rotate-90" href="#work">
          WORK
        </a>

        <a class="flex items-center justify-center w-12 h-14 md:h-20 hover:text-themeOrange md:-rotate-90" href="#contact">
          CONTACT
        </a>
        <div className="flex items-center justify-between border-l-2 border-themeGray md:border-l-0 md:border-t-2 md:flex-col dark:border-themeNavy">
          <a class="flex items-center justify-center w-12 h-12 hover:text-themeOrange" href="https://github.com/gdbecker" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a class="flex items-center justify-center w-12 h-12 hover:text-themeOrange" href="https://www.linkedin.com/in/garrett-becker-923b4a106/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a class="flex items-center justify-center w-12 h-12 hover:text-themeOrange" href="mailto: garrettdbecker@gmail.com">
            <FaEnvelope />
          </a>
          <button class="flex items-center justify-center w-12 h-12 border-l-2 hover:text-themeOrange border-themeGray md:border-l-0 md:border-t-2 dark:border-themeNavy" onClick={()=> setTheme( theme === "dark" ? "light" : "dark")}>
            { theme == "dark" ? 
              (<BsFillSunFill /> ) : 
              (<BsMoonStarsFill />) 
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navigation;