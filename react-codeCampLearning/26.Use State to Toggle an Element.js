// Sometimes you might need to know the previous state when updating the state.
/* 
    However, state updates may be asynchronous - this means React may batch multiple setState() calls into a single update. 
    state更新可能是异步的
    意味着react可能将批处理多个setState(),
    这意味着React可以将多个setState()调用批量处理为单个更新。

    可以批处理多个 可以被点个调用的更新

    This means you can't rely on the previous value of this.state or this.props when calculating the next value.
    you should not use code like this:
    不能写如下的代码
    this.setState({

        key是现在的值
        state是原先的值
        
        counter: this.state.counter + this.props.increment
    });

    Instead, you should pass setState a function that allows you to access state and props. 
    这个时候应该传递一个函数,这个函数可以访问state和props

    Using a function with setState guarantees you are working with the most current values of state and props.
    使用带有setState的函数可以确保您使用的是状态和道具的最新值。
    guarantees确保
    the most current    最新的值

    This means that the above should be rewritten as:

    this.setState((state, props) => ({
        counter: state.counter + props.increment
    }));

    You can also use a form without props if you need only the state:

    this.setState(state => ({
        counter: state.counter + 1
    }));


    Note that you have to wrap the object literal in parentheses, otherwise JavaScript thinks it's a block of code.

    注意，必须将对象文字括在括号中，否则JavaScript会认为它是一段代码。

    this.setState(state => ({
            counter: state.counter + 1
    }));

    把对象文字包括在括号里面,否则会任务它是一端代码

 */


class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      // change code below this line
  this.toggleVisibility = this.toggleVisibility.bind(this);
      // change code above this line
    }
    // change code below this line

    // 可以在这里写方法
  toggleVisibility(){
    this.setState((state)=>({
      visibility:!state.visibility
    }))
  }
    // change code above this line
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  };
  