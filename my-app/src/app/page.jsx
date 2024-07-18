import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <nav>
        <header>
          <div className="sm:invisible md:visible lg:visible xl:visible text-white underline text-lg mb-2">
            hi
          </div>
        </header>
      </nav>
      <section className="grid grid-cols-2">
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-custom text-white">
        <div className="text-9xl text-white font-bold">
          Radar
        </div>
        <div className="text-xl mt-6">
          Your Campus, Your Events. Based in College Station.
        </div>
        <div className="flex flex-row items-center justify-center mt-6 mb-6">
          <FaApple/>
          <FaGooglePlay/>
        </div>
      </main>
      <div className="pattern-zigzag-3d pattern-blue-500 pattern-bg-white 
        pattern-size-6 pattern-opacity-20 w-full h-full">
          zzzzzzzzzzzzzzzzzzzzzzzz
      </div>
  
      </section>
    </div>
  );
}
