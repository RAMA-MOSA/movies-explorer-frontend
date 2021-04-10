import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoImage } from '../../images/logo.svg';

const Logo = React.memo(() => {
  return(
      <Link className="logo" to="/" aria-label="О проекте">
        <LogoImage />
      </Link>
  )
});

export default Logo;
