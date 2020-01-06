/* 
    how to initialize state in the constructor
    之前的state是在constructor里面定义的

    There is also a way to change the component's state
    同样有一种方式去改变组件的state

    React provides a method for updating component state called setState. 
    You call the setState method within your component class like so: this.setState(),
    调用方式如下
    this.setState(),        passing in an object with key-value pairs.  pairs.对
    这是一个方法,参数是一个对象

    For instance, if we were storing a username in state and wanted to update it, it would look like this:
    
    this.setState({
        username: 'Lewis'
    });

    React expects you to never modify state directly, instead always use this.setState() when state changes occur.
    react希望你不要直接修改state,使用this.setState来修改

    Also, you should note that React may batch multiple state updates in order to improve performance. 
    您应该注意到React可能会批量处理多个状态更新，以提高性能
    batch   批处理
    What this means is that state updates through the setState method can be asynchronous
    意味着,setState可以是异步的

    alternative syntax
    另一种语法
    There is an alternative syntax for the setState method which provides a way around this problem. 
    setState有另一种语法,可以解决这个问题
    This is rarely needed but it's good to keep it in mind! 
    很少用到,但是记住不错哦

    解决异步setState的语法

    链接https://facebook.github.io/react/docs/state-and-lifecycle.html
 */

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // change code below this line
        this.setState({
          name:'React Rocks!'
        })
      // change code above this line
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
  

  // 加括号相当于return
  // reset(){
  //   this.setState((state,)=>{
  //     return {
  //      count:0
  //     }
  //   })
  // };


/* 
    this.setstate一般是在方法里面调用的

    方法写到函数之外
   */