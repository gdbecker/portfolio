import React from 'react'
import Image from 'next/image';
import { FaHome } from 'react-icons/fa';
import { FaPortrait } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

function Navigation() {
  return (
    <div class="flex  items-center justify-between font-aileronRegular overflow-hidden text-themeGray bg-themeNavy md:fixed md:z-20 md:h-full md:flex-col md:w-16">
      <div className="flex items-center justify-between border-r-2 md:border-r-0 md:border-b-2 border-themeGray">
        <a class="flex items-center justify-center w-12 h-14 md:h-20 " href="/">
          gb
        </a>
      </div>
      {/* <div className="flex md:flex-col md:items-center md:justify-between"> */}
        <a class="flex items-center justify-center w-12 h-14 md:h-20 hover:text-themeOrange md:-rotate-90" href="#">
          about
        </a>

        <a class="flex items-center justify-center w-12 h-14 md:h-20 hover:text-themeOrange md:-rotate-90" href="#">
          work
        </a>

        <a class="flex items-center justify-center w-12 h-14 md:h-20 hover:text-themeOrange md:-rotate-90" href="#">
          contact
        </a>
      {/* </div> */}
        

      <div className="flex items-center justify-between border-l-2 border-themeGray md:border-l-0 md:border-t-2 md:flex-col">
        <a class="flex items-center justify-center w-12 h-14 hover:text-themeOrange" href="#">
          <FaGithub />
        </a>
        <a class="flex items-center justify-center w-12 h-14 hover:text-themeOrange" href="#">
          <FaLinkedin />
        </a>
        <a class="flex items-center justify-center w-12 h-14 hover:text-themeOrange" href="#">
          <FaEnvelope />
        </a>
      </div>
    </div>
  )
}

export default Navigation;