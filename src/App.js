import "./App.css";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Products from "./components/Products";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import { CartContext } from "./context/Context";
import LoginPage from "./components/LoginPage";
function App() {
  const { theme } = useContext(CartContext);
  return (
    <div className={`${theme ? "LightTheme" : "DarkMode"}`}>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/LoginPage" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
