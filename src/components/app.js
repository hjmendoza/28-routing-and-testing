import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Landing from './landing/landing.js';
import Dashboard from './dashboard/dashboard.js';

import '../style/app.scss';

export default class App extends Component {
  // constructor(props){
  //   super(props)
  // }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <main>
          <nav>
            <NavLink to="/">Landing</NavLink>
            <NavLink to="/Dashboard">Dashboard</NavLink>
          </nav>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          </main>
        </Fragment>
      </ BrowserRouter>
    );
  }

}

