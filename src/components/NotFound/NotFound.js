import React from 'react';
import { useHistory } from 'react-router-dom';

function NotFound() {

  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <main className='not-found'>
      <div className='not-found__box'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__subtitle'>Страница не найдена</p>
      </div>
      <button className='not-found__button' onClick={handleGoBack}>Назад</button>
    </main>
  )
}

export default NotFound;
