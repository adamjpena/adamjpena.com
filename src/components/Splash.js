import React, { useRef, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';
import Stars from './Stars';
import { Button } from 'components/Buttons';
import { Heading, Section } from 'components/Layout';
import gridStyles from 'scss/grid.module.scss';
import styles from './Splash.module.scss';

const transitionDuration = 1600;

const Splash = ({ children = null, isActiveNav = false }) => {
  const sectionRef = useRef(null);
  const starsRef = useRef(null);
  const [blastoffActive, setBlastoffActive] = useState(false);

  const handleMousemove = (e) => {
    const moveX = -e.screenX * 0.035;
    const moveY = -e.screenY * 0.035;
    const moveNebulaX = -e.screenX * 0.02;
    const moveNebulaY = -e.screenY * 0.02;
    starsRef.current.style.transform = `translate(calc(-3.5vw + ${moveX}px), calc(-3.5vh + ${moveY}px))`;
    sectionRef.current.style.backgroundPositionX = `calc(15% + ${moveNebulaX}px)`;
    sectionRef.current.style.backgroundPositionY = `${moveNebulaY}px`;
  };

  const blastoff = () => {
    setBlastoffActive(true);

    scroller.scrollTo('about', {
      duration: 1500,
      delay: 300,
      isDynamic: true,
      smooth: 'easeInOutCubic',
      offset: -88,
    });

    const blastoffTimer = setTimeout(() => {
      setBlastoffActive(false);
      clearTimeout(blastoffTimer);
    }, transitionDuration);
  };

  return (
    <Section
      name='splash'
      classes={cx(styles.splash, { [styles.splashWithActiveNav]: isActiveNav })}
      ref={sectionRef}
    >
      <div
        onDragOver={handleMousemove}
        onMouseMove={handleMousemove}
        className={cx(styles.splashContainer, gridStyles.flex)}
      >
        <Stars
          ref={starsRef}
          className={cx({ [gridStyles.hidden]: isActiveNav })}
        />
        <div
          className={cx(
            styles.splashContent,
            gridStyles.flex,
            gridStyles.noselect,
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
            LET&#39;S GO
            <i className={cx(styles.rocketIcon, 'fa', 'fa-rocket')} />
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
