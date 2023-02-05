import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import localeTR from "antd/locale/tr_TR";
import localeEN from "antd/locale/en_US";

export interface commonState {
  localeConfig: any;
}

const initialState: commonState = {
  localeConfig: localStorage.getItem("locale") === "en" ? localeEN : localeTR,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<"tr" | "en">) => {
      state.localeConfig = action.payload === "en" ? localeEN : localeTR;
      localStorage.setItem("locale", action.payload);
    },
  },
});

export const { setLocale } = commonSlice.actions;

export default commonSlice.reducer;
