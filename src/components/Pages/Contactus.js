import React from "react";
import "./Contactus.css";
import { NavLink } from "react-router-dom";

const Contactus = () => {


  return (
    <React.Fragment>
    <header>
        <ul className="header">
        <li>
            <NavLink to="/">HOME</NavLink>
          </li>

          <NavLink to='/store'>STORE</NavLink>

          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>

          <li>
            <NavLink to="/Contactus">Contact us</NavLink>
          </li>
          <li>
            <NavLink to="/MOVIES">MOVIES</NavLink>
          </li>
        </ul>
        <h1>THE GENERICS</h1>
      </header>

    <div className="form-style-6">
<h1>Contact Us</h1>
<form>
<input type="text" name="field1" placeholder="Your Name" />
<input type="email" name="field2" placeholder="Email Address" />
<input type="number" name="field3" placeholder="Contact number" />
<ul><button type='submit'>SEND</button></ul>

</form>
</div>
   
</React.Fragment>    
  );
};

export default Contactus;
