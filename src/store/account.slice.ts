import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type AccessRight = "CREATE" | "VIEW" | "QUERY" | "UPDATE" | "DELELTE";
export interface Menu {
  name: string;
  accessRight: AccessRight[];
}

export interface AccountState {
  username: string;
  avatar: string;
  menu?: Menu[];
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
}
export interface AccountInformation extends AccountState {
  access_token: string;
}

const initialState: AccountState = {
  username: "",
  avatar: "",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,

  reducers: {
    addAccount: (state: AccountState, action: PayloadAction<AccountState>) => {
      return { ...state, ...action.payload };
    },
    removeAccount: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAccount, removeAccount } = accountSlice.actions;

export default accountSlice.reducer;
