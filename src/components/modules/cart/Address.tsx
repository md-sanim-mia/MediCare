"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cities } from "@/contants/cities";
import {
  citySelector,
  shappingSelector,
  updateCity,
  updateShappingAddress,
} from "@/redux/features/cart/cartSlice";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Address() {
  const dispatch = useAppDispatch();
  const city = useAppSelector(citySelector);
  const shappingAddress = useAppSelector(shappingSelector);

  const handleCitySelect = (city: string) => {
    dispatch(updateCity(city));
  };

  const handleShippingAddress = (address: string) => {
    dispatch(updateShappingAddress(address));
  };

  return (
    <div className="border-2 bg-[#efefef] brightness-105 rounded-md col-span-4  p-5 ">
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-2xl font-bold">Address</h1>
        <p className="text-gray-500">Enter your address.</p>
        <div className="mt-5 w-full">
          <Select onValueChange={(city) => handleCitySelect(city)}>
            <SelectTrigger className="mb-5 w-full">
              <SelectValue placeholder="Select a city" className="w-full" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Textarea
            onChange={(e) => handleShippingAddress(e.target.value)}
            rows={5}
          />
        </div>
      </div>
    </div>
  );
}
