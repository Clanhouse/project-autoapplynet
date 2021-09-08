import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "./App.hooks";

const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
  },
});

export default store;
