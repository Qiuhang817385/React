// 你也可以根据 React 组件的 state 有条件地渲染 CSS。

// 执行此操作，请检查条件，如果满足该条件，则修改在 render 方法中分配给 JSX 元素的样式对象。



class GateKeeper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ input: event.target.value })
    }
    render() {
      let inputStyle = {
        border: '1px solid black'
      };
      // change code below this line
      if(this.state.input.length>15){
        inputStyle = {
          border:'3px solid red'
        }
      }
      // change code above this line
      return (
        <div>
          <h3>Don't Type Too Much:</h3>
          <input
            type="text"
            style={inputStyle}
            value={this.state.input}
            onChange={this.handleChange} />
        </div>
      );
    }
  };