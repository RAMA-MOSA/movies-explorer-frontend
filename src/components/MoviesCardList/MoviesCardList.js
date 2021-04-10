import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ locationPathname, data }) {
  
  const moviesCardsMarkup = data.map((item) => (
    <li
      key={item.id}
    >
      <MoviesCard
        data={item}
        locationPathname={locationPathname}
      />
    </li>
  ))

  return (

    <div className='movies-card-list'>
      <ul className='movies-card-list__container'>
        {moviesCardsMarkup}
      </ul>
    </div>
  );
}

export default MoviesCardList;
