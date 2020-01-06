// One of the most important topics in React is state
/* 
    react最重要的一个主题就是state,状态

    State consists of any data your application needs to know about, that can change over time. {}

    什么是状态,状态就是你的应用里面包含的任何数据   可以随时间改变  的数据
    You want your apps to respond to state changes and present an updated UI when necessary
    React offers a nice solution for the state management of modern web applications.
    提供了一个nice的解决方式

    You create state in a React component by declaring a state property on the component class in its constructor
    创建一个state   通过声明一个state的属性 在构造函数里面
    This initializes the component with state when it is created
    组件创建的时候也会初始化状态
    Declaring it looks like this:
    this.state = {
        // describe your state here

    }
    You have access to the state object throughout the life of your component
    接着,在整个组件声明周期当中都可以访问他

    You can update it, render it in your UI, and pass it as props to child components. 
    可以更新,渲染到页面,也可以作为props传递给子组件
    The state object can be as complex or as simple as you need it to be
    可简单可复杂
    Note that you must create a class component by extending React.Component in order to create state like this.

 */


class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
    this.state={
      name:'zhangsan'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

// state是一个对象
// 而props,直接写,this.props.aaa = bbb
