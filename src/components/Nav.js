import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "../assets/stylesheets/main.scss";

const Nav = ({ showNavbar, sticky = false, active = false }) => {
  const node = useRef(null);

  const handleScroll = () => {
    if (!sticky) {
      const yOffset = node.current.getBoundingClientRect().y;
      showNavbar(yOffset < 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  if (sticky && !active) {
    return null;
  }

  return (
    <div
      ref={node}
      className={`
          nav
          ${sticky ? "nav--sticky" : ""}
          ${active ? "nav--active" : ""}
        `}
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Link className="nav__link" to="/">
              HOME
            </Link>
            <Link className="nav__link" to="/resume">
              RESUME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
