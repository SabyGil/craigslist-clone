import React, { Component} from 'react'

export default class Home extends Component {
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
        <h1>Connecting People <br/>Everywhere</h1>
      </div>
    );
  }
}
