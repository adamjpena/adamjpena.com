import React, { useState } from "react";
import Splash from "../components/Splash";
import About from "../components/About";
import Nav from "../components/Nav";
import styles from "./index.module.scss";

const Index = () => {
  const [shouldShowNavBar, toggleShowNavBar] = useState(false);

  const showNavbar = (shouldShowNavBar) => {
    toggleShowNavBar(shouldShowNavBar);
  };

  return (
    <div className={styles.index}>
      <Nav sticky active={shouldShowNavBar} />
      <Splash>
        <Nav {...{ showNavbar }} />
      </Splash>
      <About />
    </div>
  );
};

export default Index;
