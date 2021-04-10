import React from 'react';

function Footer() {
  return (
    
    <footer className="footer">
      <div className='footer__container'>
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__box">
            <p className="footer__text">© 2021</p>
            <ul className="footer__list">
                <li><a className="footer__item" href="https://praktikum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                <li><a className="footer__item" href="https://github.com/RAMA-MOSA" target="_blank" rel="noreferrer">Github</a></li>
                <li><a className="footer__item" href="https://ru-ru.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
            </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
