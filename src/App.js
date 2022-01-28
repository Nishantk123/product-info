import "./App.css";
import Home from "./view/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./view/Login";
import Register from "./view/Register";
import User from "./view/User";
import Product from "./view/Product";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login } />
        <Route exact path ="/register" component={ Register } />
        <Route exact path ="/user" component={ User } />
        <Route exact path ="/product" component={ Product } />
      </div>
    </Router>
  );
}

export default App;
