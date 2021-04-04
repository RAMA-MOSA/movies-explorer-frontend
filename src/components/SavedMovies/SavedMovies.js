import React from 'react';
import { useLocation } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MovieCardImage from '../../images/pic__COLOR_pic.png';

function SavedMovies() {
  
  const location = useLocation();

  const movies_list_data = [
    {
      id: 1,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: true,
    },
    {
      id: 2,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: false,
    },
    {
      id: 5,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: false,
    },
  ];

  return (
    <main>
      <SearchForm />
      <MoviesCardList
        data={movies_list_data}
        locationPathname={location.pathname}
      />
    </main>
  );
}

export default SavedMovies;
