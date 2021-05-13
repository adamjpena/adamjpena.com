import React, { useRef, useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { scroller } from "react-scroll";
import Section from "./Section";
import Stars from "./Stars";
import Button from "./Button";
import Heading from "./Heading";
import gridStyles from "../scss/grid.module.scss";
import styles from "./Splash.module.scss";

const transitionDuration = 1600;

const Splash = ({ children }) => {
  const sectionRef = useRef(null);
  const starsRef = useRef(null);
  const [blastoffActive, setBlastoffActive] = useState(false);

  const handleMousemove = (e) => {
    const moveX = -e.screenX * 0.025;
    const moveY = -e.screenY * 0.025;
    starsRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    sectionRef.current.style.backgroundPositionX = `${moveX}px`;
    sectionRef.current.style.backgroundPositionY = `${moveY}px`;
  };

  const blastoff = () => {
    setBlastoffActive(true);

    scroller.scrollTo("about", {
      duration: 1500,
      delay: 300,
      isDynamic: true,
      smooth: "easeInOutCubic",
      offset: -53,
    });

    const blastoffTimer = setTimeout(() => {
      setBlastoffActive(false);
      clearTimeout(blastoffTimer);
    }, transitionDuration);
  };

  return (
    <Section name="splash" classes={cx(styles.splash)} ref={sectionRef}>
      <div className={cx(styles.splashContainer, gridStyles.flex, "container")}>
        <Stars ref={starsRef} onMouseMove={handleMousemove} />
        <div
          className={cx(
            styles.splashContent,
            gridStyles.flex,
            gridStyles.noselect,
            "container"
          )}
        >
          <Heading classes={gridStyles.marginTop0}>
            <div>
              Hi&#33; I&#39;m <strong>Adam Peña</strong>,
            </div>
            <div>full-stack software engineer.</div>
          </Heading>
          <Button
            inverted
            classes={cx(styles.rocketCta, {
              [styles.active]: blastoffActive,
              [styles.inactive]: !blastoffActive,
            })}
            onClick={blastoff}
          >
            Let&#39;s go
            <i className={cx(styles.rocketIcon, "fa", "fa-rocket")} />
          </Button>
        </div>
      </div>
      {children}
    </Section>
  );
};

Splash.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Splash;
