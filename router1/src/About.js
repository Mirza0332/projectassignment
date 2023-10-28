// import React from 'react'
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  const goToContact = () => {
   navigate("/contact");
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
      <h1>About Page</h1>
      <button onClick={() => goToContact()}>Go to Contact Page</button>
    </section>
   </>
  );
};

export default About;