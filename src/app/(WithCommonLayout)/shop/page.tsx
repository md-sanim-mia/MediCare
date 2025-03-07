import AllProducts from "@/components/modules/shop";
import NMBanner from "@/components/ui/core/NMbanner";

const ShopPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <NMBanner title="Start Your Healthy Life Today!" path="Home - shop" />
      <AllProducts />
    </div>
  );
};

export default ShopPage;
