import React from 'react';
import { NavLink } from 'react-router-dom';

import ProfileLink from '../ProfileLink/ProfileLink';
import Logo from '../Logo/Logo';

const Navigation = React.memo(() => {
  
  return(
    <div className="navigation-header">
      <Logo />
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <NavLink className="navigation__text" to="/movies" activeClassName="navigation__text_on">Фильмы</NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink className="navigation__text" to="/saved-movies" activeClassName="navigation__text_on">Сохранённые фильмы</NavLink>
          </li>
        </ul>
      </nav>
      <ProfileLink />
    </div>
  );
});

export default Navigation;
