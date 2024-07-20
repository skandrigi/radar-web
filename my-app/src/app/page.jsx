import { Navbar } from "../../components/Navbar";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative" id="home">
      <div className="absolute top-0 left-0 w-full z-10 text-white"> {/* Removed p-4 for demonstration */}
        <div className="mx-auto flex justify-end items-center w-full"> {/* Removed container class, ensure full width */}
          <span role="img" aria-label="party" className="absolute left-8 top-4 text-xl">🎉</span>
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
          <div className="flex flex-row items-center justify-center mt-8 mb-6 text-white">
            <div className="mr-5 p-4 border border-white rounded bg-gradient-custom"> 
              <FaApple/>
            </div>
            <div className="ml-5 p-4 border border-white rounded bg-gradient-custom">
              <FaGooglePlay/>
            </div>
          </div>
        </main>
        <div className="pattern-zigzag-3d pattern-blue-500 pattern-bg-black 
          pattern-size-6 pattern-opacity-20 w-full h-full bg-black text-white">
            hi
        </div>
      </section>
      <section id="faq">
        hi
      </section>
    </div>
  );
}