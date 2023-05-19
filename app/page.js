'use client';
import React from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image'
import LoadingPage from './loading';

function Home() {

  async function handleSubmit(e) {
    e.preventDefault();

    var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var name = e.target.name.value;
    var phone = e.target.phone.value;
    var email = e.target.email.value;
    var message = e.target.message.value;

    if (email.match(validRegex)) {
      var params = {
        "name": name,
        "phone": phone,
        "email": email,
        "message": message
      };

      emailjs.send(
        process.env.EMAIL_JS_SERVICE,
        process.env.EMAIL_JS_TEMPLATE,
        params, // the values for the EmailJS template
        process.env.EMAIL_JS_USER,
      )
      .then((result) => {
        // Show success message
        alert("Message has been sent ! Garrett will get in touch soon!");
      }, (error) => {
        // Show error message
        alert("Error sending message, try again later");
      });
    } else {
      alert('Please enter a valid email address');
    }
  }

  return (
    <div>
      <div className="font-aileronRegular bg-themeGray dark:bg-themeNavy">
        <div className="flex flex-row mb-[-20px] z-20">
          <div className="flex flex-col basis-1/2 min-h-screen w-full bg-intro-section">   
            {/* <div className="flex w-full h-screen backdrop-blur-sm bg-grayishBlue/30">
            </div> */}
          </div>
          <div className="flex flex-col min-h-screen w-full p-12 pt-0 text-white bg-topography dark:bg-topography-dark">
            <section id="intro" className="bg-themeGray dark:bg-themeNavy">
              <div className="p-6">
                <h1 className="font-aileronSemiBold text-8xl">Hi, I'm Garrett</h1>
                <p className="text-lg text-black font-cardoRegular leading-8 dark:text-white">
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
              <div className="absolute z-10 ml-20 bg-themeGray px-5 pb-8 w-[50vw] md:ml-24 dark:bg-themeNavy">
                <h1 className="font-aileronSemiBold text-7xl">My Skills</h1>
                <p className="text-lg text-black font-cardoRegular dark:text-white">
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

        <div className="flex flex-row mt-[-20px] mb-[-20px] bg-square dark:bg-square-dark">
          {/* <div className="relative flex flex-col min-h-screen w-full">    */}
            <div className="flex w-full h-screen text-white bg-topography dark:bg-topography-dark">
              <section id="work" className="w-fit pl-28 pr-10 pt-10 te z-20xt-right items-center justify-center">
                <div className="bg-themeGray px-10 py-5 dark:bg-themeNavy">
                  <h1 className="font-aileronSemiBold text-7xl">My Work</h1>
                  <p className="text-lg text-black font-cardoRegular dark:text-white">
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
          <div className="relative flex flex-col min-h-screen w-full p-1 pt-12 text-white">
            <div id="contact" className="p-5 ml-[-70px] mb-10 bg-themeGray w-full dark:bg-themeNavy">
              <h1 className="pb-5 font-aileronSemiBold text-4xl">Let's chat!</h1>
              <form className="" onSubmit={handleSubmit}>
                <div class="mb-4">
                  <label class="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="name">
                    name
                  </label>
                  <input 
                    className="appearance-none border-themeGray w-full py-2 px-3 text-grayishBlue leading-tight focus:border-themeOrange focus:ring-0" 
                    id="name" 
                    type="text" 
                    placeholder="name" 
                    required
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="phone">
                    phone number
                  </label>
                  <input 
                    className="appearance-none border-themeGray w-full py-2 px-3 text-grayishBlue leading-tight focus:border-themeOrange focus:ring-0" 
                    id="phone" 
                    type="text" 
                    placeholder="phone number"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="email">
                    email
                  </label>
                  <input 
                    className="appearance-none border-themeGray w-full py-2 px-3 text-grayishBlue leading-tight focus:border-themeOrange focus:ring-0" 
                    id="email" 
                    type="text" 
                    placeholder="email" 
                    required
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="message">
                    message
                  </label>
                  <textarea 
                    className="appearance-none border-themeGray w-full py-2 px-3 text-grayishBlue leading-tight focus:border-themeOrange focus:ring-0" 
                    id="message" 
                    type="text" 
                    placeholder="message"
                    minlength="10"
                    required
                  />
                </div>
                <button className="bg-themeNavy px-10 py-4 mb-12 hover:bg-themeOrange dark:bg-themeGray dark:text-themeNavy dark:hover:bg-themeOrange">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <section id="footer" className="flex flex-row h-full w-full p-8 mt-[-20px] text-center items-center justify-center text-grayishBlue text-[0.8rem] bg-topography dark:text-themeGray dark:bg-topography-dark">
          <p className="flex bg-themeGray p-1 w-fit dark:bg-themeNavy">Designed and developed with ❤️ by Garrett Becker. &copy; 2023 All rights reserved.</p>
        </section>
      
      </div> 
    </div>
    
  )
}

export default Home;
