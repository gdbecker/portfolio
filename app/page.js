'use client';
import React from 'react';
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
    <main className="font-aileronRegular bg-themeGray dark:bg-themeNavy">
      <div className="flex flex-row mb-[-20px] z-20">
        <div className="flex flex-col basis-1/2 min-h-screen w-full bg-intro-section">   
        </div>
        <div id="intro" className="flex flex-col min-h-screen w-full p-6 pt-0 text-white bg-topography md:p-20 dark:bg-topography-dark">
          <section className="bg-themeGray dark:bg-themeNavy">
            <div className="mt-24 p-5 md:mt-0">
              <h2 className="font-aileronSemiBold text-xl md:text-4xl">Hey, my name is</h2>
              <h1 className="font-aileronSemiBold text-themeNavy mt-0 py-2 md:text-8xl dark:text-themeOrange">Garrett Becker</h1>
              <h2 className="font-aileronSemiBold text-2xl md:text-5xl">and I build with purpose</h2>
              <div className="py-3 border-themeNavy border-b-2 dark:border-themeOrange"></div>
              <p className="text-lg text-black font-cardoRegular leading-8 py-4 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Eget sit amet tellus cras adipiscing enim eu. 
              </p>
            </div>
            
          </section>
        </div>
      </div>

      <div className="flex flex-row">
        <div id="about" className="relative flex flex-col min-h-screen w-fit p-12 text-white text-right">
          <section  className="relative flex z-30 w-[70vw] bg-themeGray px-10 py-8 dark:bg-themeNavy mr-[-100px] md:ml-3 md:w-[60vw] lg:w-[55vw]">
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
                        <Image src={ReactImg} alt="React" className="w-12 h-10"/>
                      </a>
                      <a className="flex" href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                        <Image src={NextJsImg} alt="NextJs" className="w-10 h-10"/>
                      </a>
                      <a className="flex" href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
                        <Image src={BootstrapImg} alt="Bootstrap" className="w-12 h-10"/>
                      </a>
                      <a className="flex" href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                        <Image src={TailwindImg} alt="Tailwind" className="w-10 h-10"/>
                      </a>
                      <a className="flex" href="https://sass-lang.com" target="_blank" rel="noopener noreferrer">
                        <Image src={SassImg} alt="Sass" className="w-10 h-10"/>
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
                        <Image src={PythonImg} alt="Python" className="w-10 h-10"/>
                      </a>
                      <a className="flex" href="https://www.djangoproject.com" target="_blank" rel="noopener noreferrer">
                        <Image src={DjangoImg} alt="Django" className="w-10 h-10"/>
                      </a>
                      <a className="flex" href="https://flask.palletsprojects.com/en/2.3.x/" target="_blank" rel="noopener noreferrer">
                        <Image src={FlaskImg} alt="Flask" className="w-10 h-10"/>
                      </a>
                      <a className="flex" href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
                        <Image src={NodeJsImg} alt="NodeJs" className="w-10 h-10"/>
                      </a>
                      <a className="flex" href="https://jwt.io" target="_blank" rel="noopener noreferrer">
                        <Image src={JWTImg} alt="JWT" className="w-10 h-10"/>
                      </a>
                      <a className="flex" href="https://redux.js.org" target="_blank" rel="noopener noreferrer">
                        <Image src={ReduxJsImg} alt="ReduxJs" className="w-10 h-10"/>
                      </a>
                      <a className="flex" href="https://www.sqlite.org/index.html" target="_blank" rel="noopener noreferrer">
                        <Image src={SQLiteImg} alt="SQLite" className="w-10 h-10"/>
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
                        <Image src={AnacondaImg} alt="Anaconda" className="w-10 h-10"/>
                      </a>
                      <a className="flex" href="https://jupyter.org" target="_blank" rel="noopener noreferrer">
                        <Image src={JupyterImg} alt="Jupyter" className="w-9 h-10"/>
                      </a>
                      <a className="flex" href="https://powerbi.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer">
                        <Image src={PowerBIImg} alt="PowerBI" className="w-10 h-10"/>
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
                        <Image src={VSCodeImg} alt="VSCode" className="w-10 h-10"/>
                      </a>
                      <a className="flex" href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer">
                        <Image src={PyCharmImg} alt="PyCharm" className="w-10 h-10"/>
                      </a>
                      <a className="flex" href="https://helpx.adobe.com/xd/user-guide.html" target="_blank" rel="noopener noreferrer">
                        <Image src={AdobeXDImg} alt="AdobeXD" className="w-10 h-10"/>
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

      <div id="work" className="flex flex-row mt-[-20px] mb-[-20px] bg-square dark:bg-square-dark">
        <div className="relative flex w-full text-white bg-topography dark:bg-topography-dark">
          <section className="relative w-fit pl-10 pr-10 pt-10 z-20 text-center items-center justify-center md:pl-28">
            <div className="bg-themeGray px-5 py-2 mb-10 dark:bg-themeNavy">
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
                      <h1 className="text-lg text-themeNavy text-right dark:text-themeGray">HikingVentures Full-Stack App</h1>
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
                      <h1 className="text-lg text-themeNavy text-right dark:text-themeGray">Frontend Mentor Projects</h1>
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

      <section id="contact" className="flex flex-row">
        <div className="relative flex flex-col basis-1/2 min-h-screen w-full bg-contact-section">   
        </div>
        <div className="relative flex flex-col min-h-screen w-full p-1 pt-12 text-white">
          <div  className="p-4 ml-[-70px] mb-8 bg-themeGray w-full dark:bg-themeNavy">
            <h1 className="pb-5 font-aileronSemiBold text-4xl">Let's chat!</h1>
            <form className="" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="name">
                  Name
                </label>
                <input 
                  className="appearance-none border-themeGray w-full py-2 px-3 text-grayishBlue leading-tight focus:border-themeOrange focus:ring-0" 
                  id="name" 
                  type="text" 
                  placeholder="Name" 
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="phone">
                  Phone Number
                </label>
                <input 
                  className="appearance-none border-themeGray w-full py-2 px-3 text-grayishBlue leading-tight focus:border-themeOrange focus:ring-0" 
                  id="phone" 
                  type="text" 
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="email">
                  Email
                </label>
                <input 
                  className="appearance-none border-themeGray w-full py-2 px-3 text-grayishBlue leading-tight focus:border-themeOrange focus:ring-0" 
                  id="email" 
                  type="text" 
                  placeholder="Email" 
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2 dark:text-white" htmlFor="message">
                  Message
                </label>
                <textarea 
                  className="appearance-none border-themeGray w-full py-2 px-3 text-grayishBlue leading-tight focus:border-themeOrange focus:ring-0" 
                  id="message" 
                  type="text" 
                  placeholder="Message"
                  minLength="10"
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
    
    </main>     
  )
}

export default Home;
