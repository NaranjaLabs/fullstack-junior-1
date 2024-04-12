import NavBar from "@/components/NavBar";
import ServiceCard from "@/components/ServiceCard";
import { Poppins, Bebas_Neue } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ['latin'] });
const bebas = Bebas_Neue({ weight: ["400"], subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Image
        src="/elipse1.svg" alt="Ellipse 1" width={100} height={100}
        className="elipse1 absolute z-0"
      />
      <Image
        src="/elipse2.svg" alt="Ellipse 2" width={100} height={100}
        className="elipse2 absolute z-0"
      />
      <header className="header w-full flex items-center justify-between px-40">
        <h1 className={ `${poppins.className} logo font-semibold` }>Luxe</h1>
        <NavBar className={ `${poppins.className} text-color` } />
        <Image
          alt="Menu Icon"
          src="/menuIcon.svg"
          height={32}
          width={32}
        />
      </header>
      <main className="pl-40 pr-4">
        <section className="flex mt-10 upper-section overflow-visible justify-between">
          <section className="flex flex-col main-text-container">
            <p className={ `text-2xl leading-9 font-medium ${poppins.className} text-color` }>Hi, there!</p>
            <p className={ `${bebas.className} main-text` }><span className="color-pink">LUXE</span> IS HERE TO BE YOUR ASSISTANCE</p>
            <p className={ `${poppins.className} font-normal text-2xl leading-10` }>I am here ready to help you in making creative digital products</p>
            <button className={ `text-lg leading-7 contact-button p-2 ${poppins.className} font-normal` }>
              Let’s Discuss
            </button>
          </section>
          <Image className="main-image" src="/image.png" alt="Image of portifolio owner " width={859} height={639}/>
        </section>
        <section className="our-service text-color">
          <h2 className={ `${bebas.className} font-normal text-5xl service-title` }>OUR SERVICE</h2>
          <ul className="flex">
            <ServiceCard
              imagePath="/branding.svg"
              title="Branding"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              className={ poppins.className }
            />
            <ServiceCard
              imagePath="/ui-design.svg"
              title="UI/UX"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              className={ poppins.className }
            />
            <ServiceCard
              imagePath="/product.svg"
              title="Product Design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              className={ poppins.className }
            />
          </ul>
        </section>
      </main>
    </>
  );
}
