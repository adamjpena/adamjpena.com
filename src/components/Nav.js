import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../assets/stylesheets/main.scss";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { sticky, showNavbar } = this.props;

    if (!sticky) {
      const yOffset = this.node.getBoundingClientRect().y;
      showNavbar(yOffset < 0);
    }
  }

  render() {
    const { sticky, active } = this.props;

    if (sticky && !active) {
      return null;
    }

    return (
      <div
        ref={(node) => {
          this.node = node;
        }}
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
  }
}

Nav.defaultProps = {
  active: false,
  sticky: false,
  showNavbar: null,
};

Nav.propTypes = {
  showNavbar: PropTypes.func,
  sticky: PropTypes.bool,
  active: PropTypes.bool,
};

export default Nav;
