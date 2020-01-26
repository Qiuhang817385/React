// React 的最佳实践是在生命周期方法componentDidMount()中对服务器进行 API 调用或任何其他调用。将组件装载到 DOM 后会调用此方法。
// 将组件装载到 DOM 后会调用此方法。此处对setState()的任何调用都将触发组件的重新渲染。

// 在此方法中调用 API 并使用 API​​ 返回的数据设置 state 时，一旦收到数据，它将自动触发更新/

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout( () => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
    render() {
      return (
        <div>
          <h1>Active Users:{this.state.activeUsers} { /* change code here */ }</h1>
        </div>
      );
    }
  };