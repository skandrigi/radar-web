import Image from "next/image";
import { Navbar } from "../../components/Navbar";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-custom">
        <div>
        Page
        </div>
      </main>
    </div>
  );
}
