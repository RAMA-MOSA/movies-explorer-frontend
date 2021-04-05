import React from 'react';

import LoginNavigation from '../LoginNavigation/LoginNavigation';
import Navigation from '../Navigation/Navigation';
import HeaderBurger from '../HeaderBurger/HeaderBurger';

function Header(props) {

  const headerClass = props.locationPathname === '/' ? 'header_light' : 'header';
  
  return (
    <header className={headerClass}>
        {props.loggedIn ? (
          <Navigation />
        )
        : (
          <LoginNavigation
            onSignup={props.onSignup}
            onSignin={props.onSignin}
          />
        )}
        {props.loggedIn && (
          <HeaderBurger
          onOpenMenu={props.onOpenMenu}
          />
        )}
    </header>
  );
}

export default Header;
