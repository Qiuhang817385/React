/* 
    The ability to set default props is a useful feature in React
    在react里面设置默认值是有用处的

    The way to override the default props is to explicitly set the prop values for a component.
    覆盖默认props的方法是显式地设置组件的props值。
    explicitly
    显式的

    Remember that the syntax to add a prop to a component looks similar to how you add HTML attributes. However, since the value for quantity is an integer, it won't go in quotes but it should be wrapped in curly braces. For example, {100}. This syntax tells JSX to interpret the value within the braces directly as JavaScript.

    请记住，向组件添加道具的语法类似于添加HTML属性。但是，因为quantity的值是整数，所以它不会放在引号中，而应该用花括号括起来。例如,{100}。该语法告诉JSX将大括号内的值直接解释为JavaScript。


 */


const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
//   这里设置了默认值
// 重写就是直接赋值
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* change code below this line */ }
      
      return <Items quantity={10}/>
      { /* change code above this line */ }
    }
  };
//   在父组件的调用中又进行了重写
  