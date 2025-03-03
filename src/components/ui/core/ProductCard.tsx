import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../button";
import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductCard = () => {
  return (
    <Card className="p-3">
      <CardHeader className="relative p-0 h-48">
        <Image
          src={
            "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
          }
          width={500}
          height={500}
          alt="product image"
          className="rounded-sm h-48 object-cover"
        />

        <div className="absolute left-2 top-0 bg-red-500 text-white px-2 rounded-full">
          Out of Stock
        </div>
      </CardHeader>

      <CardContent className=" p-0 mt-2">
        <Link href={`/products/}`} passHref>
          <CardTitle
            title={"samsung"}
            className="font-semibold cursor-pointer text-sm"
          >
            {/* {product?.name.length > 30
              ? product?.name?.slice(0, 30) + "..."
              : product?.name} */}
            <p>fdlsafj fdsafjls fdsalkf</p>
          </CardTitle>
        </Link>

        <div className="flex items-center justify-between my-2">
          <p className="text-sm text-gray-600">
            <>
              <span className="font-semibold mr-2 text-orange-400">$ 3000</span>
              <del className="font-semibold text-xs">$ 2000</del>
            </>

            <span className="font-semibold">$ 200</span>
          </p>

          <div className="flex items-center justify-center gap-1">
            <Star className="w-4 h-4" fill="orange" stroke="orange" />
            <span className="text-sm font-medium text-gray-700">{4}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="block p-0">
        <div className="flex gap-2 items-center justify-between">
          <Button size="sm" variant="outline" className="w-32 cursor-pointer">
            Buy Now
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-8 h-8 p-0 flex items-center  cursor-pointer justify-center rounded-full"
          >
            <ShoppingCart />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-8 h-8 p-0 flex items-center  cursor-pointer justify-center rounded-full"
          >
            <Heart />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
