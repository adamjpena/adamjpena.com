import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { scroller, Element } from "react-scroll";
import Stars from "./Stars";

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
      offset: -52,
    });

    const blastoffTimer = setTimeout(() => {
      setBlastoffActive(false);
      clearTimeout(blastoffTimer);
    }, transitionDuration);
  };
  return (
    <Element name="splash">
      <div>
        <section
          className="splash max-width-screen"
          ref={sectionRef}
          onMouseMove={handleMousemove}
        >
          <Stars ref={starsRef} />
          <div className="home__section splash__container flex container">
            <div className="splash__content flex container noselect">
              <h1 className="h1 margin-top-0">
                <div>
                  Hi&#33; I&#39;m <span className="h1__accent">Adam Peña</span>,
                </div>
                <div>full-stack software engineer.</div>
              </h1>
              <button
                type="button"
                className={`
                    button
                    button--inverted
                    cta
                    cta--${blastoffActive ? "" : "in"}active
                    flex
                  `}
                onClick={blastoff}
              >
                Let&#39;s go
                <i className="cta__icon fa fa-rocket" />
              </button>
            </div>
          </div>
          {children}
        </section>
      </div>
    </Element>
  );
};

Splash.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Splash;
