import React from 'react';

import { useLocation } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Notification from '../Notification/Notification';

function Movies({ isLoadingData, resStatus, moviesData, onSubmit, onSaveMovie, onDeleteSavedMovie, isNoMoviesFound }) {
  const location = useLocation();
  const [isMoviesApiError, setIsMoviesApiError] = React.useState(false);

  const handleSubmit = (data) => {
    onSubmit(data);
  };

  const handleErrors = () => {
    if (resStatus) {
      switch (resStatus) {
        case 200:
          setIsMoviesApiError(false);
          break;
        default:
          setIsMoviesApiError(true);
          break;
      };
    };
  };

  React.useEffect(() => {
    handleErrors();
  }, [resStatus]);

  return (
    <main className="movies">
      <SearchForm
        onSubmit={handleSubmit}
      />
      {!isLoadingData && isNoMoviesFound && (
        <Notification
          text='Ничего не найденно'
        />
      )}
      {isLoadingData && (
        <Preloader />
      )}
      {isMoviesApiError && (
        <Notification
          text='Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        />
      )}
      <MoviesCardList
        data={moviesData}
        locationPathname={location.pathname}
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
    </main>
  );
};

export default Movies;
