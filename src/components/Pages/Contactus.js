import React from "react";
import "./Contactus.css";
import { NavLink } from "react-router-dom";

const Contactus = () => {
  const submitDetails=()=>{
    fetch("https://newecommerce-ad44d-default-rtdb.firebaseio.com/contact.json",{
      
    }
    )
  }
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
            <NavLink to="/Contactus">CONTACT US</NavLink>
          </li>
          <li>
            <NavLink to="/MOVIES">MOVIES</NavLink>
          </li>
        </ul>
        <h1>THE GENERICS</h1>
      </header>

    <div className="form-style-6">
    <div className="container">
<h1>CONTACT US</h1><br/>
</div>
<form className="container" onSubmit={submitDetails}>
<input type="text" name="field1" placeholder="Your Name"/>
<input type="email" name="field2" placeholder="Email Address"/>
<input type="number" name="field3" placeholder="Contact number"/>
<ul><button type='submit'>SEND</button></ul>
</form>
</div>
   
</React.Fragment>    
  );
};

export default Contactus;
