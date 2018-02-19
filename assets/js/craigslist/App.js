import React, { Component} from 'react';
import Header from './includes/Header';
import Home from './pages/Home';
import Listings from './pages/Listings';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Home}/>
          <Route exact path='/nyc/community/artists' component={Listings}/>
        </div>
      </Router>
    );
  }
}
