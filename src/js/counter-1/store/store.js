// import { reducer } from '../reducer/reducer'
import { rootReducers } from '../reducer/index'
import { createStore } from 'redux'
// 创建store的时候就会调用一次reducer
// const store = createStore(reducer)
const store = createStore(rootReducers)
export default store