import { IStoreState, IStoreAction } from "./App.types";

const initState = {
  data: [],
  isLoading: false,
};

const reducer = (state: IStoreState = initState, action: IStoreAction) => {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case "LOADED": {
      return {
        data: action.data,
        isLoading: false,
        error: null,
      };
    }
    case "ERROR": {
      return {
        ...state,
        isLoading: false,
        error: "Something went wrong.",
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
