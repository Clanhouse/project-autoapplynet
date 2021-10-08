import Home from "../Home/Home";
import Auth from "../Auth/Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "../../assets/styles/globalStyles"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
