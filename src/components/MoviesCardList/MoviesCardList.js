import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../MoreButton/MoreButton';
import useCurrentSize from '../../hooks/useCurrentSize';

function MoviesCardList({ locationPathname, data, onSaveMovie, onDeleteSavedMovie }) {
  const [moviesToRender, setMoviesToRender] = React.useState([]);
  const [isShowButtonActive, setIsShowButtonActive] = React.useState(false);
  const [numberMoviesToRender, setNumberMoviesToRender] = React.useState(0);
  const [numberMoviesToAdd, setNumberMoviesToAdd] = React.useState(0);

  const size = useCurrentSize();

  const countNumberMoviesToRender = () => {
    if (size.width >= 1024) {
      setNumberMoviesToRender(12);
      setNumberMoviesToAdd(3);
    } else if (size.width < 1250 && size.width >= 768) {
      setNumberMoviesToRender(8);
      setNumberMoviesToAdd(2);
    } else if (size.width < 768 && size.width >= 320) {
      setNumberMoviesToRender(5);
      setNumberMoviesToAdd(2);
    };
  };

  const handleMoreMoviesButtonClick = () => {
    setMoviesToRender(data.slice(0, moviesToRender.length + numberMoviesToAdd));
    if (moviesToRender.length >= data.length - numberMoviesToAdd) {
      setIsShowButtonActive(false);
    }
  };

  React.useEffect(() => {
    countNumberMoviesToRender();
  }, [size.width]);

  React.useEffect(() => {
    if (locationPathname === '/movies') {
      setMoviesToRender(data.slice(0, numberMoviesToRender));
      if (data.length <= numberMoviesToRender) {
        setIsShowButtonActive(false);
      } else {
        setIsShowButtonActive(true);
      };
    } else if (locationPathname === '/saved-movies') {
      setMoviesToRender(data);
      setIsShowButtonActive(false);
    }
  }, [data, numberMoviesToRender]);

  const moviesCardsMarkup = moviesToRender.map((item) => (
    <li
      key={item.id || item._id}
    >
      <MoviesCard
        data={item}
        locationPathname={locationPathname}
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
    </li>
  ));

  return (
    <div className='movies-card-list'>
      <ul className='movies-card-list__container'>
        {moviesCardsMarkup}
      </ul>
      {locationPathname === '/movies' && isShowButtonActive ? (
        <MoreButton
          onClick={handleMoreMoviesButtonClick}
        />
      ) : null}
    </div>
  );
};

export default MoviesCardList;
