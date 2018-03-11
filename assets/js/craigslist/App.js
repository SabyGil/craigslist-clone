import React, { Component} from 'react';
import Header from './includes/Header';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Category from './pages/Category';
import Details from './pages/Details';

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
          <Route exact path='/:city' component={Home}/>
          <Route exact path='/:city/:category' component={Category}/>
          <Route exact path='/:city/:category/:listings' component={Listings}/>
          <Route exact path='/:city/:category/:listings/:item' component={Details}/>
        </div>
      </Router>
    );
  }
}
