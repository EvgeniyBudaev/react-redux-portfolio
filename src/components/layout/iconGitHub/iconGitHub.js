import React from 'react';

import "./iconGitHub.css";

const IconGitHub = () => {
  return (
    <div className="github-socials hover-target nav-menu__items-delay animated fadeInUp">
      <div className="github-socials__social">
        <a
          href="https://github.com/EvgeniyBudaev/react-redux-portfolio"
          target="blank"
        >
          <div className="icon">
            <i className="fa fa-github" aria-hidden="true"></i>
          </div>
        </a>
      </div>
    </div>
  );
}

export default IconGitHub;
