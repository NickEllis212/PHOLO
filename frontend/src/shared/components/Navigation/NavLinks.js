import React, {useContext}from 'react';
import { NavLink } from 'react-router-dom';
import '../Navigation/NavLinks.css';
import {LoginContext} from '../../context/login-context'
const NavLinks = props => {
    const login = useContext(LoginContext);
    return <ul className="nav-links">
        {login.isLoggedIn && (
        <li>
            <NavLink to="/" exact>Users</NavLink>
        </li>
        )}
        {login.isLoggedIn && ( //check to see if user has loggin in if so it displays my places
        <li>
            <NavLink to="/u1/places">My Places</NavLink>
        </li>
        )}
         {login.isLoggedIn && (
        <li>
            <NavLink to="/places/new">Add Place</NavLink>
        </li>
         )}
         {!login.isLoggedIn && (
        <li>
            <NavLink to="/pages/Login">Login</NavLink>
        </li>
         )}
          {login.isLoggedIn && (
        <li>
            <button onClick={login.logout}>Log out</button>
        </li>
         )}

    </ul>
};

export default NavLinks;