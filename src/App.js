import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AppState from "../src/context/AppState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
function App() {
  return (
    <Router>
      <AppState>
        <Navbar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </AppState>
    </Router>
  );
}

export default App;
