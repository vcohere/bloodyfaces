import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Index from './views/Index/Index';
import Mint from './views/Mint/Mint';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/mint">
          <Mint />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
