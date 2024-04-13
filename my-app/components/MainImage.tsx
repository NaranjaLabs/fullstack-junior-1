import Image from "next/image";

function MainImage() {
  return (
    <div className="relative image-canva">
      <Image
        src="/image-components/vector.svg"
        alt="Dark spot"
        width={514.52}
        height={544.93}
        className="absolute dark-spot"
      />
      <Image 
        src="/image-components/center-image.svg"
        alt="A woman in a pink spot background"
        width={694.73}
        height={617.7}
        className="absolute z-0 top-0 center-image"
      />
      <Image
        src="/image-components/ornament-vertical.svg"
        alt="Dotted vertical lines"
        width={80}
        height={176}
        className="absolute z-10 left-0 dotted-vertical-lines"
      />
      <Image
        src="/image-components/ornament-horizontal.svg"
        alt="Dotted horizontal lines"
        width={176}
        height={80}
        className="absolute z-10 dotted-horizontal-lines"
      />
      <Image
        src="/image-components/projects.svg"
        alt="Quantity of projects made (+2K)"
        width={200}
        height={112}
        className="absolute z-10 projects"
      />
      <Image
        src="/image-components/satisfaction.svg"
        alt="Satisfaction rating with the service(4.8)"
        width={202}
        height={109}
        className="absolute z-10 satisfaction"
      />
      <Image
        src="/image-components/product-designer.svg"
        alt="Time as Product designer(5 Years)"
        width={336}
        height={112}
        className="absolute z-10 product-designer"
      />
    </div>
  )
}

export default MainImage;