import { IStoreDispatchProps, IStoreState } from "../App/App.types";

export type IHomeProps = {
  state?: IStoreState;
} & IStoreDispatchProps;
