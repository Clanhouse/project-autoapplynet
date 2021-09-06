import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, IJSON, RootState } from "./App.types";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDispatchProps = () => {
  const dispatch = useAppDispatch();

  return {
    loadingDispatch: () => dispatch({ type: "LOADING" }),
    loadedDispatch: (data: IJSON[]) => dispatch({ type: "LOADED", data }),
    errorDispatch: () => dispatch({ type: "ERROR" }),
  };
};
