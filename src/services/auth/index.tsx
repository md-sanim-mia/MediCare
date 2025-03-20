"use server";

import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createUser = async (userData: any) => {
  try {
    console.log(userData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = res.json();
    return data;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};
export const logingUser = async (userData: FieldValues) => {
  try {
    console.log(userData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = res.json();
    return data;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};

export const getAllUsers = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
      next: {
        tags: ["USER"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const getSingleUser = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/user/${productId}`,
      {
        next: {
          tags: ["USER"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const deleteUser = async (id: string, token: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    revalidateTag("USER");
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error);
    return Error(error.message);
  }
};
