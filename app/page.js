import React from 'react';
import Image from 'next/image'
import LoadingPage from './loading';

function Home() {

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  // }

  return (
    <div>
      <div className="font-aileronRegular bg-themeGray dark:bg-themeNavy">
        <div className="flex flex-row mb-[-20px] z-20">
          <div className="flex flex-col basis-1/2 min-h-screen w-full bg-intro-section">   
            {/* <div className="flex w-full h-screen backdrop-blur-sm bg-grayishBlue/30">
            </div> */}
          </div>
          <div className="flex flex-col min-h-screen w-full p-12 pt-0 text-white bg-test-section-2">
            <section id="intro" className="bg-themeGray dark:bg-themeNavy">
              <div className="p-6">
                <h1 className="font-aileronSemiBold text-8xl">Hi, I'm Garrett</h1>
                <p className="text-lg text-black font-cardoRegular leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Eget sit amet tellus cras adipiscing enim eu. 
                </p>
              </div>
              
            </section>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col min-h-screen w-full p-12 text-white">
            <section id="about" className="relative">
              <div className="absolute z-10 ml-20 bg-themeGray px-5 pb-8 w-[50vw] md:ml-24">
                <h1 className="font-aileronSemiBold text-7xl">My Skills</h1>
                <p className="text-lg text-black font-cardoRegular">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Eget sit amet tellus cras adipiscing enim eu. 
                </p>
              </div>
            </section>
          </div>
          <div className="relative flex flex-col min-h-screen w-full bg-about-section">   
            <div className="flex w-full h-screen ">
            </div>
          </div>
        </div>

        <div className="flex flex-row bg-test-section mt-[-20px] mb-[-20px]">
          {/* <div className="relative flex flex-col min-h-screen w-full">    */}
            <div className="flex w-full h-screen text-white bg-test-section-2">
              <section id="work" className="w-fit pl-28 pr-10 pt-10 te z-20xt-right items-center justify-center">
                <div className="bg-themeGray px-10 py-5">
                  <h1 className="font-aileronSemiBold text-7xl">My Work</h1>
                  <p className="text-lg text-black font-cardoRegular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Eget sit amet tellus cras adipiscing enim eu. 
                  </p>
                </div>
                
              </section>
            </div>
          {/* </div> */}
          {/* <div className="min-h-screen w-full p-12 text-white"> */}
            
          {/* </div> */}
        </div>

        <section className="flex flex-row">
          <div className="relative flex flex-col min-h-screen w-full bg-work-section">   
          </div>
          <div className="relative flex flex-col min-h-screen w-full p-12 text-white">
            <div id="contact" className="absolute left-0 right-0 p-5 ml-[-50px] bg-themeGray w-full">
              <h1 className="pb-5 font-aileronSemiBold text-4xl">Let's chat!</h1>
              <form className="">
                <div class="mb-4">
                  <label class="block text-black text-sm font-bold mb-2" htmlFor="name">
                    name
                  </label>
                  <input 
                    className="appearance-none border-themeGray w-full py-2 px-3 text-lightGray leading-tight focus:border-themeOrange focus:ring-0" 
                    id="name" 
                    type="text" 
                    placeholder="name" 
                    required
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-black text-sm font-bold mb-2" htmlFor="phone">
                    phone number
                  </label>
                  <input 
                    className="appearance-none border-themeGray w-full py-2 px-3 text-lightGray leading-tight focus:border-themeOrange focus:ring-0" 
                    id="phone" 
                    type="text" 
                    placeholder="phone number" 
                    required
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-black text-sm font-bold mb-2" htmlFor="email">
                    email
                  </label>
                  <input 
                    className="appearance-none border-themeGray w-full py-2 px-3 text-lightGray leading-tight focus:border-themeOrange focus:ring-0" 
                    id="email" 
                    type="text" 
                    placeholder="email" 
                    required
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-black text-sm font-bold mb-2" htmlFor="message">
                    message
                  </label>
                  <textarea 
                    className="appearance-none border-themeGray w-full py-2 px-3 text-lightGray leading-tight focus:border-themeOrange focus:ring-0" 
                    id="message" 
                    type="text" 
                    placeholder="message" 
                    required
                  />
                </div>
                <button className="bg-themeOrange px-10 py-4 mb-12 hover:bg-themeNavy">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <section id="footer" className="flex flex-row h-full w-full p-8 mt-[-20px] text-center items-center justify-center text-grayishBlue text-[0.8rem] bg-test-section-2">
          <p className="flex bg-themeGray p-1 w-fit">Designed and developed with ❤️ by Garrett Becker. &copy; 2023 All rights reserved.</p>
        </section>
      
      </div> 
    </div>
    
  )
}

export default Home;
