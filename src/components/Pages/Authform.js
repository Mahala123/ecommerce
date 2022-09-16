import React, { useState, useRef, useContext } from "react";
import classes from "./AuthForm.module.css";
import AuthContext from "../Store/Auth-Context";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let Url;
    if (isLogin) {
      Url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDOE50WBwyX1LfELfTbvd4u2bP_VlZfK_8";
    } else {
      Url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDOE50WBwyX1LfELfTbvd4u2bP_VlZfK_8";
    }
    fetch(Url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken, data.email);
        console.log(data);
        history.replace("/store");

        //console.log(data.idToken);
      })
      .catch((err) => {
        alert(err.errorMessage);
      });
  };

  return (
    <React.Fragment>
      <header>
        <ul className="header">
          <NavLink className="a" to="/auth">
            LOGIN
          </NavLink>

          <li>
            <NavLink to="/">HOME</NavLink>
          </li>

          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>

          <li>
            <NavLink to="/Contactus">CNTACT US</NavLink>
          </li>

          <li>
            <NavLink to="/MOVIES">MOVIES</NavLink>
          </li>
        </ul>
      </header>

      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending request...</p>}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default AuthForm;
