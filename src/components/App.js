import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import ScrollToTop from "./ScrollToTop";

const App = () => (
  <BrowserRouter
    onUpdate={() => window.scrollTo(0, 0)}
    basename={process.env.PUBLIC_URL}
  >
    <Switch>
      <ScrollToTop>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
      </ScrollToTop>
    </Switch>
  </BrowserRouter>
);

export default App;
