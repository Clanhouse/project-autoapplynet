import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./App.reducer";
import Home from "../Home/Home";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
