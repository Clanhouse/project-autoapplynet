import { IJSON, IStoreState } from "../App/App.types";

export type IHomeProps = {
  state?: IStoreState;
  loadingDispatch?: () => void;
  loadedDispatch?: (data: IJSON[]) => void;
  errorDispatch?: () => void;
};
