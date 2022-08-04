import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"><News Key="general" pageSize={9} country="in" category="general" /></Route>
            <Route exact path="/business"><News Key="business" pageSize={9} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News Key="entertainment" pageSize={9} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News Key="general" pageSize={9} country="in" category="general" /></Route>
            <Route exact path="/health"><News Key="health" pageSize={9} country="in" category="health" /></Route>
            <Route exact path="/science"><News Key="science" pageSize={9} country="in" category="science" /></Route>
            <Route exact path="/sports"><News Key="sports" pageSize={9} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News Key="technology" pageSize={9} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

