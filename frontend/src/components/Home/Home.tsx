import { FunctionComponent } from "react";
import { useGetDataMutation } from "../App/App.hooks";

const Home: FunctionComponent = () => {
  const [updateData, { data, isLoading, error }] = useGetDataMutation();

  return (
    <div>
      <h1>Hello HuntAndPeckers!</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>{JSON.stringify(error)}</p>}
      {Array.isArray(data) && <p>{JSON.stringify(data)}</p>}
      <button onClick={() => updateData()}>Get the data</button>
    </div>
  );
};

export default Home;
