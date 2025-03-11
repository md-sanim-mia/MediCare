import { RootState } from "@/redux/store";
import { TMedicine } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
export interface IcartProduct extends TMedicine {
  orderQuantity: number;
}
type TInitialState = {
  products: IcartProduct[];
};
const initialState: TInitialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (productToAdd) {
        productToAdd.orderQuantity += 1;
        return;
      }
      state.products.push({ ...action.payload, orderQuantity: 1 });
    },
    incerementOrderQuantity: (state, action) => {
      const productQuantity = state.products.find(
        (product) => product._id === action.payload
      );
      if (productQuantity) {
        if (productQuantity && productQuantity.orderQuantity > 1) {
          productQuantity.orderQuantity += 1;
          return;
        }
      }
    },
    decrementOrderQuantity: (state, action) => {
      const productQuantity = state.products.find(
        (product) => product._id === action.payload
      );
      if (productQuantity) {
        if (
          productQuantity &&
          productQuantity.orderQuantity < productQuantity.stock
        ) {
          productQuantity.orderQuantity -= 1;
          return;
        }
      }
    },
  },
});
export const orderedProductsSelector = (state: RootState) => {
  return state.cartReducer.products;
};
export const { addProduct, incerementOrderQuantity, decrementOrderQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
