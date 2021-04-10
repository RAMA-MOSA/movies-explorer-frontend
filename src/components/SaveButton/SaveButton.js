import React from 'react';

import { ReactComponent as AddSaveButtonIcon } from '../../images/AddSaveButtonIcon.svg';
import { ReactComponent as AddSaveButtonIconMarked } from '../../images/AddSaveButtonIconMarked.svg';
import { ReactComponent as RemoveSaveButtonIcon } from '../../images/RemoveSaveButtonIcon.svg';

function SaveButton({ className, onClick, locationPathname, isMarked }) {

  return (
    <button
      className={className}
      onClick={onClick}
    >
      {locationPathname === '/saved-movies' ? (
        <RemoveSaveButtonIcon className='movies-card__save-icon_delete' />
      )
      :
      isMarked ? (
        <AddSaveButtonIconMarked className='movies-card__save_on' />
      ) : (
        <AddSaveButtonIcon className='movies-card__save-icon' />
      )}
    </button>
  );
}

export default SaveButton;
