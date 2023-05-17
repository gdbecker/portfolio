import React from 'react';
import Image from 'next/image'
import LoadingPage from './loading';

function Home() {

  return (
    <div className="h-screen w-full text-white bg-cover bg-top-center bg-no-repeat bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg')]">
      <div className="flex w-full h-full backdrop-blur-sm bg-grayishBlue/30">
        Home  
      </div>
      
    </div>
  )
}

export default Home;
