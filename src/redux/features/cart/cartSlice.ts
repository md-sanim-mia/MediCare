import { TMedicine } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
type TInitialState = {
  products: TMedicine[];
};
const initialState: TInitialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(...action.payload);
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
