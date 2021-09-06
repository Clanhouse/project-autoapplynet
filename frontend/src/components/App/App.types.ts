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
