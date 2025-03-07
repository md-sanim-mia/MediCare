"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus, Star } from "lucide-react";
import Image from "next/image";

const ProductDeatils = () => {
  return (
    <div className=" max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-4 border border-white p-4 rounded-md my-5 shadow-sm">
      <div>
        <Image
          src="https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg"
          alt="product image"
          width={500}
          height={500}
          className="rounded-md w-full object-cover h-80"
        />
        <div className="grid grid-cols-3 gap-4 mt-5">
          <Image
            src="https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg"
            alt="product image"
            width={500}
            height={500}
            className="rounded-md w-full object-cover h-40"
          />
          <Image
            src="https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg"
            alt="product image"
            width={500}
            height={500}
            className="rounded-md w-full object-cover h-40"
          />
          <Image
            src="https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg"
            alt="product image"
            width={500}
            height={500}
            className="rounded-md w-full object-cover h-40"
          />
        </div>
      </div>
      <div className="bg-white rounded-md p-4">
        <h2 className="font-bold text-xl mb-4">"fiver medicine</h2>
        <p className="text-justify text-gray-500 font-light text-sm">
          "safjkds safjs dfklsajf salfsalf saf"
        </p>
        <div className=" gap-4 grid grid-cols-2 lg:flex items-center justify-between my-5 text-gray-500 text-xs">
          <p className="rounded-full px-4 py-1 bg-gray-100 flex items-center lg:justify-center gap-1">
            <Star className="w-4 h-4" fill="orange" stroke="orange" />
            5.0 Ratings
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">Stock: 50</p>
          <p className="rounded-full px-4 py-1 bg-gray-100">Brand : "janina"</p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Category: "Medicine fiver"
          </p>
        </div>
        <hr />
        <div className=" gap-4 grid grid-cols-2 lg:flex  items-center justify-between my-5 text-gray-500 text-xs">
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Prescription : true
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100"> Dosage: 3</p>
          <p className="rounded-full px-4 py-1 bg-gray-100"> Form : samsung </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Expiry date: 10-12-2026
          </p>
        </div>
        <hr />
        <p className="my-2 font-bold">
          Price:{" "}
          <>
            <span className="font-semibold mr-2 text-orange-400">$ 1000</span>
            <del className="font-semibold text-xs">$ 1200</del>
          </>
        </p>
        <hr />
        <div
          className=" flex items-center justify-between mt-4
        "
        >
          <label htmlFor="quantity" className="font-semibold text-lg ">
            Totall Price : $ 2000
          </label>
          <div className="flex items-center gap-2">
            <Button
              // onClick={handileClickdecrease}
              className=" bg-gray-100 text-black hover:bg-gray-50   rounded-l-md "
            >
              <Minus />
            </Button>
            <p className="font-medium text-xl">3</p>
            <Button
              // onClick={handileClickdecrease}
              className=" bg-gray-100 text-black hover:bg-gray-50   rounded-l-md "
            >
              <Plus />
            </Button>
          </div>
        </div>
        <Button variant="outline" className="w-full my-5">
          Add To Cart
        </Button>
        <Button className="w-full">Buy Now</Button>
      </div>
    </div>
  );
};

export default ProductDeatils;
