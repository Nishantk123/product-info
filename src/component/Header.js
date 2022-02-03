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

  const handleUser = () =>{
    history.push("/user");

  }

  const handleRegister = () => {
    history.push("/register");
  };

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  const token = window.localStorage.getItem("jwtToken");

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
                <a
                  className="nav-link text-white"
                  href="#"
                  onClick={handleUser}
                >
                  User
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">Help</a>
              </li>
            </ul>
          </div>
          <div className="w-50 mx-5 d-flex justify-content-end">
            <input
              className="form-control"
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
            ></input>

            <div className="dropdown mx-3">
              <div
                className="user-container"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"></img>
              </div>
              <ul
                className="dropdown-menu custom-dropdown"
                aria-labelledby="dropdownMenuButton1"
              >
                {token?"":<li>
                  <a className="dropdown-item" onClick={handleLogin}>
                    Log In
                  </a>
                </li>}
                {token?"":<li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleRegister}
                  >
                    Sign Up
                  </a>
                </li>}
                {token &&<li>
                  <a className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </a>
                </li>}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;