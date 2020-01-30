import React, { Component } from 'react'

export default class Two extends Component {

  render () {
    console.log(this.props.match.params.x);
    console.log(this.props.match.params.y);

    return (
      <div>
        <h3>Two</h3>
      </div>
    )
  }
}
