import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SettingState {
  logo: string;
  backgroundImage: string;
  primaryColor?: string;
  textColor?: string;
}

const initialState: SettingState = {
  logo: "/images/logo.png",
  backgroundImage: "/images/background.jpg",
  primaryColor: "#1F2A40",
  textColor: "#151632",
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    addSetting: (state: SettingState, action: PayloadAction<SettingState>) => {
      return { ...state, ...action.payload };
    },
    removeSetting: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSetting, removeSetting } = settingSlice.actions;

export default settingSlice.reducer;
