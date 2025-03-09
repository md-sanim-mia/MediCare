import ProductDeatils from "@/components/modules/shop/productDeatils/ProductDeatils";
import NMBanner from "@/components/ui/core/NMbanner";
import { getSingleProduct } from "@/services/products";

const ProductDeatilsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { data } = await getSingleProduct(productId);
  return (
    <div>
      <NMBanner
        title="Product Details "
        path="Home - Products - Product Details"
      />
      <ProductDeatils product={data} />
    </div>
  );
};

export default ProductDeatilsPage;
