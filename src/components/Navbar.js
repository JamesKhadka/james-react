import React from "react";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          WalkWise
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
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">

              {/* a-> a and href->to for react-router  which helps to jump navbar component without reload the page smoothly*/}
              <a className="nav-a active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-a dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About StartUP
              </a>
              <ul className="dropdown-menu">

                <li>
                  <a className="dropdown-item" href="#">
                    Most Selling
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Founders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Investors
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
      </div>

      {/* <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>

        </div>
      </nav> */}

    </nav>
  );
}
