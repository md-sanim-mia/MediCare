"use server";

import { revalidateTag } from "next/cache";

export const getAllProducts = async (query: {
  [key: string]: string | string[] | undefined;
}) => {
  const params = new URLSearchParams();
  if (query?.price) {
    params.append("minPrice", "0");
    params.append("maxPrice", query.price.toString());
  }

  if (query?.category) {
    params.append("category", query.category.toString());
  }
  if (query?.brand) {
    params.append("brand", query.brand.toString());
  }
  if (query?.rating) {
    params.append("rating", query.rating.toString());
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/medicines`, {
      next: {
        tags: ["PRODUCT"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const getSingleProduct = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicines/${productId}`,
      {
        next: {
          tags: ["PRODUCT"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const addProduct = async (productData: any, token: string) => {
  console.log("this is the token ", token);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/medicines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(productData),
    });
    revalidateTag("PRODUCT");
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error);
    return Error(error.message);
  }
};
export const updatedProduct = async (
  productData: any,
  id: string,
  token: string
) => {
  console.log("this is the token ", token);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicines/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      }
    );
    revalidateTag("PRODUCT");
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error);
    return Error(error.message);
  }
};
export const deleteProduct = async (id: string, token: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/medicines/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    revalidateTag("PRODUCT");
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error);
    return Error(error.message);
  }
};
