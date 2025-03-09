import ProductCard from "@/components/ui/core/ProductCard";
import { TMedicine } from "@/types/product";

const FeatureSection = async ({ product }: { product: TMedicine[] }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold">Feature Products</h2>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 mt-6">
        {product.slice(0, 8)?.map((item: TMedicine) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
