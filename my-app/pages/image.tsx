import Image from "next/image";

function MainImage() {
  return (
    <main className="flex justify-center items-center">
      <div className="relative image-canva">
        <Image
          src="/image-components/vector.svg"
          alt="Dark spot"
          width={514.52}
          height={544.93}
          className="absolute dark-spot"
        />
      </div>
    </main>
  )
}

export default MainImage;