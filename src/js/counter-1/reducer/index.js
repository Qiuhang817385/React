import { combineReducers } from "redux";
// 必须使用解构赋值的方法才能获取到reducer对象****
// 必须使用解构赋值的方法才能获取到reducer对象****
// 必须使用解构赋值的方法才能获取到reducer对象****
// 必须使用解构赋值的方法才能获取到reducer对象****
import { costoms } from './costoms';
import { users } from './users'
export const rootReducers = combineReducers({
  costoms: costoms,
  users: users
});
