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
    console.log(this.props);

    console.log(this.props.location.search);
    let search = this.props.location.search;
    // 专门用于处理urlencode数据
    const url = new URLSearchParams(search);
    console.log(url);

    return (
      <div>
        <h3>One</h3>
        <button onClick={handdleClick}>去Two组件</button>
        <br />
        两个属性
        <br />
        {url.get("title")}
        <br />
        {url.get("content")}
      </div>
    )
  }
}
