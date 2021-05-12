import React, { Component } from "react";
import Splash from "../components/Splash";
import About from "../components/About";
import Nav from "../components/Nav";

class Index extends Component {
  constructor(props) {
    super(props);
    this.showNavbar = this.showNavbar.bind(this);

    this.state = {
      shouldShowNavBar: false,
    };
  }

  showNavbar(shouldShowNavBar) {
    this.setState({ shouldShowNavBar });
  }

  render() {
    const { shouldShowNavBar } = this.state;

    return (
      <div className="home">
        <Nav sticky active={shouldShowNavBar} />
        <Splash>
          <Nav sticky={false} showNavbar={this.showNavbar} />
        </Splash>
        <About />
      </div>
    );
  }
}

export default Index;
