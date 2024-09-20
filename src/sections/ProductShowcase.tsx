import Image from "next/image";
import ProductIamge from "@/assets/product-image.png";
import PyramindImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost Your Productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010d3e] mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductIamge} alt="Product Showcase" className="mt-10" />
          <Image
            src={PyramindImage}
            alt="Pyramid"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={TubeImage}
            alt="Tube"
            height={248}
            className="hidden md:block absolute -left-36 bottom-24"
          />
        </div>
      </div>
    </section>
  );
};
