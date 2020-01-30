import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
const MyTest = (props) => {
  console.log("myTest", props);
  return (
    <h2>MyTest组件</h2>
  )
}
const WithRouter = withRouter(MyTest);
export default class Home extends Component {
  render () {
    return (
      <div>
        <h3>Home组件</h3>
        <WithRouter></WithRouter>
      </div>
    )
  }
}
