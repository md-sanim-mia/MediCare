import ProductCard from "@/components/ui/core/ProductCard";
import FilterSidebar from "./filterSidebar";

const AllProducts = () => {
  const product = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="flex gap-8 my-10">
      <div>
        <FilterSidebar />
      </div>
      <div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 ">
          {product.map((item) => (
            <ProductCard key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
