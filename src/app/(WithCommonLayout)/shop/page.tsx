import AllProducts from "@/components/modules/shop";

const ShopPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="h-[300px] bg-[#c6e6ea] mt-3 rounded-lg flex items-center justify-center text-center px-6">
        <div>
          <h2 className="text-3xl font-bold text-[#055160]">
            Start Your Healthy Life Today!
          </h2>
          <p className="text-lg text-[#0a6466] mt-2">
            Get all your essential medicines easily from our shop.
          </p>
        </div>
      </div>
      <AllProducts />
    </div>
  );
};

export default ShopPage;
