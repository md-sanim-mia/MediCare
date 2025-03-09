"use client";
import { Heart, LogOut, Search, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { useState } from "react";
import logo from ".//..//..//assets/v987-18a-removebg-preview.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Naver = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];
  // const navItems = (
  //   <>
  //     <Link className={"mx-3 font-semibold hover:text-[#ff7046]"} href={"/"}>
  //       Home
  //     </Link>
  //     <Link className="mx-3 font-semibold hover:text-[#ff7046]" href={"/shop"}>
  //       Shop
  //     </Link>
  //     <Link className="mx-3 font-semibold hover:text-[#ff7046]" href={"/blogs"}>
  //       Blog
  //     </Link>
  //     <Link
  //       className="mx-3 font-semibold hover:text-[#ff7046]"
  //       href={"/contact"}
  //     >
  //       Contact
  //     </Link>
  //   </>
  // );
  return (
    <div className="h-16">
      {" "}
      <nav className=" h-16 fixed  z-40 w-full mx-auto  bg-white shadow dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-3 grid items-center mx-auto">
          <div className="lg:flex lg:items-center  lg:justify-between">
            <div className="flex items-center justify-between ">
              <div className="flex gap-2 items-center">
                <Image
                  className="text-white"
                  width={40}
                  height={40}
                  src={logo}
                  alt="logo"
                />
                <h2 className=" text-xl font-bold">
                  {" "}
                  <span className="text-[#ff7046]">Medi</span>Care
                </h2>
              </div>

              <div className="flex lg:hidden gap-6 items-center">
                <div className="flex lg:hidden gap-4 items-center">
                  <Heart />
                  <ShoppingBag />
                  <Search />
                  <div className="ml-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Dashboard</DropdownMenuItem>
                        <DropdownMenuItem>My Shop</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="bg-red-500 text-gray-100 cursor-pointer">
                          <LogOut />
                          Log Out
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                    aria-label="toggle menu"
                  >
                    {!isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 8h16M4 16h16"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`absolute inset-x-0 z-20 w-2/3 px-6 py-4  transition-all duration-300 ease-in-out lg:h-min  h-screen  bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col  lg:flex-row lg:items-center  ">
                {navLinks?.map((item) => (
                  <Link
                    key={item?.href}
                    href={item?.href}
                    className={`${
                      pathname === item?.href
                        ? "text-[#ff7046] font-bold mx-3"
                        : "mx-3 font-semibold hover:text-[#ff7046]"
                    }`}
                  >
                    {item?.label}
                  </Link>
                ))}
              </div>
              <div className="lg:flex hidden">
                <Button
                  variant="outline"
                  className="rounded-full mx-2 p-0 size-9"
                >
                  <Heart />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full mx-2 p-0 size-9 "
                >
                  <ShoppingBag />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full mx-2 p-0 size-9 "
                >
                  <Search />
                </Button>
                <div className="ml-10">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Dashboard</DropdownMenuItem>
                      <DropdownMenuItem>My Shop</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="bg-red-500 text-gray-100 cursor-pointer">
                        <LogOut />
                        Log Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Naver;
