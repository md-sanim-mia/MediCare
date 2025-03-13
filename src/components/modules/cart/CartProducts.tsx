"use client";
import Image from "next/image";
import emptyCart from "@/assets/empty-cart (1).png";

import CartProductCard from "./CartProductCard";

import { useAppSelector } from "@/redux/hooks";
import {
  IcartProduct,
  orderedProductsSelector,
} from "@/redux/features/cart/cartSlice";
export default function CartProducts() {
  const data = useAppSelector(orderedProductsSelector);
  console.log(data);
  return (
    <div className="border-2   bg-background brightness-105 rounded-md  lg:col-span-8 w-full h-full lg:row-span-3 space-y-5">
      {data.length === 0 && (
        <div className="text-center text-gray-500">
          <p className="text-lg font-semibold">Your cart is empty</p>
          <p className="mt-2">
            Looks like your cart is on vacation—bring it back to work by adding
            some items!
          </p>
          <div className="flex justify-center items-center ">
            <Image src={emptyCart} alt="empty cart" />
          </div>
        </div>
      )}
      {data.map((product: IcartProduct) => (
        <CartProductCard key={product?._id} product={product} />
      ))}
    </div>
  );
}
