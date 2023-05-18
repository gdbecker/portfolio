import React from 'react';
import Image from 'next/image'
import LoadingPage from './loading';
import Navigation from './components/Navigation';

function Home() {

  return (
    <div className="font-aileronRegular">
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 min-h-screen w-full bg-intro-section">   
          <div className="flex w-full h-screen backdrop-blur-sm bg-grayishBlue/30">
          </div>
        </div>
        <div className="flex flex-col min-h-screen w-full p-12 text-white bg-themeGray">
          <section id="intro">
            <h1 className="pb-5 font-aileronSemiBold text-8xl">Hi, I'm Garrett</h1>
            <p className="text-lg text-black font-cardoRegular leading-8 w-64">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Eget sit amet tellus cras adipiscing enim eu. 
            </p>
          </section>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col min-h-screen w-full p-12 text-white bg-themeGray">
          <section id="about" className="relative">
            <div className="absolute z-10 ml-24 bg-themeGray px-5 pb-8 w-full md:ml-36">
              <h1 className="font-aileronSemiBold text-7xl">My Skills</h1>
              <p className="text-lg text-black font-cardoRegular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Eget sit amet tellus cras adipiscing enim eu. 
              </p>
            </div>
          </section>
        </div>
        <div className="relative flex flex-col min-h-screen w-full bg-about-section">   
          <div className="flex w-full h-screen backdrop-blur-sm bg-grayishBlue/30">
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col min-h-screen w-full bg-work-section">   
          <div className="flex w-full h-screen backdrop-blur-sm bg-grayishBlue/30">
          </div>
        </div>
        <div className="flex flex-col min-h-screen w-full p-12 text-white bg-themeGray bg-test-section">
          <section id="intro">
            <h1 className="font-aileronSemiBold text-7xl">My Work</h1>
            <p className="text-lg text-black font-cardoRegular leading-8 w-64">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Eget sit amet tellus cras adipiscing enim eu. 
            </p>
          </section>
        </div>
      </div>

      <div id="footer" className="h-full w-full p-8 text-center text-grayishBlue text-sm bg-themeGray">
        <p>Designed and developed with ❤️ by Garrett Becker. &copy; 2023 All rights reserved.</p>
      </div>
     
    </div> 
  )
}

export default Home;
