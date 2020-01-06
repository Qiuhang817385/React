// 渲染到页面
/* 
    If you want to access a state value within the return of the render method, you have to enclose the value in curly braces.
    如果你想访问state,在render函数里面,那么需要你{}

    State is one of the most powerful features of components in React
    It allows you to track important data in your app and render a UI in response to changes in this data

    data changes,UI change

    虚拟DOM出来了
    React uses what is called a virtual DOM, to keep track of changes behind the scenes.
    利用虚拟DOM追踪改变
    When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. 

    当state数据发生改变的时候
    会触发使用这个state当中props的子组件和本身组件的重新渲染

    React updates the actual DOM, but only where necessary. 
    必要的时候才更新

    值得注意的是
    Note that if you make a component stateful, no other components are aware of its state.
    一个组件如果有状态,其他组件不会感知到这个组件有状态
    换句话来说组件的状态是封闭式的
    Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props


    This notion of encapsulated state is very important because it allows you to write certain logic,
    then have that logic contained and isolated in one place in your code.
    组件的状态是封闭的
    这种封装状态的概念非常重要，因为它允许你编写特定的逻辑，
    封装状态的概念非常重要，因为它允许您编写特定的逻辑，然后将该逻辑包含在代码中的某个地方并将其隔离。


    In JSX, any code you write with curly braces { } will be treated as JavaScript.
 */
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          { /* change code below this line */ }
          <h1>
            {this.state.name}
            </h1>
          { /* change code above this line */ }
        </div>
      );
    }
  };
  