import React from 'react';
import { Link } from "react-router-dom";

import '../assets/stylesheets/main.scss';

const Nav = () => (
  <div className="nav">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Link className="nav__link" to="/">HOME</Link>
          <Link className="nav__link" to="/resume">RESUME</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Nav;
