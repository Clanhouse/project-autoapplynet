import { FunctionComponent } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { IHomeProps } from "./Home.types";
import { mapDispatchToProps, mapStateToProps } from "../App/App.reducer";
import { IJSON } from "../App/App.types";

const Home: FunctionComponent<IHomeProps> = ({
  state,
  loadingDispatch,
  loadedDispatch,
  errorDispatch,
}) => {
  if (
    state === undefined ||
    loadedDispatch === undefined ||
    loadingDispatch === undefined ||
    errorDispatch === undefined
  ) {
    throw new Error("State and Dispatches cannot be undefined.");
  }

  const { data, isLoading, error } = state;

  const fetchData = async () => {
    loadingDispatch();

    try {
      const { data } = await axios.get<IJSON[]>("http://localhost:8001/data");
      loadedDispatch(data);
    } catch (e) {
      errorDispatch();
    }
  };

  return (
    <div>
      <h1>Hello HuntAndPeckers!</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>{error}</p>}
      {data.length > 0 && <p>{JSON.stringify(data)}</p>}
      <button onClick={() => fetchData()}>Get the data</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
