"use client";
import { Button } from "@/components/ui/button";
import {
  shappingCostSelector,
  subTotalSelector,
} from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";

const PaymentDetails = () => {
  const subTotal = useAppSelector(subTotalSelector);
  const shappingCost = useAppSelector(shappingCostSelector);
  return (
    <div className="border-2 bg-[#efefef] border-white  brightness-105 rounded-md col-span-4 h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>

      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="font-semibold"> {subTotal} BDT</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Discount</p>
          {/* <p className="font-semibold">
                {currencyFormatter(discountAmount)}
              </p> */}
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Shipment Cost</p>
          {/* <p className="font-semibold">{currencyFormatter(shippingCost)}</p> */}
          <p className="font-semibold">{shappingCost} BDT</p>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500 ">Grand Total</p>
        {/* <p className="font-semibold">{currencyFormatter(grandTotal)}</p> */}
        <p className="font-semibold"> {subTotal + shappingCost} BDT</p>
      </div>

      <Button
        // onClick={handleOrder}
        className="w-full text-xl font-semibold py-5"
      >
        Order Now
      </Button>
    </div>
  );
};

export default PaymentDetails;
