import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MovieCardImage from '../../images/pic__COLOR_pic.png';
import MoreButton from '../MoreButton/MoreButton';

function Movies() {

  const [isLoadingData, setIsLoadingData] = React.useState(true);

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
      id: 3,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: true,
      isShortFilm: true,
    },
    {
      id: 4,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: true,
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
    {
      id: 6,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: true,
      isShortFilm: false,
    },
    {
      id: 7,
      title: '33 слова о дизайне',
      subtitle: '1ч 47м',
      imageAlt: 'кадр из фильма',
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: true,
    },
  ];

  React.useEffect(() => {
    const loadingDataTimeout = setTimeout(() => {
      setIsLoadingData(false);
    }, 1500);

    return () => {
      clearTimeout(loadingDataTimeout);
    };
  }, []);

  return (
    <main>
      <SearchForm />
      {isLoadingData ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList
            data={movies_list_data}
          />
          <MoreButton
            onClick={() => console.log('Show more')}
          />
        </>
      )}
    </main>
  );
}

export default Movies;
