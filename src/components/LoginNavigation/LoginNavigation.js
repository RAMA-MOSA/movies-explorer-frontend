import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';

const LoginNavigation = React.memo((props) => {
  
  return (
    <div className="login-navigation-header">
      <Logo />
      <nav className="login-navigation">
          <ul className="login-navigation__list">
              <li className="login-navigation__list-item">
                  <NavLink className="login-navigation__link" to="/signup" onClick = {props.onSignup}>Регистрация</NavLink>
              </li>
              <li className="login-navigation__list-item">
                  <NavLink className="login-navigation__link green" to="/signin" onClick = {props.onSignup}>Войти</NavLink>
              </li>
          </ul>
      </nav>
    </div>
  )
});

export default LoginNavigation;
