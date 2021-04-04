import React from 'react';
import StudentPhoto from '../../images/student-photo.jpg';

function AboutMe() {
  return (
    <section className="about-me">
        <h2 className="title">Студент</h2>
        <div className="about-me__section">
            <div className="about-me__text-box">
                <h3 className="about-me__name">Виталий</h3>
                <p className="about-me__caption">Фронтенд-разработчик, 30 лет</p>
                <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <ul className="about-me__contact">
                    <li><a className="about-me__contact-item" href="https://ru-ru.facebook.com/" target="_blank" rel="noreferrer">Fasebook</a></li>
                    <li><a className="about-me__contact-item" href="https://github.com/RAMA-MOSA" target="_blank" rel="noreferrer">Github</a></li>
                </ul>
            </div>
            <img className="about-me__img" src={StudentPhoto} alt="Фото студента"></img>
        </div>
        <h3 className="portfolio">Портфолио</h3>
        <ul className="portfolio__list">
            <li className="portfolio__list-item">
                <a className="portfolio__text" href="https://rama-mosa.github.io/how-to-learn/" target="_blank" rel="noreferrer">Статичный сайт
                    <span className="portfolio__span">↗</span>
                </a>
            </li>
            <li className="portfolio__list-item">
                <a className="portfolio__text" href="https://rama-mosa.github.io/russian-travel/" target="_blank" rel="noreferrer">Адаптивный сайт
                    <span className="portfolio__span">↗</span>
                </a>
            </li>
            <li className="portfolio__list-item">
                <a className="portfolio__text" href="https://m-s.students.nomoredomains.icu" target="_blank" rel="noreferrer">Одностраничное приложение
                    <span className="portfolio__span">↗</span>
                </a>
            </li>
        </ul>
    </section>
  );
}

export default AboutMe;
