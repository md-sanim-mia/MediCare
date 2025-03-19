import UpdatedProductForm from "@/components/modules/Admin/Products/UpdatedProduct";
import { getSingleProduct } from "@/services/products";

const UpdatedProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { data } = await getSingleProduct(productId);
  return (
    <div className="flex justify-center">
      <UpdatedProductForm product={data} />
    </div>
  );
};

export default UpdatedProductPage;
