import React, { Component } from "react";
import { withRouter, NavLink, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/home">
          CYBERSOFT
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/home"
              >
                Home{" "}
                {
                  (this.props.location.pathname,
                  "/home" && <span className="sr-only">(current)</span>)
                }
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/contact"
              >
                Contact{" "}
                {
                  (this.props.location.pathname,
                  "/contact" && <span className="sr-only">(current)</span>)
                }
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/login"
              >
                Login{" "}
                {
                  (this.props.location.pathname,
                  "/login" && <span className="sr-only">(current)</span>)
                }
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/register"
              >
                Register{" "}
                {
                  (this.props.location.pathname,
                  "/register" && <span className="sr-only">(current)</span>)
                }
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/lifecycle"
              >
                Lifecycle{" "}
                {
                  (this.props.location.pathname,
                  "/register" && <span className="sr-only">(current)</span>)
                }
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <Link className="dropdown-item" to="/usestatedemo">
                  Use state demo
                </Link>
                <Link className="dropdown-item" to="/baitapchonxe">
                  Bài tập chọn xe
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
