import { Button } from "@/components/ui/button";
import Image from "next/image";
import productImage from "..//..//..//..//assets/on_12-removebg-preview.png";
import productImage2 from "..//..//..//..//assets/pill-bottle-spilling-pills-surface-isolated-white-background_63834-236-removebg-preview.png";
const HeroSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:flex lg:my-24 gap-12 md:my-20 my-16 items-center">
      <div className=" flex justify-between lg:w-1/2 bg-[#bedcf3] rounded-md py-10 px-10">
        <div>
          <h2 className="text-sm uppercase">strting with $20</h2>
          <p className="my-4">your day-life protection</p>
          <h2 className="text-3xl font-bold capitalize">Protein supplement</h2>
          <Button className="mt-5 bg-[#ff7046] rounded-full">Shop Now</Button>
        </div>
        <Image
          height={300}
          width={200}
          className="-rotate-45"
          src={productImage}
          alt="product"
        />
      </div>
      <div className=" flex lg:w-1/2 rounded-md bg-[#efefef] py-10 px-10">
        <div>
          <h2 className="text-sm uppercase">Get up to % 22</h2>
          <p className="my-4">your day-life protection</p>
          <h2 className="text-3xl font-bold capitalize">Immunity Bossters</h2>
          <Button className="mt-5 bg-[#ff7046] rounded-full">Shop Now</Button>
        </div>
        <Image
          height={300}
          width={200}
          className=""
          src={productImage2}
          alt="product"
        />
      </div>
    </div>
  );
};

export default HeroSection;
