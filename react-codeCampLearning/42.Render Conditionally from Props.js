// 使用 props 有条件地渲染代码在 React 开发人员中很常见--也就是说：他们使用给定 prop 的值来自动决定渲染什么。

class Results extends React.Component {
    constructor(props) {
      super(props);
    }
  
    // 这样尽量不会动子组件
    render() {
      return (
        <h1>
        {
          /* change code here */
          this.props.fiftyFifty
        }
        </h1>
      )
    };
  };
  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState((state)=>({
        counter:state.counter+1
      }));
  
    }
    render() {
      let expression = Math.random() > .5;; // change code here
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
         {(expression == 1)? <Results fiftyFifty="You win!"/> : <Results fiftyFifty="You lose!"/> }
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  };