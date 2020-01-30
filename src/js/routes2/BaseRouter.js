import React from 'react'
import { HashRouter as Router, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
import Home from '../components3/Home';
import One from '../components3/One';
import Two from '../components3/Two';
import Params from '../components3/Params';
import NavLinkTest from '../components3/NavLinkTest';
const BaseRouter = () => {
  let sty = {
    background: "#99f",
    color: "#0ff"
  }
  return (
    <div>
      <Router>
        <div>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/One?title=react&content=vue">one</Link></li>
            <li><Link to="/Two/参数1/参数2">two</Link></li>
            <li><Link to={{
              pathname: "/Params",
              search: "name=tom",
              hash: "#aaa",
              state: { x: 100 }
            }}>Params</Link></li>

            <li><NavLink to='/NavLinkTest' activeStyle={sty}>NavLinkTest</NavLink></li>
          </ul>
          <Switch>
            <Route path='/One' component={One} />
            {/* 使用的现有的组件,子组件的子组件等等也会被渲染 */}
            <Route path='/Two/:x/:y' component={Two} />
            {/* 3.重定向组件实验 */}
            <Route path='/Params/new' component={Params} />
            <Redirect from="/Params" to="/Params/new"></Redirect>


            <Route path='/NavLinkTest' component={NavLinkTest} />
            <Route path='/' component={Home} />
            {/* 这个一般是404页面,偷懒了 */}
            {/* <Route component={Home} /> */}

          </Switch>
        </div>
      </Router>
    </div>
  )
}
export default BaseRouter
