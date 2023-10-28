import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <header>
        <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
          <li>
            <NavLink
              className="nav-bar-link"
              style={{ color: "red" }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-bar-link"
              style={{ color: "red" }}
              to="/about"
            >
              About{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-bar-link"
              style={{ color: "red" }}
              to="/contact"
            >
              Contact{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-bar-link"
              style={{ color: "red" }}
              to="/basicform"
            >
              Login{" "}
            </NavLink>
          </li>
        </ul>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
