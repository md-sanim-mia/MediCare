"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
const BannerSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
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
        className="mySwiper bg-blue-100 w-full grid items-center"
      >
        {/* Slide 1 */}
        <SwiperSlide key="slide1">
          <div
            className="w-[92%] lg:h-[530px] items-center mx-auto px-7 lg:flex flex-row-reverse  gap-6
          2"
          >
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-normal">
                <span className="text-blue-600">30 Years</span> of Trusted
                Healthcare Partnership
              </h1>
              <p className="text-gray-600 text-md">
                Your Health, Our Priority – Reliable and Affordable Healthcare
                Solutions
              </p>
              <p className="text-gray-600 text-lg">
                100% Authentic Medicines Guaranteed With Fast Home Delivery
                Service
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300">
                Shop Now
              </button>
            </motion.div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide key="slide2">
          <div className="w-[92%] lg:h-[530px] items-center mx-auto px-7 lg:flex flex-row-reverse gap-6">
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-normal">
                <span className="text-blue-600">Quality Medicines</span> for{" "}
                <br />
                Every Need
              </h1>
              <p className="text-gray-600 text-md">
                Your Trusted Source for Affordable and Reliable Medicine
              </p>
              <p className="text-gray-600 text-lg">
                Fast and Convenient Delivery – Ensuring Your Health Comes First
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300">
                Shop Now
              </button>
            </motion.div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide key="slide3">
          <div className="w-[92%] lg:h-[530px] items-center mx-auto px-7  lg:flex flex-row-reverse gap-6">
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
                <span className="text-blue-600">Special Offers!</span> For
                Regular Customers
              </h1>
              <p className="text-gray-600 text-md">
                Get 10% Extra Discount on Every $1000 Purchase
              </p>
              <p className="text-gray-600 text-lg">
                Earn Loyalty Points & Redeem Exciting Rewards
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300">
                Shop Now
              </button>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSection;
