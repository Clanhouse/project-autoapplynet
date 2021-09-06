import store from "./App.store";

export type IJSON = Record<string, any>;

export type IStoreState = {
  data: IJSON[];
  isLoading: boolean;
  error?: string | null;
};

export type IStoreAction =
  | {
      type: "LOADING" | "ERROR";
    }
  | {
      type: "LOADED";
      data: IJSON[];
    };

export type IStoreDispatchProps = {
  loadingDispatch?: () => void;
  loadedDispatch?: (data: IJSON[]) => void;
  errorDispatch?: () => void;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
