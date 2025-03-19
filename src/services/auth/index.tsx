"use server";

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
