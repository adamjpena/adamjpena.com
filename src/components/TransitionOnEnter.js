import React, { useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Waypoint } from "react-waypoint";

const TransitionOnEnter = ({ children, transition }) => {
  const [isEntered, setIsIntered] = useState(false);

  const handleEnter = () => {
    setIsIntered(true);
  };

  return (
    <Waypoint onEnter={handleEnter}>
      <div
        className={cx(transition, {
          [`transition--${transition}`]: isEntered,
        })}
      >
        {children}
      </div>
    </Waypoint>
  );
};

export default TransitionOnEnter;
