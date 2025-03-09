import ProductCard from "@/components/ui/core/ProductCard";
import FilterSidebar from "./filterSidebar";
import { TMedicine } from "@/types/product";

const AllProducts = ({ product }: { product: TMedicine[] }) => {
  return (
    <div className="flex gap-8 my-10">
      <div>
        <FilterSidebar />
      </div>
      <div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 ">
          {product.map((item: TMedicine) => (
            <ProductCard key={item?._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
