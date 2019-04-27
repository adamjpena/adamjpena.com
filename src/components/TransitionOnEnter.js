import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';

class TransitionOnEnter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entered: false,
    };

    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter() {
    this.setState({ entered: true });
  }

  render() {
    const { children, transition } = this.props;
    const { entered } = this.state;
    return (
      <Waypoint onEnter={this.handleEnter}>
        <div
          className={`
            transition
            ${entered ? `transition--${transition}` : ''}
          `}
        >
          { children }
        </div>
      </Waypoint>
    );
  }
}

TransitionOnEnter.propTypes = {
  children: PropTypes.node.isRequired,
  transition: PropTypes.string.isRequired,
};

export default TransitionOnEnter;
