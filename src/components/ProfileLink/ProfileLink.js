import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ProfileIcon } from '../../images/profile-icon.svg';

const ProfileLink = React.memo(() => {
    
    return(
      <Link className="profile-link" to="/profile">
            Аккаунт<ProfileIcon className="profile-link__icon" />
      </Link>
    )
});

export default ProfileLink;
