import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountSlice from "./account.slice";
import settingSlice from "./setting.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootPersistConfig = {
  key: "root",
  storage,
};

const accountPersistConfig = {
  key: "account",
  storage,
};
const settingPersistConfig = {
  key: "setting",
  storage,
};

const rootReducer = combineReducers({
  account: persistReducer(accountPersistConfig, accountSlice),
  setting: persistReducer(settingPersistConfig, settingSlice),
});

export const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: import.meta.env.DEV,
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
