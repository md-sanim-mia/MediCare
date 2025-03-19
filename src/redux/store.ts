import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "..//redux//features//cart//cartSlice";
import authReducer from "@/redux/features/auth/authSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistOptions = {
  key: "cart",
  storage,
};
const persistOption = {
  key: "auth",
  storage,
};
const persistCart = persistReducer(persistOptions, cartReducer);
const persistAuth = persistReducer(persistOption, authReducer);
export const makeStore = () => {
  return configureStore({
    reducer: { cart: persistCart, auth: persistAuth },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
