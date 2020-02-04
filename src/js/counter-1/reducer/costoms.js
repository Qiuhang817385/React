const defaultState = {
  num: 0,
  isLoading: false,
  error: null,
  user: {}
}
export const costoms = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD':
      console.log("点击了加号");
      return { num: state.num + 1 };
    case 'SUB':
      console.log("点击了减号");
      return { num: state.num - 1 };
    default:
      return state
  }
}