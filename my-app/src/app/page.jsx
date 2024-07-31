import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Faq from './components/Faq.jsx';
import dynamic from 'next/dynamic';

export default function Home() {
  const CountdownTimerSSR = dynamic(() => import('./components/CountdownTimer.jsx'), {
    ssr: false,
  });

  return (
    <div className="relative" id="home">
      <div className="fixed top-0 left-0 w-full z-10 text-white">
        <div className="mx-auto flex justify-end items-center w-full">
          <span role="img" aria-label="party" className="absolute select-none left-8 top-4 text-2xl">🎉</span>
          <ul className="flex space-x-4 mr-8 mt-4 text-xl"> 
            <li><a href="#home" className="hover:text-gray-300 hover:underline">Home</a></li>
            <li><a href="#faq" className="hover:text-gray-300 hover:underline">FAQ</a></li>
          </ul>
        </div>
        </div>
      <section className="sm:flex sm:flex-col">
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-custom text-white">
          <div className="text-9xl text-white font-bold">
            Radar
          </div>
          <div className="text-xl mt-6 sm:flex sm:flex-col md:flex-none sm:justify-center md:justify-start text-slate-300">
            Your Campus, Your Events. Based in College Station.
          </div>
          <div className="flex flex-row items-center justify-center mt-8 mb-6 text-white text-2xl">
            <a className="mr-5 p-4 border border-white rounded-full bg-gradient-download hover:shadow-none hover:text-2xl hover:border-2" href="" target="_blank"> 
              <FaApple />
            </a>
            <a className="ml-5 p-4 border border-white rounded-full bg-gradient-download hover:shadow-none hover:text-2xl hover:border-2" href="" target="_blank">
              <FaGooglePlay />
            </a>
          </div>
        </main>
      </section>
      <section className='text-center cursor-auto text-4xl p-28 bg-black text-white'>
        <a className="hover:underline" href="https://duiq0o0da2d.typeform.com/to/xMd2I4mn" target="_blank">
          <CountdownTimerSSR targetDate="2024-08-19T17:00:00"/>
        </a>
      </section>
      <section id="faq" className='bg-gray-400 border-80 flex items-center justify-center w-full h-full p-10'>
        <Faq/>
      </section>
    </div>
  );
}