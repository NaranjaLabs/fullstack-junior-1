import NavBar from "@/components/NavBar";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ weight: ["400", "600"], subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Image
        src="/elipse1.svg" alt="Ellipse 1" width={100} height={100}
        className="elipse1 absolute z-0"
      />
      {/* <Image
        src="/elipse2.svg" alt="Ellipse 2" width={100} height={100}
        className="elipse2 absolute z-0"
      /> */}
      <header className="header w-full flex items-center justify-between px-40">
        <h1 className={ `${poppins.className} logo font-semibold` }>Luxe</h1>
        <NavBar className={ `${poppins.className}` } />
        <Image
          alt="Menu Icon"
          src="/menuIcon.svg"
          height={32}
          width={32}
        />
      </header>
      <main>
        
      </main>
    </>
  );
}
