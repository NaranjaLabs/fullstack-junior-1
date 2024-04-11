import NavBar from "@/components/NavBar";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ weight: ["400", "600"], subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Image
        src="/elipse1.svg" alt="My Icon" width={100} height={100}
        className="elipse1 absolute z-0"
      />
      <header className="header flex items-center justify-evenly">
        <h1 className={ `${poppins.className} logo font-semibold` }>Luxe</h1>
        <NavBar />
      </header>
      <main>
        
      </main>
    </>
  );
}
