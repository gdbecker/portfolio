'use client';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa';
import { BiMoviePlay } from 'react-icons/bi';

import ReactImg from '../public/skills/react.png';
import NextJsImg from '../public/skills/nextjs.svg';
import BootstrapImg from '../public/skills/bootstrap.png';
import TailwindImg from '../public/skills/tailwind.svg';
import SassImg from '../public/skills/sass.png';

import PythonImg from '../public/skills/python.png';
import DjangoImg from '../public/skills/django.png';
import FlaskImg from '../public/skills/flask.png';
import NodeJsImg from '../public/skills/nodejs.png';
import JWTImg from '../public/skills/jwt.svg';
import ReduxJsImg from '../public/skills/reduxjs.svg';
import SQLiteImg from '../public/skills/sqlite.png';

import AnacondaImg from '../public/skills/anaconda.png';
import JupyterImg from '../public/skills/jupyter.png';
import PowerBIImg from '../public/skills/powerbi.png';

import VSCodeImg from '../public/skills/vscode.png';
import PyCharmImg from '../public/skills/pycharm.png';
import AdobeXDImg from '../public/skills/adobexd.png';

import LoadingPage from './loading';

function Home() {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   import ('bootstrap/dist/js/bootstrap.min.js');
  //   setLoading(false);
  // }, []);

  // if (loading) {
  //   return <LoadingPage />
  // }

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
        alert("Message has been sent! Garrett will get in touch soon!");
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
          <div className="relative flex flex-col min-h-screen w-fit p-12 text-white text-right">
            <section id="about" className="relative flex z-30 w-[60vw] bg-themeGray px-10 py-8 dark:bg-themeNavy mr-[-100px] md:ml-3">
              <div className="">
                <h1 className="font-aileronSemiBold text-7xl">My Skills</h1>
                <p className="text-lg text-black font-cardoRegular dark:text-white">
                  These are current tools in my repertoire I love building with, and I always enjoy experimenting and trying out new things. 
                  It's my goal to keep learning and growing as much as I can!
                </p>
                <div className="py-4 pr-2">
                  <div className="grid grid-cols-8 gap-4">
                    <div className="col-span-7">
                      <div className="flex flex-wrap h-full items-center justify-end gap-4">
                        <a className="flex" href="https://react.dev" target="_blank" rel="noopener noreferrer">
                          <Image src={ReactImg} alt="React" width={50} height={50}/>
                        </a>
                        <a className="flex" href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                          <Image src={NextJsImg} alt="NextJs" width={50} height={50}/>
                        </a>
                        <a className="flex" href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
                          <Image src={BootstrapImg} alt="Bootstrap" width={50} height={50}/>
                        </a>
                        <a className="flex" href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                          <Image src={TailwindImg} alt="Tailwind" width={50} height={50}/>
                        </a>
                        <a className="flex" href="https://sass-lang.com" target="_blank" rel="noopener noreferrer">
                          <Image src={SassImg} alt="Sass" width={50} height={50}/>
                        </a>
                      </div>
                    </div>
                    <div className="flex col-span-1 px-4 py-5 items-end justify-center bg-themeNavy text-themeGray dark:bg-themeGray dark:text-themeNavy">
                      <h2 className="text-md" style={{ writingMode: 'vertical-rl' }}>front end</h2>
                    </div>
                  </div>
                </div>
                <div className="py-4 pr-2">
                  <div className="grid grid-cols-8 gap-4">
                    <div className="col-span-7">
                      <div className="flex flex-wrap h-full items-center justify-end gap-4">
                        <a className="flex" href="https://www.python.org" target="_blank" rel="noopener noreferrer">
                          <Image src={PythonImg} alt="Python" width={50} height={50}/>
                        </a>
                        <a className="flex" href="https://www.djangoproject.com" target="_blank" rel="noopener noreferrer">
                          <Image src={DjangoImg} alt="Django" width={50} height={50}/>
                        </a>
                        <a className="flex" href="https://flask.palletsprojects.com/en/2.3.x/" target="_blank" rel="noopener noreferrer">
                          <Image src={FlaskImg} alt="Flask" width={50} height={50}/>
                        </a>
                        <a className="flex" href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
                          <Image src={NodeJsImg} alt="NodeJs" width={50} height={50}/>
                        </a>
                        <a className="flex" href="https://jwt.io" target="_blank" rel="noopener noreferrer">
                          <Image src={JWTImg} alt="JWT" width={50} height={50}/>
                        </a>
                        <a className="flex" href="https://redux.js.org" target="_blank" rel="noopener noreferrer">
                          <Image src={ReduxJsImg} alt="ReduxJs" width={50} height={50}/>
                        </a>
                        <a className="flex" href="https://www.sqlite.org/index.html" target="_blank" rel="noopener noreferrer">
                          <Image src={SQLiteImg} alt="SQLite" width={50} height={50}/>
                        </a>
                      </div>
                    </div>
                    <div className="flex col-span-1 px-4 py-5 items-end justify-center bg-themeNavy text-themeGray dark:bg-themeGray dark:text-themeNavy">
                      <h2 className="text-md" style={{ writingMode: 'vertical-rl' }}>back end</h2>
                    </div>
                  </div>
                </div>
                <div className="py-4 pr-2">
                  <div className="grid grid-cols-8 gap-4">
                    <div className="col-span-7">
                      <div className="flex flex-wrap h-full items-center justify-end gap-4">
                        <a className="flex" href="https://www.anaconda.com" target="_blank" rel="noopener noreferrer">
                          <Image src={AnacondaImg} alt="Anaconda" width={50} height={50}/>
                        </a>
                        <a className="flex" href="https://jupyter.org" target="_blank" rel="noopener noreferrer">
                          <Image src={JupyterImg} alt="Jupyter" width={50} height={50}/>
                        </a>
                        <a className="flex" href="https://powerbi.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer">
                          <Image src={PowerBIImg} alt="PowerBI" width={50} height={50}/>
                        </a>
                      </div>
                    </div>
                    <div className="flex col-span-1 px-4 py-5 items-end justify-center bg-themeNavy text-themeGray dark:bg-themeGray dark:text-themeNavy">
                      <h2 className="text-md" style={{ writingMode: 'vertical-rl' }}>analytics</h2>
                    </div>
                  </div>
                </div>
                <div className="py-4 pr-2">
                  <div className="grid grid-cols-8 gap-4">
                    <div className="col-span-7">
                      <div className="flex flex-wrap h-full items-center justify-end gap-4">
                        <a className="flex" href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">
                          <Image src={VSCodeImg} alt="VSCode" width={50} height={50}/>
                        </a>
                        <a className="flex" href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer">
                          <Image src={PyCharmImg} alt="PyCharm" width={50} height={50}/>
                        </a>
                        <a className="flex" href="https://helpx.adobe.com/xd/user-guide.html" target="_blank" rel="noopener noreferrer">
                          <Image src={AdobeXDImg} alt="AdobeXD" width={50} height={50}/>
                        </a>    
                      </div>
                    </div>
                    <div className="flex col-span-1 px-4 py-5 items-end justify-center bg-themeNavy text-themeGray dark:bg-themeGray dark:text-themeNavy">
                      <h2 className="text-md [writing-mode:vertical-rl]">apps</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="relative flex flex-col min-h-screen w-full bg-about-section">
          </div>
        </div>

        <div className="flex flex-row mt-[-20px] mb-[-20px] bg-square dark:bg-square-dark">
          <div className="relative flex w-full min-h-screen text-white bg-topography dark:bg-topography-dark">
            <section id="work" className="relative w-fit pl-10 pr-10 pt-10 z-20 text-center items-center justify-center md:pl-28">
              <div className="bg-themeGray px-10 py-5 mb-10 dark:bg-themeNavy">
                <h1 className="font-aileronSemiBold text-7xl">My Work</h1>
                <p className="text-lg text-black font-cardoRegular dark:text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Eget sit amet tellus cras adipiscing enim eu. 
                </p>

                <div className="">
                  <div className="flex flex-col">
                    
                    
                    <div className="flex flex-col h-fit justify-between">
                      <div className="flex flex-row gap-2 items-end justify-between">
                        <h1 className="">01</h1>
                        <h1 className="text-lg text-themeNavy dark:text-themeGray">HikingVentures Full-Stack App</h1>
                      </div>
                      <div className="flex flex-col py-2 md:flex-row">
                        <div className="relative carousel h-full w-full pt-2">
                          <div id="slide1" className="relative carousel-item w-full">
                            <div className="bg-about-section h-80 w-full"></div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide3" className="btn rounded-none border-0 bg-themeOrange hover:bg-themeNavy">❮</a> 
                              <a href="#slide2" className="btn rounded-none border-0 bg-themeOrange hover:bg-themeNavy">❯</a>
                            </div>
                          </div>
                          <div id="slide2" className="relative carousel-item w-full">
                            <div className="bg-contact-section h-80 w-full"></div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide1" className="btn rounded-none border-0 bg-themeOrange hover:bg-themeNavy">❮</a> 
                              <a href="#slide3" className="btn rounded-none border-0 bg-themeOrange hover:bg-themeNavy">❯</a>
                            </div>
                          </div> 
                          <div id="slide3" className="relative carousel-item w-full">
                            <div className="bg-intro-section h-80 w-full"></div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide2" className="btn rounded-none border-0 bg-themeOrange hover:bg-themeNavy">❮</a> 
                              <a href="#slide1" className="btn rounded-none border-0 bg-themeOrange hover:bg-themeNavy">❯</a>
                            </div>
                          </div> 
                        </div>
                        <div className="flex flex-row gap-2 pt-2 items-center justify-between md:flex-wrap md:w-24 md:pt-1 md:pl-2 md:justify-center">
                          <button className="flex bg-themeNavy p-5 hover:bg-themeOrange dark:bg-themeGray dark:text-themeNavy dark:hover:bg-themeOrange">
                            <a class="" href="https://github.com/gdbecker" target="_blank" rel="noopener noreferrer">
                              <FaGithub />
                            </a>
                          </button>
                          <button className="flex bg-themeNavy p-5 hover:bg-themeOrange dark:bg-themeGray dark:text-themeNavy dark:hover:bg-themeOrange">
                            <a class="" href="/" target="_blank" rel="noopener noreferrer">
                              <BiMoviePlay />
                            </a>
                          </button>
                          <h2 className="flex text-right md:h-44 text-themeNavy break-normal dark:text-themeGray md:text-left md:[writing-mode:vertical-rl]">
                            Personal project. Lead developer and designer.
                          </h2>
                        </div>
                      </div>

                      <div className="flex flex-row gap-2 items-end justify-between">
                        <h1 className="">02</h1>
                        <h1 className="text-lg text-themeNavy dark:text-themeGray">Frontend Mentor Projects</h1>
                      </div>
                      <div className="flex flex-col py-2 md:flex-row">
                        <div className="relative carousel h-full w-full pt-2">
                          <div id="slide1" className="relative carousel-item w-full">
                            <div className="bg-about-section h-80 w-full"></div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide3" className="btn rounded-none border-0 bg-themeOrange hover:bg-themeNavy">❮</a> 
                              <a href="#slide2" className="btn rounded-none border-0 bg-themeOrange hover:bg-themeNavy">❯</a>
                            </div>
                          </div>
                          <div id="slide2" className="relative carousel-item w-full">
                            <div className="bg-contact-section h-80 w-full"></div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide1" className="btn rounded-none border-0 bg-themeOrange hover:bg-themeNavy">❮</a> 
                              <a href="#slide3" className="btn rounded-none border-0 bg-themeOrange hover:bg-themeNavy">❯</a>
                            </div>
                          </div> 
                          <div id="slide3" className="relative carousel-item w-full">
                            <div className="bg-intro-section h-80 w-full"></div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide2" className="btn rounded-none border-0 bg-themeOrange hover:bg-themeNavy">❮</a> 
                              <a href="#slide1" className="btn rounded-none border-0 bg-themeOrange hover:bg-themeNavy">❯</a>
                            </div>
                          </div> 
                        </div>
                        <div className="flex flex-row gap-2 pt-2 items-center justify-between md:flex-wrap md:w-24 md:pt-1 md:pl-2 md:justify-center">
                          <button className="flex bg-themeNavy p-5 hover:bg-themeOrange dark:bg-themeGray dark:text-themeNavy dark:hover:bg-themeOrange">
                            <a class="" href="https://github.com/gdbecker" target="_blank" rel="noopener noreferrer">
                              <FaGithub />
                            </a>
                          </button>
                          <button className="flex bg-themeNavy p-5 hover:bg-themeOrange dark:bg-themeGray dark:text-themeNavy dark:hover:bg-themeOrange">
                            <a class="" href="/" target="_blank" rel="noopener noreferrer">
                              <BiMoviePlay />
                            </a>
                          </button>
                          <h2 className="flex text-right md:h-44 text-themeNavy break-normal dark:text-themeGray md:text-left md:[writing-mode:vertical-rl]">
                            Challenge projects to grow in front-end development.
                          </h2>
                        </div>
                      </div>

                      
                    </div>
                  </div>
                  

                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="flex flex-row">
          <div className="relative flex flex-col min-h-screen w-full bg-contact-section">   
          </div>
          <div className="relative flex flex-col min-h-screen w-full p-1 pt-12 text-white">
            <div id="contact" className="p-5 ml-[-70px] mb-10 bg-themeGray w-full dark:bg-themeNavy">
              <h1 className="pb-5 font-aileronSemiBold text-4xl">let's chat!</h1>
              <form className="" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="name">
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
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="phone">
                    phone number
                  </label>
                  <input 
                    className="appearance-none border-themeGray w-full py-2 px-3 text-grayishBlue leading-tight focus:border-themeOrange focus:ring-0" 
                    id="phone" 
                    type="text" 
                    placeholder="phone number"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="email">
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
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="message">
                    message
                  </label>
                  <textarea 
                    className="appearance-none border-themeGray w-full py-2 px-3 text-grayishBlue leading-tight focus:border-themeOrange focus:ring-0" 
                    id="message" 
                    type="text" 
                    placeholder="message"
                    minLength="10"
                    required
                  />
                </div>
                <button className="bg-themeNavy px-10 py-4 mb-12 hover:bg-themeOrange dark:bg-themeGray dark:text-themeNavy dark:hover:bg-themeOrange">
                  send message
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
