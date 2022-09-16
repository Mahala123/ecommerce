import React, { useContext } from "react";

import "./Header.css";
import Cartcontext from "../Store/Cart-context";
import { NavLink } from "react-router-dom";
import AuthContext from "../Store/Auth-Context";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(Cartcontext);
  //const email=localStorage.getItem('Email');

  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = async () => {
    authCtx.logout();
  };
  let total = 0;
  cartCtx.items.forEach((element) => {
    total += element.quantity;
  });

  return (
    <header>
      <ul className="header">
        {!isLoggedIn && (
          <NavLink className="cart-holder1" to="/auth">
            LOGIN
          </NavLink>
        )}
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        {isLoggedIn && <NavLink to="/store">STORE</NavLink>}
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/Contactus">CONTACT US</NavLink>
        </li>
        <li>{isLoggedIn && <NavLink to="/profile">PROFILE</NavLink>}</li>
        <li>
          <NavLink to="/MOVIES">MOVIES</NavLink>
        </li>
        <li>
          {" "}
          {isLoggedIn && <button className="cart-holder1" onClick={logoutHandler}>LOGOUT</button>}
        </li>
         {isLoggedIn && <button className="cart-holder" onClick={props.onclick}>
          CART
          <span className="cart-number">{total}</span>
        </button>}
        
      </ul>
      <h1>THE GENERICS</h1>
    </header>
  );
};

export default Header;
