import React, { useEffect, useRef } from "react";
import { throttle } from "lodash";
import { Link } from "react-router-dom";
import cx from "classnames";
import styles from "./Nav.module.scss";

const Nav = ({ showNavbar, sticky = false, active = false }) => {
  const navRef = useRef(null);

  const handleScroll = throttle(() => {
    if (!sticky) {
      const yOffset = navRef.current.getBoundingClientRect().y;
      showNavbar(yOffset < 0);
    }
  }, 100);

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
      ref={navRef}
      className={cx(styles.nav, {
        [styles.sticky]: sticky,
      })}
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Link className={styles.navLink} to="/">
              HOME
            </Link>
            <Link className={styles.navLink} to="/resume">
              RESUME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
