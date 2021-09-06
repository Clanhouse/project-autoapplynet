import { FunctionComponent } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { IJSON } from "../App/App.types";
import { useDispatchProps, useAppSelector } from "../App/App.hooks";

const Home: FunctionComponent = () => {
  const { data, isLoading, error } = useAppSelector((state) => state);
  const { loadingDispatch, loadedDispatch, errorDispatch } = useDispatchProps();

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

export default connect()(Home);
