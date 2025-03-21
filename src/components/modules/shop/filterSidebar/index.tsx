"use client";

import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";

const FilterSidebar = () => {
  const [price, setPrice] = useState(0);

  const productTypes = [
    "Laptop & Accessories",
    "Computers Pc",
    "Speakers & Headset",
    "Keyboards & Mouse",
    "Camera",
    "Video Recording",
    "Tablet",
    "Table Lights",
  ];

  const brands = ["HP", "Apple", "Dell", "Asus", "Canon"];
  const ratings = [5, 4, 3, 2, 1];
  const availability = ["In Stock", "Pre Order", "Upcoming"];

  const handileClickSearchQuery = (query: string, value: string | number) => {
    console.log(query, value);
  };
  return (
    <Card className="p-4 rounded-2xl shadow-md w-72">
      <CardContent>
        <h2 className="text-lg font-semibold mb-4">Filter By Price</h2>
        {/* <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Min"
            className="border rounded px-2 py-1 w-full"
          />
          <input
            type="text"
            placeholder="Max"
            className="border rounded px-2 py-1 w-full"
          />
        </div> */}
        <Slider
          defaultValue={[price]}
          max={1000}
          onValueChange={(val) => setPrice(val[0])}
        />
        <p className="mt-2">${price}</p>

        <h2 className="text-lg font-semibold mt-6">Product Types</h2>
        <RadioGroup className="space-y-2 mt-2">
          {productTypes.map((type, index) => (
            <div key={index} className="flex items-center gap-2">
              <RadioGroupItem
                value={type}
                onClick={() => handileClickSearchQuery("category", type)}
              />
              <Label htmlFor={type} className="text-gray-600 font-light">
                {type}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <h2 className="text-lg font-semibold mt-6">Brands</h2>
        <div className="space-y-2 mt-2">
          <RadioGroup className="space-y-2 mt-2">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center gap-2">
                <RadioGroupItem
                  value={brand}
                  onClick={() => handileClickSearchQuery("brand", brand)}
                />
                <Label htmlFor={brand} className="text-gray-600 font-light">
                  {brand}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <h2 className="text-lg font-semibold mt-6">Rating</h2>
        <div className="space-y-2 mt-2">
          <RadioGroup className="space-y-2 mt-2">
            {ratings.map((rating, index) => (
              <div key={index} className="flex items-center gap-2">
                <RadioGroupItem
                  value={`${rating}`}
                  onClick={() => handileClickSearchQuery("brand", rating)}
                />
                <Label
                  htmlFor={`rating-${rating}`}
                  className="flex items-center"
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      size={18}
                      key={i}
                      fill={i < rating ? "orange" : "lightgray"}
                      stroke={i < rating ? "orange" : "lightgray"}
                    />
                  ))}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <h2 className="text-lg font-semibold mt-6">Availability</h2>
        <ul className="space-y-2 mt-2">
          {availability.map((status, index) => (
            <li key={index} className="flex items-center gap-2">
              <Checkbox />
              <span>{status}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FilterSidebar;
