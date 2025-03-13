import { RootState } from "@/redux/store";
import { TMedicine } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
export interface IcartProduct extends TMedicine {
  orderQuantity: number;
}
type TInitialState = {
  products: IcartProduct[];
  city: string;
  shappingAddress: string;
};
const initialState: TInitialState = {
  products: [],
  city: "",
  shappingAddress: "",
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
        if (
          productQuantity &&
          productQuantity.orderQuantity < productQuantity.stock
        ) {
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
        if (productQuantity && productQuantity.orderQuantity > 1) {
          productQuantity.orderQuantity -= 1;
          return;
        }
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    clearProductCart: (state) => {
      state.products = [];
    },
    updateCity: (state, action) => {
      state.city = action.payload;
    },
    updateShappingAddress: (state, action) => {
      state.shappingAddress = action.payload;
    },
  },
});
export const orderedProductsSelector = (state: RootState) => {
  return state.cart.products;
};
export const subTotalSelector = (state: RootState) => {
  return state.cart.products.reduce((acc, proucts) => {
    return acc + proucts.price * proucts.orderQuantity;
  }, 0);
};

export const shappingCostSelector = (state: RootState) => {
  if (
    state.cart.city &&
    state.cart.city === "Dhaka" &&
    state.cart.products.length > 1
  ) {
    return 60;
  } else if (
    state.cart.city &&
    state.cart.city !== "Dhaka" &&
    state.cart.products.length > 1
  ) {
    return 120;
  } else {
    return 0;
  }
};

// addresss
export const citySelector = (state: RootState) => {
  return state.cart.city;
};
export const shappingSelector = (state: RootState) => {
  return state.cart.shappingAddress;
};
export const {
  addProduct,
  incerementOrderQuantity,
  decrementOrderQuantity,
  removeProduct,
  updateCity,
  updateShappingAddress,
} = cartSlice.actions;
export default cartSlice.reducer;
