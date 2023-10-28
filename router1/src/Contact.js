// import React from 'react'
import {NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  return (
  <>
   {/* <header>
      <a href="#">Logo</a>
      <nav>
        <ul>
          <li> <NavLink to="/"> Home </NavLink></li>
          <li> <NavLink to="./about"> About </NavLink></li>
          <li> <NavLink to="./contact"> Contact </NavLink></li>
        </ul>
      </nav>
    </header> */}
<section>
      <h1>Contact Page</h1>
      <button onClick={gotoHome}>Go to Home Page</button>
    </section>
</>
);
};

export default Contact;