import React, { Component } from 'react';
import { scroller, Element } from 'react-scroll';
import Nav from './Nav';

const transitionDuration = 1600;

class Splash extends Component {
  constructor(props) {
    super(props);
    this.splash = React.createRef();
    this.stars = React.createRef();
    this.blastoff = this.blastoff.bind(this);
    this.blastoffTimer = null;

    this.state = {
      blastoffActive: false,
    };
  }

  componentDidMount() {
    const stars = document.createElement('script');
    stars.type = 'text/javascript';
    stars.src = `${process.env.PUBLIC_URL}/animations/stars.min.js`;

    document.head.appendChild(stars);
    stars.onload = () => {
      window.starsJS('stars', {
        stars: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#fff',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: '#fff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
            onclick: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 3,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    };
  }

  onMouseMove(e) {
    const moveX = -e.screenX * 0.025;
    const moveY = -e.screenY * 0.025;
    this.splash.current.style.backgroundPositionX = `${moveX}px`;
    this.splash.current.style.backgroundPositionY = `${moveY}px`;
    this.stars.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }

  blastoff() {
    this.setState({ blastoffActive: true });
    scroller.scrollTo('about', {
      duration: 1500,
      delay: 300,
      isDynamic: true,
      smooth: 'easeInOutCubic',
      offset: 50,
    });
    this.blastoffTimer = setTimeout(() => {
      this.setState({ blastoffActive: false });
      clearTimeout(this.timer);
    }, transitionDuration);
  }

  render() {
    const { blastoffActive } = this.state;
    return (
      <Element name="splash">
        <div onMouseMove={this.onMouseMove.bind(this)}>
          <section className="splash max-width-screen" ref={this.splash}>
            <div id="stars" ref={this.stars} className="splash__stars" />
            <div className="home__section splash__container flex container">
              <div className="splash__content flex container noselect">
                <h1 className="h1 margin-top-0">
                  <div>
                    Hi&#33; I&#39;m
                    {' '}
                    <span className="h1__accent">Adam Peña</span>
,
                  </div>
                  <div>
                    full-stack software engineer.
                  </div>
                </h1>
                <button
                  type="button"
                  className={`
                    button
                    button--inverted
                    cta
                    cta--${blastoffActive ? '' : 'in'}active
                    flex
                  `}
                  onClick={this.blastoff}
                >
                  Show me code
                  <i className="cta__icon fa fa-rocket" />
                </button>
              </div>
            </div>
            <Nav />
          </section>
        </div>
      </Element>
    );
  }
}

export default Splash;
