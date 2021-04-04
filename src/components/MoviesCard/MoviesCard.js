import React from 'react';

import SaveButton from '../SaveButton/SaveButton';

function MoviesCard({ data, locationPathname }) {
  
  const [isMarked, setIsMarked] = React.useState(data.isMarked);

  const handleMarkMovieCard = () => {
    setIsMarked(!isMarked);
  };

  return (
    <div className="movies-card" id={data.id}>
        <div className="movies-card__info">
            <div className="movies-card__text">
                <p className="movies-card__name">{data.title}</p>
                <p className="movies-card__time">{data.subtitle}</p>
            </div>
            <SaveButton
                className="movies-card__save"
                onClick={handleMarkMovieCard}
                locationPathname={locationPathname}
                isMarked={isMarked}
            />
        </div>
        <img className="movies-card__poster" alt={data.imageAlt} src={data.imageSrc}></img>
    </div>
  );
}

export default MoviesCard;
