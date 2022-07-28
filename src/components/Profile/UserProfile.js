import React from 'react';
import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import { NavLink } from 'react-router-dom';

const UserProfile = () => {
  return (


    <React.Fragment>
      <header>
        <ul className="header">
          <li>
            <NavLink  to="/">
              HOME
            </NavLink>
          </li>

          <NavLink to="/store">STORE</NavLink>

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
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
    </React.Fragment>
  );
};

export default UserProfile;