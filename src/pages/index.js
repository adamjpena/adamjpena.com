import React, { useState } from "react";
import Splash from "../components/Splash";
import About from "../components/About";
import Nav from "../components/Nav";

const Index = () => {
  const [shouldShowNavBar, toggleShowNavBar] = useState(false);

  const showNavbar = (shouldShowNavBar) => {
    toggleShowNavBar(shouldShowNavBar);
  };

  return (
    <div className="home">
      <Nav sticky active={shouldShowNavBar} />
      <Splash>
        <Nav sticky={false} {...{ showNavbar }} />
      </Splash>
      <About />
    </div>
  );
};

export default Index;
