import store from "./App.store";

export type IJSON = Record<string, any>;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
