import React, { Component} from 'react';
import Header from './includes/Header';
import Home from './pages/Home';

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
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}
