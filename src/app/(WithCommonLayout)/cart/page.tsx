import Address from "@/components/modules/cart/Address";
import CartProducts from "@/components/modules/cart/CartProducts";
import Coupon from "@/components/modules/cart/Coupon";
import PaymentDetails from "@/components/modules/cart/PaymentDetails";
import NMBanner from "@/components/ui/core/NMbanner";

const AllCartPage = () => {
  return (
    <div className="mx-auto max-w-screen-xl mt-8 lg:mb-24 md:mb-20 mb-16">
      <NMBanner title="Cart Page" path="Home - Cart" />
      <div className="grid grid-cols-12 gap-8 my-5">
        <CartProducts />
        <Coupon />
        <Address />
        <PaymentDetails />
      </div>
    </div>
  );
};

export default AllCartPage;
