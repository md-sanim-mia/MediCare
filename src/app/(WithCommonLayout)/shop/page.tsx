import AllProducts from "@/components/modules/shop";
import NMBanner from "@/components/ui/core/NMbanner";
import { getAllProducts } from "@/services/products";
type TSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const ShopPage = async ({ searchParams }: { searchParams: TSearchParams }) => {
  const query = await searchParams;
  const { data: product } = await getAllProducts(query);

  return (
    <div className="max-w-screen-xl mx-auto">
      <NMBanner title="Start Your Healthy Life Today!" path="Home - shop" />
      <AllProducts product={product} />
    </div>
  );
};

export default ShopPage;
