const defaultState = {
  name: 'zhangsan',
  age: 18,
  number: 0,
  dataRes: []
}
export const users = (state = defaultState, action) => {
  switch (action.type) {
    // 好像只能操作一个,问题?
    case 'SUBUSER':
      console.log("state.number", state.number);
      console.log("action.type", action.type === 'SUBUSER');
      return { number: state.number - 1 };
    case 'AXIOS':
      console.log("action.dataRes", action.dataRes);
      return { dataRes: action.dataRes };
    default:
      return state
  }
}