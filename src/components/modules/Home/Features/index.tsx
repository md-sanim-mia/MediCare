import ProductCard from "@/components/ui/core/ProductCard";

const FeatureSection = () => {
  const product = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold">Feature Products</h2>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 mt-6">
        {product.map((item) => (
          <ProductCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
