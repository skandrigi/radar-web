import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import CountdownTimer from './components/CountdownTimer.jsx';

export default function Home() {
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
      <section className="sm:flex sm:flex-col md:grid md:grid-cols-2">
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-custom text-white">
          <div className="text-9xl text-white font-bold">
            Radar
          </div>
          <div className="text-xl mt-6 sm:ml-4">
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
        <div className="w-full h-full bg-black text-white">
          <a className="text-8xl text-white flex font-bold items-center justify-center min-h-screen hover:underline" href="https://bit.ly/3x4FTdK" target="_blank">
            <CountdownTimer targetDate="2024-08-19T17:00:00" />
          </a>
        </div>
      </section>
      <section id="faq" className='bg-gray-400 border-80 flex items-center justify-center w-full h-full p-10'>
        <div id="header" className='text-8xl text-white font-bold mt-6'>
          FAQ
        </div>
        <div className='flex items-center justify-center'>
          <div className='text-4xl text-white mt-6'>
            <p>What is Radar?</p>
            <p>Radar is a mobile app that helps you discover events happening on your campus.</p>
          </div>
          <div className='text-4xl text-white mt-6'>
            <p>When will Radar be available?</p>
            <p>Radar will be available for download on August 19, 2024.</p>
          </div>
          <div className='text-4xl text-white mt-6'>
            <p>How can I get in touch with the Radar team?</p>
            <p>You can reach out to us at</p>
          </div>
        </div>
      </section>
    </div>
  );
}