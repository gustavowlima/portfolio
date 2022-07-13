import React, { useState } from "react";

import { Header } from './components/Header'

import html_icon from '../assets/HTML5.svg'
import css_icon from '../assets/css_icon.svg'
import js_icon from '../assets/js_icon.svg'
import react_icon from '../assets/react_icon.svg'
import tailwind from '../assets/tailwindcss.svg'
import typescript_icon from '../assets/typescript_icon.svg'

import { FaGithub, FaInstagram } from 'react-icons/fa'


import website_image from '../assets/website_image.png'
import { ProjectSection } from "./components/ProjectSection";

function App() {

  const [handle, setHandle] = useState('invisible')

  const Menu = () => (
    
    <div className={`${handle} w-full h-full fixed top-0 right-0 left-0 bottom-0 bg-[#09041Dc7] backdrop-blur-xl z-[998]`}>
               
    </div>
  )
  
  return (
    <div className="flex flex-col h-full px-4 bg-no-repeat bg-blur bg-[position:-7rem_top] bg-contain">
      
      <Header />
      <Menu />
      <main>
        <section className="flex flex-col mt-[10rem] items-center space-y-8 md:h-screen md:flex-row md:mt-0 md:px-44">

          <div className="flex flex-col w-full md:w-full">
            <div>
              <p className="mb-2">Olá, sou</p>
              <h2 className="text-3xl font-bold">Gustavo Wellington</h2>
              <span className="text-sm">Front-end developer</span>
              <a href="https://wa.me/5583996278681" className="flex items-center justify-center w-full h-14 rounded-full bg-purple mt-10 hover:bg-purplePersian md:max-w-md">Enviar mensagem</a>

              <div className="flex w-full justify-center space-x-6 mt-5 md:max-w-md">
                <a href="https://github.com/gustavowlima"><FaGithub size={30} /></a>
                <a href="https://instagram.com/gustavowlsilva"><FaInstagram size={30} /></a>

              </div>
            </div>

          </div>

          <div className="flex justify-center md:w-full">
            <img className="w-5/6 max-w-2xl" src={website_image} alt="Desenho imagem website" />
          </div>
        </section>

        <section className="mt-16 mb-16 md:mt-0">
          <ProjectSection />
        </section>

        <section className="md:flex md:flex-row">

          <div className="flex md:mt-20 md:justify-center md:flex md:w-2/4 ">
            <h1 className="text-3xl font-bold mb-8">Hard skills</h1>
          </div>

          <div className="w-full md:w-2/4 grid justify-center justify-items-center grid-cols-2 gap-4 md:grid-cols-3">
            <div className="w-40 h-40 bg-purplePersian rounded-xl flex justify-center items-center">
              <img src={html_icon} alt="" />
            </div>

            <div className="w-40 h-40 bg-purplePersian rounded-xl flex justify-center items-center">
              <img src={css_icon} alt="" />
            </div>

            <div className="w-40 h-40 bg-purplePersian rounded-xl flex justify-center items-center">
              <img src={js_icon} alt="" />
            </div>

            <div className="w-40 h-40 bg-purplePersian rounded-xl flex justify-center items-center">
              <img src={react_icon} alt="" />
            </div>

            <div className="w-40 h-40 bg-purplePersian rounded-xl flex justify-center items-center">
              <img src={tailwind} alt="" />
            </div>

            <div className="w-40 h-40 bg-purplePersian rounded-xl flex justify-center items-center">
              <img src={typescript_icon} alt="" />
            </div>


          </div>
        </section>
      </main>
      <footer className="my-10 flex text-xs justify-center">Developer Gustavo Wellington</footer>
    </div>
  )
}

export default App