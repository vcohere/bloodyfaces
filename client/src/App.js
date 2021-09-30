import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Index from './views/Index/Index';
import MintWrap from './views/Mint/MintWrap';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/mint">
          <MintWrap />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
