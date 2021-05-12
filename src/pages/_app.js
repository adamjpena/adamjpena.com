import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from ".";
import Resume from "./resume";
import ScrollToTop from "../components/ScrollToTop";

const App = () => (
  <BrowserRouter
    onUpdate={() => window.scrollTo(0, 0)}
    basename={process.env.PUBLIC_URL}
  >
    <Switch>
      <ScrollToTop>
        <Route exact path="/" component={Index} />
        <Route path="/resume" component={Resume} />
      </ScrollToTop>
    </Switch>
  </BrowserRouter>
);

export default App;
