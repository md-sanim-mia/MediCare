import ProductDeatils from "@/components/modules/shop/productDeatils/ProductDeatils";
import NMBanner from "@/components/ui/core/NMbanner";

const ProductDeatilsPage = ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  console.log(params);
  return (
    <div>
      <NMBanner
        title="Product Details "
        path="Home - Products - Product Details"
      />
      <ProductDeatils />
    </div>
  );
};

export default ProductDeatilsPage;
