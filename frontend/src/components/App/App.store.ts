import { configureStore } from "@reduxjs/toolkit";
import reducer from "./App.reducer";
import { IStoreAction, IStoreState } from "./App.types";

const store = configureStore<IStoreState, IStoreAction, []>({
  reducer,
});

export default store;
