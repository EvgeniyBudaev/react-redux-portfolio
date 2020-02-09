import React from "react";

import "./about-page.css";

import portrait1 from "./portrait1.jpg";
import portrait2 from "./portrait2.jpg";

const AboutPage = () => {
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
              <h1 className="content__title-lead">Hi</h1>
            </div>
          </div>
        </div>

        <div className="content__box animated zoomIn slow">
          <div className="box__title">
            <h3>About</h3>
          </div>
          <div className="box__details box__details-about">
            <p>
              My name is Evgeniy. I live in Moscow. I specialize mainly in
              front-end development. I consider it an ideal job where I will be
              useful in the development of your project, as a developer, where I
              will feel part of the team. I am very interested in knowing my
              clients' expectations and translating them into my projects.
            </p>
          </div>
        </div>

        <div className="content__box animated zoomIn slow">
          <div className="box__title">
            <h3>Skills / Frontend</h3>
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
            <h3>Skills / BackEnd</h3>
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
            <h3>experience</h3>
          </div>
          <div className="box__details box__details-about">
            <div className="tag">
              <span className="tag__hash"># November 2019 - Present:</span>
              <span className="tag__title">
                TSD BYR PEX <br />
                Moscow
                <br /> Leading engineer of the production and technical
                departament
                <br />
                Work with the customer. Development of technical documentation.
                Coordination of company service departments.
              </span>
            </div>
            <div className="tag">
              <span className="tag__hash">
                # September 2018 - October 2019:
              </span>
              <span className="tag__title">
                TSD BYR PEX <br />
                Moscow
                <br />
                Production and Technical Department Engineer
                <br />
                Development of technical documentation. Work with the customer
                and technical supervision.
              </span>
            </div>
            <div className="tag">
              <span className="tag__hash"># June 2012 - September 2018:</span>
              <span className="tag__title">
                TSD BYR PEX <br />
                Penza
                <br />
                Representative
                <br />
                Represent the interests of the company, the conclusion of
                contracts, the preparation of commercial proposals.
              </span>
            </div>
            <div className="tag">
              <span className="tag__hash"># January 2010 - June 2012:</span>
              <span className="tag__title">
                BYR PEKS company <br />
                Penza
                <br />
                Work producer
                <br />
                Work with several objects.
              </span>
            </div>
            <div className="tag">
              <span className="tag__hash"># July 2008 - December 2009:</span>
              <span className="tag__title">
                BYR PEKS Stroy <br />
                Penza
                <br />
                Master
                <br />
                Reading documentation, quality control, compiling applications,
                working with people.
              </span>
            </div>
          </div>
        </div>

        <div className="content__box animate-bottom">
          <div className="box__title">
            <h3>Education</h3>
          </div>
          <div className="box__details box__details-about">
            <div className="tag">
              <span className="tag__hash"># 2019-2020:</span>
              <span className="tag__title">
                IT full-time courses EASYUM <br />
                Frontend react, javascript developer
                <br />
              </span>
            </div>
            <div className="tag">
              <span className="tag__hash"># 2019:</span>
              <span className="tag__title">
                IT full-time courses EASYUM <br />
                Backend java developer
                <br />
              </span>
            </div>
            <div className="tag">
              <span className="tag__hash"># 2007:</span>
              <span className="tag__title">
                Penza State University of Architecture and Construction, Penza
                <br />
                Heat and Gas Supply and Ventilation Engineer
                <br />
              </span>
            </div>
          </div>
        </div>
        {/* slider  */}
        <div className="about__slider-wrapper animate-bottom">
          <ul className="pgwSlider">
            <li>
              <img
                src="../../images/javascript.png"
                alt="Certificate JavaScript Junior"
              ></img>
            </li>
            <li>
              <img
                src="../../images/java.png"
                alt="Certificate Java Junior"
              ></img>
            </li>
            <li>
              <img
                src="../../images/javaOtus.jpeg"
                alt="Certificate Java Otus"
              ></img>
            </li>
          </ul>
        </div>
        {/* end slider */}
      </div>
    </div>
  );
};

export default AboutPage;
