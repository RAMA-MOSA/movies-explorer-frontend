import React from 'react';
import { useLocation } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Notification from '../Notification/Notification';

function SavedMovies({ onDeleteSavedMovie, savedMovies, isSavedMoviesEmpty, isLoadingData, handleSearchSavedMoviesData, getSavedMoviesResStatus, isNoSavedMoviesFound }) {
  const [isMoviesApiError, setIsMoviesApiError] = React.useState(false);

  const handleSubmit = (data) => {
    handleSearchSavedMoviesData(data);
  };
  
  const location = useLocation();

  const handleErrors = () => {
    if (getSavedMoviesResStatus) {
      switch (getSavedMoviesResStatus) {
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
  }, [getSavedMoviesResStatus]);

  React.useEffect(() => {
    handleSearchSavedMoviesData();
  }, []);

  return (
    <main>
      <SearchForm onSubmit={handleSubmit}/>
      {!isLoadingData && isSavedMoviesEmpty && (
        <Notification
          text='В избранном пока ничего нет'
        />
      )}
      {!isLoadingData && isNoSavedMoviesFound && (
        <Notification
          text='Ничего не найденно'
        />
      )}
      {isMoviesApiError && (
        <Notification
          text='Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        />
      )}
      <MoviesCardList
        data={savedMovies}
        locationPathname={location.pathname}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
    </main>
  );
};

export default SavedMovies;
