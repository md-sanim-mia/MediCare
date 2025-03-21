import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
type TUsers = {
  email: string;
  role: string;
  iat: number;
  exp: number;
};
type TAuthSlice = {
  user: null | TUsers;
  token: null | string;
};
const initialState: TAuthSlice = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { token, user } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      (state.user = null), (state.token = null);
    },
  },
});

export const { logOut, setUser } = authSlice.actions;
export const currentUser = (state: RootState) => state.auth.user;
export const currentToken = (state: RootState) => state.auth.token;
export default authSlice.reducer;
