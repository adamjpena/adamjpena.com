import React, { useState } from "react";
import cx from "classnames";
import { Waypoint } from "react-waypoint";
import styles from "../scss/transition.module.scss";

export const TRANSITIONS = {
  REVEAL: "reveal",
  GROW: "grow",
  SLIDEFROMRIGHT: "slide-from-right",
};

const TransitionOnEnter = ({ children, transition }) => {
  const [isEntered, setIsIntered] = useState(false);

  const handleEnter = () => {
    setIsIntered(true);
  };

  return (
    <Waypoint onEnter={handleEnter}>
      <div
        className={cx(styles.transition, {
          [styles[transition]]: isEntered,
        })}
      >
        {children}
      </div>
    </Waypoint>
  );
};

export default TransitionOnEnter;
