import React from 'react';
import Image from 'next/image'
import LoadingPage from './loading';
import Navigation from './components/Navigation';

function Home() {

  return (
    <div className="flex flex-row">
      <div className=" flex flex-col basis-1/2 min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg')]">
        
        <div className="flex w-full h-screen backdrop-blur-sm bg-grayishBlue/30">
        </div>
        
      </div>
      <div className="flex flex-col min-h-screen w-full p-12 text-white bg-themeGray">
        
        <h1 className="text-7xl">Hi, I'm Garrett</h1>
        
      </div>

    </div>
      
  )
}

export default Home;
