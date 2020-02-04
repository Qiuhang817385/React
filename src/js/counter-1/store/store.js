// import { reducer } from '../reducer/reducer'
import { rootReducers } from '../reducer/index'
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

// 自己写的中间件
// const logger = store => next => action => {
//   console.log("中间件action", action);
//   console.log("中间件之前的state,", store.getState());
//   console.log(next);

//   next(action);//调用下一个action,并且把action转发过去.

//   console.log("中间件之后的state,", store.getState());
// }
//创建中间件函数logger打印action和state
/* const logger = function (store) {
  //第二个next是中间件的方法,是redux的方法
  return function (next) {
    // 第三个是函数转发函数action
    return function (action) {
      console.log("中间件action", action);
      console.log("中间件state,之前的", store.getState());
      
      next(action);//调用下一个action,并且把action转发过去.
      // 有点不懂
      const result = next(action);
      // 如果后面没有其余中间件,就直接调用reducer,返回新state

    }
  }
} */

// 实验2实验2实验2实验2实验2实验2实验2实验2实验2
// 第三方中间件
import logger from 'redux-logger';


// 创建store的时候就会调用一次reducer
// const store = createStore(reducer)
// 第二个参数是reducer当中的state,优先级比默认的reducer要高
const store = createStore(rootReducers, applyMiddleware(logger, thunk))

// export导出的文件需要加{}花括号
// export default导出的不需要加大括号

export default store


// redux的三个值,1,store,next方法和当前的action,
// next方法会转发action给reducer
// next方法会调用下一个中间件,如果没有下一个中间件会把reducer转发