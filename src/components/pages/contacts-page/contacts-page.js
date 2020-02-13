import React from "react";

import "./contacts-page.css";

import contact1 from "./contact1.jpg";
import contact2 from "./contact2.jpg";

const ContactsPage = () => {
  return (
    <div className="contacts-details">
      <div className="contacts-details__photo animate-left">
        <div className="img-box">
          <img src={contact2} alt="Photo2"></img>
          <img src={contact1} alt="Photo1"></img>
        </div>
      </div>
      <div className="contacts-details__content">
        <div className="content__box content__box-title">
          <div className="box__title"></div>
          <div className="box__details box__details-contact">
            <ul>
            <div className="content__title animated zoomIn slow">
              <h1 className="content__title-lead">Contact us</h1>
            </div>
            <div className="content__title-info">
              <div className="content__title-sublead content__title-email animated zoomIn slow">
                budaev.e@gmail.com
              </div>
              <div className="content__title-sublead content__title-phone animated zoomIn slow">
                +7 (925) 068-30-60
              </div>
            </div>
            </ul>
          </div>
        </div>
        <div className="content__box content__box-text animate-bottom">
          <div className="box__title">
            <h3>Evgeniy Budaev</h3>
            <h3>Frontend Developer</h3>
            <h3>Junior</h3>
          </div>
          <div className="box__details box__details-contact">
            <ul>
              <li>
                Thank you for reading my resume! I await your comments! To the
                connection!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
