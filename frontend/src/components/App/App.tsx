import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "./App.reducer";
import Home from "../Home/Home";

const store = configureStore({
  reducer,
});

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
