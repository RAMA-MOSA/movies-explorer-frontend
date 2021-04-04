import React from 'react';

function AboutProject() {
  return (
      <section className="about-project">
          <h2 className="title">О проекте</h2>
          <div className="about-project__grid">
              <div className="about-project__text-container">
                  <h3 className="about-project__caption">Дипломный проект включал 5 этапов</h3>
                  <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
              </div>
              <div className="about-project__text-container">
                  <h3 className="about-project__caption">На выполнение диплома ушло 5 недель</h3>
                  <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
              </div>
          </div>
          <div className="about-project__shema-grid">
              <p className="about-project__line green">1 неделя</p>
              <p className="about-project__line">4 недели</p>
              <p className="about-project__shema-text">Back-end</p>
              <p className="about-project__shema-text">Front-end</p>
          </div>
      </section>
  );
}

export default AboutProject;
