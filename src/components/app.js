import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './nav/nav.js';
import Landing from './landing/landing.js';
import Dashboard from './dashboard/dashboard.js';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Nav />
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Fragment>
      </ BrowserRouter>
    );
  }

}

