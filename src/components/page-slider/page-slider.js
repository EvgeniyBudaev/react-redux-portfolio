import React, { Component }  from 'react';
import Swiper from 'react-id-swiper';
import { Switch, Route } from "react-router-dom";
import './page-slider.css';
import 'swiper/css/swiper.css'
// import img1 from './images/img1.jpg';
// import img2 from './images/img2.jpg';
import HomePage from '../pages/home-page';
import WorksPage from '../pages/works-page';
import { ROUTES } from '../../util/routes';
import AsidePanel from '../layout/aside-panel';
import Sidebar from '../layout/sidebar';

const PageSlider = () => {
  const params = {
    pagination: '.swiper-pagination',
    effect: 'cube',
    grabCursor: true,
    cube: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  return (


    <Swiper {...params}>

      <div className="swiper-slide slide1">
<HomePage></HomePage>

      </div>

      <div className="swiper-slide slide2">

              <WorksPage></WorksPage>

      </div>

    </Swiper>


  )
  };

export default PageSlider;
