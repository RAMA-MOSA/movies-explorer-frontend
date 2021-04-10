import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { ReactComponent as ProfileIcon } from '../../images/profile-icon.svg';


function Modal({ onModalClose }) {

  return(
    <div className="modal">
        <div className="modal__overlay"></div>
        <div className="modal__box">
            <button className="modal__close" onClick={onModalClose}></button>
                <nav className="modal__navigation">
                    <ul className="modal__navigation_list">
                        <li className="modal__navigation_item">
                            <NavLink className="modal__navigation_link" activeClassName="modal__navigation_link_on" exact={true} to="/" onClick={onModalClose}>
                            Главная
                            </NavLink>
                        </li>
                        <li className="modal__navigation_item">
                            <NavLink className="modal__navigation_link" activeClassName="modal__navigation_link_on" to="/movies" onClick={onModalClose}>
                            Фильмы
                            </NavLink>
                        </li>
                        <li className="modal__navigation_item">
                            <NavLink className="modal__navigation_link" activeClassName="modal__navigation_link_on" to="/saved-movies" onClick={onModalClose}>
                            Сохранённые фильмы
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Link className="modal__profile-link" to="/profile" onClick={onModalClose}>
                    Аккаунт<ProfileIcon className="modal__profile-link__icon" />
                </Link>
        </div>
    </div>
  )
}

export default Modal;
