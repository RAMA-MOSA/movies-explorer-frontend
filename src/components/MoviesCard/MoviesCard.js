import React from 'react';

import SaveButton from '../SaveButton/SaveButton';
import convertTime from '../../utils/convertTime';
import getFullImageUrl from '../../utils/getFullImageUrl';
import getTrailerUrl from '../../utils/getTrailerUrl';

function MoviesCard({ data, locationPathname, onSaveMovie, onDeleteSavedMovie }) {
  const [movieData, setMovieData] = React.useState({
    country: data.country || 'Нет данных',
    director: data.director || 'Нет данных',
    duration: data.duration || 0,
    year: data.year || 'Нет данных',
    description: data.description || 'Нет данных',
    image: getFullImageUrl(data),
    trailer: getTrailerUrl(data),
    nameRU: data.nameRU || 'Нет данных',
    nameEN: data.nameEN || 'Нет данных',
    movieId: data.id,
    thumbnail: getFullImageUrl(data),
  });

  const handleClickSaveButton = () => {
    if (locationPathname === '/movies') {
      if (!data.saved) {
        onSaveMovie(movieData);
      } else {
        onDeleteSavedMovie(data._id);
      }
    } else if (locationPathname === '/saved-movies') {
      onDeleteSavedMovie(data._id);
    }
  };

  return (
    <div className="movies-card" id={data.id || movieData.movieId}>
        <div className="movies-card__info">
            <div className="movies-card__text">
                <p className="movies-card__name">{movieData.nameRU || movieData.nameEN}</p>
                <p className="movies-card__time">{convertTime(movieData.duration)}</p>
            </div>
            <SaveButton
                className="movies-card__save"
                onClick={handleClickSaveButton}
                locationPathname={locationPathname}
                isSaved={data.saved}
            />
        </div>
        <a href={movieData.trailer} target='_blank' rel="noreferrer"><img className="movies-card__poster" alt={movieData.nameRU || movieData.nameEN} src={movieData.image} /></a>
    </div>
  );
}

export default MoviesCard;
