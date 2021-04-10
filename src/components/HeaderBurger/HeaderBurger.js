import React from 'react';

const HeaderBurger = React.memo((props) => {
    return(
      <button className="header-burger" onClick={props.onOpenMenu} />
    )
});

export default HeaderBurger;
