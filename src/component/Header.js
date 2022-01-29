import react from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();

    const handleLoginRoute = () =>{
        history.push("/login")
    }

    const handleLogout = () =>{
      window.localStorage.clear();
      history.push("/")
    }


const token = window.localStorage.getItem("jwtToken");
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            PunPun
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  User
                </a>
              </li>
            </ul>
            <div>
              <div className="dropdown">
                <div
                  className="user-container"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                </div>
                <ul className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" onClick={handleLoginRoute} >
                        Log In
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" >
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
