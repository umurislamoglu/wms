import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import localeTR from "antd/locale/tr_TR";
import localeEN from "antd/locale/en_US";

export interface commonState {
  localeConfig: any;
  theme: string;
}

const initialState: commonState = {
  localeConfig: localStorage.getItem("locale") === "en" ? localeEN : localeTR,
  theme: localStorage.getItem("theme") || "light",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<"tr" | "en">) => {
      state.localeConfig = action.payload === "en" ? localeEN : localeTR;
      localStorage.setItem("locale", action.payload);
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setLocale , setTheme } = commonSlice.actions;

export default commonSlice.reducer;
