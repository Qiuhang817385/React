import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home';
import One from './One';
import Two from './Two';
export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route path='/' component={Home} />
          <Route path='/One' component={One} />
          <Route path='/Two' component={Two} />
        </div>
      </Router>
    )
  }
}
