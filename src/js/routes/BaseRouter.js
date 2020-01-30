import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from '../components2/Home';
import One from '../components2/One';
import Two from '../components2/Two';
import Cool from '../components2/Cool'
import LoL from '../components2/LoL';
// {path:"/aa",component:Cool}
// 为什么要学这个私有路由,rest解构+属性延展
// 后期进行路由控制和重定向.根据传的路由做不同的动作
const PrivateRoute = ({ component: Component, ...rest }) => {
  //{Component:Cool,rest:{path:"/cool"}}
  return <Route {...rest} render={(props) => {
    return <Component {...props} />
  }} />
}
const BaseRouter = () => {
  return (
    <div>
      <Router>
        <div>
          <Route path='/' exact component={Home} />
          <Route path='/One' component={One} />
          {/* 使用的现有的组件,子组件的子组件等等也会被渲染 */}
          <Route path='/Two' component={Two} />
          <Route path='/Three' render={(props) => {
            // 依然有props,route传递下来的这个属性 
            console.log(props);
            return (
              <div>
                临时创建的无状态组件
              </div>
            )
          }
          } />
          {/* 通过无状态组件传递给home组件 */}
          <Route path='/play' render={(props) => {
            return (
              <Home {...props}></Home>
            )
          }} />
          {/* cool组件修改成私有组件 */}
          <Route path='/Cool' component={Cool} />

          {/* 自己写的私有路由组件 */}
          <PrivateRoute path="/lol" component={LoL} />
        </div>
      </Router>
    </div>
  )
}
export default BaseRouter
