import React from 'react'
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

function Navigation() {
  return (
    <div class="flex h-16 items-center justify-between font-aileronRegular overflow-hidden text-themeGray bg-themeNavy fixed w-[100%] z-30 md:h-full md:flex-col md:w-16">
      <div className="flex items-center justify-between border-r-2 md:border-r-0 md:border-b-2 border-themeGray">
        <a class="flex items-center justify-center w-12 h-12 md:h-20 " href="#intro">
          gb
        </a>
      </div>
      <a class="flex items-center justify-center w-12 h-14 md:h-20 hover:text-themeOrange md:-rotate-90" href="#about">
        about
      </a>

      <a class="flex items-center justify-center w-12 h-14 md:h-20 hover:text-themeOrange md:-rotate-90" href="#">
        work
      </a>

      <a class="flex items-center justify-center w-12 h-14 md:h-20 hover:text-themeOrange md:-rotate-90" href="#">
        contact
      </a>
      <div className="flex items-center justify-between border-l-2 border-themeGray md:border-l-0 md:border-t-2 md:flex-col">
        <a class="flex items-center justify-center w-12 h-12 hover:text-themeOrange" href="https://github.com/gdbecker">
          <FaGithub />
        </a>
        <a class="flex items-center justify-center w-12 h-12 hover:text-themeOrange" href="https://www.linkedin.com/in/garrett-becker-923b4a106/">
          <FaLinkedin />
        </a>
        <a class="flex items-center justify-center w-12 h-12 hover:text-themeOrange" href="mailto: garrettdbecker@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </div>
  )
}

export default Navigation;