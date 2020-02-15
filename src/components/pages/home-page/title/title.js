import React from 'react';

import './title.css';

const Title = () => {
  return (
    <div className="home-page__titles">
      <div className="home-page__title animated zoomIn slow">
        <span className="home-page__title_light">Резюме</span>
      </div>
      <div className="home-page__subtitle animated zoomIn slow">
        Frontend developer
      </div>
    </div>
  );
}

export default Title;