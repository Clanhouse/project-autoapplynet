import { Provider } from "react-redux";
import Home from "../Home/Home";
import store from "./App.store";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
