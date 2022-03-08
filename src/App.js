import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import LogIn from "./Pages/Auth/LogIn";
import Cart from "./Pages/Payment/Cart";
import Profile from "./Pages/Auth/Profile";
import CategoryPage from "./Components/Category/CategoryPage";
import Search from "./Pages/Search/Search";
import Asce from "./Pages/Sort/Asce";
import Desc from "./Pages/Sort/Desc";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={LogIn} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/products/:id" component={Detail} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/products/category/:id" component={CategoryPage} exact />
          <Route path="/search/:id" component={Search} exact />
          <Route path="/sort/asce" component={Asce} exact />
          <Route path="/sort/desc" component={Desc} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
