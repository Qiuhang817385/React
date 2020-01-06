// 它们不像传统的if/else语句那样健壮，但是在 React 开发人员中非常流行，原因之一就是 JSX 的编译原理，if/else语句不能直接插入到 JSX 代码中
// 需要if/else语句时，它总是在return语句外面

// 这个略难
// 这个略难
// 这个略难
// 这个略难
// 这个略难
// 这个略难
// 这个略难
// 这个略难
// 这个略难
// 这个略难
// 这个略难
const inputStyle = {
    width: 235,
    margin: 5
  }
  
  class CheckUserAge extends React.Component {
    constructor(props) {
      super(props);
      // change code below this line
    this.state = {
      input:'',
      userAge: ''
    }
      // change code above this line
      this.submit = this.submit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
      this.setState({
        input: e.target.value,
        userAge: ''
      });
    }
    submit() {
      this.setState({
        userAge: this.state.input
      });
    }
    render() {
      const buttonOne = <button onClick={this.submit}>Submit</button>;
      const buttonTwo = <button>You May Enter</button>;
      const buttonThree = <button>You Shall Not Pass</button>;
      return (
        <div>
          <h3>Enter Your Age to Continue</h3>
          <input
            style={inputStyle}
            type="number"
            value={this.state.input}
            onChange={this.handleChange} /><br />
            
          {
             (this.state.userAge >= 18) ? buttonTwo : (this.state.userAge== '')? buttonOne: buttonThree
          }
        </div>
      );
    }
  };