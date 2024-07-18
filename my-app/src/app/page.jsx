import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

export default function Home() {
  return (
    <section>
      <header>
        <div className="sm:invisible md:visible l:visible xl:visible">
          hi
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-custom">
        <div className="text-8xl text-white">
          Radar
        </div>
        <div className="">

        </div>
        <div className="flex-row">
          <FaApple/>
          <FaGooglePlay/>
        </div>
      </main>
    </section>
  );
}
