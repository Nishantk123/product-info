import react from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleProduct = () => {
    history.push("/product");
  };

  const handleHome = () => {
    history.push("/");
  };

  const handleLogin = () => {
      history.push("/login");
  };

  const handleRegister = () => {
    history.push("/register");
  };

  const handleUser = () =>{
    history.push("/user")
  }

  return (
    <div className="text-center">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid mx-5">
          <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  onClick={handleHome}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" onClick={handleProduct}>
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" onClick={handleUser}>
                  User
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">Help</a>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-end">
            <input
              className="form-control"
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
            ></input>
            <button className="btn text-white mx-2" onClick={handleLogin}>Login</button>
            <button className="btn text-white mx-2" onClick={handleRegister}>Register</button>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;