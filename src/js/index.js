import React from 'react';
import ReactDom from 'react-dom';
// import Link from './link';

// jq-ajax实验
// import App from './components/App'

// fetch实验
import AppFetch from './fetch/AppFetch'

//axios实验
import Appaxios from './axios/Appaxios'

//路由实验
import App from './components2/App'

// import './../css/style.scss';
ReactDom.render(
  // <App />,
  // <AppFetch />,
  // <Appaxios />,
  <App />,
  document.getElementById('div1')
)
