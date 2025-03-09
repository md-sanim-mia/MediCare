"use server";
export const getAllProducts = async () => {
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
