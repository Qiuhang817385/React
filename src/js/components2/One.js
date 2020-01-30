import React, { Component } from 'react'

export default class One extends Component {
  constructor(props) {
    super(props);
    this.handdleClick = this.handdleClick.bind(this);
  }
  handdleClick () {
    let { history } = this.props;
    history.push("/Two")
  }
  render () {
    const { handdleClick } = this;
    return (
      <div>
        <h3>One</h3>
        <button onClick={handdleClick}>去Two组件</button>
      </div>
    )
  }
}
