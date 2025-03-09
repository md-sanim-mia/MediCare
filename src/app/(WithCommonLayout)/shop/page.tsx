import AllProducts from "@/components/modules/shop";
import NMBanner from "@/components/ui/core/NMbanner";
import { getAllProducts } from "@/services/products";

const ShopPage = async () => {
  const { data: product } = await getAllProducts();
  return (
    <div className="max-w-screen-xl mx-auto">
      <NMBanner title="Start Your Healthy Life Today!" path="Home - shop" />
      <AllProducts product={product} />
    </div>
  );
};

export default ShopPage;
