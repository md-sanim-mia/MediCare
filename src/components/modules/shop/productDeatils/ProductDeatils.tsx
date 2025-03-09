"use client";

import { Button } from "@/components/ui/button";
import { TMedicine } from "@/types/product";
import { Minus, Plus, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ProductDeatils = ({ product }: { product: TMedicine }) => {
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
    <div className=" max-w-screen-xl mt-6 lg:mb-24 md:mb-20 mx-auto grid lg:grid-cols-2 gap-4 border border-white p-4 rounded-md mb-16 shadow-sm">
      <div>
        <Image
          src={
            product?.image ||
            "https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg"
          }
          alt="product image"
          width={500}
          height={500}
          className="rounded-md w-full object-cover h-80"
        />
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="bg-[#efefef] px-5 py-3  rounded-md">
            <h2 className="capitalize  font-bold"> side effects</h2>
            <ul className="mt-2">
              {product?.side_effects?.map((item: string, index: number) => (
                <li className="list-disc list-inside" key={index}>
                  {" "}
                  {item}{" "}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#efefef] px-5 py-3 rounded-md">
            <h2 className="capitalize  font-bold"> uses case</h2>
            <ul className="mt-2">
              {product?.uses?.map((item: string, index: number) => (
                <li className="list-disc list-inside" key={index}>
                  {" "}
                  {item}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md p-4">
        <h2 className="font-bold text-xl mb-4">{product?.name}</h2>
        <p className="text-justify text-gray-500 font-light text-sm">
          {product?.description}
        </p>
        <div className=" gap-4 grid grid-cols-2 lg:flex items-center justify-between my-5 text-gray-500 text-xs">
          <p className="rounded-full px-4 py-1 bg-gray-100 flex items-center lg:justify-center gap-1">
            <Star className="w-4 h-4" fill="orange" stroke="orange" />
            5.0 Ratings
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Stock: {product?.stock}
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Brand : {product?.brand}
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Category: {product?.category}
          </p>
        </div>
        <hr />
        <div className=" gap-4 grid grid-cols-2 lg:flex  items-center justify-between my-5 text-gray-500 text-xs">
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Prescription :{product?.prescription_required}
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            {" "}
            Dosage: {product?.dosage}
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            {" "}
            Form : {product?.form}{" "}
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Expiry date: {product?.expiry_date}
          </p>
        </div>
        <hr />
        <p className="my-2 font-bold">
          Price :
          <>
            <span className="font-semibold mr-2 text-orange-400">
              ${product?.price}
            </span>
            <del className="font-semibold text-xs">$ 20</del>
          </>
        </p>
        <hr />
        <div
          className=" flex items-center justify-between mt-4
        "
        >
          <label htmlFor="quantity" className="font-semibold text-lg ">
            Totall Price : $ {product?.price * count}
          </label>
          <div className="flex items-center gap-3">
            <Button
              onClick={handileClickdecrease}
              className=" bg-gray-100 text-black hover:bg-gray-50 cursor-pointer   rounded-l-md "
            >
              <Minus />
            </Button>
            <p className="font-normal text-xl"> {count} </p>
            <Button
              onClick={handileClickIncrease}
              className=" bg-gray-100 text-black hover:bg-gray-50  cursor-pointer  rounded-l-md "
            >
              <Plus />
            </Button>
          </div>
        </div>
        <Button variant="outline" className="w-full my-5">
          Add To Cart
        </Button>
        <Button className="w-full bg-[#ff7046]">Buy Now</Button>
        <div className="mt-4 text-sm text-gray-600">
          <p>Free shipping on orders over $500.</p>
          <p className="mt-2">30-day returns for full refunds.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDeatils;
