import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface authState {
  auth: boolean;
  accessToken: string;
  expiresIn: number | null;
  refreshExpiresIn: number | null;
  tokenType: string | null;
  userInfo: any;
}

const initialState: authState = {
  auth: false,
  accessToken: "",
  expiresIn: null,
  refreshExpiresIn: null,
  tokenType: null,
  userInfo: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserLogin: (state, action: PayloadAction<any>) => {},
  },
});

export const { setUserLogin } = authSlice.actions;

export default authSlice.reducer;
