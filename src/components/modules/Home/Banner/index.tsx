"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {
  BadgePercent,
  CreditCard,
  Headphones,
  ShieldCheck,
  Truck,
} from "lucide-react";
const BannerSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="">
        <div className="bg-[#c6e6ea] text-[#3d4342]  w-full">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="mySwiper  grid items-center max-w-screen-xl mx-auto"
          >
            {/* Slide 1 */}
            <SwiperSlide className="" key="slide1">
              <div className="max-w-screen-xl lg:h-[500px] items-center mx-auto px-7 lg:flex flex-row-reverse  gap-6">
                <motion.div
                  key="motion-img-slide1" // key change here
                  initial={{ x: 100, opacity: 0 }}
                  animate={activeIndex === 0 ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1 }}
                  className="lg:w-1/2"
                >
                  <Image
                    height={100}
                    width={100}
                    src="https://i.postimg.cc/PJsZYpXL/premium-photo-1673953509975-576678fa6710-removebg-preview.png"
                    alt="Pharmacy"
                    className="w-full h-auto"
                  />
                </motion.div>
                <motion.div
                  key="motion-slide1" // key change here
                  className="lg:w-1/2 space-y-6"
                  initial={{ x: -100, opacity: 0 }}
                  animate={activeIndex === 0 ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-3xl md:text-4xl font-bold leading-normal">
                    <span className="text-[#ff7046]">30 Years</span> of Trusted
                    Healthcare Partnership
                  </h1>
                  <p className=" text-md">
                    Your Health, Our Priority – Reliable and Affordable
                    Healthcare Solutions
                  </p>
                  <p className=" text-lg">
                    100% Authentic Medicines Guaranteed With Fast Home Delivery
                    Service
                  </p>
                  <button className="bg-[#ff7046] text-white px-8 py-3 rounded-full transition-all duration-300">
                    Shop Now
                  </button>
                </motion.div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide key="slide2">
              <div className="max-w-screen-xl lg:h-[500px] items-center mx-auto px-7 lg:flex flex-row-reverse gap-6">
                <motion.div
                  key="motion-img-slide2" // key change here
                  initial={{ x: 100, opacity: 0 }}
                  animate={activeIndex === 1 ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1 }}
                  className="lg:w-1/2"
                >
                  <Image
                    height={100}
                    width={100}
                    src="https://i.postimg.cc/qqtwG0Tg/Jess-Mc-Lean-medicationdisposal690x400-removebg-preview.png"
                    alt="Pharmacy"
                    className="w-full h-auto"
                  />
                </motion.div>
                <motion.div
                  key="motion-slide2" // key change here
                  className="lg:w-1/2 space-y-6"
                  initial={{ x: -100, opacity: 0 }}
                  animate={activeIndex === 1 ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-3xl md:text-4xl font-bold  leading-normal">
                    <span className="text-[#ff7046]">Quality Medicines</span>{" "}
                    for <br />
                    Every Need
                  </h1>
                  <p className=" text-md">
                    Your Trusted Source for Affordable and Reliable Medicine
                  </p>
                  <p className=" text-lg">
                    Fast and Convenient Delivery – Ensuring Your Health Comes
                    First
                  </p>
                  <button className="bg-[#ff7046] text-white px-8 py-3 rounded-full transition-all duration-300">
                    Shop Now
                  </button>
                </motion.div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide key="slide3">
              <div className="max-w-screen-xl lg:h-[500px] items-center mx-auto px-7  lg:flex flex-row-reverse gap-6">
                <motion.div
                  key="motion-img-slide3" // key change here
                  initial={{ x: 100, opacity: 0 }}
                  animate={activeIndex === 2 ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1 }}
                  className="lg:w-1/2"
                >
                  <Image
                    height={100}
                    width={100}
                    src="https://i.postimg.cc/N05xtBKD/1-1-removebg-preview.png"
                    alt="Pharmacy"
                    className="w-full h-auto"
                  />
                </motion.div>
                <motion.div
                  key="motion-slide3" // key change here
                  className="lg:w-1/2 space-y-6"
                  initial={{ x: -100, opacity: 0 }}
                  animate={activeIndex === 2 ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-normal">
                    <span className="text-[#ff7046]">Special Offers!</span> For
                    Regular Customers
                  </h1>
                  <p className=" text-md">
                    Get 10% Extra Discount on Every $1000 Purchase
                  </p>
                  <p className=" text-lg">
                    Earn Loyalty Points & Redeem Exciting Rewards
                  </p>
                  <button className="bg-[#ff7046] text-white px-8 py-3 rounded-full transition-all duration-300">
                    Shop Now
                  </button>
                </motion.div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="max-w-screen-xl mx-auto mt-5">
          <div className="flex items-center justify-around">
            <div className="flex gap-2 items-center">
              <ShieldCheck size={40} className="text-[#ff7046] mx-auto" />
              <div>
                <h2 className="text-xl font-bold">Secure Payments</h2>
                <p className="uppercase text-sm mt-2">All cards accepted</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Headphones size={40} className="text-[#ff7046] mx-auto" />
              <div>
                <h2 className="text-xl font-bold">Online Support</h2>
                <p className="uppercase text-sm mt-2">technical 24/10</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Truck size={40} className="text-[#ff7046] mx-auto" />
              <div>
                <h2 className="text-xl font-bold">Free Shipping </h2>
                <p className="uppercase text-sm mt-2"> on all orders</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <BadgePercent size={40} className="text-[#ff7046] mx-auto" />
              <div>
                <h2 className="text-xl font-bold">Discounts Online </h2>
                <p className="uppercase text-sm mt-2">weekend salse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
