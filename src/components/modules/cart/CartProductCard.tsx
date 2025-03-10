"use client";
import { Button } from "@/components/ui/button";
import { TMedicine } from "@/types/product";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CartProductCard({ product }: { product: TMedicine }) {
  const [count, setCount] = useState(1);
  const handileClickIncrease = () => {
    if (count < product?.stock) {
      setCount(count + 1);
    }
  };
  const handileClickdecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="bg-[#efefef] rounded-lg flex p-5 gap-5">
      <div className="h-full w-32 rounded-md overflow-hidden">
        <Image
          src={product?.image}
          height={200}
          width={200}
          alt="product"
          className="aspect-square object-cover"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <h1 className="text-xl font-semibold">{product?.name}</h1>
        <div className="flex gap-5 my-2">
          <p>
            <span className="text-gray-500">Form:</span>{" "}
            <span className="font-semibold">{product?.form}</span>
          </p>
          <p>
            <span className="text-gray-500">Stock Availability:</span>{" "}
            <span className="font-semibold">{product?.stock}</span>
          </p>
        </div>
        <hr className="my-1" />
        <div className="flex items-center justify-between">
          <h2>
            Price:
            {product?.price}
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 font-semibold">Quantity</p>
            <Button
              onClick={handileClickdecrease}
              variant="outline"
              className="size-8 rounded-sm"
            >
              <Minus />
            </Button>
            <p className="font-semibold text-xl p-2">{count}</p>
            <Button
              onClick={handileClickIncrease}
              variant="outline"
              className="size-8 rounded-sm"
            >
              <Plus />
            </Button>
            <Button variant="outline" className="size-8 rounded-sm">
              <Trash className="text-red-500/50" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
