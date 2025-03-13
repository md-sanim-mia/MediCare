import ManageProducts from "@/components/modules/Admin/Products";
import { getAllProducts } from "@/services/products";

const ProductsPage = async () => {
  const { data } = await getAllProducts();
  return (
    <div>
      <ManageProducts products={data} />
    </div>
  );
};

export default ProductsPage;
