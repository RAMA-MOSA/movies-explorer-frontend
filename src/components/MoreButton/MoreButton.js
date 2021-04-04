import React from 'react';

function MoreButton({ onClick }) {
  
  return (
    <div className='more__box'>
      <button className='more__button' onClick={onClick}>Ещё</button>
    </div>
  )
}

export default MoreButton;
