import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Resume from './Resume';
import ScrollToTop from './ScrollToTop';

const App = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <ScrollToTop>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
    </ScrollToTop>
  </Router>
);

export default App;
