import BannerSection from "@/components/modules/Home/Banner";
import FeatureSection from "@/components/modules/Home/Features";
import HeroSection from "@/components/modules/Home/HeroSection";
import TestmonialSection from "@/components/modules/Home/Testimonial";

const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <HeroSection />
      <FeatureSection />
      <TestmonialSection />
    </div>
  );
};

export default HomePage;
