import React, { Component} from 'react'

export default class Details extends Component {
  render () {
    const { match, location, history } =  this.props
    return (
      <div className='details-page'>
        <div className='container'>
          this item is {match.params.item}
        </div>
      </div>
    );
  }
}
