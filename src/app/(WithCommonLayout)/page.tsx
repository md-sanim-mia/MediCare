import BannerSection from "@/components/modules/Home/Banner";
import FeatureSection from "@/components/modules/Home/Features";
import HeroSection from "@/components/modules/Home/HeroSection";
import TestmonialSection from "@/components/modules/Home/Testimonial";
import { getAllProducts } from "@/services/products";

const HomePage = async () => {
  const { data: product } = await getAllProducts();
  return (
    <div>
      <BannerSection />
      <HeroSection />
      <FeatureSection product={product} />
      <TestmonialSection />
    </div>
  );
};

export default HomePage;
