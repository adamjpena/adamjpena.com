import React from "react";
import { Element } from "react-scroll";
import TransitionOnEnter from "./TransitionOnEnter";

import portraitVertical from "../assets/images/adam-city-vertical.jpg";
import portraitVertical2x from "../assets/images/adam-city-vertical@2x.jpg";
import portrait from "../assets/images/adam-city.jpg";
import portrait2x from "../assets/images/adam-city@2x.jpg";

const About = () => (
  <Element name="about">
    <section id="about" className="home__section about flex">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-push-3 col-xs-8 col-xs-push-2 col-md-4 col-md-push-0 margin-bottom-2x">
            <TransitionOnEnter transition="reveal">
              <div>
                <img
                  src={portrait}
                  srcSet={`${portrait} 481w, ${portrait2x} 962w`}
                  alt="Adam J Pena"
                  className="visible-lte-sm"
                />
                <img
                  src={portraitVertical}
                  srcSet={`${portraitVertical} 360w, ${portraitVertical2x} 720w`}
                  alt="Adam J Pena"
                  className="hidden-lte-sm"
                />
                <div className="social-links flex">
                  <a
                    href="https://www.linkedin.com/in/adamjpena"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                  <a
                    href="https://www.github.com/adamjpena"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-github" />
                  </a>
                </div>
              </div>
            </TransitionOnEnter>
          </div>
          <div className="col-xs-12 col-md-8">
            <TransitionOnEnter transition="grow">
              <h2 className="h2 margin-top-0">About Me</h2>
              <h4 className="h4">Creating beautiful, minimal interfaces</h4>
              <p className="margin-bottom-2x">
                I take pleasure in streamlining a process to increase
                productivity and ensure a quality output. In design, this
                translates to designing intuitive interfaces to make things as
                easy as drawing in wet sand on a beach. If I&#39;m not behind a
                screen writing code or producing music, I&#39;m probably
                learning a new recipe or at the gym.
              </p>
            </TransitionOnEnter>
            <TransitionOnEnter transition="slide-from-right">
              <div className="row">
                <div className="skill-badge col-xs-6 col-sm-4">
                  <div className="skill-badge__icon">
                    <i className="fa fa-user" />
                  </div>
                  <div className="skill-badge__info">
                    Building intuitive interactions
                  </div>
                </div>
                <div className="skill-badge col-xs-6 col-sm-4">
                  <div className="skill-badge__icon">
                    <i className="fa fa-sitemap" />
                  </div>
                  <div className="skill-badge__info">
                    Increasing user conversion
                  </div>
                </div>
                <div className="clearfix hidden-sm hidden-md hidden-lg" />
                <div className="skill-badge col-xs-6 col-sm-4 col-xs-push-3 col-sm-push-0">
                  <div className="skill-badge__icon">
                    <i className="fa fa-mobile" />
                  </div>
                  <div className="skill-badge__info">
                    Developing responsive experiences
                  </div>
                </div>
              </div>
            </TransitionOnEnter>
          </div>
        </div>
      </div>
    </section>
  </Element>
);

export default About;
