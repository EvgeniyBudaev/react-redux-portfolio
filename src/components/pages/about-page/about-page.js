import React, { Component } from "react";
import "./about-page.css";
import portrait1 from "./images/portrait1.jpg";
import portrait2 from "./images/portrait2.jpg";
import ImageGallery from './image-gallery';

class AboutPage extends Component {
  componentDidMount(){

  };

  render() {
  return (
    <div className="about-details">
      <div className="about-details__photo animate-left">
        <div className="img-box">
          <img src={portrait2} alt="Portrait2"></img>
          <img src={portrait1} alt="Portrait1"></img>
        </div>
      </div>

      <div className="about-details__content">
        <div className="content__box content__box-title">
          <div className="box__title"></div>
          <div className="box__details box__details-about">
            <div className="content__title animated zoomIn slow">
              <h1 className="content__title-lead">Привет</h1>
            </div>
          </div>
        </div>

        <div className="content__box animated zoomIn slow">
          <div className="box__title">
            <h3 className="h3">Обо мне</h3>
          </div>
          <div className="box__details box__details-about">
            <p>
              Меня зовут Евгений. Проживаю в Москве. Я специализируюсь в
              основном на фронт-энд разработке. Я считаю идеальной работой, где
              я буду полезен при разработке Вашего проекта, как разработчик, где
              я буду чувствовать себя частью команды.
            </p>
          </div>
        </div>

        <div className="content__box animated zoomIn slow">
          <div className="box__title">
            <h3>Навыки / Frontend</h3>
          </div>
          <div className="box__details box__details-about">
            <div className="tag">
              <span className="tag__hash">#</span>
              <span className="tag__title">React + Redux</span>
            </div>
            <div className="tag">
              <span className="tag__hash">#</span>
              <span className="tag__title">VueJs</span>
            </div>
            <div className="tag">
              <span className="tag__hash">#</span>
              <span className="tag__title">JavaScript</span>
            </div>
            <div className="tag">
              <span className="tag__hash">#</span>
              <span className="tag__title">HTML5, CSS3, SCSS</span>
            </div>
            <div className="tag">
              <span className="tag__hash">#</span>
              <span className="tag__title">jQuery</span>
            </div>
            <div className="tag">
              <span className="tag__hash">#</span>
              <span className="tag__title">GULP, Adobe Photoshop, Figma</span>
            </div>
            <div className="tag">
              <span className="tag__hash">#</span>
              <span className="tag__title">
                GIT, Bootstrap 4, Flex, Cross-browser layout, Adaptability
              </span>
            </div>
          </div>
        </div>

        <div className="content__box animate-bottom">
          <div className="box__title">
            <h3>Навыки / BackEnd</h3>
          </div>
          <div className="box__details box__details-about">
            <div className="tag">
              <span className="tag__hash">#</span>
              <span className="tag__title">Java SE, EE</span>
            </div>
            <div className="tag">
              <span className="tag__hash">#</span>
              <span className="tag__title">Java Servlets</span>
            </div>
            <div className="tag">
              <span className="tag__hash">#</span>
              <span className="tag__title">JSP</span>
            </div>
            <div className="tag">
              <span className="tag__hash">#</span>
              <span className="tag__title">JDBC</span>
            </div>
            <div className="tag">
              <span className="tag__hash">#</span>
              <span className="tag__title">Apache Maven</span>
            </div>
            <div className="tag">
              <span className="tag__hash">#</span>
              <span className="tag__title">Apache Tomcat</span>
            </div>
            <div className="tag">
              <span className="tag__hash">#</span>
              <span className="tag__title">My SQL</span>
            </div>
          </div>
        </div>

        <div className="content__box animate-bottom">
          <div className="box__title">
            <h3>Опыт работы</h3>
          </div>
          <div className="box__details box__details-about">
            <div className="tag">
              <span className="tag__hash">
                # Ноябрь 2019 - По настоящее время:
              </span>
              <span className="tag__title">
                ТСД БИР ПЕКС <br />
                Москва
                <br /> Ведущий инженер производственно-технического отдела
                <br />
                Работа с заказчиком. Разработка технической документации.
                Координация работы отделов компании.
              </span>
            </div>
            <div className="tag">
              <span className="tag__hash"># Сентябрь 2018 - Октябрь 2019:</span>
              <span className="tag__title">
                ТСД БИР ПЕКС <br />
                Москва
                <br />
                Инженер производственно-технического отдела
                <br />
                Разработка технической документации. Работа с заказчиком и
                техническим надзором.
              </span>
            </div>
            <div className="tag">
              <span className="tag__hash"># Июнь 2012 - Сентябрь 2018:</span>
              <span className="tag__title">
                ТСД БИР ПЕКС <br />
                Пенза
                <br />
                Представитель
                <br />
                Представление интересов компании, заключение контрактов,
                подготовка коммерческих предложений.
              </span>
            </div>
            <div className="tag">
              <span className="tag__hash"># Январь 2010 - Июнь 2012:</span>
              <span className="tag__title">
                Компания БИР ПЕКС <br />
                Пенза
                <br />
                Производитель работ
                <br />
                Работа с несколькими объектами одновременно.
              </span>
            </div>
            <div className="tag">
              <span className="tag__hash"># Июль 2008 - Декабрь 2009:</span>
              <span className="tag__title">
                БИР ПЕКС Строй <br />
                Пенза
                <br />
                Мастер
                <br />
                Чтение документации, контроль качества, составление приложений,
                работа с людьми.
              </span>
            </div>
          </div>
        </div>

        <div className="content__box animate-bottom">
          <div className="box__title">
            <h3>Образование</h3>
          </div>
          <div className="box__details box__details-about">
            <div className="tag">
              <span className="tag__hash"># 2019-2020:</span>
              <span className="tag__title">
                IT курсы EASYUM <br />
                Frontend react, javascript developer
                <br />
              </span>
            </div>
            <div className="tag">
              <span className="tag__hash"># 2019:</span>
              <span className="tag__title">
                IT курсы EASYUM <br />
                Backend java developer
                <br />
              </span>
            </div>
            <div className="tag">
              <span className="tag__hash"># 2007:</span>
              <span className="tag__title">
                Пензенский Государственный Университет Архитектуры и
                Строительства, Пенза
                <br />
                ТеплоГазоСнабжение и Вентиляция
                <br />
              </span>
            </div>
          </div>
        </div>

        {/* slider  */}
        <div className="about__slider-wrapper animate-bottom">
          <ImageGallery />
        </div>
        {/* end slider */}
      </div>
    </div>
  );
};
};


export default AboutPage;
