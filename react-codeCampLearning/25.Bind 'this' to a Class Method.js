// In addition to setting and updating state, you can also define methods for your component class.
/* 
    方法
    A class method 
    A class method typically needs to use the this keyword so it can access properties on the class 
    (such as state and props) inside the scope of the method

    There are a few ways to allow your class methods to access this.
    使用method访问this的几种方法


    One common way is to explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized
    一种常见的方法是在构造函数中显式地绑定它，以便在初始化组件时将其绑定到类方法

 */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // change code below this line
    this.handleClick = this.handleClick.bind(this);
    // change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        {/* change code below this line */}
        <button onClick={this.handleClick}>Click Me</button>
        {/* change code above this line */}
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
